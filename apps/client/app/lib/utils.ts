import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkTauri() {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

export const isTauri = checkTauri();
