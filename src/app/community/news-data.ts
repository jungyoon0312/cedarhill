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
    content: "2025년 12월 27일 (토) 라마다 송도에서 제 1회 씨더힐 유치부 입학 설명회가 진행되었습니다.\n\n첫 설명회에도 불구하고 많은 학부형과 아동들이 참석해 주셨습니다.\n\n개강을 앞둔 학교 소개와 전반적인 커리큘럼, 등록절차, 학교생활 및 과외활동에 대한 설명이 있었습니다.\n\n방문해주신 모든 분들께 감사드립니다.",
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
  {
    id: "admission-briefing-2026-01-27",
    title: "2회 입학설명회가 진행되었습니다",
    date: "2026-01-27",
    content: "2026년 1월 27일(토), 인테리어 공사가 마무리중인 씨더힐 현장에서 2차 입학 설명회가 진행되었습니다.\n\n굳은 날씨에도 많은 가족들이 참석해 주셨습니다.\n\n약 한시간의 학교소개와 커리큘럼 안내 이후, 마무리 단계에 있는 학교 시설을 돌아보는 간단한 투어가 가능한 날이었습니다.\n\n씨더힐 1회 입학생들은 새로운 시설을 처음으로 이용하게 됩니다. 기대해주세요!",
    images: [
      "/images/KakaoTalk_20260124_154425265_01.jpg",
      "/images/KakaoTalk_20260124_155143946_01.jpg",
      "/images/KakaoTalk_20260124_155143946_02.jpg",
      "/images/KakaoTalk_20260124_155143946_09.jpg",
      "/images/KakaoTalk_20260124_155143946_22.jpg",
      "/images/KakaoTalk_20260124_155143946_24.jpg",
      "/images/KakaoTalk_20260124_155143946_26.jpg",
      "/images/KakaoTalk_20260124_155143946_27.jpg",
      "/images/KakaoTalk_20260124_155143946_28.jpg",
      "/images/KakaoTalk_20260124_155225906_08.jpg",
      "/images/KakaoTalk_20260124_155225906_16.jpg",
      "/images/KakaoTalk_20260124_155225906_19.jpg",
      "/images/KakaoTalk_20260124_155225906_21.jpg",
      "/images/KakaoTalk_20260124_155225906_22.jpg",
    ],
  },
];

