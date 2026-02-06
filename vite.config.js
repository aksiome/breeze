import { defineConfig } from 'vite';
import { execSync } from 'child_process';


export default defineConfig({
  base: './',
  build: {
    outDir: 'src/sphinx_breeze_theme/theme/breeze/static',
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/sphinx_breeze_theme/assets/scripts/breeze.ts',
      output: {
        format: 'iife',  // ← Key change: generates self-executing function
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some(name => /\.(woff2?|ttf|eot)$/.test(name))) {
            return 'fonts/[name].[ext]';
          }
          return 'styles/[name].[ext]';
        }
      }
    }
  },
  plugins: [
    {
      name: 'generate-icons',
      buildStart() {
        execSync('node scripts/generate-icons.js', { stdio: 'inherit' });
      }
    }
  ]
});
