import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR, Cinzel } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kr",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cedarhgp.org'),
  title: {
    default: "CEDAR HILL Global Prep | 글로벌 기준의 유아 교육",
    template: "%s | CEDAR HILL Global Prep",
  },
  description: "CEDAR HILL Global Prep은 글로벌 기준의 유아 교육 프로그램을 운영하며, 학생의 잠재력과 균형 잡힌 성장을 지원합니다. Cognia 인증 커리큘럼, STEAM 교육, 100% 영어 몰입 환경을 제공합니다.",
  keywords: ["영어유치원", "글로벌 교육", "유아교육", "인천 유치원", "영어 몰입 교육", "Cognia 인증", "STEAM 교육", "Pre-K", "인천 학익동"],
  authors: [{ name: "CEDAR HILL Global Prep" }],
  creator: "CEDAR HILL Global Prep",
  publisher: "CEDAR HILL Global Prep",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.cedarhgp.org",
    siteName: "CEDAR HILL Global Prep",
    title: "CEDAR HILL Global Prep | 글로벌 기준의 유아 교육",
    description: "CEDAR HILL Global Prep은 글로벌 기준의 유아 교육 프로그램을 운영하며, 학생의 잠재력과 균형 잡힌 성장을 지원합니다.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "CEDAR HILL Global Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEDAR HILL Global Prep | 글로벌 기준의 유아 교육",
    description: "CEDAR HILL Global Prep은 글로벌 기준의 유아 교육 프로그램을 운영하며, 학생의 잠재력과 균형 잡힌 성장을 지원합니다.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console 인증 후 추가
    // google: "your-google-verification-code",
    // naver: "your-naver-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${kr.variable} ${cinzel.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

