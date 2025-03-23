import { useAtomValue, useSetAtom } from 'jotai';
import { renderSidebarWidthAtom, sidebarWidthAtom } from '~/atoms/layout';

export function useSidebarWidth() {
  const width = useAtomValue(renderSidebarWidthAtom);
  const setWidth = useSetAtom(sidebarWidthAtom);
  return [width, setWidth] as const;
}
