import { cn } from '~/lib/utils';

export interface ChatMessagesProps {
  id?: string
  className?: string
}

export function ChatMessages(props: ChatMessagesProps) {
  const { className } = props;
  return (
    <div className={cn('', className)}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid mollitia blanditiis, amet sequi explicabo illo libero corrupti debitis veritatis! Non quod, quasi vitae exercitationem facere vel totam itaque repellendus.</p>
    </div>
  );
}
