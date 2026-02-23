import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SubHero from "../../../components/SubHero";
import { galleryCategories } from "../../gallery-data";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

// 동적 파라미터 허용
export const dynamicParams = true;

export async function generateStaticParams() {
  return galleryCategories.map((category) => ({
    category: category.id,
  }));
}

export default async function GalleryDetailPage({ params }: Props) {
  const { category } = await params;
  const galleryCategory = galleryCategories.find((cat) => cat.id === category);

  if (!galleryCategory) {
    notFound();
  }

  return (
    <>
      <SubHero title="갤러리" breadcrumb="HOME > 커뮤니티 > 갤러리" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-24 bg-white">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-600 hover:text-zinc-900 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>목록으로</span>
        </Link>

        {/* 갤러리 제목 */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:font-bold mb-3 sm:mb-4" style={{ color: "var(--brand-navy)" }}>
            {galleryCategory.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-500">{galleryCategory.date}</p>
        </div>

        {/* 이미지 그리드 */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCategory.images.map((imageUrl, index) => (
            <div
              key={imageUrl}
              className="rounded-2xl border-2 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              style={{ borderColor: "var(--brand-navy)" }}
            >
              <div className="aspect-[16/10] bg-zinc-100 flex items-center justify-center relative">
                <Image
                  src={imageUrl}
                  alt={`${galleryCategory.title} 이미지 ${index + 1}`}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

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


