import '/styles/base.scss';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="/js/chart.js" // public/js/index.js 로드
          strategy="afterInteractive" // 페이지 렌더링 후 스크립트 로드
        />
      </body>
    </html>
  );
}
