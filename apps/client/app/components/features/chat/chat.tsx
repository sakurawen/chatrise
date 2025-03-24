import { ChatInput } from '~/components/features/chat-input';
import { ChatMessages } from '~/components/features/chat-messages';

export interface ChatProps {
  id?: string
}
export function Chat(props: ChatProps) {
  const { id } = props;
  return (
    <div className='chat h-full w-full relative'>
      <ChatMessages id={id} className='' />
      <ChatInput id={id} className='absolute bottom-0 w-full ' />
    </div>
  );
}
