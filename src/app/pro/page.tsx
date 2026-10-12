import {
  educations,
  experiences,
  personalInfo,
  projects,
} from "@/data/portfolioData";
import { RESUME_URL } from "@/lib/constants";
import s from "./pro.module.css";

// A trimmed, recruiter-friendly view of the same data the main site uses.
// Which experience bullets to show, by experience id; others show the first three.
const HIGHLIGHTS: Record<number, number[]> = {
  1: [2, 3, 4],
};

const CORE_SKILLS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Svelte", "Tailwind CSS", "TanStack Query"] },
  { label: "Backend", items: ["Node.js", "Express", "NestJS", "REST APIs", "Socket.io"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Sequelize", "Supabase"] },
  { label: "Infra", items: ["Docker", "Git", "Vercel", "Digital Ocean", "Tauri"] },
];

const firstSentence = (text: string) => {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
};

const ProPage = () => {
  const links = [
    { label: "Email", href: `mailto:${personalInfo.email}` },
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Resume", href: RESUME_URL },
  ];

  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <header>
          <p className={`${s.mono} ${s.eyebrow}`}>{personalInfo.location}</p>
          <h1 className={s.name}>{personalInfo.name}</h1>
          <p className={`${s.serif} ${s.role}`}>Software Engineer</p>
          <p className={s.bio}>
            I build web products and business systems end to end, from React
            interfaces to Node.js services and PostgreSQL. Currently a Software
            Engineer II at Techzu Ichicode, working on SAP Business One based
            ERP software for clients in Singapore, and leading a team of five
            on one of those projects.
          </p>
          <p className={s.status}>
            <span className={s.dot} aria-hidden />
            Open to remote roles
          </p>
          <nav className={s.links} aria-label="Contact">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={s.link}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        <section className={s.section} aria-labelledby="pro-experience">
          <div className={s.sectionHead}>
            <h2 id="pro-experience" className={s.sectionTitle}>
              Experience
            </h2>
            <span className={`${s.mono} ${s.eyebrow}`}>2023 to now</span>
          </div>
          <ul className={s.list}>
            {experiences.map((exp) => {
              const picks = HIGHLIGHTS[exp.id];
              const bullets = picks
                ? picks.map((i) => exp.description[i]).filter(Boolean)
                : exp.description.slice(0, 3);
              return (
                <li key={exp.id} className={s.item}>
                  <div className={s.itemHead}>
                    <h3 className={s.itemTitle}>
                      {exp.role}, {exp.company}
                    </h3>
                    <span className={s.mono}>{exp.period}</span>
                  </div>
                  <p className={s.itemSub}>
                    {exp.location} · {exp.jobType}
                    {exp.isContract ? " · Contract" : ""}
                  </p>
                  <ul className={s.bullets}>
                    {bullets.map((b) => (
                      <li key={b}>{b.trim()}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={s.section} aria-labelledby="pro-projects">
          <div className={s.sectionHead}>
            <h2 id="pro-projects" className={s.sectionTitle}>
              Things I&apos;ve built
            </h2>
          </div>
          <ul className={s.list}>
            {projects.map((p) => {
              const href = p.demoLink || p.codeLink;
              return (
                <li key={p.id} className={s.item}>
                  <div className={s.itemHead}>
                    <h3 className={s.itemTitle}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={s.link}
                        >
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <span className={`${s.mono} ${s.kind}`}>
                      {p.work ? "Client work" : "Side project"}
                    </span>
                  </div>
                  <p className={s.desc}>{firstSentence(p.description)}</p>
                  <div className={s.tags}>
                    {p.technologies.slice(0, 5).map((t) => (
                      <span key={t} className={`${s.mono} ${s.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={s.section} aria-labelledby="pro-skills">
          <div className={s.sectionHead}>
            <h2 id="pro-skills" className={s.sectionTitle}>
              Skills
            </h2>
          </div>
          <div>
            {CORE_SKILLS.map((row) => (
              <div key={row.label} className={s.skillRow}>
                <span className={`${s.mono} ${s.eyebrow}`}>{row.label}</span>
                <span>{row.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section} aria-labelledby="pro-education">
          <div className={s.sectionHead}>
            <h2 id="pro-education" className={s.sectionTitle}>
              Education
            </h2>
          </div>
          <ul className={s.list}>
            {educations.map((e) => (
              <li key={e.id} className={s.item}>
                <div className={s.itemHead}>
                  <h3 className={s.itemTitle}>{e.degree}</h3>
                  <span className={s.mono}>{e.period}</span>
                </div>
                <p className={s.itemSub}>United International University, Dhaka</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className={s.footer}>
          <span className={s.mono}>
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <a href={`mailto:${personalInfo.email}`} className={`${s.mono} ${s.link}`}>
            {personalInfo.email}
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProPage;
