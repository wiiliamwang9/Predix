'use client';

import { useTranslations } from 'next-intl';
import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WalletButton() {
  const t = useTranslations('auth');

  return (
    <Button className="flex items-center space-x-2">
      <Wallet className="w-4 h-4" />
      <span>{t('connectWallet')}</span>
    </Button>
  );
}