"use client";

import { useState, useEffect } from "react";

interface PopupModalProps {
  imageSrc: string;
  alt: string;
  storageKey?: string;
}

export default function PopupModal({ 
  imageSrc, 
  alt, 
  storageKey = "popup-closed" 
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
        className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이미지 */}
        <div className="relative w-full h-auto">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
