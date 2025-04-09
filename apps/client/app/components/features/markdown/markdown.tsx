import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const remarkPlugin = [remarkGfm];
function NonMemoMarkdown({ children }: React.PropsWithChildren) {
  return <ReactMarkdown remarkPlugins={remarkPlugin}>{children as string}</ReactMarkdown>;
}

export const Markdown = memo(NonMemoMarkdown, (prev, next) => {
  return prev.children === next.children;
});
