export type NoticePost = {
  id: string;
  title: string;
  date: string;
  category: "공지" | "안내" | "모집" | "행사";
  content: string;
  images?: string[]; // 이미지 경로 배열 (선택사항)
};

export const noticePosts: NoticePost[] = [
  {
    id: "admission-briefing-academy-2026-02-07",
    title: "제3회 입학설명회 및 아카데미 체험수업 안내",
    date: "2026-02-07",
    category: "공지",
    content: "날짜: 2026년 2월 7일 (토)\n\n시간:\n• 오전 11시 (입학설명회)\n• 오후 1시 (아카데미 설명회 및 무료오픈수업)\n\n장소: 학익동 30 씨더힐 글로벌 프렙\n\n아카데미 무료오픈 수업은 4개 아카데미를 각 25분씩 모두 체험하게 됩니다.\n\n[씨더힐 아카데미 보러가기](https://www.cedarhgp.org/co-curricular-activities)",
  },
  {
    id: "admission-briefing-2026-01-24",
    title: "씨더힐 글로벌 프렙 유치부 입학설명회",
    date: "2026-01-24",
    category: "공지",
    content: "날짜: 2026년 1월 24일 (토) 11시\n\n장소: 인천시 미추홀구 학익동 30 씨더힐 글로벌 프렙\n\n연락처: 032-875-8733~4",
  },
  {
    id: "admission-consultation-2026-03",
    title: "2026년 3월 신학기 입학 상담 안내",
    date: "2025-12-24",
    category: "공지",
    content: "2026년 3월 개강을 앞두고 입학 상담을 진행합니다.\n\n과정/일정/준비 사항은 상담을 통해 개별 안내드립니다.",
  },
];

