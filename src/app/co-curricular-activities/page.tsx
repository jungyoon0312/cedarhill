import type { Metadata } from "next";
import SubHero from "../components/SubHero";

export const metadata: Metadata = {
  title: "Co-Curricular Activities | CEDAR HILL Global Prep",
  description: "CEDAR HILL Global Prep의 Co-Curricular Activities를 소개합니다. Digital Wittiverse, Renzulli-AI Coding, Cedar Hill Power Place, NADAUN ART 등 다양한 과외 활동을 확인하세요.",
};

export default function CoCurricularActivitiesPage() {
  return (
    <>
      <SubHero title="Co-Curricular Activities" breadcrumb="HOME > Co-Curricular Activities" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-24 space-y-6 sm:space-y-8 bg-white">
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 mb-4 sm:mb-6 leading-relaxed">
            정규 수업 외 다양한 과외 활동을 통해 학생의 전인적 성장을 지원합니다.
          </p>
        </div>

        {/* Digital Wittiverse 상세 섹션 */}
        <div className="mb-6 sm:mb-8 rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>Digital Wittiverse</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-burgundy)" }}>SPARK ON</p>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-zinc-800 leading-relaxed">
              창의력과 사고력을 키우는 AI 메타버스 학습공간
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
              즐거운 학습과 디지털 체험을 통해<br />
              성장하는 아이들을 위한 교육 플랫폼
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed">
              위티버스는 미래 교육 변화를 예측하여, 메타버스 플랫폼 공간에서 일상과 삶, 발달과 놀이 등을 아우르는 총체적 경험을 제공하는 슈가레인 키즈 전용 메타버스 플랫폼입니다.
            </p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-600 italic leading-relaxed">
              놀이처럼 배우고, 도전하며 성장하고, 창의와 사고를 여는 창의융합 프로그램<br />
              미래를 살아갈 핵심 역량을 기르는 글로벌 키즈 러닝 랩
            </p>
          </div>

          {/* 4가지 핵심 교육 프로그램 */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>핵심 교육 프로그램</h4>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Creative Convergence Curriculum</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1 leading-relaxed">융합형 커리큘럼</p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">(한글, 수학, 영어, 창의, 예술 등)<br />주제를 다각도로 탐색하며 사고력 확장</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Play-based Active Learning</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1 leading-relaxed">'흥미 → 몰입 → 성취'로 이어지는</p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">자기주도 학습 환경 제공</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Digital & Analog Hybrid System</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1 leading-relaxed">디지털 & 아날로그 하이브리드 시스템</p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">AI, 인터랙티브 콘텐츠, 실물 조작 활동을 유기적으로 결합<br />단순 디지털 소비형 콘텐츠를 넘어선 '체험형 학습 환경' 제공</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>Project-based & Team Learning</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1 leading-relaxed">팀 기반 프로젝트 수행을 통해 협업,</p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">리더십, 의사소통 능력 함양<br />혼자가 아닌 '함께 자라는 경험'을 핵심 가치로 설정</p>
              </div>
            </div>
          </div>

          {/* 3가지 주요 특징 */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>주요 특징</h4>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Personalized Learning Data</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1">개인 학습 데이터</p>
                <p className="text-xs sm:text-sm text-zinc-700">학습 수행 이력과 활동별 성취를 개인 학습 리포터로 제공합니다.</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Self-Directed Learning</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1">자기주도 학습</p>
                <p className="text-xs sm:text-sm text-zinc-700">개인 태블릿 기반 디지털 학습 환경과 맞춤형 AI 튜터 기능으로 자기주도 학습 역량을 강화합니다.</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                <h5 className="text-sm sm:text-base font-semibold mb-2" style={{ color: "var(--brand-burgundy)" }}>Concept-Based Thinking</h5>
                <p className="text-xs sm:text-sm text-zinc-600 mb-1">개념 기반 사고 학습</p>
                <p className="text-xs sm:text-sm text-zinc-700">국제 학교 IB 기반의 개념 중심 학습 설계로 문제 해결력과 사고력이 향상됩니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Renzulli-AI Coding 상세 섹션 */}
        <div className="mb-6 sm:mb-8 rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>Renzulli-AI Coding</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-burgundy)" }}>AI Coding Experience Center & Specialized Education Center</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
              다양한 AI 코딩 프로그램을 자유롭게 체험하고 놀이처럼 배울 수 있는 'AI Coding Experience Center'와, 다양한 AI 코딩 프로그램을 소그룹 수업으로 코딩 전문 강사와 함께 배우는 'AI Coding Specialized Education Center'를 운영합니다.
            </p>
          </div>

          {/* AI Coding Experience Center */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>AI Coding Experience Center</h4>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-navy)" }}>
                    01
                  </div>
                  <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>체험 성장 중심 활동</h5>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700">
                  컴퓨팅 사고력의 핵심 요소인 문제 분해/분석, 추상화, 알고리즘 설계, 자동화를 균형 있게 다루는 활동을 제공합니다.
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-navy)" }}>
                    02
                  </div>
                  <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>자율 코딩 체험 활동</h5>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700">
                  고급 디지털 환경에서 상상을 현실로 만드는 자율 코딩 체험 활동을 제공합니다.
                </p>
              </div>
            </div>
          </div>

          {/* AI Coding Specialized Education Center */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>AI Coding Specialized Education Center</h4>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-burgundy)" }}>
                    01
                  </div>
                  <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>렌쥴리 기반 커리큘럼</h5>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700">
                  렌쥴리 부설 연구소의 교육 이론을 바탕으로 학교 교육과정과 연계하여 개발된 AI 코딩 교육 커리큘럼으로 운영됩니다.
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border-2" style={{ borderColor: "var(--brand-navy)", background: "white" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold text-sm sm:text-lg" style={{ background: "var(--brand-burgundy)" }}>
                    02
                  </div>
                  <h5 className="text-sm sm:text-base font-semibold" style={{ color: "var(--brand-navy)" }}>팀 프로젝트 활동</h5>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700">
                  팀 프로젝트 활동을 통해 생각하고, 소통하고, 함께 해결하는 힘을 키우는 교육을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cedar Hill Power Place 상세 섹션 */}
        <div className="mb-6 sm:mb-8 rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>Cedar Hill Power Place</h3>
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
              뉴스포츠, 놀이체육, 키즈성장 스포츠를 통한 전인적 신체 발달 프로그램입니다.
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
              <p className="text-xs sm:text-sm text-zinc-700">
                우리 아이의 성장 발달 수준을 측정할 수 있는 전문검사 PST를 제공합니다.
              </p>
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

        {/* NADAUN ART 상세 섹션 */}
        <div className="mb-6 sm:mb-8 rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white" style={{ background: "var(--brand-navy)", color: "#ffffff" }}>NADAUN ART</h3>
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
                국제학교 방향성과 연계
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
      </section>
    </>
  );
}

