import type { PropsWithChildren, TextareaHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import { produce } from 'immer';
import { useAtom } from 'jotai';
import { useRef } from 'react';
import { chatInputAtom } from '~/atoms/chat';
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
  function handleInput() {
    if (textareaRef.current) {
      textareaRef.current!.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const next = Math.min(scrollHeight, CHAT_INPUT_MAX_HEIGHT);
      textareaRef.current.style.height = `${next}px`;
    }
  }

  const [chatInput, setChatInput] = useAtom(chatInputAtom);

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setChatInput(produce((draft) => {
      draft.message = e.target.value;
    }));
  }

  return (
    <div className={cn('chat-input  pt-2 px-2 pb-4', className)}>
      <div className='rounded-xl  border border-border pt-2.5 pb-1.5 px-2.5 bg-material-thick transition-[color,box-shadow]'>
        <Textarea
          rows={1}
          className={cn('resize-none p-0 min-h-[2em]! ring-0! rounded-none border-none shadow-none text-base!', textareaClassName)}
          ref={textareaRef}
          placeholder='给<Model>发送信息'
          onInput={handleInput}
          onChange={handleInputChange}
          value={chatInput.message}
          {...restProps}
        />
        <div className='chat-input-actions space-x-1.5'>
          <TooltipProvider>
            <ActionButton tooltip='添加附件'>
              <Icon className='size-[18px] opacity-80 ' icon='f7:paperclip' />
            </ActionButton>
            <ActionButton tooltip='命令中心'>
              <Icon className='size-[18px] opacity-80 ' icon='f7:command' />
            </ActionButton>
            <ActionButton tooltip='联网搜索'>
              <Icon className='size-[18px] opacity-80 ' icon='f7:globe' />
            </ActionButton>
            <ActionButton tooltip='Artifacts'>
              <Icon className='size-[18px] opacity-80 ' icon='f7:layers-alt' />
            </ActionButton>
            <Button size='icon' variant='ghost'>
              <Icon className='size-[18px] opacity-80 ' icon='f7:hammer' />
            </Button>
          </TooltipProvider>
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
