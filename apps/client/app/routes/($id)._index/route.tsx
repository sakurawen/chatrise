import type { ScrollAreaViewportRef } from '~/components/ui/scroll-area';
import { useRef } from 'react';
import { Chat } from '~/components/features/chat';
import { ChatThreads } from '~/components/features/chat-threads';
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
        <Sidebar>
          <ChatThreads />
        </Sidebar>
        <Content>
          <Chat />
        </Content>
      </ContentViewportContext>
    </div>
  );
}
