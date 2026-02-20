import type { Metadata } from "next";
import SubHero from "../../components/SubHero";
import AboutTabs from "../AboutTabs";

export const metadata: Metadata = {
  title: "인사말 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 원장 인사말과 기관의 교육 방향을 확인하세요. 글로벌 기준의 유아 교육 프로그램을 운영하며, 학생의 잠재력과 균형 잡힌 성장을 지원합니다.",
  openGraph: {
    title: "인사말 | CEDAR HILL Global Prep",
    description: "CEDAR HILL Global Prep 원장 인사말과 기관의 교육 방향을 확인하세요.",
    url: "https://www.cedarhgp.org/about/greeting",
    type: "website",
  },
};

export default function GreetingPage() {
  return (
    <>
      <SubHero title="인사말" breadcrumb="HOME > 소개 > 인사말" />
      <AboutTabs currentPath="/about/greeting" />

      <section className="mx-auto max-w-6xl px-4 py-16 space-y-6">
        <div 
          className="rounded-2xl border-2 p-8 shadow-md space-y-4"
          style={{ 
            borderColor: "var(--brand-burgundy)",
            background: "linear-gradient(to bottom, rgba(128, 0, 32, 0.05), rgba(255, 255, 255, 0.95))"
          }}
        >
          <div 
            className="h-1 w-16 rounded-full"
            style={{ background: "var(--brand-burgundy)" }}
          />
          <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
            안녕하십니까. <strong>CEDAR HILL Global Prep</strong>에 방문해 주셔서
            감사합니다.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            본 기관은 유아기의 핵심 성장 시기에 필요한 교육 경험을 체계적으로
            제공하며, 학생 개개인의 가능성을 존중합니다.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            학습의 즐거움과 성취 경험을 통해 자신감 있는 의사소통과 균형 잡힌
            성장을 돕겠습니다.
          </p>
        </div>

        <div className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          * 자세한 상담은 032-875-8733~4로 문의해 주세요.
        </div>
      </section>
    </>
  );
}
