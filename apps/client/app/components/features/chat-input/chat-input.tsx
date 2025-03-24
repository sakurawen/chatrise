import { useRef } from 'react';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/lib/utils';

export interface ChatInputProps extends Omit<React.ComponentProps<typeof Textarea>, 'onInput' | 'ref'> {
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
  return (
    <div className={cn('p-2', className)}>
      <div className='rounded-md border p-2 has-[textarea:focus]:ring-[#007AFF]/50 has-[textarea:focus]:border-[#007AFF]/50 has-[textarea:focus]:ring-[3px] shadow-xs transition-[color,box-shadow]'>
        <Textarea
          rows={3}
          className={cn('resize-none p-0 ring-0! rounded-none border-none shadow-none text-base', textareaClassName)}
          ref={textareaRef}
          placeholder='给<Model>发送信息'
          onInput={handleInput}
          {...restProps}
        />
      </div>
    </div>
  );
}
