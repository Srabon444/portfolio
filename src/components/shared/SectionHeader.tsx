interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  bgWord: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  bgWord,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={`relative overflow-hidden mb-16 ${center ? "text-center" : ""}`}>
      {/* Large faded background word */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-[0.2em] leading-none text-foreground/[0.05] select-none pointer-events-none whitespace-nowrap"
      >
        {bgWord}
      </span>

      {/* Foreground heading content */}
      <div className="relative z-10 pt-10 md:pt-14">
        {center ? (
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {eyebrow}
            </span>
            <div className="h-px w-10 bg-primary flex-shrink-0" />
          </div>
        ) : (
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        {description && (
          <p
            className={`text-muted-foreground text-[15px] ${
              center ? "max-w-2xl mx-auto" : "max-w-xl"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
