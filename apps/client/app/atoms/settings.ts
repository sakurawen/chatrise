import { atom ,SetStateAction} from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface AppSettings {
  theme: 'dark' | 'light' | 'auto'
}

export const defaultSettings: AppSettings = {
  theme: 'auto',
};

const settingsAtom = atomWithStorage<AppSettings>('settings', defaultSettings);

export const writeSettingsAtom = atom(null,(_,set,update:SetStateAction<AppSettings>)=>{
  set(settingsAtom,update)
})

export const readSettingsAtom = atom((get) => {
  const settings = get(settingsAtom);
  if (settings) {
    return settings;
  }
  const locationSettings = localStorage.getItem('settings');
  if (locationSettings) {
    return JSON.parse(locationSettings) as AppSettings;
  }
  return defaultSettings;
});
