import { use } from 'react';
import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';
import { ContentViewportContext } from '~/routes/($id)._index/context';

export interface ChatMessagesProps {
  id?: string
  className?: string
}

export function ChatMessages(props: ChatMessagesProps) {
  const { className } = props;
  const viewportRef = use(ContentViewportContext);

  return (
    <div className={cn('chat-messages w-full flex-1 overflow-hidden', className)}>
      <ScrollArea className='h-full' viewportRef={viewportRef}>
        <div className='px-3.5 w-full max-w-5xl mx-auto '>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deserunt modi expedita mollitia facere, voluptas, maiores tempora cum placeat quas voluptates laudantium iure itaque quasi ea magnam esse odit quibusdam?</p>
        </div>
      </ScrollArea>
    </div>
  );
}
