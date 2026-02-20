import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "커뮤니티 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 커뮤니티. 공지사항, 뉴스, 갤러리를 통해 최신 소식과 학교 생활을 확인하세요. 인천 영어유치원의 다양한 활동과 소식을 만나보세요.",
  openGraph: {
    title: "커뮤니티 | CEDAR HILL Global Prep",
    description: "CEDAR HILL Global Prep 커뮤니티. 공지사항, 뉴스, 갤러리를 통해 최신 소식과 학교 생활을 확인하세요.",
    url: "https://www.cedarhgp.org/community",
    type: "website",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

