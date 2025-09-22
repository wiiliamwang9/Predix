import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';
import { NewsGrid } from '@/components/news/NewsGrid';
import { NewsHeader } from '@/components/news/NewsHeader';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'ko' }
  ];
}

export default function NewsPage() {
  return (
    <ResponsiveLayout>
      <div className="p-6">
        <NewsHeader />
        <NewsGrid />
      </div>
    </ResponsiveLayout>
  );
}