import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';
import { LeaderboardTable } from '@/components/leaderboard/LeaderboardTable';
import { LeaderboardHeader } from '@/components/leaderboard/LeaderboardHeader';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'ko' }
  ];
}

export default function LeaderboardPage() {
  return (
    <ResponsiveLayout>
      <div className="p-6">
        <LeaderboardHeader />
        <LeaderboardTable />
      </div>
    </ResponsiveLayout>
  );
}