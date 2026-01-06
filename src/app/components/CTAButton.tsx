type CTAButtonProps = {
    href: string;
    label: string;
    variant?: "primary" | "outline";
    className?: string;
  };
  
  export default function CTAButton({
    href,
    label,
    variant = "primary",
    className = "",
  }: CTAButtonProps) {
    const base =
      "inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold transition";
  
    const primary = "text-white hover:opacity-95";
    const outline =
      "border bg-white text-zinc-900 hover:bg-zinc-50";
  
    const stylePrimary = { background: "var(--brand-burgundy)" as const };
  
    if (variant === "outline") {
      return (
        <a href={href} className={`${base} ${outline} ${className}`}>
          {label}
        </a>
      );
    }
  
    return (
      <a href={href} className={`${base} ${primary} ${className}`} style={stylePrimary}>
        {label}
      </a>
    );
  }
  