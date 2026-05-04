import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work&Vacation | 워케이션 플랫폼",
  description: "일과 쉼이 함께하는 워케이션 플랫폼. 지원금 자동화로 쉽게 시작하는 기업 복지.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
