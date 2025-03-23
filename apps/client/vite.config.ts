import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import babel from "vite-plugin-babel"

const host = process.env.TAURI_DEV_HOST;

const ReactCompilerConfig = {
  target: '19'
};

export default defineConfig(() => ({
  plugins: [tsconfigPaths(), reactRouter(),babel({
    filter: /\.[jt]sx?$/,
    babelConfig: {
      presets: ["@babel/preset-typescript"],
      plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
      ],
    },
  }), tailwindcss()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      ignored: ['**/src-tauri/**'],
    },
  },
}));
