import { cn } from '~/lib/utils';

export interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  return (
    <div className={cn('sidebar pt-12 bg-gray-100 h-full', className)}>
      <div className='px-4'>
      </div>
    </div>
  );
}
