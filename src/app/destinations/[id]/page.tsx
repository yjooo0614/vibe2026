import { accommodations } from "@/lib/accommodations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import Link from "next/link";
import { notFound } from "next/navigation";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "fill-gray-900" : "fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const amenityIcons: Record<string, string> = {
  "고속 와이파이": "📶",
  "기가 와이파이": "📶",
  "와이파이": "📶",
  "에어컨/난방": "❄️",
  "에어컨": "❄️",
  "에어컨/온돌": "🔥",
  "온돌 난방": "🔥",
  "풀옵션 주방": "🍳",
  "주방": "🍳",
  "세탁기": "🧺",
  "무료 주차": "🚗",
  "넷플릭스": "📺",
  "프라이빗 풀": "🏊",
  "BBQ 시설": "🍖",
  "BBQ 가능": "🍖",
  "바베큐 시설": "🍖",
  "오션뷰 발코니": "🌊",
  "오션뷰 루프탑": "🌊",
  "오션뷰 테라스": "🌊",
  "루프탑 테라스": "🏙️",
  "독립 정원": "🌿",
  "자전거 대여": "🚲",
  "자전거 2대": "🚲",
  "자전거 4대": "🚲",
  "넓은 마당": "🌱",
  "트레킹 가이드 제공": "🥾",
  "전통 조식 포함": "🍱",
  "다도 체험": "🍵",
  "한복 대여": "👘",
  "감귤 농장 체험": "🍊",
  "감귤 무제한 제공": "🍊",
  "스노클링 장비": "🤿",
  "낚시 체험 포함": "🎣",
  "역사 투어 가이드 제공": "🗺️",
  "프로젝터": "📽️",
  "화이트보드": "📋",
};

export default function AccommodationDetailPage({ params }: { params: { id: string } }) {
  const acc = accommodations.find((a) => a.id === params.id);
  if (!acc) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-gray-700 transition-colors">홈</Link>
          <span>/</span>
          <Link href="/destinations" className="hover:text-gray-700 transition-colors">숙소 찾기</Link>
          <span>/</span>
          <span className="text-gray-700">{acc.name}</span>
        </nav>

        {/* Title Block */}
        <h1 className="text-3xl font-black text-gray-900 mb-3">{acc.name}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-current text-gray-900" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-gray-900">{acc.rating}</span>
            <span className="underline underline-offset-2 cursor-pointer hover:text-gray-900">
              {acc.reviewCount}개 리뷰
            </span>
          </div>
          {acc.host.isSuperhost && (
            <>
              <span>·</span>
              <span className="font-semibold text-gray-900">슈퍼호스트</span>
            </>
          )}
          <span>·</span>
          <span className="underline underline-offset-2 cursor-pointer hover:text-gray-900">{acc.location}</span>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[420px] mb-10">
          <div className={`col-span-2 row-span-2 bg-gradient-to-br ${acc.gradient} flex items-center justify-center`}>
            <span className="text-[9rem] select-none">{acc.emoji}</span>
          </div>
          <div className={`bg-gradient-to-br ${acc.subGradient} flex items-center justify-center`}>
            <span className="text-5xl select-none">{acc.secondaryEmoji}</span>
          </div>
          <div className={`bg-gradient-to-br ${acc.gradient} opacity-80 flex items-center justify-center`}>
            <span className="text-5xl select-none">{acc.emoji}</span>
          </div>
          <div className={`bg-gradient-to-br ${acc.subGradient} opacity-70 flex items-center justify-center`}>
            <span className="text-5xl select-none">🌟</span>
          </div>
          <div className={`relative bg-gradient-to-br ${acc.gradient} opacity-60 flex items-center justify-center`}>
            <span className="text-5xl select-none">✨</span>
            <button className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow hover:bg-gray-100 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              사진 모두 보기
            </button>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host + Property Summary */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {acc.host.name} 님이 호스팅하는 {acc.type}
                  </h2>
                  <p className="text-gray-500 mt-1">
                    최대 {acc.maxGuests}명 · 침실 {acc.beds}개 · 욕실 {acc.baths}개
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#148F77] flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                  👤
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {acc.host.isSuperhost && (
                  <span className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-2 rounded-xl text-sm font-semibold border border-orange-100">
                    🏆 슈퍼호스트
                  </span>
                )}
                <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-sm border border-blue-100">
                  💬 응답률 {acc.host.responseRate}%
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-2 rounded-xl text-sm border border-gray-100">
                  📅 {acc.host.joinYear}년부터 호스팅
                </span>
              </div>
            </div>

            {/* Work-Friendly Badge */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">💻</span>
                <div>
                  <h3 className="font-bold text-gray-900">워케이션 최적화 공간</h3>
                  <p className="text-sm text-gray-500 mt-0.5">업무 환경이 검증된 숙소입니다</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-12">
                {acc.workFriendly.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">숙소 소개</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{acc.description}</p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5">편의시설</h3>
              <div className="grid grid-cols-2 gap-3">
                {acc.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-xl w-7 flex-shrink-0">{amenityIcons[item] ?? "✓"}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xl font-bold text-gray-900">{acc.rating}</span>
                <span className="text-gray-500 text-sm">· 리뷰 {acc.reviewCount}개</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {acc.reviews.map((review, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#148F77] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {review.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{review.author}</div>
                        <div className="text-xs text-gray-400">{review.date}</div>
                      </div>
                    </div>
                    <StarRow rating={review.rating} />
                    <p className="text-sm text-gray-600 leading-relaxed">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget acc={acc} />
          </div>
        </div>

        {/* Similar Accommodations */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">비슷한 숙소</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {accommodations
              .filter((a) => a.id !== acc.id && a.category === acc.category)
              .slice(0, 4)
              .map((similar) => (
                <Link key={similar.id} href={`/destinations/${similar.id}`} className="group block">
                  <div className={`h-40 rounded-xl bg-gradient-to-br ${similar.gradient} flex items-center justify-center mb-2 overflow-hidden`}>
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">
                      {similar.emoji}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{similar.name}</h4>
                  <p className="text-xs text-gray-400">{similar.location}</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    ₩{similar.price.toLocaleString()} <span className="font-normal text-gray-500 text-xs">/ 박</span>
                  </p>
                </Link>
              ))}
          </div>
          {accommodations.filter((a) => a.id !== acc.id && a.category === acc.category).length === 0 && (
            <Link href="/destinations" className="inline-flex items-center gap-2 text-sm text-[#1B4F72] hover:underline">
              ← 모든 숙소 보기
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
