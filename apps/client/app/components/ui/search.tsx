import type { ComponentProps } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '~/lib/utils';
import { Input } from './input';

export interface SearchProps extends ComponentProps<typeof Input> {
  inputClassName?: string
}

export function Search(props: SearchProps) {
  const { className, inputClassName, ...restProps } = props;
  return (
    <div className={cn('search relative', className)}>
      <Icon icon='f7:search' className='absolute left-[9px] text-[#4D4D4D] top-[9px]' />
      <Input {...restProps} className={cn('pl-8', inputClassName)} />
    </div>
  );
}
