import { useAtomValue } from 'jotai';
import { sidebarEnableAtom } from '~/atoms/layout';
import { ModelDropdownMenu } from '~/components/features/model-dropdown-menu';

export function ContentHeader() {
  const sidebarEnable = useAtomValue(sidebarEnableAtom);
  return (
    <div data-tauri-drag-region className={`content-title-bar transition-[padding]  h-13 flex items-center border-b border-zinc-200 ${sidebarEnable ? 'pl-1.5' : 'pl-40'}`}>
      <ModelDropdownMenu />
    </div>
  );
}
