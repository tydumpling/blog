// vite.config.js
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        UnoCSS({
            presets: [
                presetUno(),
            ],
            outFile: 'docs/.vitepress/theme/styles/uno.css',
        }),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: 'Your App Name',
                short_name: 'Your App',
                description: 'Your app description',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
})