import type { SetStateAction } from 'jotai';
import { atom } from 'jotai';
import localforage from 'localforage';

interface ForageStorage<Value> {
  getItem: (key: string) => PromiseLike<Value | null>
  setItem: (key: string, value: any) => PromiseLike<void>
  removeItem: (key: string) => PromiseLike<void>
}
const defaultForageStore: ForageStorage<unknown> = {
  getItem(key) {
    return localforage.getItem(key);
  },
  setItem(key, value) {
    return localforage.setItem(key, value);
  },
  removeItem(key) {
    return localforage.removeItem(key);
  },
};
export function atomWithLocalForage<Value>(key: string, initialValue: Value, storage: ForageStorage<Value> = defaultForageStore as ForageStorage<Value>) {
  const getInitialValue = async () => {
    const cache = await storage.getItem(key);
    return cache || initialValue;
  };
  const valueAtom = atom(initialValue);
  valueAtom.onMount = (setAtom) => {
    getInitialValue().then(setAtom);
  };
  const actionAtom = atom(
    async (get) => {
      const res = await get(valueAtom);
      return res;
    },
    async (get, set, update: SetStateAction<Value>) => {
      if (typeof update === 'function') {
        const nextValue = (update as (prev: Value) => Value)(get(valueAtom));
        set(valueAtom, nextValue);
        await storage.setItem(key, nextValue);
      }
      else {
        set(valueAtom, update);
        await storage.setItem(key, update);
      }
    },
  );
  return actionAtom;
}
