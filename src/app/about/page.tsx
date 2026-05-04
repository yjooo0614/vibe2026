import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="gradient-hero pt-32 pb-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            워케이션이란?
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Work + Vacation<br />
            <span className="text-[#f39c12]">일과 쉼의 완벽한 균형</span>
          </h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            워케이션(Workcation)은 일(Work)과 휴가(Vacation)를 결합한 새로운 근무 형태입니다.<br />
            아름다운 자연환경 속에서 업무와 휴식을 동시에 즐기는 라이프스타일입니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-[#E67E22] font-semibold text-sm uppercase tracking-wider">개념 이해</span>
              <h2 className="text-4xl font-black text-[#2C3E50] mt-2 mb-6">
                왜 워케이션인가요?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                코로나 이후 원격 근무가 확산되면서 &apos;어디서든 일할 수 있다&apos;는 인식이 퍼졌습니다.
                워케이션은 이 자유를 적극적으로 활용해, 단순히 집이 아닌 <strong className="text-[#1B4F72]">바다, 산, 도시의 새로운 공간</strong>에서 일하는 것입니다.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                연구에 따르면 환경 변화는 <strong className="text-[#148F77]">창의성과 집중력을 최대 40%</strong>까지 향상시킵니다.
                워케이션은 이 효과를 직장인 복지로 연결한 스마트한 선택입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🧠", title: "창의력 향상", desc: "환경 변화로 새로운 아이디어 발생" },
                { emoji: "😊", title: "업무 만족도", desc: "일과 삶의 균형으로 번아웃 예방" },
                { emoji: "🤝", title: "팀워크 강화", desc: "팀 워케이션으로 결속력 증가" },
                { emoji: "📈", title: "생산성 증가", desc: "쾌적한 환경에서 업무 효율 향상" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="font-black text-[#2C3E50] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-12 mb-24 border border-blue-100">
            <h2 className="text-3xl font-black text-[#2C3E50] mb-8 text-center">국내 워케이션 현황</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "47개", label: "지자체 지원 프로그램", desc: "전국 47개 지자체에서 워케이션 지원 중" },
                { number: "70%", label: "최대 지원 비율", desc: "숙박비의 최대 70%를 지원금으로 충당 가능" },
                { number: "3.2배", label: "수요 성장률", desc: "2022년 대비 2024년 워케이션 수요 증가" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-5xl font-black text-[#1B4F72] mb-2">{s.number}</div>
                  <div className="font-bold text-[#2C3E50] mb-2">{s.label}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-black text-[#2C3E50] mb-4">워케이션을 시작할 준비가 됐나요?</h2>
            <p className="text-gray-500 mb-8">Work&Vacation과 함께라면 복잡한 절차 없이 바로 시작할 수 있습니다.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/destinations" className="px-8 py-4 bg-[#1B4F72] text-white font-bold rounded-xl hover:bg-[#154360] transition-all">
                숙소 찾아보기 →
              </Link>
              <Link href="/subsidy" className="px-8 py-4 border-2 border-[#1B4F72] text-[#1B4F72] font-bold rounded-xl hover:bg-[#1B4F72] hover:text-white transition-all">
                지원금 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
