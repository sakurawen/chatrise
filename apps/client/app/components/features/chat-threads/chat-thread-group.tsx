import type { ChatThread } from '~/db/schemas';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import { useSidebarWidth } from '~/hooks/use-sidebar-width';
import { ChatThreadItem } from './chat-thread-item';

interface ChatThreadGroupProps {
  label: string
  threads?: ChatThread[]
}
export function ChatThreadGroup(props: ChatThreadGroupProps) {
  const { label, threads } = props;
  const [width] = useSidebarWidth();
  const [open, setOpen] = useState(true);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className='px-1.5 pt-2.5'>
        <CollapsibleTrigger className='flex items-center gap-0.5 group text-secondary'>
          <span className='text-current text-sm'>{label}</span>
          <Icon className={`size-2.5 text-secondary transition-transform ${open ? 'rotate-90' : ''}`} icon='f7:chevron-right' />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        style={{
          width: `${width - 20}px`,
        } as React.CSSProperties}
      >
        <ul>
          {threads?.map((thread) => {
            return <ChatThreadItem key={thread.id} thread={thread} />;
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
