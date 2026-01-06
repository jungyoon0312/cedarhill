import type { Metadata } from "next";
import SubHero from "../components/SubHero";

export const metadata: Metadata = {
  title: "입학 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 입학 안내. 일과표, 수업료, 입학 상담 정보를 확인하세요. 2026년 3월 개강 예정.",
};

type ScheduleRow = {
  time: string;
  activity: string;
};

type TuitionRow = {
  item: string;
  amount: string;
  note?: string;
};

export default function AdmissionsPage() {
  const schedule: ScheduleRow[] = [
    { time: "08:30 ~ 09:30", activity: "Morning Care" },
    { time: "09:30 ~ 10:20", activity: "Morning Snack & Circle Time" },
    { time: "10:20 ~ 12:20", activity: "Regular Classes" },
    { time: "12:20 ~ 13:10", activity: "Lunch & Recess" },
    { time: "13:10 ~ 14:30", activity: "Regular Classes" },
    { time: "14:30 ~ 15:10", activity: "Co-Curricular Activities" },
    { time: "15:10 ~ 15:30", activity: "Afternoon Snack" },
    { time: "15:30 ~ 16:00", activity: "Home Time & Recess" },
    { time: "16:00 ~ 17:30", activity: "Day Care (Optional)" },
  ];

  const tuitionMain: TuitionRow[] = [
    { item: "Tuition (Regular Classes)", amount: "₩1,300,000" },
    { item: "Co-Curricular Activities", amount: "₩200,000" },
    { item: "Material Fee & Textbook", amount: "₩150,000" },
    { item: "Lunch & AM/PM Snacks", amount: "₩200,000" },
  ];

  const tuitionOptional: TuitionRow[] = [
    { item: "Day Care (Optional)", amount: "₩100,000" },
    { item: "Shuttle (Optional)", amount: "₩150,000" },
  ];

  return (
    <>
      <SubHero title="입학" breadcrumb="HOME > 입학" />

      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-28 space-y-16 bg-white">
        {/* 안내 요약 */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-zinc-800 text-lg leading-8">
            CEDAR HILL Global Prep의 입학은 사전 상담을 통해 진행되며,
            학생의 연령 및 발달 단계에 따라 적합한 과정이 안내됩니다.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="text-sm text-zinc-500">교육 시작</div>
              <div className="mt-3 font-semibold text-lg" style={{ color: "var(--brand-navy)" }}>2026년 3월</div>
            </div>
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="text-sm text-zinc-500">교육 장소</div>
              <div className="mt-3 font-semibold text-lg" style={{ color: "var(--brand-navy)" }}>학익동 시티오씨엘</div>
            </div>
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="text-sm text-zinc-500">입학 상담</div>
              <div className="mt-3 font-semibold text-lg" style={{ color: "var(--brand-navy)" }}>032-875-8733~4</div>
            </div>
          </div>
        </div>

        {/* 일과표 */}
        <div className="space-y-6">
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>Daily Schedule</h2>
          <p className="text-base text-zinc-600">
            일과표는 기관 운영에 따라 일부 조정될 수 있습니다.
          </p>

          <div className="overflow-hidden rounded-2xl border-2 bg-white shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead style={{ background: "var(--brand-navy)", color: "white" }}>
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Time</th>
                    <th className="px-4 py-3 text-left font-semibold">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.time} className="border-t">
                      <td className="px-4 py-3 whitespace-nowrap text-zinc-700">
                        {row.time}
                      </td>
                      <td className="px-4 py-3 text-zinc-800">{row.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 수업료 */}
        <div className="space-y-6">
          <h2 className="font-bold" style={{ color: "var(--brand-navy)" }}>Monthly Tuition</h2>
          <p className="text-base text-zinc-600">
            아래 금액은 월 기준 안내이며, 상세 조건은 상담 시 안내드립니다.
          </p>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* 기본 구성 */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <h3 className="font-semibold" style={{ color: "var(--brand-navy)" }}>기본 구성</h3>

              <div className="mt-4 overflow-hidden rounded-xl border-2" style={{ borderColor: "var(--brand-navy)" }}>
                <table className="w-full text-sm">
                  <thead style={{ background: "var(--brand-navy)", color: "white" }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">항목</th>
                      <th className="px-4 py-3 text-right font-semibold">금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionMain.map((t) => (
                      <tr key={t.item} className="border-t">
                        <td className="px-4 py-3 text-zinc-800">{t.item}</td>
                        <td className="px-4 py-3 text-right text-zinc-800">
                          {t.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t" style={{ background: "var(--brand-slate)" }}>
                      <td className="px-4 py-3 font-semibold" style={{ color: "var(--brand-navy)" }}>
                        Total
                      </td>
                      <td className="px-4 py-3 text-right font-semibold" style={{ color: "var(--brand-navy)" }}>
                        ₩1,850,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                * 항목 구성은 운영에 따라 변경될 수 있습니다.
              </p>
            </div>

            {/* 선택 항목 */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <h3 className="font-semibold" style={{ color: "var(--brand-navy)" }}>선택 항목</h3>

              <div className="mt-4 overflow-hidden rounded-xl border-2" style={{ borderColor: "var(--brand-navy)" }}>
                <table className="w-full text-sm">
                  <thead style={{ background: "var(--brand-navy)", color: "white" }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">항목</th>
                      <th className="px-4 py-3 text-right font-semibold">금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionOptional.map((t) => (
                      <tr key={t.item} className="border-t">
                        <td className="px-4 py-3 text-zinc-800">{t.item}</td>
                        <td className="px-4 py-3 text-right text-zinc-800">
                          {t.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                * 선택 항목은 희망자에 한해 적용됩니다.
              </p>
            </div>
          </div>

          {/* 문의 */}
          <div className="rounded-2xl border-2 p-6" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
            <div className="text-sm text-zinc-600">입학 상담</div>
            <div className="mt-2 text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>032-875-8733~4</div>
            <p className="mt-2 text-sm text-zinc-700">
              상담을 통해 과정/일정/세부 안내를 개별 제공해 드립니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
