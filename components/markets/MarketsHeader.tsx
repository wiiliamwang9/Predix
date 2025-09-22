'use client';

import { useTranslations } from 'next-intl';

export function MarketsHeader() {
  const t = useTranslations('navigation');

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t('markets')}
          </h1>
          <p className="text-muted-foreground">
            Explore all prediction market categories
          </p>
        </div>
      </div>
    </div>
  );
}