import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  const validLocales = ['en', 'zh', 'ja', 'ko'];
  
  if (!validLocales.includes(locale as any)) {
    locale = 'en'; // fallback to default locale
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});