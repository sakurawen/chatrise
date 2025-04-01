import type { EntityTable } from 'dexie';
import Dexie from 'dexie';

export interface ChatMessage {
  id: string
  threadId: string
  content: string
  role: string
  status: string
  modalParams?: Record<string, any>
  attachments?: unknown[]
  modal: string
  createAt: Date
}

export interface ChatThread {
  id: string
  title: string
  modal: string
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
  threads: 'id,threadId,content,role,status,modal,createAt',
  messages: 'id,title,modal,updateAt,lastMessageAt,status',
});
