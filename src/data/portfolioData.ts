export const personalInfo = {
  name: "Ashraful Islam",
  title: "Full Stack Developer",
  email: "ashraful.codesmith@gmail.com",
  phone: "+880 1580 831411",
  location: "Bangladesh",
  availability: "Open to new opportunities",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I build elegant, responsive, and performant web applications that solve real-world problems.",
  github: "https://gitlab.com/users/srabon444/starred",
  linkedin: "https://www.linkedin.com/in/ashraful-islam-rabby/",
};

export const skills = {
  frontend: [
    "TypeScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Redux",
    "HTML5/CSS3",
  ],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"],
  tools: ["Git", "GitHub/GitLab", "VS Code", "Figma", "Docker", "AWS"],
};

export const projects = [
  {
    id: 1,
    title: "Eventify",
    description: "A full-stack event management application allowing users to create, manage, and explore events.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "NextAuth"],
    image: "/projects/eventify.png",
    demoLink: "https://eventify-pi.vercel.app/",
    codeLink: "https://github.com/yourusername/eventify",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Junction",
    description: "An e-commerce platform for tech products with user authentication and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/projects/techjunction.png",
    demoLink: "https://techjunction.vercel.app/",
    codeLink: "https://github.com/yourusername/techjunction",
    featured: true,
  },
  {
    id: 3,
    title: "Jozzby",
    description: "A job application tracking system for job seekers to organize their job search process.",
    technologies: ["React", "Firebase", "TailwindCSS", "Context API"],
    image: "/projects/jozzby.png",
    demoLink: "https://jozzby-92a66.web.app/",
    codeLink: "https://github.com/yourusername/jozzby",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: "Lead the frontend development team, implemented new features and optimized performance.",
    technologies: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    period: "2021 - 2023",
    description: "Developed full-stack web applications for various clients in e-commerce and fintech domains.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "CodeBrains",
    period: "2019 - 2021",
    description: "Built responsive websites and implemented UI designs from Figma mockups.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export const educations = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2017 - 2019",
    description: "Specialized in Web Technologies and Software Engineering",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "National University",
    period: "2013 - 2017",
    description: "Graduated with First Class Honors",
  },
];