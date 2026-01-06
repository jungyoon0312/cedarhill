import type { Metadata } from "next";
import SubHero from "../../components/SubHero";
import AboutTabs from "../AboutTabs";

export const metadata: Metadata = {
  title: "문의 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 입학 및 프로그램 관련 문의. 전화: 032-875-8733~4. 상담을 통해 개별 안내를 제공합니다.",
};

export default function ContactPage() {
  return (
    <>
      <SubHero title="문의" breadcrumb="HOME > 소개 > 문의" />
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-6">
        <p className="text-zinc-700 leading-7">
          입학 및 프로그램 관련 문의는 아래 연락처로 상담해 주시기 바랍니다.
        </p>

        <div 
          className="rounded-2xl border-2 p-6 shadow-md"
          style={{ 
            borderColor: "var(--brand-burgundy)",
            background: "linear-gradient(to bottom, rgba(128, 0, 32, 0.05), rgba(255, 255, 255, 0.95))"
          }}
        >
          <div 
            className="h-1 w-16 rounded-full mb-4"
            style={{ background: "var(--brand-burgundy)" }}
          />
          <div className="text-sm text-zinc-600">입학 상담</div>
          <div className="mt-2 text-lg font-semibold">032-875-8733~4</div>

          <p className="mt-2 text-sm text-zinc-600">
            상담을 통해 과정/일정/세부 안내를 개별 제공해 드립니다.
          </p>
        </div>
      </section>
    </>
  );
}

