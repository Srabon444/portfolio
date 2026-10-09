# Ashraful Islam — Portfolio

Personal portfolio website of Ashraful Islam, a Full-Stack Software Engineer based in Dhaka, Bangladesh.

Live site: https://ashraful.uk

## Sections

- **Hero**: intro and social links
- **Experience**: work history and education timeline
- **Skills**: frontend, backend, databases, DevOps and tools
- **Projects**: selected projects with demo and code links
- **Contributions**: GitHub contribution calendar
- **Quote**: a random inspirational quote on each page load
- **Contact**: contact form (EmailJS) and social links

The navigation bar links to the resume. The site supports light and dark themes and smooth scrolling between sections.

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [next-themes](https://github.com/pacocoursey/next-themes) for theming
- [lottie-react](https://github.com/Gamote/lottie-react) for animation
- [EmailJS](https://www.emailjs.com) for the contact form
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) for the contribution graph
- [Vercel](https://vercel.com) for hosting, with Vercel Analytics and Speed Insights

## Getting started

Requirements: a current Node.js LTS and npm.

```bash
git clone https://github.com/Srabon444/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

### Environment variables

The contact form needs EmailJS credentials. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Without them the site still runs, but sending a message from the contact form will fail.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/                  Next.js app router (layout, page, global styles, manifest)
  components/
    sections/           Page sections (Hero, Experience, Skills, Projects, ...)
    shared/             Reusable UI (navigation, footer, theme toggle, icons, ...)
  data/                 Content: portfolioData.ts, quotesData.ts, Lottie animation
  hooks/                Custom hooks
  lib/                  Constants and helpers (smooth scroll, scroll observer)
  provider/             Theme and layout providers
public/                 Images and static assets
```

To change the site content (bio, experience, skills, projects, links), edit `src/data/portfolioData.ts`. Shared values such as section ids and the resume URL live in `src/lib/constants.ts`.

## Deployment

The site is deployed on Vercel from this repository. Pull requests get their own preview deployment.
