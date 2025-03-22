import { cn } from '~/lib/utils';

export interface ContentProps {
  className?: string
}
export function Content(props: ContentProps) {
  const { className } = props;
  return (
    <div className={cn('content', className)}>
      <div data-tauri-drag-region className='content-title-bar h-12  border-b border-gray-200'>
      </div>
      <div>
      </div>
    </div>
  )
}
