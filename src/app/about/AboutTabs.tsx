import Link from "next/link";

type Tab = {
  label: string;
  href: string;
};

const tabs: Tab[] = [
  { label: "비전과 가치", href: "/about/vision-values" },
  { label: "인사말", href: "/about/greeting" },
  { label: "오시는 길", href: "/about/location" },
  { label: "문의", href: "/about/contact" },
];

export default function AboutTabs({
  currentPath,
}: {
  currentPath: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <nav className="flex gap-2 overflow-x-auto border-b py-3">
        {tabs.map((tab) => {
          const active = currentPath === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={[
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
              ].join(" ")}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
