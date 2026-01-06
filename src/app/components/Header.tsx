"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <Link href="/about" className="hover:underline" onClick={onClick}>
        소개
      </Link>
      <Link href="/programs" className="hover:underline" onClick={onClick}>
        프로그램
      </Link>
      <Link href="/admissions" className="hover:underline" onClick={onClick}>
        입학
      </Link>
      <Link href="/community" className="hover:underline" onClick={onClick}>
        커뮤니티
      </Link>
      <Link href="/about/location" className="hover:underline" onClick={onClick}>
        오시는 길
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-20">
        {/* 로고만 */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/header-logo.png"
            alt="CEDAR HILL Global Prep"
            className="h-14 w-auto"
          />
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--brand-navy)" }}>
          <NavLinks />
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
          style={{ borderColor: "var(--brand-navy)", color: "var(--brand-navy)" }}
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <div className="md:hidden border-t bg-white" style={{ borderColor: "var(--brand-navy)" }}>
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4 text-sm" style={{ color: "var(--brand-navy)" }}>
            <NavLinks onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
