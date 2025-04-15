import type { Model } from '~/const/models';
import { atom } from 'jotai';

export const currentModelAtom = atom<Model | undefined>(undefined);
