import { defineConfig } from 'vite';
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from 'path';

export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            postcss: './postcss.config.js',
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
        plugins: [
            viteStaticCopy({
                targets: [
                    {
                        src: path.resolve(__dirname, '.well-known'),
                        dest: ''
                    },
                ],
            }),
        ],
        server: {
            host: 'localhost',
            port: 3000
        },
        define: {
            'process.env.NODE_ENV': `"${mode}"`,
        },
        build: {
            outDir: path.resolve(__dirname, 'dist'),  // Output directory for production build
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name].[hash][extname]',
                    chunkFileNames: 'assets/[name].[hash].js',
                    entryFileNames: 'assets/[name].[hash].js',
                }
            },
        },
    };
});