import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 위치 안내. 인천광역시 미추홀구 학익로 30. 지도와 교통 안내를 확인하세요.",
};

export default function LocationPage() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--brand-navy)" }}>오시는 길</h1>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            위치 및 교통 안내 페이지입니다.
          </p>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <iframe
            src="https://maps.google.com/maps?q=인천광역시+미추홀구+학익로+30&hl=ko&z=15&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CEDAR HILL Global Prep 위치"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 p-6 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>주소</h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              인천광역시 미추홀구 학익로 30
            </p>
          </div>

          <div className="rounded-2xl border-2 p-6 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>교통 안내</h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              자세한 교통 안내는 상담 시 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>
    );
  }
  