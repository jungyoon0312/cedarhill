import SubHero from "../components/SubHero";

export type Notice = {
  title: string;
  date: string;
  category: "공지" | "안내" | "모집" | "행사";
  summary: string;
};

type GalleryItem = {
  title: string;
  date: string;
  // 나중에 실제 이미지로 교체: /public/images/... 형태
  imageUrl?: string;
};

function Badge({ text }: { text: Notice["category"] }) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium";
  const map: Record<Notice["category"], string> = {
    공지: "bg-zinc-50 text-zinc-700",
    안내: "bg-zinc-50 text-zinc-700",
    모집: "bg-zinc-50 text-zinc-700",
    행사: "bg-zinc-50 text-zinc-700",
  };

  return <span className={`${base} ${map[text]}`}>{text}</span>;
}

function NoticeCard({ n }: { n: Notice }) {
  return (
    <div className="rounded-2xl border-2 bg-white p-8 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "var(--brand-navy)" }}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Badge text={n.category} />
          <h3 className="font-semibold leading-snug" style={{ color: "var(--brand-navy)" }}>{n.title}</h3>
        </div>
        <div className="text-xs text-zinc-500 whitespace-nowrap">{n.date}</div>
      </div>
      <p className="mt-4 text-base leading-7 text-zinc-700">{n.summary}</p>

      {/* 나중에 상세 공지 페이지 연결하면 Link로 바꾸면 됨 */}
      <button className="mt-4 text-sm font-medium hover:underline" style={{ color: "var(--brand-burgundy)" }}>
        자세히 보기
      </button>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="rounded-2xl border-2 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: "var(--brand-navy)" }}>
      {/* 이미지 영역: 이미지 없으면 플레이스홀더 */}
      <div className="aspect-[16/10] bg-zinc-100 flex items-center justify-center">
        {item.imageUrl ? (
          // 이미지 파일을 public/images에 넣고 쓰면 됨
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageUrl}
            alt={`${item.title} 갤러리 이미지`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-xs text-zinc-500">Image Placeholder</div>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs text-zinc-500">{item.date}</div>
        <div className="mt-1 font-semibold leading-snug" style={{ color: "var(--brand-navy)" }}>{item.title}</div>
      </div>
    </div>
  );
}

export const notices: Notice[] = [
  {
    category: "공지",
    title: "2026년 3월 신학기 입학 상담 안내",
    date: "2025-12-24",
    summary:
      "2026년 3월 개강을 앞두고 입학 상담을 진행합니다. 과정/일정/준비 사항은 상담을 통해 개별 안내드립니다.",
  },
  {
    category: "안내",
    title: "학부모 안내: 수업 운영 및 소통 채널",
    date: "2025-12-20",
    summary:
      "학습 및 성장 기록 공유, 가정 연계 소통 방식, 공지 전달 채널에 대한 안내 사항을 제공합니다.",
  },
  {
    category: "모집",
    title: "프로그램 체험(오픈 클래스) 신청 안내",
    date: "2025-12-15",
    summary:
      "수업 분위기와 교육 방식을 직접 확인할 수 있는 오픈 클래스를 운영합니다. 신청 방법은 공지를 참고해 주세요.",
  },
  {
    category: "행사",
    title: "겨울 시즌 테마 활동 안내",
    date: "2025-12-10",
    summary:
      "계절 테마를 반영한 프로젝트형 활동을 진행합니다. 활동 결과는 일정에 따라 공유될 예정입니다.",
  },
];

export default function CommunityPage() {

  const gallery: GalleryItem[] = [
    { title: "entrace", date: "2025-12-18","imageUrl":"/images/entrance2.jpg" },
    { title: "book art hall", date: "2025-12-12","imageUrl":"/images/bookarthall1.jpg" },
    { title: "classroom", date: "2025-12-05","imageUrl":"/images/classroom1.jpg" },
    { title: "digital library", date: "2025-11-28","imageUrl":"/images/library2.jpg"},
    { title: "cafeteria", date: "2025-11-20","imageUrl":"/images/cafeteria1.jpg" },
    { title: "terrace", date: "2025-11-10","imageUrl":"/images/terrace1.jpg" },
  ];

  return (
    <>
      <SubHero title="커뮤니티" breadcrumb="HOME > 커뮤니티" />

      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-28 space-y-16 bg-white">
        {/* 안내 요약 */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-zinc-800 text-lg leading-8">
            커뮤니티에서는 CEDAR HILL Global Prep의 공지사항과 주요 소식,
            활동 안내를 확인하실 수 있습니다. 학부모와의 원활한 소통을 위해
            정기적으로 정보를 업데이트합니다.
          </p>

          <div className="rounded-2xl border-2 p-6" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
            <div className="text-sm text-zinc-600">문의</div>
            <div className="mt-2 text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>032-875-8733~4</div>
            <p className="mt-2 text-sm text-zinc-700">
              상담을 통해 과정/일정/세부 안내를 개별 제공해 드립니다.
            </p>
          </div>
        </div>

        {/* 공지사항 */}
        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>공지사항</h2>
            <button className="text-sm font-medium hover:underline" style={{ color: "var(--brand-burgundy)" }}>
              전체 보기
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {notices.map((n) => (
              <NoticeCard key={`${n.date}-${n.title}`} n={n} />
            ))}
          </div>
        </div>

        {/* 갤러리 */}
        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-bold" style={{ color: "var(--brand-navy)" }}>갤러리</h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={`${item.date}-${item.title}`} item={item} />
            ))}
          </div>


        </div>
      </section>
    </>
  );
}
