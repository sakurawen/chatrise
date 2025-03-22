import config from '@akumanoko/eslint-config/react';
import reactCompiler from 'eslint-plugin-react-compiler';

export default config.append({
  ignores: ['.react-router', 'vite.config.ts'],
  plugins: {
    reactCompiler,
  },
  rules: {
    'react-compiler/react-compiler': 'error',
  },
});
