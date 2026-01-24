import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "../../../components/SubHero";
import { noticePosts } from "../../notices-data";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// 동적 파라미터 허용
export const dynamicParams = true;

export async function generateStaticParams() {
  return noticePosts.map((post) => ({
    id: post.id,
  }));
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const post = noticePosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SubHero title="공지사항" breadcrumb="HOME > 커뮤니티 > 공지사항" />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-20 md:py-24 bg-white">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-600 hover:text-zinc-900 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>목록으로</span>
        </Link>

        {/* 게시물 내용 */}
        <article className="rounded-2xl border-2 bg-white p-6 sm:p-8 md:p-10 shadow-sm" style={{ borderColor: "var(--brand-navy)" }}>
          {/* 제목 및 날짜 */}
          <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b" style={{ borderColor: "var(--brand-slate)" }}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: "var(--brand-navy)" }}>
              {post.title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500">{post.date}</p>
          </div>

          {/* 본문 내용 */}
          <div className="prose prose-sm sm:prose-base max-w-none">
            <div className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700 whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* 이미지가 있는 경우 */}
          {post.images && post.images.length > 0 && (
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              {post.images.map((imageUrl, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={`${post.title} 이미지 ${index + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </article>

        {/* 하단 네비게이션 */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/community"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "var(--brand-navy)" }}
          >
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    </>
  );
}

