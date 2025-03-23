import { motion } from 'motion/react';
import { Outlet, useParams } from 'react-router';
import { cn } from '~/lib/utils';

export interface ContentProps {
  className?: string
}
export function Content(props: ContentProps) {
  const { className } = props;
  const {id} = useParams()
  return (
    <motion.div
      className={cn('content flex-1 w-full bg-white', className)}
    >
      <div data-tauri-drag-region className='content-title-bar h-13  border-b border-gray-200'>
      </div>
      <div>
        <Outlet />
      </div>
    </motion.div>
  );
}
