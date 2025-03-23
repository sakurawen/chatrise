import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const defaultSidebarWidth = 240;
export const sidebarWidthAtom = atomWithStorage<number | undefined>('sidebarWidth', undefined);

export const renderSidebarWidthAtom = atom((get) => {
  const width = get(sidebarWidthAtom);
  if (width !== undefined) {
    return width;
  }
  const localWidth = localStorage.getItem('sidebarWidth');
  try {
    const parsedWidth = Number.parseInt(localWidth || '');
    return parsedWidth;
  }
  catch {
    return defaultSidebarWidth;
  }
});

export const sidebarEnableAtom = atomWithStorage('sidebarEnable', true);
