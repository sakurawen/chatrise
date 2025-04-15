import type { ChatThread } from '~/db/schemas';
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
  return (
    <Collapsible defaultOpen>
      <div className='px-1.5 pt-2.5'>
        <CollapsibleTrigger>
          <span>{label}</span>
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
