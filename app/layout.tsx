import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.01player.cn'),
  title: {
    default: '零一玩家智能科技｜从零到一，让人工智能真正落地',
    template: '%s｜零一玩家智能科技',
  },
  description:
    '零一玩家智能科技，提供 AI SaaS、AI 模型 API 聚合与接入、软件开发、网络服务与 AI 教育。',
  keywords: ['AI SaaS', 'AI 模型 API', '软件开发', '网络服务', 'AI 教育', '福州'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: '零一玩家智能科技',
    title: '零一玩家智能科技',
    description: '从零到一，让人工智能真正落地！',
    images: [
      {
        url: '/company-share-cover.jpg',
        width: 1672,
        height: 941,
        alt: '来自零一扬个人主页的互动空间概念图',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '零一玩家智能科技',
    description: '从零到一，让人工智能真正落地！',
    images: ['/company-share-cover.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
