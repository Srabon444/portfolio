import { experiences, personalInfo, projects } from "@/data/portfolioData";
import { RESUME_URL } from "@/lib/constants";
import s from "./pro.module.css";

// Bullets per experience id, matching the PDF resume; unlisted roles show their first.
const HIGHLIGHTS: Record<number, number[]> = {
  1: [3, 4, 5],
  2: [0, 1, 3],
};

const firstSentence = (text: string) => {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
};

const stripPeriod = (text: string) => text.trim().replace(/\.$/, "");

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const Ornament = () => (
  <div className={s.ornament} aria-hidden>
    <span className={s.ornamentLine} />
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
    <span className={s.ornamentLine} />
  </div>
);

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className={s.section} aria-labelledby={id}>
    <h2 id={id} className={s.sectionTitle}>
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

const ProPage = () => {
  const [ambufast] = projects;

  return (
    <div className={s.page}>
      <main className={s.wrap}>
        <header className={s.hero}>
          <h1 className={s.name}>{personalInfo.name}</h1>
          <p className={s.role}>Software engineer in {personalInfo.location}</p>
          <nav className={s.links} aria-label="Contact">
            <a href={`mailto:${personalInfo.email}`} className={s.link}>Email</a>
            <a href={personalInfo.github} className={s.link} {...external}>GitHub</a>
            <a href={personalInfo.linkedin} className={s.link} {...external}>LinkedIn</a>
            <a href={RESUME_URL} className={s.link} {...external}>Resume</a>
          </nav>
        </header>

        <Section id="pro-about" title="About">
          <div className={s.prose}>
            <p>
              I build business software end to end: React on the front, Node.js
              and PostgreSQL behind it, and the data model that holds it
              together.
            </p>
            <p>
              Right now I&apos;m a Software Engineer II at Techzu Ichicode,
              building SAP Business One based ERP software for clients in
              Singapore and leading a team of five on one of those projects.
              Before that I built the booking and dispatch system behind{" "}
              <a href={ambufast.demoLink} className={s.link} {...external}>
                Ambufast, Bangladesh&apos;s largest ambulance booking platform
              </a>
              .
            </p>
          </div>
        </Section>

        <Ornament />

        <Section id="pro-experience" title="Experience">
          <ol className={s.list}>
            {experiences.map((exp) => {
              const bullets = (HIGHLIGHTS[exp.id] ?? [0])
                .map((i) => exp.description[i])
                .filter(Boolean);
              return (
                <li key={exp.id} className={s.item}>
                  <div className={s.itemHead}>
                    <h3 className={s.itemTitle}>{exp.role}</h3>
                    <span className={s.meta}>{exp.period}</span>
                  </div>
                  <p className={s.itemSub}>
                    {exp.company}, {exp.location}
                    {exp.isContract ? " (contract)" : ""}
                  </p>
                  <ul className={s.bullets}>
                    {bullets.map((b) => (
                      <li key={b}>{stripPeriod(b)}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section id="pro-work" title="Selected work">
          <ul className={s.list}>
            {projects.map((p) => {
              const href = p.demoLink || p.codeLink;
              return (
                <li key={p.id} className={s.item}>
                  <div className={s.itemHead}>
                    <h3 className={s.itemTitle}>
                      {href ? (
                        <a href={href} className={s.link} {...external}>
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <span className={s.meta}>
                      {p.work ? "Client work" : "Side project"}
                    </span>
                  </div>
                  <p className={s.desc}>{firstSentence(p.description)}</p>
                  <p className={s.stack}>{p.technologies.slice(0, 4).join(", ")}</p>
                </li>
              );
            })}
          </ul>
        </Section>
      </main>
    </div>
  );
};

export default ProPage;
