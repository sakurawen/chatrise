import type { ScrollAreaViewportRef } from '~/components/ui/scroll-area';
import { createContext } from 'react';

export const ContentViewportContext = createContext<React.RefObject<ScrollAreaViewportRef | null> | undefined>(undefined);
