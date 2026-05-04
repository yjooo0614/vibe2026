import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HotelPartnerPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="gradient-hero pt-32 pb-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            호텔·숙소 파트너
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            평일 공실을<br />
            <span className="text-[#f39c12]">수익으로 바꾸세요</span>
          </h1>
          <p className="text-xl text-blue-200">
            워케이션 수요로 평일 공실률을 줄이고 안정적인 매출을 확보하세요.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: "📅", title: "평일 예약 증가", desc: "주말에만 집중되던 예약이 평일까지 분산되어 공실률이 크게 줄어듭니다.", stat: "평균 공실률 42% 감소" },
              { icon: "💼", title: "장기 체류 고객", desc: "2박 이상 장기 체류하는 워케이션 고객으로 안정적인 매출을 확보합니다.", stat: "평균 체류 4.2박" },
              { icon: "⭐", title: "브랜드 가치 향상", desc: "워케이션 공식 파트너 인증으로 숙소 브랜드 인지도와 신뢰도가 높아집니다.", stat: "리뷰 평점 0.4점 향상" },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-[#2C3E50] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-white rounded-xl p-3 text-center">
                  <span className="text-sm font-bold text-[#1B4F72]">{item.stat}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#2C3E50] mb-6">파트너 등록 조건</h2>
              <div className="space-y-4 mb-8">
                {[
                  "업무 가능한 Wi-Fi 환경 (100Mbps 이상 권장)",
                  "1인용 업무 공간 또는 책상 구비",
                  "숙소 내 회의 가능 공간 (선택)",
                  "조식 또는 식사 서비스 제공 가능",
                  "부산·강원·제주 등 워케이션 인기 지역",
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <span className="w-6 h-6 bg-[#148F77] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-black text-amber-800 mb-3 flex items-center gap-2">
                  <span>💡</span> 파트너 수수료 안내
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Work&Vacation 플랫폼 수수료는 예약 완료 금액의 <strong>8%</strong>입니다.
                  지원금이 적용된 경우 기업 결제 금액 기준으로 산정됩니다.
                  월 10건 이상 예약 시 <strong>수수료 5%</strong>로 할인됩니다.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#148F77] rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-black text-[#2C3E50] mb-2">호텔·숙소 파트너 등록</h3>
              <p className="text-gray-500 text-sm mb-6">등록 후 1~3 영업일 내 검토 완료</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">숙소명 *</label>
                  <input type="text" placeholder="해운대 오션뷰 호텔" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">대표자 이름 *</label>
                  <input type="text" placeholder="김사장" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">연락처 *</label>
                  <input type="tel" placeholder="010-1234-5678" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">이메일 *</label>
                  <input type="email" placeholder="hotel@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">지역 *</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all bg-white">
                    <option value="">선택해주세요</option>
                    <option>부산</option>
                    <option>강원도</option>
                    <option>제주도</option>
                    <option>전주</option>
                    <option>경주</option>
                    <option>여수</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">객실 수</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#148F77] focus:ring-2 focus:ring-[#148F77]/20 transition-all bg-white">
                    <option value="">선택해주세요</option>
                    <option>1~10실</option>
                    <option>11~30실</option>
                    <option>31~100실</option>
                    <option>100실 이상</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-[#148F77] text-white font-black text-lg rounded-xl hover:bg-[#0e7460] transition-all shadow-lg shadow-teal-200">
                  파트너 등록 신청 →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  등록 시 <Link href="#" className="underline">이용약관</Link> 및 <Link href="#" className="underline">개인정보처리방침</Link>에 동의합니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
