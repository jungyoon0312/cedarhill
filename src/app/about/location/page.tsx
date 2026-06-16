import type { Metadata } from "next";
import SubHero from "../../components/SubHero";
import AboutTabs from "../AboutTabs";

export const metadata: Metadata = {
  title: "오시는 길 | CEDAR HILL Global 어학원",
  description: "CEDAR HILL Global 어학원 위치 안내. 인천광역시 미추홀구 학익로 30, 450동 상가 1층 1-1. 지도와 교통 안내를 확인하세요.",
  openGraph: {
  title: "오시는 길 | CEDAR HILL Global 어학원",
  description: "CEDAR HILL Global 어학원 위치 안내. 인천광역시 미추홀구 학익로 30. 지도와 교통 안내를 확인하세요.",
    url: "https://www.cedarhgp.org/about/location",
    type: "website",
  },
};

export default function LocationPage() {
    return (
      <>
        <SubHero title="오시는 길" breadcrumb="HOME > 소개 > 오시는 길" />
        <AboutTabs currentPath="/about/location" />
      <section className="page-section space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:font-bold mb-3" style={{ color: "var(--brand-navy)" }}>오시는 길</h1>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            위치 및 교통 안내 페이지입니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div className="rounded-2xl border-2 overflow-hidden shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <iframe
            src="https://maps.google.com/maps?q=인천광역시+미추홀구+학익로+30&hl=ko&z=15&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CEDAR HILL Global 어학원 위치"
          />
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border-2 p-5 sm:p-6 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <h2 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>주소</h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              인천광역시 미추홀구 학익로 30, 450동 상가 1층 1-1
            </p>
          </div>

          <div className="rounded-2xl border-2 p-5 sm:p-6 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <h2 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>교통 안내</h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              자세한 교통 안내는 상담 시 안내해 드립니다.
            </p>
          </div>
        </div>
        </div>
      </section>
      </>
    );
  }
  