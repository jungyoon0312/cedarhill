"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { noticePosts } from "./community/notices-data";
import PopupModal from "./components/PopupModal";

const programs = [
  {
    title: "Phonics Core",
    desc: "영어를 처음 여는 아이를 위한 Jolly Phonics 기반 프로그램",
    img: "/images/library1.jpg",
  },
  {
    title: "English Core",
    desc: "Our World 기반으로 유창함을 향해 나아가는 종합 영어 프로그램",
    img: "/images/english prep1.jpg",
  },
  {
    title: "매일 60분",
    desc: "SARAM · CORE · CAPTURE로 이어지는 구조화된 일일 학습 루틴",
    img: "/images/lounge1.jpg",
  },
];

export default function HomePage() {
  const images = [
    "/images/library1.jpg",
    "/images/OUTSIDE1.jpg",
    "/images/lounge1.jpg",
    "/images/meeting room.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      <PopupModal
        imageSrc="/images/summer_camp.png"
        alt="2026 CEDAR HILL SUMMER CAMP 안내"
        imageWidth={1632}
        imageHeight={2176}
        storageKey="summer-camp-popup-closed-v2"
        applicationUrl="tel:032-875-8733"
        applicationButtonText="지금 바로 신청하기"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={`CEDAR HILL Global 어학원 ${index === 0 ? "도서관" : index === 1 ? "건물 외관" : index === 2 ? "Play & Learn Hub" : "회의실"}`}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px] text-center text-white">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                color: "#ffffff",
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              CEDAR HILL
              <br />
              GLOBAL 어학원
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg max-w-2xl mb-8"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              인천 학익동에서 국제화 교육 방향의 교습 프로그램을 운영하며,
              <br />
              아이의 성장을 함께 설계합니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="tel:032-875-8733"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium sm:font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "var(--brand-burgundy)" }}
              >
                📞 입학 상담 신청하기
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium sm:font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/90 bg-white/10 backdrop-blur-sm"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </section>

      {/* 시설 소개 + 대표 프로그램 */}
      <section className="page-section" style={{ background: "var(--brand-slate)" }}>
        <div className="page-stack">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3"
                style={{ color: "var(--brand-navy)" }}
              >
                시설 소개
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-4">
                CEDAR HILL Global 어학원의 전체 시설을 영상으로 만나보세요.
              </p>
              <a
                href="/about/location"
                className="text-sm font-semibold hover:underline"
                style={{ color: "var(--brand-burgundy)" }}
              >
                오시는 길 안내 →
              </a>
            </div>
            <div
              className="rounded-2xl border-2 overflow-hidden shadow-lg"
              style={{ borderColor: "var(--brand-navy)" }}
            >
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
          </div>

          <div>
            <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2
                  className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3"
                  style={{ color: "var(--brand-navy)" }}
                >
                  대표 프로그램
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                  두 개의 문, 하나의 방법. 매일 60분으로 영어의 기초를 쌓습니다.
                </p>
              </div>
              <a
                href="/programs"
                className="text-xs sm:text-sm font-semibold hover:underline shrink-0"
                style={{ color: "var(--brand-burgundy)" }}
              >
                프로그램 전체 보기 →
              </a>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {programs.map((p) => (
                <Link
                  key={p.title}
                  href="/programs"
                  className="group overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderColor: "var(--brand-navy)" }}
                >
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={p.img}
                      alt={`${p.title} 프로그램 이미지`}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3
                      className="text-base sm:text-lg font-medium sm:font-semibold mb-2"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-700">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 */}
      <section className="page-section bg-white">
        <div className="mb-5 sm:mb-6 flex items-end justify-between gap-4">
          <div>
            <h2
              className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold mb-2 sm:mb-3"
              style={{ color: "var(--brand-navy)" }}
            >
              공지사항
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              최신 소식과 안내를 확인하세요.
            </p>
          </div>
          <a
            href="/community"
            className="text-xs sm:text-sm font-semibold hover:underline shrink-0"
            style={{ color: "var(--brand-burgundy)" }}
          >
            커뮤니티로 이동 →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {noticePosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/community/notices/${post.id}`}
              className="block min-w-0 rounded-2xl border-2 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md overflow-hidden"
              style={{ borderColor: "var(--brand-navy)" }}
            >
              <div className="text-xs sm:text-sm text-zinc-500 mb-2 sm:mb-3">{post.date}</div>
              <div
                className="text-sm sm:text-base font-medium sm:font-semibold line-clamp-2 break-words"
                style={{ color: "var(--brand-navy)" }}
              >
                {post.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
