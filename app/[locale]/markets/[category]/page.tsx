import { useTranslations } from 'next-intl';
import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';
import { CategoryMarkets } from '@/components/market/CategoryMarkets';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const locales = ['en', 'zh', 'ja', 'ko'];
  const categories = ['crypto', 'sports', 'politics', 'economy', 'gaming', 'culture', 'tech'];
  
  const paths = [];
  for (const locale of locales) {
    for (const category of categories) {
      paths.push({ locale, category });
    }
  }
  return paths;
}

interface CategoryPageProps {
  params: {
    locale: string;
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const t = useTranslations('topics');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:ml-64 pt-16 lg:pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t(category)} Markets
            </h1>
            <p className="text-gray-600">
              All prediction markets in the {t(category).toLowerCase()} category
            </p>
          </div>
          
          <CategoryMarkets category={category} />
        </div>
      </div>
    </div>
  );
}