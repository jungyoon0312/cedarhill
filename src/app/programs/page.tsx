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

        {/* 연령별 프로그램 */}
        <div>
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>연령별 프로그램</h2>
          <p className="mt-4 text-base text-zinc-600 mb-8">
            각 연령대에 맞춘 체계적인 교육 프로그램을 제공합니다.
          </p>

          <div className="space-y-8">
            {/* Pre-K Program */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Pre-K Program (만 3세/한국나이 5세)</h3>
              <p className="text-base text-zinc-700 mb-4">
                <strong>Experience Early Learning Curriculum</strong>을 기반으로 한 테마 기반 커리큘럼입니다. 매달 새롭고 흥미로운 테마를 도입하여 아이들의 호기심을 자극하고 학습에 대한 흥미를 유지합니다. 각 월별 테마는 문해력, 수학, 과학, 사회, 창의 예술을 의미 있고 실제적인 경험을 통해 연결하도록 설계되었습니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 특징:</p>
                <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-5">
                  <li>월별 테마 기반 통합 학습 (Family & Pets, Down on the Farm, Community Helpers 등)</li>
                  <li>문해력, 수학, 과학, 사회, 창의 예술의 통합적 접근</li>
                  <li>감각 활동(Sensory) 및 블록 활동(Blocks)을 통한 체험 학습</li>
                  <li>미국 사립학교에서 널리 인정받고 구현되는 커리큘럼</li>
                </ul>
              </div>
            </div>

            {/* Junior Kinder */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Junior Kinder (만 4세/한국나이 6세)</h3>
              <p className="text-base text-zinc-700 mb-4">
                Experience Early Learning을 기반으로 한 테마/STEAM 기반 커리큘럼으로, 언어와 문해력 발달에 중점을 둡니다. 미국 학년도 Senior Kindergarten 준비 단계로서 읽기, 쓰기, 구두 의사소통의 기초 기술을 구축합니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 학습 영역:</p>
                <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-5">
                  <li>Numbers & Figures: 수학 및 계산 기초</li>
                  <li>Theme/Science/Art/Social-Emotional: 테마 기반 통합 학습</li>
                  <li>Language Art: SPECTRUM Phonics K</li>
                  <li>Literacy: myView LITERACY K5</li>
                </ul>
              </div>
            </div>

            {/* Senior Kinder */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Senior Kinder (만 5세/한국나이 7세)</h3>
              <p className="text-base text-zinc-700 mb-4">
                Advantages School International (ASI) 커리큘럼을 사용하여 제공되며, 미국 학년도 학생들과 동일한 학업 기준과 성취 기준을 충족하는 교육을 제공합니다. 이 단계에서는 핵심 학과목에 강한 초점을 두어 초등학교로의 성공적인 전환에 필요한 기초 지식과 기술을 개발합니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 과목:</p>
                <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-5">
                  <li>Language Art / Reading / Science: SPECTRUM Math, 다양한 수학 학습 도구</li>
                  <li>Science-Additional: Inspire Science Living Things</li>
                  <li>Social Study: IMPACT SOCIAL STUDIES Learning and Working Together</li>
                  <li>Additional Reading Program: Renaissance Raz-Kids</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 프로그램 카드 */}
        <div>
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>교육 특징</h2>
          <p className="mt-4 text-base text-zinc-600">
            주요 교육 특징을 영역별로 정리하였습니다.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programBlocks.map((p) => (
              <ProgramCard key={p.title} title={p.title} bullets={p.bullets} />
            ))}
          </div>
        </div>

        {/* Co-Curricular Activities */}
        <div>
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>Co-Curricular Activities</h2>
          <p className="mt-4 text-base text-zinc-600 mb-6">
            정규 수업 외 다양한 과외 활동을 통해 학생의 전인적 성장을 지원합니다.
          </p>

          {/* Wittiverse 상세 섹션 */}
          <div className="mb-8 rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--brand-navy)" }}>WITTYVERSE Digital Learning</h3>
              <p className="text-lg font-semibold mb-4" style={{ color: "var(--brand-burgundy)" }}>SPARK ON</p>
              <p className="text-lg font-semibold mb-4 text-zinc-800">
                창의력과 사고력을 키우는 AI 메타버스 학습공간
              </p>
              <p className="text-base text-zinc-700 leading-7 mb-4">
                즐거운 학습과 디지털 체험을 통해<br />
                성장하는 아이들을 위한 교육 플랫폼
              </p>
              <p className="text-base text-zinc-700 leading-7">
                위티버스는 미래 교육 변화를 예측하여, 메타버스 플랫폼 공간에서 일상과 삶, 발달과 놀이 등을 아우르는 총체적 경험을 제공하는 슈가레인 키즈 전용 메타버스 플랫폼입니다.
              </p>
              <p className="mt-4 text-sm text-zinc-600 italic">
                놀이처럼 배우고, 도전하며 성장하고, 창의와 사고를 여는 창의융합 프로그램<br />
                미래를 살아갈 핵심 역량을 기르는 글로벌 키즈 러닝 랩
              </p>
            </div>

            {/* 4가지 핵심 교육 프로그램 */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>핵심 교육 프로그램</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Creative Convergence Curriculum</h5>
                  <p className="text-sm text-zinc-600 mb-1">융합형 커리큘럼</p>
                  <p className="text-sm text-zinc-700">(한글, 수학, 영어, 창의, 예술 등)<br />주제를 다각도로 탐색하며 사고력 확장</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Play-based Active Learning</h5>
                  <p className="text-sm text-zinc-600 mb-1">'흥미 → 몰입 → 성취'로 이어지는</p>
                  <p className="text-sm text-zinc-700">자기주도 학습 환경 제공</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Digital & Analog Hybrid System</h5>
                  <p className="text-sm text-zinc-600 mb-1">디지털 & 아날로그 하이브리드 시스템</p>
                  <p className="text-sm text-zinc-700">AI, 인터랙티브 콘텐츠, 실물 조작 활동을 유기적으로 결합<br />단순 디지털 소비형 콘텐츠를 넘어선 '체험형 학습 환경' 제공</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Project-based & Team Learning</h5>
                  <p className="text-sm text-zinc-600 mb-1">팀 기반 프로젝트 수행을 통해 협업,</p>
                  <p className="text-sm text-zinc-700">리더십, 의사소통 능력 함양<br />혼자가 아닌 '함께 자라는 경험'을 핵심 가치로 설정</p>
                </div>
              </div>
            </div>

            {/* 3가지 주요 특징 */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>주요 특징</h4>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Personalized Learning Data</h5>
                  <p className="text-sm text-zinc-600 mb-1">개인 학습 데이터</p>
                  <p className="text-sm text-zinc-700">학습 수행 이력과 활동별 성취를 개인 학습 리포터로 제공합니다.</p>
                </div>
                <div className="p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Self-Directed Learning</h5>
                  <p className="text-sm text-zinc-600 mb-1">자기주도 학습</p>
                  <p className="text-sm text-zinc-700">개인 태블릿 기반 디지털 학습 환경과 맞춤형 AI 튜터 기능으로 자기주도 학습 역량을 강화합니다.</p>
                </div>
                <div className="p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                  <h5 className="font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Concept-Based Thinking</h5>
                  <p className="text-sm text-zinc-600 mb-1">개념 기반 사고 학습</p>
                  <p className="text-sm text-zinc-700">국제 학교 IB 기반의 개념 중심 학습 설계로 문제 해결력과 사고력이 향상됩니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 기타 Co-Curricular Activities */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Cheerleading", desc: "팀워크와 자신감을 기르는 치어리딩 활동" },
              { title: "Gym", desc: "대형 낙하산 등 다양한 체육 활동을 통한 신체 발달" },
              { title: "Renzulli-AI Coding", desc: "로봇 조작을 통한 AI 코딩 프로그램" },
              { title: "Art", desc: "다양한 미술 활동을 통한 창의성 발달" },
            ].map((activity) => (
              <div key={activity.title} className="rounded-2xl border-2 bg-white p-6 shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>{activity.title}</h3>
                <p className="text-sm text-zinc-700">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
