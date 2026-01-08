export default function Footer() {
  return (
    <footer
      className="mt-20"
      style={{ background: "var(--brand-navy)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 text-white">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 기관 소개 + 로고 */}
          <div>
            <img
              src="/images/logo-white.png"
              alt="CEDAR HILL Global Prep"
              className="h-16 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed text-white/90">
              글로벌 기준의 유아 교육 프로그램을 운영하며,
              <br />
              학생의 잠재력과 균형 잡힌 성장을 지원합니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">바로가기</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="/about" className="hover:underline">소개</a></li>
              <li><a href="/programs" className="hover:underline">프로그램</a></li>
              <li><a href="/co-curricular-activities" className="hover:underline">Co-Curricular</a></li>
              <li><a href="/admissions" className="hover:underline">입학</a></li>
              <li><a href="/community" className="hover:underline">커뮤니티</a></li>
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">문의</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>전화: 032-875-8733~4</li>
              <li>이메일: fsalusone@gmail.com</li>
              <li>주소: 인천광역시 미추홀구 학익로 30 1층 1-16</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/70">
          © {new Date().getFullYear()} CEDAR HILL Global Prep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
