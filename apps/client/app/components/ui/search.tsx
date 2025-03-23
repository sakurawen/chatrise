import type { ComponentProps } from 'react';
import { Icon } from '@iconify/react';
import { Input } from './input';

export function Search(props: ComponentProps<typeof Input>) {
  const { ...restProps } = props;
  return (
    <div className='search relative'>
      <Icon icon='f7:search' className='absolute left-[9px] text-[#4D4D4D] top-[9px]' />
      <Input {...restProps} className='pl-8' />
    </div>
  );
}
