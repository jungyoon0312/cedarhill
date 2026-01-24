export type NewsPost = {
  id: string;
  title: string;
  date: string;
  content: string;
  images?: string[]; // 이미지 경로 배열 (선택사항)
};

export const newsPosts: NewsPost[] = [
  {
    id: "admission-briefing-2025-12-27",
    title: "제 1회 입학 설명회가 진행되었습니다",
    date: "2025-12-27",
    content: "2025년 12월 27일 (토) 라마다 송도에서 제 1회 씨더힐 유치부 입학 설명회가 진행되었습니다. 첫 설명회에도 불구하고 많은 학부형과 아동들이 참석해 주셨습니다. 개강을 앞둔 학교 소개와 전반적인 커리큘럼, 등록절차, 학교생활 및 과외활동에 대한 설명이 있었습니다. 방문해주신 모든 분들께 감사드립니다.",
    images: [
      "/images/IMG_5270.jpeg",
      "/images/IMG_5271.jpeg",
      "/images/IMG_5272.jpeg",
      "/images/IMG_5274.jpeg",
      "/images/IMG_5275.jpeg",
      "/images/IMG_5276.jpeg",
      "/images/IMG_5277.jpeg",
      "/images/IMG_5279.jpeg",
      "/images/IMG_5280.jpeg",
      "/images/IMG_5291.jpeg",
    ],
  },
];

