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
    id: "global-prep-opening-2026-04",
    title: "글로벌프렙 개강",
    date: "2026-04-23",
    category: "공지",
    content: "글로벌 프렙이 봄학기 입학식을 진행하였습니다. 1회 입학생 여러분을 진심으로 환영합니다!\n\n-입학상담 가능-",
    images: ["/images/opening.jpg", "/images/opening2.jpg", "/images/opening3.jpg"],
  },
  {
    id: "open-house-2026-03",
    title: "오픈하우스 및 입학설명회 안내",
    date: "2026-03-09",
    category: "행사",
    content: "CEDAR HILL Global Prep 오픈하우스에 여러분을 초대합니다.\n\n【행사 일정】\n• 3월 21일 (토) 10:30~12:00\n• 3월 28일 (토) 10:30~12:00\n\n※ 위 두 날짜 중 하루를 선택하여 참석하시면 됩니다.\n\n【모집 대상】\n5세, 6세, 7세\n\n【학부모 대상】\n입학 설명회가 진행됩니다. 교육 과정, 입학 절차, 교과 과정 등에 대해 자세히 안내해 드립니다.\n\n【문의】\n032-875-8733~4",
  },
  {
    id: "nadaun-art-free-trial-2026-02",
    title: "나다운아트 미술 아카데미 1회 무료 수업 안내",
    date: "2026-02-23",
    category: "공지",
    content: "나다운아트 미술 아카데미에서 1회 무료 수업을 진행합니다.\n\n씨더힐 글로벌 프렙 재원생 여러분의 많은 참여를 부탁드립니다.\n\n신청 및 문의는 원 내에서 안내해 드리겠습니다.",
    images: ["/images/nadaun_art_free_trial_coupon_v2.png"],
  },
  {
    id: "english-lab-after-school-2026-02",
    title: "English Lab 방과후 교실 개설 안내",
    date: "2026-02-23",
    category: "공지",
    content: "CEDAR HILL Global Prep에 English Lab 방과후 교실이 새롭게 개설됩니다.\n\nEnglish Lab은 학생 개개인의 영어 레벨에 맞춘 맞춤형 영어 프로그램입니다. 읽기·듣기·말하기·쓰기 4영역을 균형 있게 다루며, 소규모 그룹 수업으로 발표력과 표현력을 키웁니다.\n\n수강 희망 학생은 레벨테스트 신청을 진행해 주시기 바랍니다.",
  },
  {
    id: "admission-briefing-academy-2026-02-07",
    title: "제3회 입학설명회 및 아카데미 체험수업 안내",
    date: "2026-02-07",
    category: "공지",
    content: "날짜: 2026년 2월 7일 (토)\n\n시간:\n• 오전 11시 (입학설명회)\n• 오후 1시 (아카데미 설명회 및 무료오픈수업)\n\n장소: 학익동 30 씨더힐 글로벌 프렙\n\n아카데미 무료오픈 수업은 4개 아카데미를 각 25분씩 모두 체험하게 됩니다.\n\n[씨더힐 아카데미 보러가기](https://www.cedarhgp.org/co-curricular-activities)",
  },
  {
    id: "admission-briefing-2026-01-24",
    title: "씨더힐 글로벌 프렙 입학설명회",
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

