import type { PropsWithChildren } from 'react';
import { Icon } from '@iconify/react';
import { useAtomValue } from 'jotai';
import { clamp } from 'lodash-es';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { sidebarEnableAtom } from '~/atoms/layout';
import { Button } from '~/components/ui/button';
import { Search } from '~/components/ui/search';
import { useSidebarWidth } from '~/hooks/use-sidebar-width';
import { cn } from '~/lib/utils';

export interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;

  return (
    <SidebarContainer>
      <div className={cn('sidebar h-full pb-10', className)}>
        <div data-tauri-drag-region className='h-[51px] pl-24' />
        <div className='px-3'>
          <Search placeholder='搜索' />
        </div>
        <div className='absolute bottom-2 left-2'>
          <Button variant='ghost' size='icon'>
            <Icon icon='f7:gear' className='size-icon' />
          </Button>
        </div>
      </div>
    </SidebarContainer>
  );
}

function SidebarContainer({ children }: PropsWithChildren) {
  const [pointerDown, setPointerDown] = useState(false);
  const pointerDownRef = useRef(false);
  const sidebarEnable = useAtomValue(sidebarEnableAtom);
  const [width, setWidth] = useSidebarWidth();

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
