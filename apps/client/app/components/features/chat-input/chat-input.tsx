import type { KeyboardEvent, PropsWithChildren } from 'react';
import { Icon } from '@iconify/react';
import { useSetAtom } from 'jotai';
import { useActionState, useRef, useState } from 'react';
import { chatMessagesAtom } from '~/atoms/chat';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { openai } from '~/lib/openai';
import { cn } from '~/lib/utils';

export interface ChatInputProps extends Omit<React.ComponentProps<typeof Textarea>, 'onInput' | 'onChange' | 'ref' | 'value'> {
  textareaClassName?: string
  id?: string
}

const CHAT_INPUT_MAX_HEIGHT = 196;

export function ChatInput(props: ChatInputProps) {
  const { className, textareaClassName, ...restProps } = props;
  const textareaRef = useRef<React.ComponentRef<'textarea'>>(null);
  const formRef = useRef<React.ComponentRef<'form'>>(null);
  function handleInput() {
    if (textareaRef.current) {
      textareaRef.current!.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const next = Math.min(scrollHeight, CHAT_INPUT_MAX_HEIGHT);
      textareaRef.current.style.height = `${next}px`;
    }
  }

  function handleEnter(e: KeyboardEvent<HTMLTextAreaElement>) {
    const isEnter = e.key === 'Enter';
    if (!isEnter || isPending) {
      return;
    }
    if (isComposing) {
      e.preventDefault();
      return;
    }
    if (!e.shiftKey && isEnter) {
      const validValue = e.currentTarget.value.replace(/\s+/g, '');
      if (validValue) {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    }
  }
  const [isComposing, setIsComposing] = useState(false);

  const setMessage = useSetAtom(chatMessagesAtom);

  const [inputValue, action, isPending] = useActionState<string, FormData>(async (prevState, formData) => {
    const message = formData.get('message') as string;
    if (isPending) {
      return '';
    }
    if (!message.trim()) {
      return prevState;
    }
    formRef.current?.reset();
    const stream = await openai.chat.completions.create({
      model: 'deepseek-chat',
      stream: true,
      messages: [{ role: 'user', content: message }],
    });
    for await (const chunk of stream) {
      console.log({ chunk });
      if (chunk.choices[0].delta.content) {
        setMessage(prev => prev + chunk.choices[0].delta.content);
      }
    }
    return '';
  }, '');

  function handleCompositionStart() {
    setIsComposing(true);
  }

  function handleCompositionEnd() {
    setTimeout(() => {
      setIsComposing(false);
    }, 0);
  }

  return (
    <div className={cn('chat-input w-full py-2.5', className)}>
      <div className='px-3.5 w-full  max-w-5xl mx-auto '>
        <div className='rounded-xl  border border-border pt-2.5 pb-1.5 px-2.5 bg-material-ultrathick transition-[color,box-shadow]'>
          <form action={action} ref={formRef}>
            <Textarea
              name='message'
              rows={1}
              className={cn('resize-none p-0 min-h-[2em]! ring-0! rounded-none border-none shadow-none text-base!', textareaClassName)}
              ref={textareaRef}
              placeholder='给<Model>发送信息'
              defaultValue={inputValue}
              onInput={handleInput}
              onKeyDown={handleEnter}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
              {...restProps}
            />
            <div className='chat-input-actions space-x-1.5'>
              <TooltipProvider>
                <div className='flex items-center justify-between'>
                  <div className='chat-input-actions-start'>
                    <ActionButton type='button' tooltip='添加附件'>
                      <Icon className='size-icon opacity-80 ' icon='f7:paperclip' />
                    </ActionButton>
                    <ActionButton type='button' tooltip='命令中心'>
                      <Icon className='size-icon opacity-80 ' icon='f7:command' />
                    </ActionButton>
                    <ActionButton type='button' tooltip='联网搜索'>
                      <Icon className='size-icon opacity-80 ' icon='f7:globe' />
                    </ActionButton>
                    <ActionButton type='button' tooltip='Artifacts'>
                      <Icon className='size-icon opacity-80 ' icon='f7:layers-alt' />
                    </ActionButton>
                    <Button size='icon' type='button' variant='ghost'>
                      <Icon className='size-icon opacity-80 ' icon='f7:hammer' />
                    </Button>
                  </div>
                  <div className='chat-input-actions-end'>
                    <ActionButton disabled={isPending} size='icon' tooltip='Enter 发送' type='submit' variant='ghost' className='rounded-full'>
                      <Icon icon='f7:arrow-turn-down-left' className='size-icon' />
                    </ActionButton>
                  </div>
                </div>
              </TooltipProvider>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ActionButton(props: PropsWithChildren<React.ComponentProps<typeof Button>> & { tooltip: string }) {
  const { tooltip, ...buttonProps } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild><Button size='icon' variant='ghost' {...buttonProps}></Button></TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
