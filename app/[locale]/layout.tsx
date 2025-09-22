import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { WalletProvider } from '@/components/providers/WalletProvider';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <WalletProvider>
            {children}
          </WalletProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}