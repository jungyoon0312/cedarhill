"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type CtaArea = {
  top: string;
  left: string;
  width: string;
  height: string;
};

interface PopupModalProps {
  imageSrc: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  storageKey?: string;
  applicationUrl?: string;
  ctaAriaLabel?: string;
  ctaArea?: CtaArea;
}

export default function PopupModal({
  imageSrc,
  alt,
  imageWidth,
  imageHeight,
  storageKey = "popup-closed",
  applicationUrl,
  ctaAriaLabel = "지금 바로 신청하기",
  ctaArea = { top: "79%", left: "12.5%", width: "75%", height: "7%" },
}: PopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isClosed = localStorage.getItem(storageKey);
    if (!isClosed) {
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, [storageKey]);

  const handleClose = () => setIsOpen(false);

  const handleCloseToday = () => {
    setIsOpen(false);
    localStorage.setItem(storageKey, new Date().toDateString());
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-2 sm:p-3"
      onClick={handleClose}
    >
      <div
        className="relative flex max-h-[94vh] w-[96vw] max-w-[520px] flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:scale-110 hover:bg-white"
          aria-label="팝업 닫기"
        >
          <span className="text-2xl text-gray-700">×</span>
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 pt-10">
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              quality={90}
              className="h-auto w-full"
              priority
            />
            {applicationUrl && (
              <a
                href={applicationUrl}
                className="absolute z-10 cursor-pointer rounded-sm transition-colors hover:bg-white/10"
                style={{
                  top: ctaArea.top,
                  left: ctaArea.left,
                  width: ctaArea.width,
                  height: ctaArea.height,
                }}
                aria-label={ctaAriaLabel}
              />
            )}
          </div>
        </div>

        <div
          className="flex-shrink-0 border-t p-3 sm:p-4"
          style={{ borderColor: "var(--brand-slate)" }}
        >
          <button
            onClick={handleCloseToday}
            className="w-full rounded-lg px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-[1.02] sm:text-sm"
            style={{ backgroundColor: "var(--brand-navy)" }}
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
