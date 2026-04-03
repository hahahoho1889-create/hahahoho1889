import "./globals.css";

export const metadata = {
  title: "박도윤 - 개인 홈페이지",
  description: "AI 활용 강사 & 콘텐츠 크리에이터 박도윤의 개인 홈페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
