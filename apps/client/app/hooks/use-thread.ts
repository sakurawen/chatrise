import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '~/db';

export function useThreads() {
  return useLiveQuery(async () => {
    return db.threads.toArray();
  }, []);
}

export function useThread(id: string) {
  return useLiveQuery(async () => {
    return db.threads.where('id').equals(id);
  }, [id]);
}
