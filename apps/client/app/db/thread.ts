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

export async function deleteThread(id: string) {
  return db.threads.delete(id);
}

export async function favoriteThread(id: string) {
  const thread = await db.threads.get(id);
  if (!thread) {
    return;
  }
  if (thread.favorite) {
    return db.threads.update(thread.id, { favorite: false });
  }
  return db.threads.update(thread.id, { favorite: true });
}
