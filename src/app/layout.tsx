import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { mergeClassName } from '../lib/utils.js';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description:
        'At Life Captain, we serve as your day-to-day co-pilot, guiding you toward your fullest potential. Our mission is to simplify your life, providing practical solutions that empower you to thrive.',
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon/favicon.ico?v=5',
        },
        {
            rel: 'icon',
            sizes: '96x96',
            type: 'image/png',
            url: '/favicon/favicon-96x96.png?v=5',
        },
        {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            url: '/favicon/favicon-32x32.png?v=5',
        },
        {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            url: '/favicon/favicon-16x16.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            url: '/favicon/apple-touch-icon.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '57x57',
            url: '/favicon/apple-touch-icon-57x57.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '60x60',
            url: '/favicon/apple-touch-icon-60x60.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            url: '/favicon/apple-touch-icon-72x72.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '76x76',
            url: '/favicon/apple-touch-icon-76x76.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '114x114',
            url: '/favicon/apple-touch-icon-114x114.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '120x120',
            url: '/favicon/apple-touch-icon-120x120.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            url: '/favicon/apple-touch-icon-144x144.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '152x152',
            url: '/favicon/apple-touch-icon-152x152.png?v=5',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon-180x180.png?v=5',
        },
    ],
    title: 'Capitaine IO: A Self-Improvement App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const generatedClassName = mergeClassName(
        'min-h-screen flex flex-col text-storm-cloud-accent',
        inter.className,
    );

    return (
        <html lang="en">
            <SpeedInsights sampleRate={1} />
            <Analytics />
            <body className={generatedClassName}>
                <div className="flex-1 flex flex-col">{children}</div>
            </body>
        </html>
    );
}
