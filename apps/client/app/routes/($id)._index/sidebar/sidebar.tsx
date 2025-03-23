import { Icon } from '@iconify/react';
import { Button } from '~/components/ui/button';
import { Search } from '~/components/ui/search';
import { cn } from '~/lib/utils';
import { SidebarContainer } from './sidebar-container';

export interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  return (
    <SidebarContainer>
      <div className={cn('sidebar h-full pb-10', className)}>
        <div data-tauri-drag-region className='h-12 pl-24' />
        <div className='px-3'>
          <Search placeholder='搜索' />
        </div>
        <div className='absolute bottom-2 left-2'>
          <Button variant='ghost' size='icon'>
            <Icon icon='f7:gear' className='size-[18px]' />
          </Button>
        </div>
      </div>
    </SidebarContainer>
  );
}
