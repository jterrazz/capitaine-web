import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#FFFFFF',
        description: 'A self development app',
        display: 'standalone',
        icons: [
            {
                sizes: '36x36',
                src: '/favicon/android-icon-36x36.png?v=4',
                type: 'image/png',
            },
            {
                sizes: '48x48',
                src: '/favicon/android-icon-48x48.png?v=4',
                type: 'image/png',
            },
            {
                sizes: '72x72',
                src: '/favicon/android-icon-72x72.png?v=4',
                type: 'image/png',
            },
            {
                sizes: '96x96',
                src: '/favicon/android-icon-96x96.png?v=4',
                type: 'image/png',
            },
            {
                sizes: '144x144',
                src: '/favicon/android-icon-144x144.png?v=4',
                type: 'image/png',
            },
            {
                sizes: '192x192',
                src: '/favicon/android-icon-192x192.png?v=4',
                type: 'image/png',
            },
        ],
        name: 'A Self-Improvement App',
        short_name: 'Capitaine',
        start_url: '/',
        theme_color: '#FFFFFF',
    };
}
