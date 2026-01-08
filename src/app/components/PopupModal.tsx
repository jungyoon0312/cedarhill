"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type PopupModalProps = {
  images: string[];
  onClose: () => void;
};

export default function PopupModal({ images, onClose }: PopupModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // ESC 키로 닫기
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
          aria-label="닫기"
        >
          <span className="text-2xl text-zinc-700">×</span>
        </button>

        {/* 이미지 슬라이더 */}
        {images.length > 0 && (
          <div className="relative">
            <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
              <Image
                src={images[currentImageIndex]}
                alt={`팝업 이미지 ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* 이전/다음 버튼 (이미지가 2개 이상일 때만) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  aria-label="이전 이미지"
                >
                  <span className="text-xl text-zinc-700">‹</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  aria-label="다음 이미지"
                >
                  <span className="text-xl text-zinc-700">›</span>
                </button>

                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                      aria-label={`이미지 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* 하루동안 보지 않기 버튼 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button
            onClick={() => {
              const expires = new Date();
              expires.setDate(expires.getDate() + 1);
              document.cookie = `popupClosed=true; expires=${expires.toUTCString()}; path=/`;
              onClose();
            }}
            className="px-4 py-2 text-sm text-white bg-zinc-700 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            하루동안 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}

