'use client';

import { useSimpleTranslation } from '@/lib/i18n-simple';
import { TrendingPredictions } from '@/components/market/TrendingPredictions';
import { CategorySections } from '@/components/market/CategorySections';

interface MainContentProps {
  topBarHeight?: number;
  sidebarWidth?: number;
}

export function MainContent({ topBarHeight = 64, sidebarWidth }: MainContentProps) {
  const { t } = useSimpleTranslation();

  return (
    <main 
      className="min-h-screen bg-background transition-all duration-300"
      style={{ 

        marginTop: `${topBarHeight}px`
      }}
    >
      <div className="p-6">
        {/* Trending Predictions Section */}
        <section className="mb-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t('market.trending')}
            </h1>
            <p className="text-muted-foreground">
              {t('market.mostActive')}
            </p>
          </div>
          <TrendingPredictions />
        </section>

        {/* Category Markets Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t('market.categories')}
            </h2>
            <p className="text-muted-foreground">
              {t('market.browseByTopic')}
            </p>
          </div>
          <CategorySections />
        </section>
      </div>
    </main>
  );
}