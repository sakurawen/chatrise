import { cn } from '~/lib/utils';

export interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  return (
    <div className={cn('sidebar bg-[#EAEAEC]/85  h-full', className)}>
      <div data-tauri-drag-region className='h-12'></div>
      <div className='px-4'>
      </div>
    </div>
  );
}
