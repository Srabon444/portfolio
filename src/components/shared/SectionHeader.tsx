interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  bgWord?: string;   // kept for call-site compat, not rendered
  description?: string;
  center?: boolean;  // kept for call-site compat, always centered now
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block mb-3">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
          {title}
        </h2>
      )}
      <div className="w-10 h-[3px] bg-primary mx-auto rounded-full" />
      {description && (
        <p className="text-muted-foreground text-[15px] max-w-2xl mx-auto mt-5 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
