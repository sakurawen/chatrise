import { useAtomValue } from 'jotai';
import { use } from 'react';
import { chatMessagesAtom } from '~/atoms/chat';
import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';
import { ContentViewportContext } from '~/routes/($id)._index/context';

export interface ChatMessagesProps {
  id?: string
  className?: string
}

export function ChatMessages(props: ChatMessagesProps) {
  const { className } = props;
  const messages = useAtomValue(chatMessagesAtom);
  const viewportRef = use(ContentViewportContext);

  return (
    <div className={cn('chat-messages w-full flex-1 overflow-hidden', className)}>
      <ScrollArea className='h-full' viewportRef={viewportRef}>
        <div className='px-3.5 w-full max-w-5xl mx-auto '>
          <p>{messages}</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa exercitationem et autem, officiis maiores velit. Quod, enim ipsum! Ullam fugit illum quidem voluptate officiis itaque ea, nostrum adipisci beatae.
        </div>
      </ScrollArea>
    </div>
  );
}
