"use client";

import { useState } from "react";
import SubHero from "../components/SubHero";

export default function CoCurricularActivitiesPage() {
  const [openSections, setOpenSections] = useState<{
    powerPlace: boolean;
    nadaunArt: boolean;
    futurum: boolean;
  }>({
    powerPlace: false,
    nadaunArt: false,
    futurum: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <SubHero title="Co-Curricular Activities" breadcrumb="HOME > Co-Curricular Activities" />

      <section className="page-section space-y-6 sm:space-y-8 bg-white">
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
          정규 수업 외 다양한 과외 활동을 통해 학생의 전인적 성장을 지원합니다.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 bg-white shadow-sm overflow-hidden" style={{ borderColor: "var(--brand-navy)" }}>
          <button
            onClick={() => toggleSection("powerPlace")}
            className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 hover:bg-zinc-50 transition-colors flex items-center justify-between gap-3"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-white inline-block" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>
              Cedar Hill Power Place
            </h3>
            <span className="text-zinc-500 text-sm shrink-0">
              {openSections.powerPlace ? "▼" : "▶"}
            </span>
          </button>
          
          {openSections.powerPlace && (
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-burgundy)" }}>
                  전인적 신체 발달을 위한 체육 프로그램
                </p>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
                  뉴스포츠, 놀이체육, 키즈성장 스포츠를 통한 전인적 신체 발달 프로그램입니다.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed">
                  연령별 발육 발달에 맞춘 체계적인 체육 교육을 통해 신체 능력뿐만 아니라 협동심, 리더십, 도전 정신을 기릅니다.
                </p>
              </div>

              {/* 3가지 주요 프로그램 */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>주요 프로그램</h4>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                  <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>뉴스포츠</h5>
                    <p className="text-xs sm:text-sm text-zinc-700">새로운 스포츠 활동을 통한 다양한 체험</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>놀이체육</h5>
                    <p className="text-xs sm:text-sm text-zinc-700">놀이 중심의 즐거운 체육 활동</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>키즈성장 스포츠</h5>
                    <p className="text-xs sm:text-sm text-zinc-700">연령별 발육 발달에 맞춘 특화된 교육</p>
                  </div>
                </div>
              </div>

              {/* 운동발달검사 */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>운동발달검사 (Motor Development Test)</h4>
                <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                  <p className="text-xs sm:text-sm text-zinc-700 mb-2">
                    우리 아이의 성장 발달 수준을 측정할 수 있는 전문검사 PST를 제공합니다.
                  </p>
                  <ul className="text-xs sm:text-sm text-zinc-700 space-y-1 list-disc pl-4 sm:pl-5 leading-relaxed">
                    <li>정기적인 발달 검사를 통한 개인별 성장 추적</li>
                    <li>검사 결과를 바탕으로 한 맞춤형 체육 프로그램 제공</li>
                    <li>학부모와의 정기적인 상담을 통한 발달 상황 공유</li>
                  </ul>
                </div>
              </div>

              {/* 체육 프로그램 상세 */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>체육 프로그램</h4>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>축구, 발레, 치어리딩</h5>
                    <ul className="text-xs sm:text-sm text-zinc-700 space-y-1 list-disc pl-4 sm:pl-5 leading-relaxed">
                      <li>'생각하는 힘' 판단력과 시야 확장</li>
                      <li>창의적인 놀이 중심</li>
                      <li>연령별 발육 발달에 맞춰 특화된 교육</li>
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Performance PE (퍼포먼스 체육)</h5>
                    <p className="text-xs sm:text-sm text-zinc-700">
                      매달 특별한 퍼포먼스 체육 활동을 진행합니다.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Snag Golf (스내그 골프)</h5>
                    <p className="text-xs sm:text-sm text-zinc-700">
                      골프를 익힐 수 있도록 도와주는 프로그램입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* NADAUN ART 아코디언 */}
        <div className="rounded-2xl border-2 bg-white shadow-sm overflow-hidden" style={{ borderColor: "var(--brand-navy)" }}>
          <button
            onClick={() => toggleSection("nadaunArt")}
            className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 hover:bg-zinc-50 transition-colors flex items-center justify-between gap-3"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-white inline-block" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>
              NADAUN ART
            </h3>
            <span className="text-zinc-500 text-sm shrink-0">
              {openSections.nadaunArt ? "▼" : "▶"}
            </span>
          </button>
          
          {openSections.nadaunArt && (
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-zinc-800 italic leading-relaxed">
                  "모든 아이는 이미 자기만의 세계를 그려 나간다"
                </p>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
                  NADAUN은 아이 안의 빛과 그릇이 나답게 자라도록 옆에 선다.
                </p>
              </div>

              {/* 교육과정 레벨 */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>Curriculum Level (교육과정)</h4>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Da Vinci</h5>
                    <p className="text-xs sm:text-sm text-zinc-600 mb-2">4-6세</p>
                    <p className="text-xs sm:text-sm text-zinc-700">기초표현+탐색+재료 경험</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Picasso</h5>
                    <p className="text-xs sm:text-sm text-zinc-600 mb-2">7-9세</p>
                    <p className="text-xs sm:text-sm text-zinc-700">개념이해+자신감+창의강화</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Gogh</h5>
                    <p className="text-xs sm:text-sm text-zinc-600 mb-2">10-11세</p>
                    <p className="text-xs sm:text-sm text-zinc-700">개성적 표현력 심화</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Dali</h5>
                    <p className="text-xs sm:text-sm text-zinc-600 mb-2">12-13세</p>
                    <p className="text-xs sm:text-sm text-zinc-700">융합 창작+비평 능력+작품완성</p>
                  </div>
                </div>
              </div>

              {/* 프로그램 구조 */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>프로그램 구조</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white text-xs sm:text-sm font-semibold" style={{ background: "var(--brand-burgundy)" }}>
                    정서, 창의 통합 예술 프로그램
                  </div>
                  <span className="text-zinc-400">→</span>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white text-xs sm:text-sm font-semibold" style={{ background: "var(--brand-burgundy)" }}>
                    프로젝트 기반 창작 수업
                  </div>
                  <span className="text-zinc-400">→</span>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white text-xs sm:text-sm font-semibold" style={{ background: "var(--brand-burgundy)" }}>
                    글로벌 교육 방향성과 연계
                  </div>
                  <span className="text-zinc-400">→</span>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white text-xs sm:text-sm font-semibold" style={{ background: "var(--brand-burgundy)" }}>
                    소그룹&1:1 맞춤형 심화 프로그램
                  </div>
                </div>
              </div>

              {/* Book Art */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>Book Art</h4>
                <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                  <p className="text-sm sm:text-base text-zinc-800 mb-2">
                    "우리 아이만의 영어책, 그 특별한 시작"
                  </p>
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Weekend Special</h5>
                    <p className="text-xs sm:text-sm text-zinc-700 mb-2">
                      영어 원서 읽고 나만의 스크랩북 완성
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600">
                      6-7세, 초등학생<br />
                      영어책 북아트 & 독후활동
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FUTURUM 아코디언 */}
        <div className="rounded-2xl border-2 bg-white shadow-sm overflow-hidden" style={{ borderColor: "var(--brand-navy)" }}>
          <button
            onClick={() => toggleSection("futurum")}
            className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 hover:bg-zinc-50 transition-colors flex items-center justify-between gap-3"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-white inline-block" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>
              FUTURUM STEAM · 창의융합 프로그램
            </h3>
            <span className="text-zinc-500 text-sm shrink-0">
              {openSections.futurum ? "▼" : "▶"}
            </span>
          </button>
          
          {openSections.futurum && (
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-burgundy)" }}>
                  Cedar Hill Global 어학원 X FUTURUM이 함께하는 수·과학 기반 창의 융합 교육센터
                </p>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
                  수·과학 기반의 탐구·창의 활동을 통해 문제 해결 과정을 경험하도록 돕는 협력 프로그램입니다.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed">
                  놀이·체험 중심 활동을 학령기 학습과 자연스럽게 연결할 수 있도록 구성하며, STEAM 활동을 통해 스스로 생각하고 협력하는 태도를 기를 수 있도록 지원합니다(연령·학년에 맞는 범위에서 운영).
                </p>
              </div>

              {/* Odyssey of the Mind */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>
                  Odyssey of the Mind 창의융합프로그램: Integrated Creative Thinking Program
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
                  STEAM 사고를 다루는 FUTURUM의 창의 융합 문제 해결 활동
                </p>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-navy)" }}>
                        01
                      </div>
                      <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>창의력 문제해결 활동</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      Odyssey of the Mind 등 해외에서 널리 알려진 창의력 교육 방식을 참고한 주제 기반 활동을 일부 모듈로 운영합니다.<br />
                      공식 지정·후원 관계 등 세부 사항은 주최 측 공지를 확인해 주세요.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-navy)" }}>
                        02
                      </div>
                      <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>주제 기반 프로젝트 미션</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      주제 기반 프로젝트 미션으로 사고력과 협업 역량 강화<br />
                      역할 분담과 공동 문제 해결을 통해 비판적 사고, 의사소통, 협업 능력을 기릅니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* FUTURUM Core Program */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>FUTURUM Core Program</h4>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>에반이즈 EVANIS</h5>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      스토리 기반 창의 수학 프로그램<br />
                      언어와 사고를 연결하는 프로그램
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>매시언스 (Mathience)</h5>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      수학과 과학을 융합하여 아이들의 사고의 폭을 넓히는 미래형 학습 프로그램
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>원리셈·수학실험실</h5>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      연령에 맞는 수 개념·원리를 이해하도록 돕는 활동<br />
                      십진법, 자릿값 등 기초 개념을 차근차근 다룹니다.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                    <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>마음아라 (Mind-Ara)</h5>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      그림책 이야기 코칭 프로그램<br />
                      나만의 그림책 만들기
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </section>
    </>
  );
}
