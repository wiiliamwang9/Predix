import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'ko' }
  ];
}

export default function HomePage() {
  return <ResponsiveLayout />;
}