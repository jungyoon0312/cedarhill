import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로그램 | CEDAR HILL Global 어학원",
  description: "씨더힐글로벌어학원 CEDAR HILL Global 어학원의 영어 프로그램을 소개합니다. Phonics Core, English Core, 매일 60분 구조화 수업, Jolly Phonics, Our World 커리큘럼을 확인하세요.",
  openGraph: {
    title: "프로그램 | CEDAR HILL Global 어학원",
    description: "씨더힐글로벌어학원 CEDAR HILL Global 어학원의 영어 프로그램을 소개합니다. Phonics Core, English Core, 매일 60분 구조화 수업, Jolly Phonics, Our World 커리큘럼을 확인하세요.",
    url: "https://www.cedarhgp.org/programs",
    type: "website",
    images: [
      {
        url: "/images/library1.jpg",
        width: 1200,
        height: 630,
        alt: "CEDAR HILL Global 어학원 프로그램",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "프로그램 | CEDAR HILL Global 어학원",
    description: "씨더힐글로벌어학원 CEDAR HILL Global 어학원의 영어 프로그램을 소개합니다. Phonics Core, English Core, 매일 60분 구조화 수업, Jolly Phonics, Our World 커리큘럼을 확인하세요.",
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

