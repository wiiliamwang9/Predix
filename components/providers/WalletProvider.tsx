'use client';

import { ClientWrapper } from '@/components/ClientWrapper';

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  // 使用 ClientWrapper 避免 hydration 问题
  return (
    <ClientWrapper>
      {children}
    </ClientWrapper>
  );
}