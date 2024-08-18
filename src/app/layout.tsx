import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import AuthContext from '@/context/auth-context';
import NavBar from '@/components/app/nav-bar';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <AuthContext>
          <header className="z-10">
            <NavBar />
          </header>
          <main className="md:pt-14 px-5 md:px-0">{children}</main>
          <footer className="md:pb-0 mb-16 h-20">footer</footer>
        </AuthContext>
      </body>
    </html>
  );
}
