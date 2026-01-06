import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep을 소개합니다. 비전과 가치, 인사말, 문의 정보를 확인하세요.",
};

const cards = [
  {
    title: "비전과 가치",
    desc: "CEDAR HILL Global Prep의 교육 철학과 핵심 가치를 소개합니다.",
    href: "/about/vision-values",
  },
  {
    title: "인사말",
    desc: "원장 인사말과 기관의 교육 방향을 전합니다.",
    href: "/about/greeting",
  },

  {
    title: "문의",
    desc: "입학 및 프로그램 관련 상담을 안내합니다.",
    href: "/about/contact",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:py-28 bg-white">
      {/* 타이틀 */}
      <h1 className="font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>소개</h1>
      <p className="mt-4 text-lg text-zinc-700 max-w-3xl">
        CEDAR HILL Global Prep을 소개합니다.
      </p>

      {/* 카드 그리드 */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-2xl border-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            style={{ 
              borderColor: "var(--brand-navy)",
              background: "linear-gradient(to bottom, rgba(30, 58, 95, 0.03), rgba(255, 255, 255, 0.95))"
            }}
          >
            <div className="p-8">
              <h2 
                className="font-bold group-hover:underline"
                style={{ color: "var(--brand-navy)" }}
              >
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
