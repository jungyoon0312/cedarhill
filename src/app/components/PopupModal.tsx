"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PopupModalProps {
  imageSrc: string;
  alt: string;
  storageKey?: string;
  applicationUrl?: string;
  applicationButtonText?: string;
}

export default function PopupModal({ 
  imageSrc, 
  alt, 
  storageKey = "popup-closed",
  applicationUrl,
  applicationButtonText = "신청하기"
}: PopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 팝업 닫힘 상태 확인
    const isClosed = localStorage.getItem(storageKey);
    if (!isClosed) {
      // 페이지 로드 후 약간의 딜레이를 두고 팝업 표시
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [storageKey]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCloseToday = () => {
    setIsOpen(false);
    // 오늘 날짜를 키로 저장
    const today = new Date().toDateString();
    localStorage.setItem(storageKey, today);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={handleClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="팝업 닫기"
        >
          <span className="text-2xl text-gray-700">×</span>
        </button>

        {/* 이미지 - 스크롤 가능하여 QR코드까지 전체 표시 */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          <Image
            src={imageSrc}
            alt={alt}
            width={1200}
            height={1600}
            quality={85}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto object-contain"
            priority={false}
            unoptimized={false}
          />
        </div>

        {/* 하단 버튼 - 고정 영역, 이미지 밖에 배치하여 글자 가리지 않음 */}
        <div className="flex-shrink-0 flex flex-row justify-between items-center gap-4 p-4 bg-white border-t" style={{ borderColor: "var(--brand-slate)" }}>
          <button
            onClick={handleCloseToday}
            className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white rounded-lg shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            style={{ backgroundColor: "var(--brand-navy)" }}
          >
            오늘 하루 보지 않기
          </button>
          {applicationUrl && (
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap"
              style={{ backgroundColor: "var(--brand-burgundy)" }}
            >
              {applicationButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
