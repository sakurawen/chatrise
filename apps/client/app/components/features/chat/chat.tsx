import { ChatInput } from '~/components/features/chat-input';
import { ChatMessages } from '~/components/features/chat-messages';

export function Chat() {
  return (
    <div className='contents'>
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
