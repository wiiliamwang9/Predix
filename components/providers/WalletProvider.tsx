'use client';

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  // 简单返回 children，避免在静态导出时阻止内容渲染
  return <>{children}</>;
}