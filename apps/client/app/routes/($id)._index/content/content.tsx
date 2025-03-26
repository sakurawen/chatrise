import { useAtomValue } from 'jotai';
import { motion } from 'motion/react';
import { sidebarEnableAtom } from '~/atoms/layout';
import { Chat } from '~/components/features/chat';
import { ModelDropdownMenu } from '~/components/features/model-dropdown-menu';
import { cn } from '~/lib/utils';

export interface ContentProps {
  className?: string
}

export function Content(props: ContentProps) {
  const { className } = props;
  const sidebarEnable = useAtomValue(sidebarEnableAtom);

  return (
    <motion.div
      className={cn('content flex-1 w-full bg-white', className)}
    >
      <div className='h-full flex flex-col'>
        <div data-tauri-drag-region className={`content-title-bar transition-[padding]  h-13 flex items-center border-b border-zinc-200 ${sidebarEnable ? 'pl-1.5' : 'pl-40'}`}>
          <ModelDropdownMenu />
        </div>
        <div className='px-3.5 max-w-5xl mx-auto flex-1'>
          <Chat />
        </div>
      </div>
    </motion.div>
  );
}
