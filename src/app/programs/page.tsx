import type { Metadata } from "next";
import SubHero from "../components/SubHero";

export const metadata: Metadata = {
  title: "프로그램 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep의 교육 프로그램을 소개합니다. Pre-K 과정, STEAM 기반 테마 학습, 통합형 활동 등 다양한 프로그램을 확인하세요.",
};

type ProgramCardProps = {
  title: string;
  bullets: string[];
};


function ProgramCard({ title, bullets }: ProgramCardProps) {
  return (
    <div className="rounded-2xl border-2 bg-white p-8 shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
      <div className="h-1 w-12 rounded-full mb-6" style={{ background: "var(--brand-burgundy)" }} />
      <h3 className="font-semibold" style={{ color: "var(--brand-navy)" }}>{title}</h3>
      <ul className="mt-6 list-disc pl-5 space-y-3 text-base leading-7 text-zinc-700">
        {bullets.map((b, idx) => (
          <li key={`${title}-${idx}`}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramsPage() {
  const programBlocks: ProgramCardProps[] = [
    {
      title: "Pre-K 과정",
      bullets: [
        "유아 발달 단계에 맞춘 기초 학습 및 언어 활동 중심",
        "놀이 기반 학습을 통해 학습 흥미 및 습관 형성 지원",
        "영어 몰입 환경에서 자연스러운 언어 사용 경험 제공",
      ],
    },
    {
      title: "STEAM 기반 테마 학습",
      bullets: [
        "과학·기술·예술·수학을 융합한 주제 중심 수업 구성",
        "탐구·실험·표현 활동을 통해 사고력 및 창의성 강화",
        "문제 해결 과정을 경험하며 자기주도 학습 태도 형성",
      ],
    },
    {
      title: "통합형 활동(SEL/신체/정서)",
      bullets: [
        "사회정서학습(SEL)을 바탕으로 관계 형성과 자기조절 지원",
        "신체 활동을 포함한 균형 있는 일과 구성",
        "감각·정서 발달을 고려한 교실 활동 및 루틴 운영",
      ],
    },
    {
      title: "학습·성장 기록 및 가정 연계",
      bullets: [
        "학습 과정의 관찰·기록을 기반으로 학생별 성장 지원",
        "가정과의 정기 소통을 통해 교육 경험을 확장",
        "학생의 강점과 보완 영역을 균형 있게 관리",
      ],
    },
    {
      title: "학습 자료 및 운영(교재/도구)",
      bullets: [
        "수업 목적에 맞는 학습 자료를 체계적으로 활용",
        "연령별 수준에 맞춘 활동 구성으로 성취감 강화",
        "프로젝트형 활동을 통해 협업과 표현 역량 강화",
      ],
    },
    {
      title: "English Immersion(영어 몰입)",
      bullets: [
        "일상 소통부터 수업까지 영어 사용 환경 제공",
        "발화 기회를 충분히 제공하여 자신감 있는 표현 지원",
        "기초 언어 능력과 사고 언어의 자연스러운 연결",
      ],
    },
  ];

  return (
    <>
      <SubHero title="프로그램" breadcrumb="HOME > 프로그램" />

      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-28 space-y-16 bg-white">
        {/* 프로그램 소개 */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-zinc-800 text-lg leading-8">
            CEDAR HILL Global Prep은 유아기의 핵심 발달 영역을 고려한
            통합형 커리큘럼을 기반으로 교육 프로그램을 운영합니다.
            모든 과정은 영어 몰입 환경에서 진행되며, 학생의 성장 단계에 맞춘
            학습 경험을 제공합니다.
          </p>
          <p className="text-zinc-700 text-base leading-7">
            본 페이지의 프로그램 구성은 기관 운영 방향에 따라 조정될 수 있으며,
            상세 사항은 상담을 통해 안내드립니다.
          </p>
        </div>

        {/* 프로그램 카드 */}
        <div>
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>프로그램 구성</h2>
          <p className="mt-4 text-base text-zinc-600">
            주요 프로그램을 영역별로 정리하였습니다.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programBlocks.map((p) => (
              <ProgramCard key={p.title} title={p.title} bullets={p.bullets} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
