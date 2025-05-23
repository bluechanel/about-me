import type { Metadata } from 'next';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'WileyZhang - 大模型开发专家',
  description: '大模型开发专家 & 技术引领者的个人介绍页面',
  openGraph: {
    title: 'WileyZhang - 大模型开发专家',
    description: '大模型开发专家 & 技术引领者的个人介绍页面',
    type: 'website',
    locale: 'zh_CN',
    url: 'https://about.wileyzhang.com',
    siteName: 'WileyZhang',
    images: [
      {
        url: 'https://about.wileyzhang.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WileyZhang - 大模型开发专家'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WileyZhang - 大模型开发专家',
    description: '大模型开发专家 & 技术引领者的个人介绍页面',
    site: '@WileyZhang',
    creator: '@WileyZhang',
    images: ['https://about.wileyzhang.com/og-image.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.other?.['schema:person'] ?? {})
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
