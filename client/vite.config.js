// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    minify: 'esbuild', // Minify the production build using esbuild
    sourcemap: false, // Disable sourcemaps for production (unless you need them for debugging)
    // Additional optimizations for large apps
    chunkSizeWarningLimit: 500, // Warning if chunk size exceeds 500 KB
  },
  // Optional: Define environment variables for different modes
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
