import type { PropsWithChildren } from 'react';
import { cn } from '~/lib/utils';
import { ContentHeader } from './content-header';

export interface ContentProps extends PropsWithChildren {
  className?: string
}

export function Content(props: ContentProps) {
  const { className, children } = props;
  return (
    <div className={cn('content flex-1 h-full w-full bg-white mx-auto flex flex-col', className)}>
      <ContentHeader />
      {children}
    </div>
  );
}
