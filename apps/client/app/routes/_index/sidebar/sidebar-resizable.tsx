import type { PropsWithChildren } from 'react';
import { clamp } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';

export function SidebarResizable({ children }: PropsWithChildren) {
  const downRef = useRef(false);
  const [width, setWidth] = useState(200);

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      if (!downRef.current) {
        return;
      }
      setWidth(clamp(e.clientX, 200, 360));
    }
    function handlePointerUp() {
      document.body.className = 'default-cursor';
      downRef.current = false;
    }
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  function handlePointerDown() {
    document.body.className = 'resize-cursor';
    downRef.current = true;
  }

  return (
    <div className='h-full min-w-24 relative border-r border-gray-200' style={{ width }}>
      {children}
      <div onPointerDown={handlePointerDown} className=' resizable-handler transition-colors h-full absolute  w-1 hover:opacity-100 active:opacity-100 opacity-0 active:w-1 bg-gray-200 top-0 right-0 active:bg-blue-500 hover:bg-blue-500  cursor-col-resize!' />
    </div>
  );
}
