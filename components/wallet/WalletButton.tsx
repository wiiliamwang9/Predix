'use client';

import { useSimpleTranslation } from '@/lib/i18n-simple';
import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WalletButton() {
  const { t } = useSimpleTranslation();

  return (
    <Button className="flex items-center space-x-2">
      <Wallet className="w-4 h-4" />
      <span>{t('auth.connectWallet')}</span>
    </Button>
  );
}