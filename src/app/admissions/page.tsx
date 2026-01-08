import type { Metadata } from "next";
import SubHero from "../components/SubHero";

export const metadata: Metadata = {
  title: "입학 | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep 입학 안내. 일과표, 입학 상담 정보를 확인하세요. 2026년 3월 개강 예정.",
};

type ScheduleRow = {
  time: string;
  activity: string;
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

        {/* 입학 절차 */}
        <div className="space-y-6">
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>Admission Process</h2>
          <p className="text-base text-zinc-600">
            입학 절차는 다음과 같이 진행됩니다.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Inquiry & Information Session",
                desc: "문의 및 정보 세션",
              },
              {
                step: "2",
                title: "Application & Teacher Recommendation",
                desc: "지원서 및 교사 추천서",
              },
              {
                step: "3",
                title: "Student Assessment",
                desc: "학생 평가 (준비도 평가)",
              },
              {
                step: "4",
                title: "Parent Interview",
                desc: "학부모 면담",
              },
              {
                step: "5",
                title: "Review & Admissions Decision",
                desc: "검토 및 입학 결정",
              },
              {
                step: "6",
                title: "Enrollment & Registration",
                desc: "등록 및 접수",
              },
            ].map((process) => (
              <div
                key={process.step}
                className="rounded-2xl border-2 bg-white p-6 shadow-sm transition hover:shadow-md"
                style={{ borderColor: "var(--brand-navy)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                    style={{ background: "var(--brand-navy)" }}
                  >
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--brand-navy)" }}>
                    {process.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-600">{process.desc}</p>
              </div>
            ))}
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
      </section>
    </>
  );
}
