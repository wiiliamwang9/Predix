import { NextIntlClientProvider } from 'next-intl';
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
  // For static export, load messages directly
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English if locale not found
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <WalletProvider>
            {children}
          </WalletProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}