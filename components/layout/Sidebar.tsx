'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BarChart3, 
  Trophy, 
  DollarSign, 
  Newspaper, 
  Puzzle,
  LogIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { sidebarConfig } from '@/lib/config';

const icons = {
  Home,
  BarChart3,
  Trophy,
  DollarSign,
  Newspaper,
  Puzzle,
  LogIn
};

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  onClose?: () => void; // 接受但不使用，保持菜单始终显示
}

export function Sidebar({ isCollapsed = false, onToggle, onClose }: SidebarProps) {
  const t = useTranslations('navigation');
  const tTopics = useTranslations('topics');
  const pathname = usePathname();

  return (
    <aside className={cn(
      'fixed left-0 top-0 h-full sidebar-dark transition-all duration-300 z-40',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center tech-glow">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl text-foreground">Predix</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="ml-auto"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-2">
          {sidebarConfig.mainNav.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href || '#'}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-primary text-primary-foreground tech-glow'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && (
                  <span className="font-medium">{t(item.id)}</span>
                )}
              </Link>
            );
          })}
        </div>

        <Separator />

        {/* Topics Section */}
        <div className="space-y-2">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
              {t('topicsLabel')}
            </h3>
          )}
          {sidebarConfig.topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/markets/${topic.id}`}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              <span className="text-lg">{topic.icon}</span>
              {!isCollapsed && (
                <span className="font-medium">{tTopics(topic.id)}</span>
              )}
            </Link>
          ))}
        </div>

      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {!isCollapsed && (
          <div className="space-y-2">
            {sidebarConfig.footer.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.id)}
              </Link>
            ))}
            <p className="text-xs text-muted-foreground mt-4">
              {t('copyright')}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}