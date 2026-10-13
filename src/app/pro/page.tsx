import {
  educations,
  experiences,
  personalInfo,
  projects,
  skills,
} from "@/data/portfolioData";
import { RESUME_URL } from "@/lib/constants";
import { getYearsOfExperience } from "@/lib/utils";
import s from "./pro.module.css";

// Same groups and order as the main site's Skills section.
const SKILL_GROUPS = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Databases", items: skills.databases },
  { label: "DevOps", items: skills.devops },
  { label: "Tools", items: skills.tools },
];

const stripPeriod = (text: string) => text.trim().replace(/\.$/, "");

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const Ring = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
    <circle cx="10" cy="10" r="2" fill="currentColor" />
    <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const Ornament = () => (
  <div className={s.ornament} aria-hidden>
    <span className={s.ornamentLine} />
    <Ring />
    <span className={s.ornamentLine} />
  </div>
);

const Chips = ({ items }: { items: string[] }) => (
  <ul className={s.chips}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
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
  const [current] = experiences;
  // ponytail: static page, so the years figure is fixed at build and refreshes on each deploy
  const years = getYearsOfExperience();

  return (
    <div className={s.page}>
      <main className={s.wrap}>
        <header className={s.hero}>
          <h1 className={s.name}>{personalInfo.name}</h1>
          <p className={s.role}>
            {current.role} at {current.company}
          </p>
          <nav className={s.links} aria-label="Contact">
            <a href={`mailto:${personalInfo.email}`} className={s.link}>Email</a>
            <a href={personalInfo.github} className={s.link} {...external}>GitHub</a>
            <a href={personalInfo.linkedin} className={s.link} {...external}>LinkedIn</a>
            <a href={personalInfo.discord} className={s.link} {...external}>Discord</a>
            <a href={RESUME_URL} className={s.link} {...external}>Resume</a>
          </nav>
        </header>

        <Section id="pro-about" title="About">
          <div className={s.prose}>
            <p>
              I&apos;ve spent {years} years building production web
              applications end to end: React on the front, Node.js and PostgreSQL
              behind it, and the data model that holds it together.
            </p>
            <p>
              At Techzu Ichicode I build SAP Business One based ERP software
              for Fortune 500 clients in Singapore, and I lead a team of five on
              one of those projects.
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
          <ol className={s.timeline}>
            {experiences.map((exp) => (
              <li key={exp.id} className={s.job}>
                <span className={s.marker}>
                  <Ring />
                </span>
                <div className={s.jobHead}>
                  <h3 className={s.company}>{exp.company}</h3>
                  <p className={s.position}>{exp.role}</p>
                  <span className={s.period}>{exp.period}</span>
                  <span className={s.where}>
                    {exp.location}, {exp.jobType.toLowerCase()}
                    {exp.isContract ? ", contract" : ""}
                  </span>
                </div>
                <ul className={s.bullets}>
                  {exp.description.map((b) => (
                    <li key={b}>{stripPeriod(b)}</li>
                  ))}
                </ul>
                <Chips items={exp.technologies} />
              </li>
            ))}
          </ol>
        </Section>

        <Section id="pro-work" title="Selected work">
          <ul className={s.list}>
            {projects.map((p) => (
              <li key={p.id} className={s.project}>
                <div className={s.itemHead}>
                  <h3 className={s.company}>{p.title}</h3>
                  <span className={s.meta}>
                    {p.work ? "Client work" : "Personal project"}
                  </span>
                </div>
                <p className={s.desc}>{p.description}</p>
                <Chips items={p.technologies} />
                <p className={s.projectLinks}>
                  {p.demoLink && (
                    <a href={p.demoLink} className={s.link} {...external}>Live demo</a>
                  )}
                  {p.codeLink && (
                    <a href={p.codeLink} className={s.link} {...external}>Source code</a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="pro-skills" title="Skills">
          <dl className={s.skills}>
            {SKILL_GROUPS.map((row) => (
              <div key={row.label} className={s.skillRow}>
                <dt className={s.skillLabel}>{row.label}</dt>
                <dd>{row.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="pro-education" title="Education">
          <ul className={s.list}>
            {educations.map((e) => (
              <li key={e.id} className={s.item}>
                <div className={s.itemHead}>
                  <h3 className={s.itemTitle}>{e.degree}</h3>
                  <span className={s.meta}>{e.period}</span>
                </div>
                <p className={s.itemSub}>United International University (UIU), Dhaka</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="pro-contact" title="Contact">
          <p className={s.prose}>
            I&apos;m open to remote roles worldwide. Email is the fastest way to
            reach me.
          </p>
          <a href={`mailto:${personalInfo.email}`} className={`${s.link} ${s.email}`}>
            {personalInfo.email}
          </a>
          <p className={s.contactMeta}>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className={s.link}>
              {personalInfo.phone}
            </a>
            <span>{personalInfo.location}</span>
          </p>
        </Section>

        <Ornament />

        <footer className={s.footer}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default ProPage;
