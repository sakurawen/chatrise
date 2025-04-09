import { Chat } from '~/components/features/chat';
import { cn } from '~/lib/utils';
import { ContentHeader } from './content-header';

export interface ContentProps {
  className?: string
}

export function Content(props: ContentProps) {
  const { className } = props;
  return (
    <div className={cn('content flex-1 h-full w-full bg-white mx-auto flex flex-col', className)}>
      <ContentHeader />
      <Chat />
    </div>
  );
}
