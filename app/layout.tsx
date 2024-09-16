import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Loady',
};

const workSans = localFont({
    src: [
        {
            path: '../public/fonts/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../public/fonts/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='shortcut icon'
                    href='/favicon.ico'
                    type='image/x-icon'
                />
                <link
                    rel='manifest'
                    href='/manifest.json'
                />
            </head>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
