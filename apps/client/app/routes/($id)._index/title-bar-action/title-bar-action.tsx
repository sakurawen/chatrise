import { Icon } from '@iconify/react';
import { useSetAtom } from 'jotai';
import { sidebarEnableAtom } from '~/atoms/layout';
import { Button } from '~/components/ui/button';

export function TitleBarAction() {
  const setSidebarEnableAtom = useSetAtom(sidebarEnableAtom);
  return (
    <div className='fixed top-[12px] left-22 z-10 '>
      <Button size='icon' variant='ghost' onClick={() => setSidebarEnableAtom(val => !val)}>
        <Icon icon='f7:sidebar-left' className='size-5 ' />
      </Button>
    </div>
  );
}
