import type { Metadata } from 'next';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'WileyZhang - 大模型开发专家',
  description: '大模型开发专家 & 技术引领者的个人介绍页面',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
