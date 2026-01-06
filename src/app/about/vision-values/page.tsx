import type { Metadata } from "next";
import SubHero from "../../components/SubHero";
import AboutTabs from "../AboutTabs";

export const metadata: Metadata = {
  title: "비전과 가치 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep의 교육 철학과 핵심 가치를 소개합니다. 미션, 비전, 핵심 가치를 확인하세요.",
};

type ValueCardProps = {
  title: string;
  desc: string;
};

function ValueCard({ title, desc }: ValueCardProps) {
  return (
    <div className="rounded-2xl border-2 bg-white p-6 shadow-sm" style={{ borderColor: "var(--brand-burgundy)" }}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{desc}</p>
    </div>
  );
}

export default function AboutVisionValuesPage() {
  const values: ValueCardProps[] = [
    {
      title: "잠재력과 성장 (Potential & Growth)",
      desc: "학생 개개인의 잠재력을 존중하며, 발달 단계에 맞는 목표 설정과 성장을 체계적으로 지원합니다.",
    },
    {
      title: "학업적 우수성 (Academic Excellence)",
      desc: "검증된 커리큘럼과 수업 운영 기준을 바탕으로 기초 학습 역량과 사고력을 균형 있게 강화합니다.",
    },
    {
      title: "협력 (Collaboration)",
      desc: "교사·학생·가정이 함께 참여하는 학습 환경을 조성하여 상호 존중과 협력의 문화를 구축합니다.",
    },
    {
      title: "창의성 (Creativity)",
      desc: "탐구 기반 활동과 다양한 표현 경험을 통해 문제 해결력과 창의적 사고를 자연스럽게 확장합니다.",
    },
    {
      title: "배려 (Compassion)",
      desc: "타인을 이해하고 배려하는 태도를 기르며, 건강한 관계 형성과 공동체 의식을 함양합니다.",
    },
    {
      title: "소통 (Communication)",
      desc: "영어 몰입 환경 속에서 자신감 있는 의사 표현과 경청 태도를 기르도록 지도합니다.",
    },
  ];

  return (
    <>
      <SubHero title="비전과 가치" breadcrumb="HOME > 소개 > 비전과 가치" />

      <section className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        {/* 미션 */}
        <div>
          <h2 className="text-xl font-bold">미션</h2>
          <div className="mt-4 rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-zinc-800 leading-7">
              CEDAR HILL Global Prep은 유의미한 학습 경험을 통해 학생의 잠재력을
              개발하고, 학업적 우수성·인성 교육·글로벌 인식을 균형 있게 통합하여
              <strong> 자신감 있고 배려 깊은 미래형 리더</strong>로 성장하도록 지원합니다.
            </p>
          </div>
        </div>

        {/* 비전 */}
        <div>
          <h2 className="text-xl font-bold">비전</h2>
          <p className="mt-4 text-zinc-700 leading-7">
            우리는 각 학생의 고유한 가능성을 발견하고 이를 성장의 기반으로 확장합니다.
            학업적 성취와 인성 발달의 균형을 통해, 상호 연결된 글로벌 환경에서
            스스로 성장하고 공동체에 긍정적으로 기여할 수 있는 역량을 기릅니다.
          </p>
        </div>

        {/* 핵심 가치 카드 */}
        <div>
          <h2 className="text-xl font-bold">핵심 가치</h2>
          <p className="mt-3 text-sm text-zinc-500">
            교육 운영 전반에서 아래 가치를 기준으로 학습 경험을 설계합니다.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <ValueCard key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
