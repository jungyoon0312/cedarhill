import SubHero from "../components/SubHero";

const stats = [
  { value: "60", unit: "분", label: "매일 구조화된 수업" },
  { value: "2", unit: "개", label: "맞춤 배치 프로그램" },
  { value: "4", unit: "가지", label: "핵심 영어 스킬" },
  { value: "1", unit: "시간", label: "완전한 학습 루틴" },
];

const dailyRoutine = [
  {
    name: "SARAM",
    time: "10분",
    title: "태도의 집중",
    desc: "행동 · 태도 먼저, 배움의 준비. 수업 시작 전 마음을 여는 시간입니다.",
  },
  {
    name: "CORE",
    time: "45분",
    title: "구조화된 집중 수업",
    desc: "Jolly Phonics · Our World 기반의 집중 수업으로 구조화된 몰입 학습을 진행합니다.",
  },
  {
    name: "CAPTURE",
    time: "5분",
    title: "기록 · 피드백",
    desc: "리포트 작성 후 부모님께 당일 전달하여 학습 과정을 함께 확인합니다.",
  },
];

const cedarHillApproach = [
  "소리 → 해독 → 읽기 순서로 기초를 쌓습니다",
  "Jolly Phonics 3단계 체계적 커리큘럼",
  "Our World 6레벨 종합 프로그램",
  "EHRI 기반 진단 배치로 맞춤 수준 설정",
  "매일 60분 구조화된 수업",
  "당일 부모 리포트 제공",
];

const traditionalApproach = [
  "단어만 암기하기",
  "패턴 반복 훈련",
  "두꺼운 교재만 진도 나가기",
  "숙제 양으로 실력 착각하기",
  "발음 교정 없음",
  "읽기 전 말하기 강요",
];

export default function ProgramsPage() {
  return (
    <>
      <SubHero title="프로그램" breadcrumb="HOME > 프로그램" />

      <section className="page-section bg-white">
        <div className="page-stack">
          {/* 소개 */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>
                AI 시대, 영어의 기초를 다시 봐야 합니다
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed">
                CEDAR HILL Global 어학원은 외우는 영어가 아닌, 이해하고 읽고 쓰고 말하는 영어를
                목표로 합니다. 처음 60분을 어떻게 쌓느냐가 이후 학습 속도를 결정합니다.
              </p>
            </div>
            <div
              className="rounded-2xl border-2 p-5 sm:p-6 md:p-8"
              style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}
            >
              <p className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>
                외우는 영어는 끝났습니다.
              </p>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                이해하는 영어, 읽는 영어, 쓰는 영어, 말하는 영어.
                <br />
                단어장도, 숙제 폭탄도 없이 매일 60분으로 영어의 기초를 쌓습니다.
              </p>
            </div>
          </div>

          {/* 핵심 수치 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border-2 bg-white p-4 sm:p-6 text-center shadow-sm"
                style={{ borderColor: "var(--brand-navy)" }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--brand-navy)" }}>
                  {item.value}
                  <span className="text-base sm:text-lg md:text-xl font-semibold ml-1">{item.unit}</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          {/* 두 가지 프로그램 */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3" style={{ color: "var(--brand-navy)" }}>
              두 가지 프로그램, 한 가지 원칙
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mb-5 sm:mb-6 leading-relaxed">
              학생의 영어 수준과 목표에 따라 두 개의 문 중 하나로 맞춤 배치합니다.
            </p>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border-2 bg-white p-5 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
                <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
                <p className="text-xs sm:text-sm font-semibold tracking-wide mb-2" style={{ color: "var(--brand-burgundy)" }}>
                  PHONICS CORE
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>
                  영어를 처음 여는 아이를 위한 길
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 mb-4 leading-relaxed">
                  Jolly Phonics · 42 Sounds · Blending · Tricky Words
                </p>
                <div className="rounded-lg p-4" style={{ background: "var(--brand-slate)" }}>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-1">레벨 진행</p>
                  <p className="text-sm sm:text-base font-medium" style={{ color: "var(--brand-navy)" }}>
                    Pre-A1 → A1
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-1" style={{ color: "var(--brand-navy)" }}>
                    EHRI Pre → Full Alphabetic
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 bg-white p-5 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
                <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-navy)" }} />
                <p className="text-xs sm:text-sm font-semibold tracking-wide mb-2" style={{ color: "var(--brand-navy)" }}>
                  ENGLISH CORE
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>
                  유창함을 향해 달리는 아이를 위한 길
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 mb-4 leading-relaxed">
                  Our World · Vocabulary · Grammar · Speaking · Writing
                </p>
                <div className="rounded-lg p-4" style={{ background: "var(--brand-slate)" }}>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-1">레벨 진행</p>
                  <p className="text-sm sm:text-base font-medium" style={{ color: "var(--brand-navy)" }}>
                    Pre-A1 → B1
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-1" style={{ color: "var(--brand-navy)" }}>
                    EHRI Full → Automatic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 매일 60분 루틴 */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3" style={{ color: "var(--brand-navy)" }}>
              매일 이 구조가 반복됩니다
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mb-5 sm:mb-6 leading-relaxed">
              매일 60분, 빠짐없이, 꽉 채운 수업. 이게 전부입니다.
            </p>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {dailyRoutine.map((step) => (
                <div
                  key={step.name}
                  className="rounded-2xl border-2 bg-white p-5 sm:p-6 shadow-sm"
                  style={{ borderColor: "var(--brand-navy)" }}
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-sm sm:text-base font-bold tracking-wide" style={{ color: "var(--brand-burgundy)" }}>
                      {step.name}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-500">{step.time}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CEDAR HILL vs 기존 방식 */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3" style={{ color: "var(--brand-navy)" }}>
              CEDAR HILL 방식
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mb-5 sm:mb-6 leading-relaxed">
              숙제 양으로 영어 실력이 느는 시대는 이미 끝났습니다.
              구조화된 60분으로 기초를 쌓습니다.
            </p>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border-2 p-5 sm:p-6 md:p-8" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
                <h3 className="text-sm sm:text-base font-semibold mb-4 text-zinc-500">기존 방식</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 list-disc pl-4 sm:pl-5 leading-relaxed">
                  {traditionalApproach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 bg-white p-5 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
                <h3 className="text-sm sm:text-base font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>
                  CEDAR HILL 방식
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 list-disc pl-4 sm:pl-5 leading-relaxed">
                  {cedarHillApproach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 마무리 CTA */}
          <div
            className="rounded-2xl border-2 p-6 sm:p-8 md:p-10 text-center"
            style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>
              두 개의 문 · 하나의 방법 · 매일 60분
            </p>
            <p className="text-sm sm:text-base text-zinc-600 mb-6 leading-relaxed">
              Two Programs. One Method. Built to Last.
              <br />
              처음 60분이 평생의 속도를 만듭니다.
            </p>
            <a
              href="tel:032-875-8733"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-burgundy)" }}
            >
              📞 입학 상담 신청하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
