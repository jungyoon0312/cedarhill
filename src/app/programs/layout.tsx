import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로그램 | CEDAR HILL Global Prep",
  description: "씨더힐글로벌어학원 CEDAR HILL Global Prep의 교육 프로그램을 소개합니다. Pre-K, Junior Kinder, Senior Kinder와 연령별 특징, STEAM, 영어 중심 수업을 확인하세요.",
  openGraph: {
    title: "프로그램 | CEDAR HILL Global Prep",
    description: "씨더힐글로벌어학원 CEDAR HILL Global Prep의 교육 프로그램을 소개합니다. Pre-K, Junior Kinder, Senior Kinder와 연령별 특징, STEAM, 영어 중심 수업을 확인하세요.",
    url: "https://www.cedarhgp.org/programs",
    type: "website",
    images: [
      {
        url: "/images/library1.jpg",
        width: 1200,
        height: 630,
        alt: "CEDAR HILL Global Prep 프로그램",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "프로그램 | CEDAR HILL Global Prep",
    description: "씨더힐글로벌어학원 CEDAR HILL Global Prep의 교육 프로그램을 소개합니다. Pre-K, Junior Kinder, Senior Kinder와 연령별 특징, STEAM, 영어 중심 수업을 확인하세요.",
    images: ["/images/library1.jpg"],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

