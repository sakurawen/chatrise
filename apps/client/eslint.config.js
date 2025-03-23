import config from '@chatrise/eslint-config/react';
import reactCompiler from 'eslint-plugin-react-compiler';

export default config.append({
  ignores: ['.react-router', 'vite.config.ts'],
}).append(reactCompiler.configs.recommended);
