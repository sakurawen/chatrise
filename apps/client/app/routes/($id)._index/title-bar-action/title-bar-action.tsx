import { Icon } from '@iconify/react';
import { useSetAtom } from 'jotai';
import { sidebarEnableAtom } from '~/atoms/layout';
import { Button } from '~/components/ui/button';
import { isTauri } from '~/lib/utils';

export function TitleBarAction() {
  const setSidebarEnableAtom = useSetAtom(sidebarEnableAtom);

  return (
    <div className={`fixed top-[12px]  z-10  ${isTauri ? 'left-[90px]' : 'left-[12px]'}`}>
      <div className='flex items-center space-x-2'>
        <Button size='icon' variant='ghost' className='text-secondary' onClick={() => setSidebarEnableAtom(val => !val)}>
          <Icon icon='f7:sidebar-left' className='size-icon ' />
        </Button>
        <Button size='icon' variant='ghost' className='text-secondary'>
          <Icon icon='f7:square-pencil' className='size-icon -translate-y-px' />
        </Button>
      </div>
    </div>
  );
}
