import type { Metadata } from 'next';
import { Nunito, Inter, Arbutus } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
});

const arbutus = Arbutus({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My learn app',
  description: 'My practice in Next JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
      </head>
      <body className={`${nunito.variable} ${inter.variable}`}>
        <div className="wrapper">
          <Header />
          <h2 className={arbutus.className}>
            My test title for testing a new font
          </h2>
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
