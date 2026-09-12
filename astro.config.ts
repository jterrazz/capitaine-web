import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    outDir: './dist',
    cacheDir: './.artifacts/astro',
    devToolbar: { enabled: false },
    vite: { cacheDir: './.artifacts/vite' },
});
