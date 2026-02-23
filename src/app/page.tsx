"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { noticePosts } from "./community/notices-data";

export default function HomePage() {
  const images = [
    "/images/library1.jpg",
    "/images/OUTSIDE1.jpg",
    "/images/lounge1.jpg",
    "/images/RENZULI4.jpg",
    "/images/meeting room.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4초마다 변경

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={`CEDAR HILL Global Prep ${index === 0 ? '도서관' : index === 1 ? '건물 외관' : index === 2 ? 'Play & Learn Hub' : index === 3 ? 'RENZULI AI Coding Center' : '회의실'}`}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* 중앙 콘텐츠 영역 */}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] text-center text-white">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)"
              }}
            >
              CEDAR HILL
              <br />
              GLOBAL PREP
            </h1>
            <p 
              className="text-lg sm:text-xl text-white drop-shadow-lg max-w-2xl mb-8"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)"
              }}
            >
              인천 학익동의 글로벌 기준 유아 교육,
              <br />
              인천 영어유치원에서 아이의 성장을 함께 설계합니다
            </p>
            
            {/* CTA 버튼 그룹 */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="tel:032-875-8733"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "var(--brand-burgundy)" }}
              >
                📞 입학 상담 신청하기
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/90 bg-white/10 backdrop-blur-sm"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>

        {/* 슬라이더 인디케이터 */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </section>

      {/* 시설 소개 동영상 - 모바일에서 먼저 노출 */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-20 bg-white">
        <div className="mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4" style={{ color: "var(--brand-navy)" }}>시설 소개</h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            CEDAR HILL Global Prep의 전체 시설을 영상으로 만나보세요.
          </p>
        </div>
        <div className="rounded-2xl border-2 overflow-hidden shadow-lg" style={{ borderColor: "var(--brand-navy)" }}>
          <video
            src="/images/cedarhill.mp4"
            controls
            playsInline
            className="w-full aspect-video object-cover"
            poster="/images/library1.jpg"
          >
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
      </section>

      {/* 1) 핵심 강점 3카드 */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-28 bg-white">
        <div className="mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4" style={{ color: "var(--brand-navy)" }}>핵심 강점</h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            인천 영어유치원 CEDAR HILL Global Prep은 인천국제학교로서 글로벌 교육 기준에 맞춘 차별화된 교육 프로그램을 제공합니다.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {[
  {
    title: "Accredited Global Curriculum",
    desc: "미국 학력 인증기관 Cognia 인증을 기반으로, 전 세계에서 활용되는 ASI(Advantages School International) 정규 커리큘럼과 Pre-K 단계의 Experience Early Learning 교재를 운영합니다.",
    details: [
      "ASI Korea 인증 기관으로서 졸업장과 성적표는 전 세계 대학 및 고용주에게 인정받습니다",
      "국제 표준 교육 과정을 통한 글로벌 경쟁력 강화",
      "체계적인 학습 평가 및 성장 추적 시스템"
    ]
  },
  {
    title: "Cooperative Learning & Theme-Based STEAM",
    desc: "협동 학습을 통해 다양한 수준의 학생들이 동등하게 참여하며 사회적 기술과 학습 효과를 향상시킵니다.",
    details: [
      "STEAM 교육에 감각·정서·체육 활동을 융합한 테마 기반 수업",
      "놀이와 학습을 자연스럽게 연결하는 통합 교육",
      "프로젝트 기반 학습을 통한 실전 문제 해결 능력 향상"
    ]
  },
  {
    title: "100% English Immersion + Individualized Tracking",
    desc: "검증된 교사진과 100% 영어 몰입 환경에서 배움의 즐거움과 성취를 높입니다.",
    details: [
      "Brightwheel과 ClassDojo 기반의 체계적인 관리 시스템",
      "학생 개별 학습과 전반적 성장을 지속적으로 지원",
      "학부모와의 정기적인 소통을 통해 교육 경험 확장"
    ]
  },
].map((item) => (
  <div key={item.title} className="rounded-2xl border-2 bg-white p-4 sm:p-5 md:p-8 shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
    <div
      className="h-1 w-10 sm:w-12 rounded-full"
      style={{ background: "var(--brand-burgundy)" }}
    />
    <h3 className="mt-3 sm:mt-6 text-sm sm:text-lg font-semibold mb-1.5 sm:mb-3" style={{ color: "var(--brand-navy)" }}>{item.title}</h3>
    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-700 mb-0 sm:mb-3 line-clamp-3 sm:line-clamp-none">{item.desc}</p>
    {item.details && (
      <ul className="hidden md:block text-xs sm:text-sm text-zinc-600 space-y-1.5 list-disc pl-4 sm:pl-5 leading-relaxed mt-2 sm:mt-0">
        {item.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
))}

        
        </div>
      </section>

      {/* 2) 대표 프로그램 3카드 */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-28 bg-white">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>대표 프로그램</h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            인천 영어유치원에서 학생의 전인적 성장을 위한 다양한 교육 프로그램을 운영합니다.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            { title: "Early Literacy", desc: "읽기·말하기 기반의 언어 발달 프로그램", img: "/images/library1.jpg" },
            { title: "STEAM Activity", desc: "탐구·실험 중심의 창의 융합 활동", img: "/images/english prep1.jpg" },
            { title: "Social & Emotional", desc: "사회성·정서 발달을 돕는 활동", img: "/images/gym2.jpg" },
          ].map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="hidden sm:block aspect-[16/9] w-full relative">
                <Image 
                  src={p.img} 
                  alt={`${p.title} 프로그램 이미지`} 
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>{p.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700">{p.desc}</p>
                <a href="/programs" className="mt-5 inline-block text-sm font-semibold hover:underline"
                   style={{ color: "var(--brand-burgundy)" }}>
                  프로그램 보기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3) 공지사항 3개 */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-28 bg-white">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>공지사항</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              최신 소식과 안내를 확인하세요.
            </p>
          </div>
          <a href="/community" className="text-xs sm:text-sm font-semibold hover:underline"
             style={{ color: "var(--brand-burgundy)" }}>
            커뮤니티로 이동 →
          </a>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {noticePosts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/community/notices/${post.id}`} className="block rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md" style={{ borderColor: "var(--brand-navy)" }}>
              <div className="text-xs text-zinc-500 mb-2 sm:mb-3">{post.date}</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3" style={{ color: "var(--brand-navy)" }}>{post.title}</div>
              <div className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-700 whitespace-pre-line line-clamp-3">{post.content}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
