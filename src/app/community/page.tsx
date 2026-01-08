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
    <div className="rounded-2xl border-2 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "var(--brand-navy)" }}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2.5">
          <Badge text={n.category} />
          <h3 className="text-base sm:text-lg font-semibold leading-snug" style={{ color: "var(--brand-navy)" }}>{n.title}</h3>
        </div>
        <div className="text-xs text-zinc-500 whitespace-nowrap">{n.date}</div>
      </div>
      <div className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-700 whitespace-pre-line">{n.summary}</div>
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
    title: "씨더힐 글로벌 프렙 유치부 입학설명회",
    date: "2026-01-24",
    summary:
      "날짜: 2026년 1월 24일 (토) 11시\n장소: 인천시 미추홀구 학익동 30 씨더힐 글로벌 프렙\n연락처: 032-875-8733~4",
  },
  {
    category: "공지",
    title: "2026년 3월 신학기 입학 상담 안내",
    date: "2025-12-24",
    summary:
      "2026년 3월 개강을 앞두고 입학 상담을 진행합니다. 과정/일정/준비 사항은 상담을 통해 개별 안내드립니다.",
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

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-24 space-y-10 sm:space-y-14 md:space-y-16 bg-white">
        {/* 안내 요약 */}
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <p className="text-zinc-800 text-sm sm:text-base md:text-lg leading-relaxed">
            커뮤니티에서는 CEDAR HILL Global Prep의 공지사항과 주요 소식,
            활동 안내를 확인하실 수 있습니다. 학부모와의 원활한 소통을 위해
            정기적으로 정보를 업데이트합니다.
          </p>

          <div className="rounded-2xl border-2 p-6" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
            <div className="text-xs sm:text-sm text-zinc-600">문의</div>
            <div className="mt-2 text-base sm:text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>032-875-8733~4</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              상담을 통해 과정/일정/세부 안내를 개별 제공해 드립니다.
            </p>
          </div>
        </div>

        {/* 공지사항 */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>공지사항</h2>
            <button className="text-xs sm:text-sm font-medium hover:underline" style={{ color: "var(--brand-burgundy)" }}>
              전체 보기
            </button>
          </div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {notices.map((n) => (
              <NoticeCard key={`${n.date}-${n.title}`} n={n} />
            ))}
          </div>
        </div>

        {/* 갤러리 */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-navy)" }}>갤러리</h2>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={`${item.date}-${item.title}`} item={item} />
            ))}
          </div>


        </div>
      </section>
    </>
  );
}
