import { ChatThreadGroup } from '~/components/features/chat-threads/chat-thread-group';
import { useThreads } from '~/hooks/use-thread';

export function ChatThreads() {
  const threads = useThreads();
  return (
    <ChatThreadGroup label='label' threads={threads} />
  );
}
