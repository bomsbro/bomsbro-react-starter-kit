import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: ['./tsconfig.paths.json'],
    }),
    eslint({
      lintOnStart: true, // 서버 시작 시 전체 린트 실행
      build: true, // 빌드 시에도 린트 실행
    }),
  ],
})
