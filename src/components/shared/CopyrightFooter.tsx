import { personalInfo } from "@/data/portfolioData";
import Container from "./Container";
import Link from "next/link";
import { GitHubIcon, GitLabIcon, LinkedInIcon, EmailIcon } from "./SocialIcons";

export default function CopyrightFooter() {
  return (
    <footer className="py-8 border-t border-border">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github, label: "GitHub", Icon: GitHubIcon },
            { href: personalInfo.gitlab, label: "GitLab", Icon: GitLabIcon },
            { href: personalInfo.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            { href: `mailto:${personalInfo.email}`, label: "Email", Icon: EmailIcon },
          ].map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-colors"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
