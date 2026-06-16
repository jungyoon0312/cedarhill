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
    id: "summer-camp-2026",
    title: "2026 CEDAR HILL SUMMER CAMP 모집 안내",
    date: "2026-06-02",
    category: "모집",
    content:
      "CEDAR HILL Global 어학원 2026 여름캠프에 여러분을 초대합니다.\n\n미술도 체육도 영어로 배웁니다.\n\n【기간】\n2026년 7월 27일 (월) ~ 8월 7일 (금) · 10일\n※ 5일 단위 등록도 가능합니다\n\n【대상】\n7세 ~ 초등 5학년\n\n【시간】\n10:00 ~ 13:40\n\n【비용】\n10일 기준 58만 원\n\n【프로그램】\n• Language Art\n• Real Art\n• Fun P.E.\n\n【문의 및 신청】\n032-875-8733\n\n【장소】\n시티오씨엘 4단지 상가 1층 (학익동 30)",
    images: ["/images/summer_camp.png"],
  },
  {
    id: "parent-meeting-2026-05",
    title: "학부모 간담회 안내",
    date: "2026-05-26",
    category: "행사",
    content:
      "CEDAR HILL Global 어학원 학부모 간담회에 여러분을 초대합니다.\n\n【일시】\n2026년 5월 29일 (금) 저녁 7시\n\n【프로그램】\n• 타니 선생님과 함께 씨더힐 영어수업 방식 소개\n• 진단테스트 시연 (학생 참여)\n\n【참여 대상】\n재원생 학부모 · 외부 학부모 모두 참여 가능\n\n【문의 및 참여 신청】\n032-875-8734",
    images: ["/images/showcase.png"],
  },
  {
    id: "childrens-day-event-2026-05",
    title: "어린이날 행사 안내",
    date: "2026-04-25",
    category: "공지",
    content: "",
    images: ["/images/cday.png"],
  },
  {
    id: "cityo-resident-discount-2026-04",
    title: "씨티오씨엘 입주민 할인안내",
    date: "2026-04-23",
    category: "공지",
    content: "자세한 문의사항은 상담창구로 연락주십시오",
    images: ["/images/cityo.png"],
  },
  {
    id: "global-opening-2026-04",
    title: "글로벌어학원 개강",
    date: "2026-04-23",
    category: "공지",
    content: "글로벌 어학원이 봄학기 입학식을 진행하였습니다. 1회 입학생 여러분을 진심으로 환영합니다!\n\n-입학상담 가능-",
    images: ["/images/opening.jpg", "/images/opening2.jpg", "/images/opening3.jpg"],
  },
  {
    id: "open-house-2026-03",
    title: "오픈하우스 및 입학설명회 안내",
    date: "2026-03-09",
    category: "행사",
    content: "CEDAR HILL Global 어학원 오픈하우스에 여러분을 초대합니다.\n\n【행사 일정】\n• 3월 21일 (토) 10:30~12:00\n• 3월 28일 (토) 10:30~12:00\n\n※ 위 두 날짜 중 하루를 선택하여 참석하시면 됩니다.\n\n【모집 대상】\n5세, 6세, 7세\n\n【학부모 대상】\n입학 설명회가 진행됩니다. 교육 과정, 입학 절차, 교과 과정 등에 대해 자세히 안내해 드립니다.\n\n【문의】\n032-875-8733~4",
  },
  {
    id: "nadaun-art-free-trial-2026-02",
    title: "나다운아트 미술 아카데미 1회 무료 수업 안내",
    date: "2026-02-23",
    category: "공지",
    content: "나다운아트 미술 아카데미에서 1회 무료 수업을 진행합니다.\n\n씨더힐 글로벌 어학원 재원생 여러분의 많은 참여를 부탁드립니다.\n\n신청 및 문의는 원 내에서 안내해 드리겠습니다.",
    images: ["/images/nadaun_art_free_trial_coupon_v2.png"],
  },
  {
    id: "admission-briefing-academy-2026-02-07",
    title: "제3회 입학설명회 및 아카데미 체험수업 안내",
    date: "2026-02-07",
    category: "공지",
    content: "날짜: 2026년 2월 7일 (토)\n\n시간:\n• 오전 11시 (입학설명회)\n• 오후 1시 (아카데미 설명회 및 무료오픈수업)\n\n장소: 학익동 30 씨더힐 글로벌 어학원\n\n아카데미 무료오픈 수업은 4개 아카데미를 각 25분씩 모두 체험하게 됩니다.\n\n[씨더힐 아카데미 보러가기](https://www.cedarhgp.org/co-curricular-activities)",
  },
  {
    id: "admission-briefing-2026-01-24",
    title: "씨더힐 글로벌 어학원 입학설명회",
    date: "2026-01-24",
    category: "공지",
    content: "날짜: 2026년 1월 24일 (토) 11시\n\n장소: 인천시 미추홀구 학익동 30 씨더힐 글로벌 어학원\n\n연락처: 032-875-8733~4",
  },
  {
    id: "admission-consultation-2026-03",
    title: "2026년 3월 신학기 입학 상담 안내",
    date: "2025-12-24",
    category: "공지",
    content: "2026년 3월 개강을 앞두고 입학 상담을 진행합니다.\n\n과정/일정/준비 사항은 상담을 통해 개별 안내드립니다.",
  },
];

