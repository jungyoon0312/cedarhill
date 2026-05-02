import type { Metadata } from "next";
import SubHero from "../../components/SubHero";
import AboutTabs from "../AboutTabs";

export const metadata: Metadata = {
  title: "비전과 가치 | CEDAR HILL Global 어학원",
  description: "CEDAR HILL Global 어학원의 교육 철학과 핵심 가치를 소개합니다. 미션, 비전, 핵심 가치(잠재력과 성장, 성실한 학습, 협력, 창의성, 배려, 소통)를 확인하세요.",
  openGraph: {
    title: "비전과 가치 | CEDAR HILL Global 어학원",
  description: "CEDAR HILL Global 어학원의 교육 철학과 핵심 가치를 소개합니다. 미션, 비전, 핵심 가치를 확인하세요.",
    url: "https://www.cedarhgp.org/about/vision-values",
    type: "website",
  },
};

type ValueCardProps = {
  title: string;
  desc: string;
};

function ValueCard({ title, desc }: ValueCardProps) {
  return (
    <div className="rounded-2xl border-2 bg-white p-5 sm:p-6 shadow-sm" style={{ borderColor: "var(--brand-burgundy)" }}>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-700">{desc}</p>
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
      title: "성실한 학습과 기초 역량 (Engaged Learning)",
      desc: "정해진 커리큘럼과 수업 운영 기준을 바탕으로 기초 학습 습관과 사고력을 균형 있게 다룹니다.",
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
      desc: "영어를 주요 교수언어로 활용하는 수업 속에서 자신감 있는 의사 표현과 경청 태도를 기르도록 지도합니다.",
    },
  ];

  return (
    <>
      <SubHero title="비전과 가치" breadcrumb="HOME > 소개 > 비전과 가치" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 space-y-8 sm:space-y-12">
        {/* 미션 */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-3 sm:mb-4">미션</h2>
          <div className="mt-3 sm:mt-4 rounded-2xl border bg-white p-4 sm:p-6 shadow-sm">
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
              Our mission is to cultivate each student's potential through meaningful learning experiences that integrate rigorous habits of learning, character education, and global awareness. We strive to guide students to become confident, compassionate, and responsible participants in their communities and the world.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
              저희의 미션은 성실한 학습 태도, 인성 교육, 글로벌 인식을 통합하는 의미 있는 학습 경험을 통해 각 학생의 잠재력을 함양하는 것입니다. 우리는 학생들이 자신감 있고 배려하며 책임감 있게 성장하도록 돕습니다.
            </p>
          </div>
        </div>

        {/* 비전 */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-3 sm:mb-4">비전</h2>
          <div className="mt-3 sm:mt-4 rounded-2xl border bg-white p-4 sm:p-6 shadow-sm">
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
              Our vision represents our commitment to discovering each student's unique potential and nurturing it as a foundation for growth. By balancing focused learning with character development, we support well-rounded individuals to thrive in an interconnected world—with compassion, integrity, and thoughtful inquiry.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
              우리 비전은 각 학생의 고유한 잠재력을 발견하고 성장의 기반을 마련하는 데 대한 약속을 나타냅니다. 성실한 학습과 인성 발달의 균형을 통해 서로 연결된 세상에서 균형 잡힌 사람으로 성장하도록 돕습니다.
            </p>
          </div>
        </div>

        {/* 핵심 가치 카드 */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-3 sm:mb-4">핵심 가치</h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-500 leading-relaxed">
            교육 운영 전반에서 아래 가치를 기준으로 학습 경험을 설계합니다.
          </p>

          <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <ValueCard key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
