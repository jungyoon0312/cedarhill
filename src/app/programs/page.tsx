"use client";

import { useState } from "react";
import type { Metadata } from "next";
import SubHero from "../components/SubHero";

// Note: metadata는 클라이언트 컴포넌트에서 사용할 수 없으므로 제거했습니다.

type ProgramCardProps = {
  title: string;
  bullets: string[];
};


function ProgramCard({ title, bullets }: ProgramCardProps) {
  return (
    <div className="rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
      <div className="h-1 w-12 rounded-full mb-4 sm:mb-6" style={{ background: "var(--brand-burgundy)" }} />
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>{title}</h3>
      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-700">
        {bullets.map((b, idx) => (
          <li key={`${title}-${idx}`}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<"age" | "features">("age");

  const programBlocks: ProgramCardProps[] = [
    {
      title: "Pre-K 과정",
      bullets: [
        "유아 발달 단계에 맞춘 기초 학습 및 언어 활동 중심",
        "놀이 기반 학습을 통해 학습 흥미 및 습관 형성 지원",
        "영어 몰입 환경에서 자연스러운 언어 사용 경험 제공",
      ],
    },
    {
      title: "STEAM 기반 테마 학습",
      bullets: [
        "과학·기술·예술·수학을 융합한 주제 중심 수업 구성",
        "탐구·실험·표현 활동을 통해 사고력 및 창의성 강화",
        "문제 해결 과정을 경험하며 자기주도 학습 태도 형성",
      ],
    },
    {
      title: "통합형 활동(SEL/신체/정서)",
      bullets: [
        "사회정서학습(SEL)을 바탕으로 관계 형성과 자기조절 지원",
        "신체 활동을 포함한 균형 있는 일과 구성",
        "감각·정서 발달을 고려한 교실 활동 및 루틴 운영",
      ],
    },
    {
      title: "학습·성장 기록 및 가정 연계",
      bullets: [
        "학습 과정의 관찰·기록을 기반으로 학생별 성장 지원",
        "가정과의 정기 소통을 통해 교육 경험을 확장",
        "학생의 강점과 보완 영역을 균형 있게 관리",
      ],
    },
    {
      title: "학습 자료 및 운영(교재/도구)",
      bullets: [
        "수업 목적에 맞는 학습 자료를 체계적으로 활용",
        "연령별 수준에 맞춘 활동 구성으로 성취감 강화",
        "프로젝트형 활동을 통해 협업과 표현 역량 강화",
      ],
    },
    {
      title: "English Immersion(영어 몰입)",
      bullets: [
        "일상 소통부터 수업까지 영어 사용 환경 제공",
        "발화 기회를 충분히 제공하여 자신감 있는 표현 지원",
        "기초 언어 능력과 사고 언어의 자연스러운 연결",
      ],
    },
  ];

  return (
    <>
      <SubHero title="프로그램" breadcrumb="HOME > 프로그램" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-24 space-y-8 sm:space-y-12 md:space-y-16 bg-white">
        {/* 프로그램 소개 */}
        <div className="space-y-3 sm:space-y-5 max-w-3xl">
          <p className="text-zinc-800 text-sm sm:text-base md:text-lg leading-relaxed">
            CEDAR HILL Global Prep은 유아기의 핵심 발달 영역을 고려한
            통합형 커리큘럼을 기반으로 교육 프로그램을 운영합니다.
            모든 과정은 영어 몰입 환경에서 진행되며, 학생의 성장 단계에 맞춘
            학습 경험을 제공합니다.
          </p>
          <p className="text-zinc-700 text-xs sm:text-sm md:text-base leading-relaxed">
            본 페이지의 프로그램 구성은 기관 운영 방향에 따라 조정될 수 있으며,
            상세 사항은 상담을 통해 안내드립니다.
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b-2" style={{ borderColor: "var(--brand-navy)" }}>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab("age")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all ${
                activeTab === "age"
                  ? "text-white border-b-4"
                  : "text-zinc-600 hover:text-zinc-800"
              }`}
              style={
                activeTab === "age"
                  ? { backgroundColor: "var(--brand-navy)", borderBottomColor: "var(--brand-burgundy)" }
                  : {}
              }
            >
              연령별 프로그램
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all ${
                activeTab === "features"
                  ? "text-white border-b-4"
                  : "text-zinc-600 hover:text-zinc-800"
              }`}
              style={
                activeTab === "features"
                  ? { backgroundColor: "var(--brand-navy)", borderBottomColor: "var(--brand-burgundy)" }
                  : {}
              }
            >
              교육 특징
            </button>
          </div>
        </div>

        {/* 연령별 프로그램 탭 */}
        {activeTab === "age" && (
        <div className="space-y-8">
        <div>
          <h2 className="font-bold tracking-tight font-title" style={{ color: "var(--brand-navy)" }}>연령별 프로그램</h2>
          <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
            각 연령대에 맞춘 체계적인 교육 프로그램을 제공합니다.
          </p>

          <div className="space-y-8">
            {/* Pre-K Program */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Pre-K Program (만 3세/한국나이 5세)</h3>
              <p className="text-sm sm:text-base text-zinc-700 mb-4 leading-relaxed">
                <strong>Experience Early Learning Curriculum</strong>을 기반으로 한 테마 기반 커리큘럼입니다. 매달 새롭고 흥미로운 테마를 도입하여 아이들의 호기심을 자극하고 학습에 대한 흥미를 유지합니다. 각 월별 테마는 문해력, 수학, 과학, 사회, 창의 예술을 의미 있고 실제적인 경험을 통해 연결하도록 설계되었습니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 특징:</p>
                <ul className="text-sm text-zinc-700 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>월별 테마 기반 통합 학습 (Family & Pets, Down on the Farm, Community Helpers 등)</li>
                  <li>문해력, 수학, 과학, 사회, 창의 예술의 통합적 접근</li>
                  <li>감각 활동(Sensory) 및 블록 활동(Blocks)을 통한 체험 학습</li>
                  <li>미국 사립학교에서 널리 인정받고 구현되는 커리큘럼</li>
                </ul>
              </div>
            </div>

            {/* Junior Kinder */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Junior Kinder (만 4세/한국나이 6세)</h3>
              <p className="text-sm sm:text-base text-zinc-700 mb-4 leading-relaxed">
                Experience Early Learning을 기반으로 한 테마/STEAM 기반 커리큘럼으로, 언어와 문해력 발달에 중점을 둡니다. 미국 학년도 Senior Kindergarten 준비 단계로서 읽기, 쓰기, 구두 의사소통의 기초 기술을 구축합니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 학습 영역:</p>
                <ul className="text-sm text-zinc-700 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>Numbers & Figures: 수학 및 계산 기초</li>
                  <li>Theme/Science/Art/Social-Emotional: 테마 기반 통합 학습</li>
                  <li>Language Art: SPECTRUM Phonics K</li>
                  <li>Literacy: myView LITERACY K5</li>
                </ul>
              </div>
            </div>

            {/* Senior Kinder */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="h-1 w-12 rounded-full mb-4" style={{ background: "var(--brand-burgundy)" }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "var(--brand-navy)" }}>Senior Kinder (만 5세/한국나이 7세)</h3>
              <p className="text-sm sm:text-base text-zinc-700 mb-4 leading-relaxed">
                Advantages School International (ASI) 커리큘럼을 사용하여 제공되며, 미국 학년도 학생들과 동일한 학업 기준과 성취 기준을 충족하는 교육을 제공합니다. 이 단계에서는 핵심 학과목에 강한 초점을 두어 초등학교로의 성공적인 전환에 필요한 기초 지식과 기술을 개발합니다.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--brand-slate)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-navy)" }}>주요 과목:</p>
                <ul className="text-sm text-zinc-700 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>Language Art / Reading / Science: SPECTRUM Math, 다양한 수학 학습 도구</li>
                  <li>Science-Additional: Inspire Science Living Things</li>
                  <li>Social Study: IMPACT SOCIAL STUDIES Learning and Working Together</li>
                  <li>Additional Reading Program: Renaissance Raz-Kids</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 교육 특징 탭 */}
        {activeTab === "features" && (
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-title mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>교육 특징</h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            주요 교육 특징을 영역별로 정리하였습니다.
          </p>

          <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programBlocks.map((p) => (
              <ProgramCard key={p.title} title={p.title} bullets={p.bullets} />
            ))}
          </div>
        </div>
        )}

      </section>
    </>
  );
}
