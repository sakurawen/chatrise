import { useAtomValue } from 'jotai';
import { sidebarEnableAtom } from '~/atoms/layout';
import { ChatInput } from '~/components/features/chat-input';
import { ChatMessages } from '~/components/features/chat-messages';
import { ModelDropdownMenu } from '~/components/features/model-dropdown-menu';
import { cn } from '~/lib/utils';

export interface ContentProps {
  className?: string
}

export function Content(props: ContentProps) {
  const { className } = props;
  const sidebarEnable = useAtomValue(sidebarEnableAtom);

  return (
    <div
      className={cn('content flex-1 h-full  w-full bg-white', className)}
    >
      <div className='h-full  mx-auto flex flex-col'>
        <div data-tauri-drag-region className={`content-title-bar transition-[padding]  h-13 flex items-center border-b border-zinc-200 ${sidebarEnable ? 'pl-1.5' : 'pl-40'}`}>
          <ModelDropdownMenu />
        </div>
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}
