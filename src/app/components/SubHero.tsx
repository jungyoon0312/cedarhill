import Image from "next/image";

type SubHeroProps = {
  title: string;
  breadcrumb?: string;
  bgImage?: string;
};

export default function SubHero({ title, breadcrumb, bgImage }: SubHeroProps) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0">
        {bgImage ? (
          <Image src={bgImage} alt="" fill className="object-cover" quality={80} priority={false} />
        ) : (
          <div className="h-full w-full" style={{ background: "var(--brand-navy)" }} />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(53,90,122,0.60)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-12 text-white">
        {breadcrumb ? <div className="text-xs sm:text-sm text-white/75 leading-relaxed">{breadcrumb}</div> : null}
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white" style={{ color: '#ffffff' }}>{title}</h1>
        <div
          className="mt-4 h-1 w-16 rounded-full"
          style={{ background: "var(--brand-burgundy)" }}
        />
      </div>
    </section>
  );
}
