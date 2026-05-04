"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#1B4F72]">Work</span>
            <span className="text-2xl font-black text-[#E67E22]">&</span>
            <span className="text-2xl font-black text-[#148F77]">Vacation</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-[#1B4F72] font-medium transition-colors">
              워케이션이란?
            </Link>
            <Link href="/destinations" className="text-gray-600 hover:text-[#1B4F72] font-medium transition-colors">
              숙소 찾기
            </Link>
            <Link href="/subsidy" className="text-gray-600 hover:text-[#1B4F72] font-medium transition-colors">
              지원금 안내
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-[#1B4F72] font-medium transition-colors flex items-center gap-1">
                파트너 등록
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/partner/company" className="block px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 hover:text-[#1B4F72] rounded-t-xl transition-colors">
                  기업 파트너
                </Link>
                <Link href="/partner/hotel" className="block px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 hover:text-[#1B4F72] rounded-b-xl transition-colors">
                  호텔·숙소 파트너
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/partner/company" className="px-4 py-2 text-[#1B4F72] border border-[#1B4F72] rounded-lg font-medium hover:bg-[#1B4F72] hover:text-white transition-all text-sm">
              로그인
            </Link>
            <Link href="/partner/company" className="px-4 py-2 bg-[#E67E22] text-white rounded-lg font-medium hover:bg-[#d35400] transition-all text-sm">
              무료 시작
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/about" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>워케이션이란?</Link>
          <Link href="/destinations" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>숙소 찾기</Link>
          <Link href="/subsidy" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>지원금 안내</Link>
          <Link href="/partner/company" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>기업 파트너 등록</Link>
          <Link href="/partner/hotel" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>호텔 파트너 등록</Link>
          <div className="flex gap-3 pt-2">
            <Link href="/partner/company" className="flex-1 text-center py-2 border border-[#1B4F72] text-[#1B4F72] rounded-lg font-medium text-sm" onClick={() => setMenuOpen(false)}>로그인</Link>
            <Link href="/partner/company" className="flex-1 text-center py-2 bg-[#E67E22] text-white rounded-lg font-medium text-sm" onClick={() => setMenuOpen(false)}>무료 시작</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
