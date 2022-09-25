import { defineConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  const config: UserConfigExport = {
    plugins: [vue()],
  };

  return config;
});
