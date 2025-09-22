'use client';

import { useTranslations } from 'next-intl';
import { sidebarConfig } from '@/lib/config';
import { CategorySection } from './CategorySection';

export function CategorySections() {
  const t = useTranslations('topics');

  return (
    <div className="space-y-8">
      {sidebarConfig.topics.map((topic) => (
        <CategorySection
          key={topic.id}
          category={topic.id}
          title={t(topic.id)}
          icon={topic.icon}
          color={topic.color}
        />
      ))}
    </div>
  );
}