import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: "💼",
    group: "직장인",
    bg: "bg-blue-50",
    border: "border-blue-200",
    points: [
      "바다·산 전망의 쾌적한 업무 환경",
      "업무 후 바로 즐기는 관광·휴식",
      "일상의 단조로움 탈출로 집중력 향상",
    ],
  },
  {
    icon: "🏢",
    group: "기업·사장님",
    bg: "bg-purple-50",
    border: "border-purple-200",
    points: [
      "직원 복지 향상으로 이직률 감소",
      "지원금 자동화로 간편한 복지 운영",
      "팀 결속력 강화 & 업무 효율 개선",
    ],
  },
  {
    icon: "🏨",
    group: "호텔·숙소",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    points: [
      "평일 공실률 획기적으로 감소",
      "장기 예약으로 안정적인 매출 확보",
      "워케이션 전용 패키지 상품 제공",
    ],
  },
  {
    icon: "🇰🇷",
    group: "지역·국가",
    bg: "bg-orange-50",
    border: "border-orange-200",
    points: [
      "지방 경제 활성화",
      "지역 관광·외식 소비 증가",
      "워케이션 지원금 정책 연계",
    ],
  },
];

const steps = [
  { step: "01", title: "기업 등록", desc: "플랫폼에 기업을 등록하고 직원 복지 프로그램을 설정합니다.", color: "bg-[#1B4F72]" },
  { step: "02", title: "숙소 선택", desc: "부산, 강원도, 제주 등 다양한 워케이션 숙소를 탐색합니다.", color: "bg-[#148F77]" },
  { step: "03", title: "지원금 자동 신청", desc: "복잡한 지원금 신청을 플랫폼이 자동으로 처리합니다.", color: "bg-[#E67E22]" },
  { step: "04", title: "워케이션 시작", desc: "직원들이 아름다운 환경에서 일과 휴식을 함께 즐깁니다.", color: "bg-[#8E44AD]" },
];

const destinations = [
  { name: "부산", desc: "해운대·광안리 오션뷰", img: "🌊", tag: "바다" },
  { name: "강원도", desc: "설악산·속초 자연 속 업무", img: "🏔️", tag: "산·숲" },
  { name: "제주도", desc: "한라산 뷰 프리미엄 숙소", img: "🌺", tag: "섬·자연" },
  { name: "전주", desc: "한옥마을 문화 워케이션", img: "🏯", tag: "도심·문화" },
];

const stats = [
  { number: "2,400+", label: "등록 기업" },
  { number: "580+", label: "파트너 숙소" },
  { number: "94%", label: "직원 만족도" },
  { number: "₩12억+", label: "지원금 처리액" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#E67E22]/20 text-[#f39c12] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#E67E22]/30">
              🎉 워케이션 지원금 자동화 플랫폼
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              일도 하고,<br />
              <span className="text-[#f39c12]">쉬기도 하고</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-10 leading-relaxed">
              바다가 보이는 창가에서 업무를, 퇴근 후엔 해변 산책을.<br />
              Work&Vacation이 복잡한 지원금 신청까지 자동으로 해결합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/partner/company" className="px-8 py-4 bg-[#E67E22] text-white font-bold text-lg rounded-xl hover:bg-[#d35400] transition-all shadow-lg text-center">
                기업 무료 등록 →
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all border border-white/20 text-center">
                워케이션 알아보기
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-black text-white">{s.number}</div>
                <div className="text-blue-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-semibold text-sm uppercase tracking-wider">모두가 이득</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2C3E50] mt-2">
              4가지 관점에서 바라보는<br />워케이션의 가치
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.group} className={`${b.bg} border ${b.border} rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-black text-[#2C3E50] mb-4">{b.group}</h3>
                <ul className="space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#148F77] font-semibold text-sm uppercase tracking-wider">간편한 시작</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2C3E50] mt-2">
              4단계로 완성되는 워케이션
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#1B4F72] via-[#148F77] to-[#E67E22]" />
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl shadow-lg ${s.color}`}>
                  {s.step}
                </div>
                <h3 className="text-lg font-black text-[#2C3E50] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Highlight */}
      <section className="py-24 bg-gradient-to-br from-[#1B4F72] to-[#148F77] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#E67E22]/20 text-[#f39c12] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#E67E22]/30">
                핵심 기능
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                지원금 신청,<br />
                <span className="text-[#f39c12]">이제 자동으로</span>
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                전국 지자체 워케이션 지원 프로그램과 연동된 플랫폼이 복잡한 서류 작업 없이 지원금 신청을 자동 처리합니다.
              </p>
              <ul className="space-y-4 mb-10">
                {["지자체 연동 자동 매칭", "서류 자동 생성 및 제출", "지원금 진행 상태 실시간 알림", "최대 숙박비 70% 지원"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#E67E22] rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/subsidy" className="inline-block px-8 py-4 bg-[#E67E22] text-white font-bold text-lg rounded-xl hover:bg-[#d35400] transition-all">
                지원금 자세히 보기 →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-black">지원금 계산기</h3>
                <p className="text-blue-200 text-sm mt-1">예상 지원금을 확인해보세요</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "직원 수", value: "10명" },
                  { label: "워케이션 기간", value: "3박 4일" },
                  { label: "예상 숙박비", value: "₩3,000,000" },
                ].map((r) => (
                  <div key={r.label} className="bg-white/10 rounded-xl p-4">
                    <div className="text-xs text-blue-300 mb-1">{r.label}</div>
                    <div className="text-xl font-bold">{r.value}</div>
                  </div>
                ))}
                <div className="bg-[#E67E22]/20 border border-[#E67E22]/50 rounded-xl p-4">
                  <div className="text-xs text-orange-300 mb-1">예상 지원금</div>
                  <div className="text-3xl font-black text-[#f39c12]">₩2,100,000</div>
                  <div className="text-xs text-orange-200 mt-1">최대 70% 지원 기준</div>
                </div>
              </div>
              <Link href="/subsidy" className="block text-center mt-6 py-3 bg-white text-[#1B4F72] font-bold rounded-xl hover:bg-blue-50 transition-colors">
                정확한 지원금 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1B4F72] font-semibold text-sm uppercase tracking-wider">인기 지역</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2C3E50] mt-2">
              어디서 일할까요?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d) => (
              <Link key={d.name} href="/destinations" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-44 bg-gradient-to-br from-[#1B4F72] to-[#148F77] flex items-center justify-center overflow-hidden">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300 inline-block">{d.img}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs bg-blue-100 text-[#1B4F72] px-2 py-1 rounded-full font-semibold">{d.tag}</span>
                  <h3 className="text-xl font-black text-[#2C3E50] mt-2">{d.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{d.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/destinations" className="inline-block px-8 py-4 bg-[#1B4F72] text-white font-bold rounded-xl hover:bg-[#154360] transition-all">
              모든 지역 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#1B4F72] to-[#148F77] rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              지금 바로 시작하세요
            </h2>
            <p className="text-blue-200 text-xl mb-10 leading-relaxed">
              복잡한 지원금 신청은 우리에게 맡기고,<br />
              당신은 직원 행복에만 집중하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partner/company" className="px-10 py-4 bg-[#E67E22] text-white font-bold text-lg rounded-xl hover:bg-[#d35400] transition-all shadow-lg">
                기업으로 시작하기 →
              </Link>
              <Link href="/partner/hotel" className="px-10 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all border border-white/20">
                숙소 파트너 등록
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
