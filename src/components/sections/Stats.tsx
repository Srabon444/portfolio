import Container from "../shared/Container";

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "4", label: "Companies Worked" },
];

export default function Stats() {
  return (
    <div className="bg-foreground py-10 md:py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-stretch">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col items-center justify-center text-center py-6 sm:py-2 px-6 ${
                i < stats.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-background/15"
                  : ""
              }`}
            >
              <span className="text-4xl md:text-5xl font-bold text-background leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
