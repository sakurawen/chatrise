import { cn } from '~/lib/utils';
import { SidebarContainer } from './sidebar-container';

export interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  return (
    <SidebarContainer>
      <div className={cn('sidebar h-full', className)}>
        <div data-tauri-drag-region className='h-13 pl-24'>
          <div data-tauri-drag-region className='flex  h-full items-center'>
          </div>
        </div>
        <div className='px-4'>
        </div>
      </div>
    </SidebarContainer>
  );
}
