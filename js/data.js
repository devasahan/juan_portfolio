/**
 * Portfolio content: edit this file to make the site yours.
 *
 * Everything personal on the page is rendered from this object, so updating
 * your info shouldn't require touching index.html or main.js. Values marked
 * TODO are placeholders. Remove an array's items (e.g. `experience: []`) to
 * hide that section entirely.
 *
 * Available icon names: github, linkedin, x, mail, globe, code, layers,
 * wrench, sparkles, file, mapPin, briefcase.
 */
window.PORTFOLIO = {
  name: "Juan", // TODO: your name as you want it shown
  role: "Software Developer", // TODO
  tagline: "I design and build fast, accessible web apps, from polished interfaces to the APIs behind them.",
  location: "Your City, Country", // TODO
  availability: "Available for new opportunities", // "" hides the status badge
  email: "hello@example.com", // TODO
  resume: "", // e.g. "assets/resume.pdf"; "" hides the résumé button
  focus: ["Web apps", "APIs", "UI engineering"],

  socials: [
    // TODO: point these at your profiles, or remove the ones you don't use
    { label: "GitHub", url: "https://github.com/your-username", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile", icon: "linkedin" },
    { label: "X (Twitter)", url: "https://x.com/your-handle", icon: "x" },
  ],

  about: [
    // TODO: one string per paragraph
    "I'm a developer who loves turning ideas into products people enjoy using. I care about clean code, thoughtful design, and the small details that make software feel effortless.",
    "Lately I've been focused on full-stack web development with modern JavaScript tooling. When I'm not coding, you'll find me exploring new tech, tinkering with side projects, or learning something new.",
  ],

  stats: [
    // TODO
    { value: "3+", label: "Years of experience" },
    { value: "15+", label: "Projects shipped" },
    { value: "10+", label: "Technologies used" },
    { value: "5+", label: "Happy clients" },
  ],

  skills: [
    // TODO
    {
      group: "Languages",
      icon: "code",
      items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    },
    {
      group: "Frameworks",
      icon: "layers",
      items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      group: "Tools & platforms",
      icon: "wrench",
      items: ["Git & GitHub", "Docker", "Figma", "Vercel", "Firebase", "PostgreSQL"],
    },
    {
      group: "Practices",
      icon: "sparkles",
      items: ["Responsive design", "Accessibility", "REST APIs", "Testing", "CI/CD"],
    },
  ],

  projects: [
    // TODO: `image` is optional (e.g. "assets/projects/taskflow.png"); without
    // one, the card gets a generated cover. `live` and `code` are optional too.
    {
      title: "Taskflow",
      description:
        "A real-time task board for small teams with drag-and-drop, offline support, and keyboard shortcuts.",
      tags: ["React", "TypeScript", "Firebase"],
      image: "",
      live: "https://example.com",
      code: "https://github.com/your-username/taskflow",
      featured: true,
    },
    {
      title: "ShopLite API",
      description:
        "A REST API for a small online store covering products, carts, and orders, with auth and a checkout-ready flow.",
      tags: ["Node.js", "Express", "PostgreSQL"],
      image: "",
      live: "",
      code: "https://github.com/your-username/shoplite-api",
    },
    {
      title: "Weatherly",
      description:
        "A minimal weather app with hourly forecasts, location search, and a clean, accessible interface.",
      tags: ["JavaScript", "REST APIs", "CSS"],
      image: "",
      live: "https://example.com",
      code: "https://github.com/your-username/weatherly",
    },
    {
      title: "This Portfolio",
      description:
        "The site you're looking at: hand-built with plain HTML, CSS, and JavaScript, with no framework or build step.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "",
      live: "",
      code: "https://github.com/devasahan/juan_portfolio",
    },
  ],

  experience: [
    // TODO: most recent first; a period containing "Present" marks the current role
    {
      role: "Software Developer",
      company: "Company Name",
      period: "2024 — Present",
      location: "Remote",
      points: [
        "Build and maintain customer-facing features for a web app used by thousands of people.",
        "Cut page load times by improving bundle size, caching, and image delivery.",
        "Collaborate with design and product to ship features from idea to production.",
      ],
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      role: "Junior Web Developer",
      company: "Another Company",
      period: "2022 — 2024",
      location: "Your City",
      points: [
        "Developed responsive marketing sites and internal dashboards.",
        "Introduced component-based patterns that sped up new page development.",
      ],
      tags: ["JavaScript", "CSS", "PHP"],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2021 — 2022",
      location: "Remote",
      points: ["Designed and built websites for small businesses and local organizations."],
      tags: ["HTML", "CSS", "WordPress"],
    },
  ],
};
