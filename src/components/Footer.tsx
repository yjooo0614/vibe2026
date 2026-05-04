import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2B5B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-white">Work</span>
              <span className="text-2xl font-black text-[#3B82F6]">&</span>
              <span className="text-2xl font-black text-white">Vacation</span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              일과 쉼이 함께하는 새로운 근무 문화,<br />
              워케이션 플랫폼
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">플랫폼</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">워케이션이란?</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">숙소 찾기</Link></li>
              <li><Link href="/subsidy" className="hover:text-white transition-colors">지원금 안내</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">파트너</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li><Link href="/partner/company" className="hover:text-white transition-colors">기업 파트너 등록</Link></li>
              <li><Link href="/partner/hotel" className="hover:text-white transition-colors">호텔 파트너 등록</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">고객지원</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li><a href="mailto:hello@workvacation.kr" className="hover:text-white transition-colors">hello@workvacation.kr</a></li>
              <li><span>평일 09:00 - 18:00</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-sm">© 2025 Work&Vacation. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-blue-400">
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
