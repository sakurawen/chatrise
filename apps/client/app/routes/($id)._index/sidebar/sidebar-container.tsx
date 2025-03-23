import type { PropsWithChildren } from 'react';
import { useAtomValue } from 'jotai';
import { clamp } from 'lodash-es';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { sidebarEnableAtom } from '~/atoms/layout';
import { useSidebarWidth } from '~/hooks/use-sidebar-width';

export function SidebarContainer({ children }: PropsWithChildren) {
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
    <motion.div className='h-full  border-r relative  border-zinc-200' style={{ width: sidebarEnable ? width : 0, left: sidebarEnable ? 0 : -width, transition: pointerDown ? 'none' : 'all 0.2s' }}>
      {children}
      <div onPointerDown={handlePointerDown} className='resizable-handler transition-colors h-full absolute  w-1 hover:opacity-100 active:opacity-100 opacity-0 active:w-1 bg-zinc-200 top-0 right-0 active:bg-blue-500 hover:bg-blue-500  cursor-col-resize!' />
    </motion.div>
  );
}
