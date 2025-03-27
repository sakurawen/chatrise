import { useAtomValue } from 'jotai';
import { chatMessagesAtom } from '~/atoms/chat';
import { cn } from '~/lib/utils';

export interface ChatMessagesProps {
  id?: string
  className?: string
}

export function ChatMessages(props: ChatMessagesProps) {
  const { className } = props;
  const messages = useAtomValue(chatMessagesAtom);
  return (
    <div className={cn('chat-messages w-full flex-1 overflow-auto', className)}>
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
    </div>
  );
}
