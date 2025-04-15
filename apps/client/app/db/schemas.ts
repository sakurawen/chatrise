import type { EntityTable } from 'dexie';
import Dexie from 'dexie';

export interface ChatMessage {
  id: string
  threadId: string
  content: string
  role: string
  status: string
  modelParams?: Record<string, any>
  attachments?: unknown[]
  model: string
  createAt: Date
}

export interface ChatThread {
  id: string
  title: string
  model: string
  createAt: Date
  updatedAt?: Date
  lastMessageAt?: Date
  status: string
}

export const db = new Dexie('chatrise') as Dexie & {
  threads: EntityTable<ChatThread, 'id'>
  messages: EntityTable<ChatMessage, 'id'>
};

db.version(1).stores({
  threads: 'id,threadId,content,role,status,model,createAt',
  messages: 'id,title,model,updateAt,lastMessageAt,status',
});
