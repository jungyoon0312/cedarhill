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
              Our mission is to cultivate each student's potential through meaningful learning experiences that integrate academic excellence, character education, and global awareness. We strive to guide students to become confident, compassionate, and innovative leaders who contribute positively to their communities and the world.
            </p>
            <p className="mt-4 text-zinc-700 leading-7">
              저희의 미션은 학문적 우수성, 인성 교육, 글로벌 인식을 통합하는 의미 있는 학습 경험을 통해 각 학생의 잠재력을 함양하는 것입니다. 우리는 학생들이 자신감 있고, 자비로우며, 혁신적인 리더로 성장하여 지역 사회와 세계에 긍정적으로 기여하도록 이끄는 데 힘씁니다.
            </p>
          </div>
        </div>

        {/* 비전 */}
        <div>
          <h2 className="text-xl font-bold">비전</h2>
          <div className="mt-4 rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-zinc-800 leading-7">
              Our vision represents our commitment to discovering each student's unique potential and nurturing it as the foundation for growth into future leaders. By balancing academic excellence with character development, we empower well-rounded individuals to thrive in an interconnected world—not only adapting to the future, but shaping it with compassion, integrity, and innovative thinking.
            </p>
            <p className="mt-4 text-zinc-700 leading-7">
              우리 비전은 각 학생의 고유한 잠재력을 발견하고 미래 리더로 성장할 수 있는 기반을 마련하는 데 대한 우리의 약속을 나타냅니다. 학문적 우수성과 인성 개발의 균형을 통해 우리는 상호 연결된 세상에서 번성할 수 있는 균형 잡힌 개인을 양성합니다. 미래에 적응할 뿐만 아니라 연민, 성실성, 혁신적인 사고로 미래를 만들어가는 인재를 양성합니다.
            </p>
          </div>
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
