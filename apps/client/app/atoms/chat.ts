import { atomWithLocalForage } from '~/lib/jotai';

interface ChatMessage {
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

export const chatMessagesAtom = atomWithLocalForage<Array<ChatMessage>>('chatMessages', []);

interface ChatThread {
  id: string
  title: string
  modal: string
  create_at: Date
  updated_at?: Date
  last_message_at?: Date
  status: string
}

export const chatThreadsAtom = atomWithLocalForage<Array<ChatThread>>('chatThreads', []);
