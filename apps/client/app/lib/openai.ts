import { OpenAI } from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: import.meta.env.VITE_API_KEY,
});
