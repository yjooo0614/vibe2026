import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyPartnerPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="gradient-hero pt-32 pb-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            기업 파트너
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            직원 복지의 새로운 기준,<br />
            <span className="text-[#f39c12]">워케이션</span>
          </h1>
          <p className="text-xl text-blue-200">
            지원금 자동화로 부담 없이 시작하는 기업 복지 프로그램
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#2C3E50] mb-8">기업이 얻는 혜택</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "💼",
                    title: "우수 인재 유치 및 유지",
                    desc: "워케이션 복지는 MZ세대 직원들이 가장 원하는 복지 TOP 5 안에 드는 인기 혜택입니다.",
                  },
                  {
                    icon: "💰",
                    title: "지원금으로 비용 절감",
                    desc: "지자체 지원금으로 숙박비 최대 70%를 절감할 수 있습니다. 실질적인 복지 비용이 대폭 감소합니다.",
                  },
                  {
                    icon: "📋",
                    title: "복잡한 절차 없이 간편하게",
                    desc: "지원금 신청, 서류 준비, 숙소 예약까지 플랫폼 하나로 모두 처리됩니다.",
                  },
                  {
                    icon: "📊",
                    title: "워케이션 효과 리포팅",
                    desc: "직원 만족도, 업무 효율, 비용 절감 현황을 대시보드에서 한눈에 확인합니다.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#1B4F72] hover:shadow-md transition-all">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-black text-[#2C3E50] mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-white border-2 border-[#1B4F72] rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-black text-[#2C3E50] mb-2">기업 무료 등록</h3>
                <p className="text-gray-500 text-sm mb-6">30초면 완료됩니다. 신용카드 불필요.</p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">기업명 *</label>
                    <input
                      type="text"
                      placeholder="(주)워크앤베케이션"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">담당자 이름 *</label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">이메일 *</label>
                    <input
                      type="email"
                      placeholder="hr@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">직원 수</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/20 transition-all bg-white">
                      <option value="">선택해주세요</option>
                      <option>1~10명</option>
                      <option>11~50명</option>
                      <option>51~100명</option>
                      <option>101~300명</option>
                      <option>300명 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">희망 지역</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/20 transition-all bg-white">
                      <option value="">선택해주세요</option>
                      <option>부산</option>
                      <option>강원도</option>
                      <option>제주도</option>
                      <option>전주</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E67E22] text-white font-black text-lg rounded-xl hover:bg-[#d35400] transition-all shadow-lg shadow-orange-200"
                  >
                    무료로 시작하기 →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    등록 시 <Link href="#" className="underline">이용약관</Link> 및 <Link href="#" className="underline">개인정보처리방침</Link>에 동의합니다.
                  </p>
                </form>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎁</span>
                  <span className="font-black text-green-800">첫 워케이션 특별 혜택</span>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center gap-2">
                    <span>✓</span><span>지원금 신청 무료 컨설팅 1회 제공</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span><span>파트너 숙소 10% 추가 할인</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span><span>워케이션 가이드 e-book 무료 제공</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
