import type { KeyboardEvent, PropsWithChildren } from 'react';
import { Icon } from '@iconify/react';
import { useActionState, useRef } from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
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
    if (!isEnter) {
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

  const [message, action] = useActionState<string, FormData>((prevState, formData) => {
    const message = formData.get('message') as string;
    if (!message.trim()) {
      return prevState;
    }
    return prevState;
  }, '');

  return (
    <div className={cn('chat-input  pt-2 px-2 pb-4', className)}>
      <div className='rounded-xl  border border-border pt-2.5 pb-1.5 px-2.5 bg-material-thick transition-[color,box-shadow]'>
        <form action={action} ref={formRef}>
          <Textarea
            name='message'
            rows={1}
            className={cn('resize-none p-0 min-h-[2em]! ring-0! rounded-none border-none shadow-none text-base!', textareaClassName)}
            ref={textareaRef}
            placeholder='给<Model>发送信息'
            defaultValue={message}
            onInput={handleInput}
            onKeyDown={handleEnter}
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
                  <ActionButton size='icon' tooltip='shift + enter 发送' type='submit' variant='ghost' className='rounded-full'>
                    <Icon icon='f7:arrow-turn-down-left' className='size-icon' />
                  </ActionButton>
                </div>
              </div>

            </TooltipProvider>
          </div>
        </form>

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
