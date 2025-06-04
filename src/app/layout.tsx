import '@/styles/index.scss';
import '@/tokens/index.scss';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from '@/components/Header';
import Flex from '@/components/Flex';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jungwu Portfolio',
  description: 'Jungwu Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-column min-width-0 fill-width p-0 m-0">
        <Flex fillWidth minHeight={'16'} hide="s" />
        <Header />
        {children}
      </body>
    </html>
  );
}
