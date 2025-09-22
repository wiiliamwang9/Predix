'use client';

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  // 暂时简化，先让基础UI运行
  return <>{children}</>;
}