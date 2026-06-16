import type { Metadata } from "next";
import SubHero from "../components/SubHero";

export const metadata: Metadata = {
  title: "교습비 안내 | CEDAR HILL Global 어학원",
  description:
    "씨더힐글로벌어학원(표시명: CEDAR HILL Global 어학원) 교습비 안내. 실용외국어 유아·초등 과정 수강료를 확인하세요.",
  openGraph: {
    title: "교습비 안내 | CEDAR HILL Global 어학원",
    description:
      "씨더힐글로벌어학원 교습비 안내. 실용외국어 유아·초등 과정 수강료를 확인하세요.",
    url: "https://www.cedarhgp.org/admissions",
    type: "website",
  },
};

type TuitionRow = {
  course: string;
  dailyMinutes: number;
  timesPerWeek: number;
  monthlyMinutes: number;
  tuition: number;
  other: number | null;
  total: number;
};

const tuitionRows: TuitionRow[] = [
  {
    course: "실용외국어 (유아 정규1)",
    dailyMinutes: 240,
    timesPerWeek: 5,
    monthlyMinutes: 5214,
    tuition: 1300000,
    other: null,
    total: 1300000,
  },
  {
    course: "실용외국어 (유아 정규2)",
    dailyMinutes: 40,
    timesPerWeek: 5,
    monthlyMinutes: 869,
    tuition: 200000,
    other: null,
    total: 200000,
  },
  {
    course: "실용외국어 (초등부1)",
    dailyMinutes: 90,
    timesPerWeek: 3,
    monthlyMinutes: 1173,
    tuition: 328000,
    other: null,
    total: 328000,
  },
  {
    course: "실용외국어 (초등부2)",
    dailyMinutes: 120,
    timesPerWeek: 2,
    monthlyMinutes: 1042,
    tuition: 290000,
    other: null,
    total: 290000,
  },
];

function formatWon(amount: number) {
  return `${amount.toLocaleString("ko-KR")}원`;
}

export default function AdmissionsPage() {
  return (
    <>
      <SubHero title="교습비 안내" breadcrumb="HOME > 교습비 안내" />

      <section className="page-section space-y-6 sm:space-y-8 bg-white">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 bg-white p-5 sm:p-8 shadow-sm space-y-3" style={{ borderColor: "var(--brand-navy)" }}>
            <h2 className="text-lg sm:text-xl font-semibold sm:font-bold" style={{ color: "var(--brand-navy)" }}>
              교습비 등 공개
            </h2>
            <dl className="grid gap-2 sm:gap-3 text-sm sm:text-base text-zinc-700">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-zinc-500 shrink-0 sm:w-28">학원명</dt>
                <dd>씨더힐글로벌어학원 (표시명: CEDAR HILL Global 어학원)</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-zinc-500 shrink-0 sm:w-28">등록번호</dt>
                <dd>인천광역시남부교육지원청 제3866호</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-zinc-500 shrink-0 sm:w-28">소재지</dt>
                <dd>인천광역시 미추홀구 학익로 30, 450동 상가 1층 1-1</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-zinc-500 shrink-0 sm:w-28">교습과목</dt>
                <dd>실용외국어</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border-2 p-5 sm:p-6 flex flex-col justify-center" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
            <div className="text-xs sm:text-sm text-zinc-600">문의</div>
            <div className="mt-2 text-base sm:text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>
              <a href="tel:032-875-8733" className="hover:underline">032-875-8733~4</a>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              과정별 상세 안내는 전화 상담을 통해 안내해 드립니다.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            아래는 교습비등 (변경)등록 신청서에 따른 1인당 1개월 기준 교습비입니다.
          </p>

          <div className="overflow-hidden rounded-2xl border-2 bg-white shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm min-w-[640px]">
                <thead style={{ background: "var(--brand-navy)", color: "white" }}>
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold">교습과목·과정</th>
                    <th className="px-3 sm:px-4 py-3 text-center font-semibold whitespace-nowrap">일일교습<br className="sm:hidden" />시간(분)</th>
                    <th className="px-3 sm:px-4 py-3 text-center font-semibold whitespace-nowrap">주 1회<br className="sm:hidden" />횟수</th>
                    <th className="px-3 sm:px-4 py-3 text-center font-semibold whitespace-nowrap">1인당 1개월<br className="sm:hidden" />총교습시간(분)</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-semibold whitespace-nowrap">교습비</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-semibold whitespace-nowrap">기타경비</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-semibold whitespace-nowrap">계</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionRows.map((row) => (
                    <tr key={row.course} className="border-t">
                      <td className="px-3 sm:px-4 py-3 sm:py-4 font-medium text-zinc-800">{row.course}</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-center text-zinc-700">{row.dailyMinutes.toLocaleString("ko-KR")}</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-center text-zinc-700">{row.timesPerWeek}</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-center text-zinc-700">{row.monthlyMinutes.toLocaleString("ko-KR")}</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-right text-zinc-800 whitespace-nowrap">{formatWon(row.tuition)}</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-right text-zinc-500">-</td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-right font-semibold whitespace-nowrap" style={{ color: "var(--brand-navy)" }}>
                        {formatWon(row.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
