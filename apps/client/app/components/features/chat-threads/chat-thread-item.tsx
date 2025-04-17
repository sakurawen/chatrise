import type { ChatThread } from '~/db/schemas';
import { Icon } from '@iconify/react';
import { deleteThread, favoriteThread } from '~/db/thread';

interface ChatThreadItemProps {
  thread: ChatThread
}
export function ChatThreadItem(props: ChatThreadItemProps) {
  const { thread } = props;

  function handleDelete(id: string) {
    deleteThread(id);
  }

  function handleFavorite(id: string) {
    favoriteThread(id);
  }

  return (
    <li className='pr-10 group/thread-item relative justify-between hover:bg-black/5 px-1.5 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis'>
      <span className='shrink-1'>
        {thread.title}
        -
        {thread.id}
      </span>
      <div className='absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1 invisible group-hover/thread-item:visible'>
        <Icon className='size-3.5 hover:text-red' icon='f7:trash' onClick={() => handleDelete(thread.id)} />
        <Icon
          data-favorite={thread.favorite}
          className='size-3.5 hover:text-orange data-[favorite=true]:text-orange'
          icon={thread.favorite ? 'f7:star-fill' : 'f7:star'}
          onClick={() => handleFavorite(thread.id)}
        />
      </div>
    </li>
  );
}
