import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';
import { MarketsGrid } from '@/components/markets/MarketsGrid';
import { MarketsHeader } from '@/components/markets/MarketsHeader';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'ko' }
  ];
}

export default function MarketsPage() {
  return (
    <ResponsiveLayout>
      <div className="p-6">
        <MarketsHeader />
        <MarketsGrid />
      </div>
    </ResponsiveLayout>
  );
}