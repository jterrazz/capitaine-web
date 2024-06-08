import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NavigationBar } from '../components/organisms/navigation-bar.jsx';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description:
        'A personal portfolio website showcasing my development projects, photography, and articles.',
    title: 'Terrazzoni Jean-Baptiste',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <NavigationBar
                    className="w-full"
                    pages={[
                        {
                            href: '/',
                            name: 'Home',
                        },
                        {
                            href: '/fields',
                            name: 'Fields', // Aspects - Areas - Elements - FIELDS - Zones  -
                        },
                        {
                            href: '/goals',
                            name: 'Goals',
                        },
                        {
                            href: '/routine',
                            name: 'Routine',
                        },
                    ]}
                />
                <div className="flex flex-col justify-center items-center text-storm-cloud-accent flex-1">
                    {children}
                </div>
            </body>
        </html>
    );
}
