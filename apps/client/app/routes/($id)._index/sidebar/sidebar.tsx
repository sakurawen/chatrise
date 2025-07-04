import type { PropsWithChildren } from 'react';
import { Icon } from '@iconify/react';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { useAtom } from 'jotai';
import { clamp } from 'lodash-es';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { sidebarEnableAtom } from '~/atoms/layout';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Search } from '~/components/ui/search';
import { APP_NAME } from '~/const/app';
import { useSidebarWidth } from '~/hooks/use-sidebar-width';
import { tauriStore } from '~/lib/tauri-store';
import { cn } from '~/lib/utils';

export interface SidebarProps extends PropsWithChildren {
  className?: string
}
export function Sidebar(props: SidebarProps) {
  const { className, children } = props;

  async function handleOpenSettings() {
    const position = await tauriStore.get<{ x: number, y: number }>('settings-position');
    const settingWindow = new WebviewWindow('settings', {
      width: 600,
      height: 400,
      url: '/settings',
      title: `${APP_NAME} Settings`,
      minimizable: false,
      maximizable: false,
      minHeight: 400,
      minWidth: 600,
      maxWidth: 800,
      maxHeight: 600,
      x: position?.x,
      y: position?.y,
    });
    settingWindow.listen('tauri://move', async () => {
      const pos = await settingWindow.innerPosition();
      await tauriStore.set('settings-position', {
        x: pos.x,
        y: pos.y,
      });
    });
  }

  return (
    <SidebarContainer>
      <div className={cn('sidebar h-full pb-10 flex flex-col', className)}>
        <div>
          <div data-tauri-drag-region className='h-[51px] pl-24' />
          <div className='px-3'>
            <Search placeholder='搜索' />
          </div>
        </div>
        <div className='flex-1'>
          <ScrollArea className='h-full px-2.5'>
            {children}
          </ScrollArea>
          <div className='absolute bottom-2 left-2'>
            <Button variant='ghost' size='icon' onClick={handleOpenSettings}>
              <Icon icon='f7:gear' className='size-icon' />
            </Button>
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
}

function SidebarContainer({ children }: PropsWithChildren) {
  const [pointerDown, setPointerDown] = useState(false);
  const pointerDownRef = useRef(false);
  const [sidebarEnable, setSidebarEnable] = useAtom(sidebarEnableAtom);
  const [width, setWidth] = useSidebarWidth();

  useHotkeys('alt+b,meta+b', () => {
    if (pointerDownRef.current) {
      return;
    }
    setSidebarEnable(val => !val);
  });

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      if (!pointerDownRef.current) {
        return;
      }
      const next = clamp(e.clientX, 200, 360);
      setWidth(next);
    }
    function handlePointerUp() {
      document.body.className = 'default-cursor';
      pointerDownRef.current = false;
      setPointerDown(false);
    }
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [setWidth]);

  function handlePointerDown() {
    document.body.className = 'resize-cursor';
    pointerDownRef.current = true;
    setPointerDown(true);
  }

  return (
    <motion.div className='sidebar-container h-full  border-r will-change-[width,left] relative  border-zinc-200' style={{ width: sidebarEnable ? width : 0, left: sidebarEnable ? 0 : -width, transition: pointerDown ? 'none' : 'all 0.2s' }}>
      {children}
      <div onPointerDown={handlePointerDown} className='resizable-handler transition-colors h-full absolute  w-1 hover:opacity-100 active:opacity-100 opacity-0 active:w-1 bg-border top-0 right-0 active:bg-blue hover:bg-blue  cursor-col-resize!' />
    </motion.div>
  );
}
