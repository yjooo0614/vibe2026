"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { accommodations, type Accommodation } from "@/lib/accommodations";

const categories = [
  { id: "all", label: "전체", icon: "🏠" },
  { id: "바다", label: "바다뷰", icon: "🌊" },
  { id: "산", label: "산·숲", icon: "🏔️" },
  { id: "섬", label: "섬·힐링", icon: "🌺" },
  { id: "역사", label: "역사·문화", icon: "🏯" },
  { id: "풀빌라", label: "풀빌라", icon: "🏊" },
];

function HeartButton({ liked, onToggle }: { liked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggle(); }}
      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur hover:scale-125 transition-transform"
      aria-label="찜하기"
    >
      <svg
        viewBox="0 0 24 24"
        className={`w-5 h-5 transition-colors ${liked ? "fill-red-500 stroke-red-500" : "fill-none stroke-white"}`}
        strokeWidth={2}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function AccommodationCard({ acc }: { acc: Accommodation }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/destinations/${acc.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl mb-3">
        <div className={`h-64 bg-gradient-to-br ${acc.gradient} flex items-center justify-center`}>
          <span className="text-8xl group-hover:scale-110 transition-transform duration-300 select-none">
            {acc.emoji}
          </span>
        </div>
        <HeartButton liked={liked} onToggle={() => setLiked(!liked)} />
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {acc.tag}
        </span>
        {acc.host.isSuperhost && (
          <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            슈퍼호스트
          </span>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-gray-900 text-sm truncate">{acc.name}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 text-gray-900">
            <StarIcon />
            <span className="text-sm font-semibold">{acc.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-0.5">{acc.location}</p>
        <p className="text-gray-400 text-xs">최대 {acc.maxGuests}명 · 침실 {acc.beds}개 · 욕실 {acc.baths}개</p>
        <div className="mt-1.5">
          <span className="text-sm font-bold text-gray-900">₩{acc.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500"> / 박</span>
        </div>
      </div>
    </Link>
  );
}

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("추천순");

  const filtered = useMemo(() => {
    let result = accommodations;
    if (selectedCategory !== "all") {
      result = result.filter((a) => a.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.region.toLowerCase().includes(q) ||
          a.tag.toLowerCase().includes(q)
      );
    }
    if (sortBy === "낮은가격순") return [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "높은가격순") return [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "평점순") return [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "리뷰많은순") return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Sticky Search + Filter Bar */}
      <div className="pt-16 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Row */}
          <div className="flex items-center gap-3 py-3">
            <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow bg-white">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="어디로 떠나고 싶으세요? (부산, 제주, 강릉...)"
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent min-w-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              )}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 outline-none cursor-pointer bg-white hover:border-gray-400 transition-colors flex-shrink-0"
            >
              <option>추천순</option>
              <option>낮은가격순</option>
              <option>높은가격순</option>
              <option>평점순</option>
              <option>리뷰많은순</option>
            </select>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-8 overflow-x-auto pb-3 pt-1" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center gap-1 flex-shrink-0 pb-1.5 border-b-2 transition-all ${
                  selectedCategory === cat.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-medium whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Listings */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">
            숙소{" "}
            <span className="font-semibold text-gray-900">{filtered.length}개</span>
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filtered.map((acc) => (
                <AccommodationCard key={acc.id} acc={acc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-xl font-semibold text-gray-700 mb-2">검색 결과가 없어요</p>
              <p className="text-gray-400">다른 검색어나 카테고리를 시도해보세요</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
