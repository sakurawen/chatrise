import { cn } from '~/lib/utils';

export interface ContentProps {
  className?: string
}
export function Content(props: ContentProps) {
  const { className } = props;
  return (
    <div className={cn('content', className)}>
      <div className='h-12 border-b border-gray-200'></div>
      <div>
      </div>
    </div>
  );
}
