import type { ScrollAreaViewportRef } from '~/components/ui/scroll-area';
import { useRef } from 'react';
import { Content } from './content';
import { ContentViewportContext } from './context';
import { Sidebar } from './sidebar';
import { TitleBarAction } from './title-bar-action';

export default function Index() {
  const contentViewportRef = useRef<ScrollAreaViewportRef>(null);
  return (
    <div className='flex h-full'>
      <ContentViewportContext value={contentViewportRef}>
        <TitleBarAction />
        <Sidebar />
        <Content />
      </ContentViewportContext>
    </div>
  );
}
