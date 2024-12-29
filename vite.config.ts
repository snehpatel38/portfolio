import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line
  build: {
    outDir: 'build', // Ensure the output directory matches your deploy script
  },
});