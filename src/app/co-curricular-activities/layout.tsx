import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Curricular Activities | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep의 방과후 활동 프로그램을 소개합니다. Digital Wittiverse, Renzulli-AI Coding, Power Place, NADAUN ART, English Lab, FUTURUM 등 다양한 아카데미 프로그램을 확인하세요.",
  openGraph: {
    title: "Co-Curricular Activities | CEDAR HILL Global Prep",
    description: "CEDAR HILL Global Prep의 방과후 활동 프로그램을 소개합니다. Digital Wittiverse, Renzulli-AI Coding, Power Place, NADAUN ART, English Lab, FUTURUM 등 다양한 아카데미 프로그램을 확인하세요.",
    url: "https://www.cedarhgp.org/co-curricular-activities",
    type: "website",
    images: [
      {
        url: "/images/RENZULI4.jpg",
        width: 1200,
        height: 630,
        alt: "CEDAR HILL Global Prep Co-Curricular Activities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Curricular Activities | CEDAR HILL Global Prep",
    description: "CEDAR HILL Global Prep의 방과후 활동 프로그램을 소개합니다. Digital Wittiverse, Renzulli-AI Coding, Power Place, NADAUN ART, English Lab, FUTURUM 등 다양한 아카데미 프로그램을 확인하세요.",
    images: ["/images/RENZULI4.jpg"],
  },
};

export default function CoCurricularActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

