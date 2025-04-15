import type { ChatThread } from './schemas';
import { createId } from '@paralleldrive/cuid2';
import { getDefaultStore } from 'jotai';
import { currentModelAtom } from '~/atoms/modal';
import { db } from './schemas';

function createDefaultThread() {
  const currentModel = getDefaultStore().get(currentModelAtom);
  return {
    id: createId(),
    title: '新聊天',
    model: currentModel?.name,
    createAt: new Date(),
    updatedAt: new Date(),
    status: '',
    lastMessageAt: new Date(),
  } as ChatThread;
}

export function createThread(data = createDefaultThread()) {
  return db.threads.add(data);
}

export function deleteThread(id: string) {
  return db.threads.delete(id);
}
