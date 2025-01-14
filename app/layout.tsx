import type { Metadata } from 'next';
// Подключение шрифта из Google fonts
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared';

// Создаю переменную для шрифта
const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Описание метаданных
export const metadata: Metadata = {
  title: 'Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          {/* Так как Header у нас вообще во всём проекте используется, то мы его прикручиваем именно сюда */}
          <Header />

          {/* Тут будет рендериться весь динамический контект вместо children */}
          {children}
        </main>
      </body>
    </html>
  );
}
