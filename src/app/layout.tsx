import type { Metadata } from "next";
import Script from "next/script";
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
    // 네이버 서치어드바이저 인증은 layout.tsx의 <head> 섹션에 메타 태그로 추가
    // <meta name="naver-site-verification" content="your-verification-code" />
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 구조화된 데이터 (JSON-LD) - Organization 및 EducationalOrganization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CEDAR HILL Global Prep",
    "alternateName": "씨더힐 글로벌 프렙",
    "url": "https://www.cedarhgp.org",
    "logo": "https://www.cedarhgp.org/images/logo.png",
    "description": "CEDAR HILL Global Prep은 글로벌 기준의 유아 교육 프로그램을 운영하며, 학생의 잠재력과 균형 잡힌 성장을 지원합니다. Cognia 인증 커리큘럼, STEAM 교육, 100% 영어 몰입 환경을 제공합니다.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "학익로 30",
      "addressLocality": "미추홀구",
      "addressRegion": "인천광역시",
      "addressCountry": "KR"
    },
    "telephone": "032-875-8733",
    "email": "info@cedarhgp.org",
    "sameAs": [
      // 소셜 미디어 링크가 있다면 추가
    ],
    "educationalCredentialAwarded": "Pre-K, Junior Kinder, Senior Kinder",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "교육 프로그램",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Pre-K Program",
            "description": "만 3세/한국나이 5세 대상 프로그램"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Junior Kinder",
            "description": "만 4세/한국나이 6세 대상 프로그램"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Senior Kinder",
            "description": "만 5세/한국나이 7세 대상 프로그램"
          }
        }
      ]
    }
  };

  return (
    <html lang="ko">
      <head>
        {/* 네이버 검색을 위한 메타 태그 - 인증 코드는 네이버 웹마스터 도구에서 받은 후 추가 */}
        {/* <meta name="naver-site-verification" content="your-verification-code" /> */}
      </head>
      <body className={`${kr.variable} ${cinzel.variable}`}>
        {/* 구조화된 데이터 (JSON-LD) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

