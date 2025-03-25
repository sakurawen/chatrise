import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '~/components/ui/dropdown-menu';
import { Search } from '~/components/ui/search';
import { modelProviders } from '~/const/models';

export function ModelDropdownMenu(props: React.ComponentProps<typeof DropdownMenu>) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger className='text-left  outline-none! data-[state=open]:bg-background/84 px-2 py-1.5 rounded-md'>
        <div className='flex flex-col space-y-1'>
          <div className='flex items-center'>
            <span className='text-sm leading-none font-bold'>
              OpenAI: ChatGPT-4o
            </span>
            <Icon icon='f7:chevron-right' className='size-3 text-zinc-900' />
          </div>
          <p className='text-xs leading-none text-zinc-500'>OpenRouter</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=' outline-hidden! max-h-[calc(var(--radix-dropdown-menu-content-available-height)-20px)]'
        sideOffset={4}
      >
        <div className='sticky top-0  bg-background border-b z-10 p-2 '>
          <Search placeholder='搜索模型' />
        </div>
        <div className='px-2'>

          {
            modelProviders.map((provider) => {
              return (
                <Fragment key={provider.name}>
                  <DropdownMenuLabel>{provider.name}</DropdownMenuLabel>
                  {provider.models.map((model) => {
                    return <DropdownMenuItem key={model.name}>{model.name}</DropdownMenuItem>;
                  })}
                </Fragment>
              );
            })
          }
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
