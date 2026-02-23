import SubHero from "../components/SubHero";
import Link from "next/link";
import Image from "next/image";
import { newsPosts } from "./news-data";
import { noticePosts } from "./notices-data";
import { galleryCategories } from "./gallery-data";

function GalleryCard({ category }: { category: typeof galleryCategories[0] }) {
  return (
    <Link
      href={`/community/gallery/${category.id}`}
      className="block rounded-2xl border-2 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all hover:scale-[1.02]"
      style={{ borderColor: "var(--brand-navy)" }}
    >
      {/* 이미지 영역 */}
      <div className="aspect-[16/10] bg-zinc-100 flex items-center justify-center relative">
        <Image
          src={category.thumbnail}
          alt={`${category.title} 갤러리 이미지`}
          fill
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          />
        {/* 이미지 개수 표시 */}
        {category.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {category.images.length}장
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs text-zinc-500">{category.date}</div>
        <div className="mt-1 font-semibold leading-snug" style={{ color: "var(--brand-navy)" }}>
          {category.title}
        </div>
      </div>
    </Link>
  );
}


export default function CommunityPage() {

  return (
    <>
      <SubHero title="커뮤니티" breadcrumb="HOME > 커뮤니티" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-24 space-y-10 sm:space-y-14 md:space-y-16 bg-white">
        {/* 안내 요약 */}
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <p className="text-zinc-800 text-sm sm:text-base md:text-lg leading-relaxed">
            커뮤니티에서는 CEDAR HILL Global Prep의 공지사항과 주요 소식,
            활동 안내를 확인하실 수 있습니다. 학부모와의 원활한 소통을 위해
            정기적으로 정보를 업데이트합니다.
          </p>

          <div className="rounded-2xl border-2 p-6" style={{ borderColor: "var(--brand-navy)", background: "var(--brand-slate)" }}>
            <div className="text-xs sm:text-sm text-zinc-600">문의</div>
            <div className="mt-2 text-base sm:text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>
              <a href="tel:032-875-8733" className="hover:underline">032-875-8733~4</a>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              상담을 통해 과정/일정/세부 안내를 개별 제공해 드립니다.
            </p>
          </div>
        </div>

        {/* 공지사항 */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>공지사항</h2>
          </div>

          {noticePosts.length === 0 ? (
            <div className="rounded-2xl border-2 bg-white p-8 sm:p-12 text-center" style={{ borderColor: "var(--brand-navy)" }}>
              <p className="text-sm sm:text-base text-zinc-500">등록된 공지사항이 없습니다.</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {noticePosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border-2 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all"
                  style={{ borderColor: "var(--brand-navy)" }}
                >
                  <Link
                    href={`/community/notices/${post.id}`}
                    className="block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug hover:underline" style={{ color: "var(--brand-navy)" }}>
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500">{post.date}</p>
                    </div>
                    <div className="text-zinc-400 text-lg sm:text-xl">→</div>
                  </div>
                </Link>
                  {/* 3차 입학설명회 신청 버튼 */}
                  {post.id === "admission-briefing-academy-2026-02-07" && (
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--brand-slate)" }}>
                      <a
                        href="https://yoo-jenny.notion.site/2f34597a850c8063b052f9b686a7f461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: "var(--brand-burgundy)" }}
                      >
                        3회 입학설명회 및 체험수업 신청하기
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 학교소식 */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>학교소식</h2>
          </div>

          {newsPosts.length === 0 ? (
            <div className="rounded-2xl border-2 bg-white p-8 sm:p-12 text-center" style={{ borderColor: "var(--brand-navy)" }}>
              <p className="text-sm sm:text-base text-zinc-500">등록된 소식이 없습니다.</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {newsPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/community/news/${post.id}`}
                  className="block rounded-2xl border-2 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
                  style={{ borderColor: "var(--brand-navy)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug" style={{ color: "var(--brand-navy)" }}>
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500">{post.date}</p>
                    </div>
                    <div className="text-zinc-400 text-lg sm:text-xl">→</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 갤러리 */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-navy)" }}>갤러리</h2>
          </div>

          {galleryCategories.length === 0 ? (
            <div className="rounded-2xl border-2 bg-white p-8 sm:p-12 text-center" style={{ borderColor: "var(--brand-navy)" }}>
              <p className="text-sm sm:text-base text-zinc-500">등록된 갤러리가 없습니다.</p>
            </div>
          ) : (
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryCategories.map((category) => (
                <GalleryCard key={category.id} category={category} />
            ))}
          </div>
          )}


        </div>
      </section>
    </>
  );
}
