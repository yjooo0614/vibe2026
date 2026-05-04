import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subsidyRegions = [
  { region: "부산광역시", rate: 50, max: "500,000", period: "연 3회", status: "모집 중" },
  { region: "강원특별자치도", rate: 60, max: "600,000", period: "연 4회", status: "모집 중" },
  { region: "제주특별자치도", rate: 50, max: "750,000", period: "연 2회", status: "마감 임박" },
  { region: "전북특별자치도", rate: 70, max: "700,000", period: "연 4회", status: "모집 중" },
  { region: "경상북도", rate: 60, max: "600,000", period: "연 3회", status: "모집 중" },
  { region: "전라남도", rate: 65, max: "650,000", period: "연 3회", status: "준비 중" },
];

const processSteps = [
  {
    step: "01",
    icon: "📝",
    title: "기업 정보 입력",
    desc: "사업자등록번호, 직원 수, 워케이션 계획 등 기본 정보를 입력합니다.",
  },
  {
    step: "02",
    icon: "🤖",
    title: "자동 매칭",
    desc: "플랫폼이 기업 조건에 맞는 지자체 지원 프로그램을 자동으로 매칭합니다.",
  },
  {
    step: "03",
    icon: "📄",
    title: "서류 자동 생성",
    desc: "필요한 신청 서류를 시스템이 자동으로 생성하고 제출합니다.",
  },
  {
    step: "04",
    icon: "✅",
    title: "승인 및 지원금 지급",
    desc: "지자체 승인 후 숙박비에서 자동으로 지원금이 차감됩니다.",
  },
];

export default function SubsidyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="gradient-hero pt-32 pb-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            지원금 안내
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            숙박비 최대 70%,<br />
            <span className="text-[#f39c12]">지원금으로 해결</span>
          </h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            전국 47개 지자체 워케이션 지원 프로그램을 하나의 플랫폼에서.<br />
            복잡한 신청 절차는 Work&Vacation이 자동으로 처리합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-semibold text-sm uppercase tracking-wider">자동화 프로세스</span>
            <h2 className="text-4xl font-black text-[#2C3E50] mt-2">
              지원금 신청, 이렇게 쉬워집니다
            </h2>
            <p className="text-gray-500 mt-4">기존 수작업 대비 95% 시간 절약</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 z-0" />
                )}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#1B4F72] hover:shadow-lg transition-all relative z-10">
                  <div className="w-12 h-12 bg-[#1B4F72] rounded-xl flex items-center justify-center text-white font-black text-sm mb-4">
                    {s.step}
                  </div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-black text-[#2C3E50] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1B4F72] to-[#148F77] rounded-3xl p-10 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-black mb-4">기존 방식 vs Work&Vacation</h3>
                <div className="space-y-4">
                  {[
                    { label: "신청 소요 시간", before: "평균 3~5일", after: "15분 이내" },
                    { label: "필요 서류 수", before: "12~15종", after: "0종 (자동 생성)" },
                    { label: "지자체 직접 방문", before: "필수", after: "불필요" },
                    { label: "지원금 수령 기간", before: "2~3개월", after: "2~4주" },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-3 gap-4 bg-white/10 rounded-xl p-4">
                      <div className="text-blue-200 text-sm">{row.label}</div>
                      <div className="text-center">
                        <span className="text-red-300 text-sm line-through">{row.before}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[#f39c12] font-bold text-sm">{row.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">⚡</div>
                <div className="text-5xl font-black text-[#f39c12] mb-2">95%</div>
                <div className="text-xl font-bold">업무 시간 절감</div>
                <div className="text-blue-200 text-sm mt-2">기존 수작업 대비</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#2C3E50]">지역별 지원금 현황</h2>
            <p className="text-gray-500 mt-2">2025년 기준 · 지원 조건은 지자체마다 다를 수 있습니다</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-[#1B4F72] text-white">
                  <th className="px-6 py-4 text-left font-bold">지역</th>
                  <th className="px-6 py-4 text-center font-bold">지원 비율</th>
                  <th className="px-6 py-4 text-center font-bold">1인 최대 지원액</th>
                  <th className="px-6 py-4 text-center font-bold">지원 횟수</th>
                  <th className="px-6 py-4 text-center font-bold">현황</th>
                </tr>
              </thead>
              <tbody>
                {subsidyRegions.map((r, i) => (
                  <tr key={r.region} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-bold text-[#2C3E50]">{r.region}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-blue-100 text-[#1B4F72] font-bold px-3 py-1 rounded-full text-sm">
                        {r.rate}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-[#148F77]">₩{r.max}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{r.period}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        r.status === "모집 중"
                          ? "bg-green-100 text-green-700"
                          : r.status === "마감 임박"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#2C3E50] mb-4">지금 바로 지원금 신청을 시작하세요</h2>
          <p className="text-gray-500 mb-8">기업 등록 후 5분이면 지원금 신청이 완료됩니다.</p>
          <Link href="/partner/company" className="inline-block px-10 py-4 bg-[#E67E22] text-white font-bold text-lg rounded-xl hover:bg-[#d35400] transition-all">
            기업 무료 등록 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
