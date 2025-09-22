import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predix Markets',
  description: 'Decentralized prediction markets platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}