export default function PersonalWebsiteStarter() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top Navigation */}
      <header className="w-full border-b border-neutral-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-semibold text-lg">박도윤</h1>
          <nav className="flex items-center gap-4">
            <a href="#about" className="text-sm text-neutral-600 hover:text-black">
              About
            </a>
            <a href="#projects" className="text-sm text-neutral-600 hover:text-black">
              Projects
            </a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-black">
              Contact
            </a>
            <a
              href="https://www.youtube.com/@yun-GURI"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm rounded-xl bg-red-500 text-white hover:opacity-90"
            >
              YouTube
            </a>
            <a
              href="https://blog.naver.com/hoho1889"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm rounded-xl border border-neutral-300 hover:bg-neutral-100"
            >
              Blog 1
            </a>
            <a
              href="https://blog.naver.com/parkjakga327"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm rounded-xl border border-neutral-300 hover:bg-neutral-100"
            >
              Blog 2
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-4">My Website</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            안녕하세요,
            <br />
            저는 <span className="text-neutral-500">박도윤</span>입니다.
          </h1>
          <p className="text-lg text-neutral-600 leading-8 mb-8">
            AI 활용 강사이자 콘텐츠 크리에이터로서, 기술을 쉽게 전달하고 실전에서 활용할 수 있는
            방법을 연구합니다. 유튜브와 블로그, 강의 콘텐츠를 통해 누구나 AI를 쉽게 배우도록 돕고
            있습니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#about" className="px-5 py-3 rounded-2xl bg-neutral-900 text-white shadow-sm">
              소개 보기
            </a>
            <a
              href="https://www.youtube.com/@yun-GURI"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-red-500 text-white"
            >
              유튜브 보기
            </a>
            <a
              href="https://blog.naver.com/hoho1889"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border border-neutral-300"
            >
              블로그 1
            </a>
            <a
              href="https://blog.naver.com/parkjakga327"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border border-neutral-300"
            >
              블로그 2
            </a>
          </div>
        </div>

        <div className="bg-neutral-100 rounded-3xl p-8 shadow-sm">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200">
            <img
              src={`${basePath}/profile.jpg`}
              alt="박도윤 프로필 사진"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-neutral-500">AI 강사 & 콘텐츠 크리에이터</p>
          </div>
          <div className="md:col-span-2 bg-neutral-50 rounded-3xl p-8">
            <p className="leading-8 text-neutral-700">
              저는 AI를 활용하여 업무 효율을 높이고, 누구나 쉽게 사용할 수 있는 실전 활용법을
              전달하는 강사입니다. ChatGPT, Canva, Cursor 등 다양한 AI 도구를 활용하여 강의,
              콘텐츠 제작, 블로그, 영상 제작까지 연결하는 방법을 연구하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "AI 강의 콘텐츠", src: `${basePath}/profile.jpg`, alt: "AI 강의 콘텐츠 썸네일" },
            { title: "유튜브 채널 (구리)", src: `${basePath}/insta1.png`, alt: "유튜브 채널 구리 썸네일" },
            { title: "블로그 프로젝트", src: `${basePath}/insta2.png`, alt: "블로그 프로젝트 썸네일" },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-neutral-200 p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-5 border border-neutral-200">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 leading-7">AI를 활용한 콘텐츠 제작 및 실전 적용 프로젝트입니다.</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-neutral-300 mb-6 leading-8">강의, 협업, 문의는 언제든지 연락주세요.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2 text-neutral-200">
              <p>이름: 박도윤</p>

              <p>
                유튜브:
                <a
                  href="https://www.youtube.com/@yun-GURI"
                  target="_blank"
                  rel="noreferrer"
                  className="underline ml-1"
                >
                  구리 채널
                </a>
              </p>
              <p>
                블로그1:
                <a
                  href="https://blog.naver.com/hoho1889"
                  target="_blank"
                  rel="noreferrer"
                  className="underline ml-1"
                >
                  바로가기
                </a>
              </p>
              <p>
                블로그2:
                <a
                  href="https://blog.naver.com/parkjakga327"
                  target="_blank"
                  rel="noreferrer"
                  className="underline ml-1"
                >
                  바로가기
                </a>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-3">
                <img src={`${basePath}/insta1.png`} alt="일상 인스타 QR" className="rounded-xl" />
                <p className="text-xs text-center mt-2 text-neutral-700">일상 인스타</p>
              </div>
              <div className="bg-white rounded-2xl p-3">
                <img src={`${basePath}/insta2.png`} alt="구리 인스타 QR" className="rounded-xl" />
                <p className="text-xs text-center mt-2 text-neutral-700">구리 인스타</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

