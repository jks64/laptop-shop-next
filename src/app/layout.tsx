import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import store from '@/redux/store/store';
import { Provider } from 'react-redux';
import Providers from '@/redux/providers';
import Home from './page';
import Modal from '@/components/Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Modal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
