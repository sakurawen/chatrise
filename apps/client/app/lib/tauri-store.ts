import { Store } from '@tauri-apps/plugin-store';

// eslint-disable-next-line antfu/no-top-level-await
export const tauriStore = await Store.load('setting.json');
