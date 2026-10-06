/**
 * Portfolio content: edit this file to update the site.
 *
 * Everything personal on the page is rendered from this object, so updating
 * your info shouldn't require touching index.html or main.js. Remove an
 * array's items (e.g. `experience: []`) to hide that section entirely.
 *
 * Available icon names: github, linkedin, x, mail, globe, code, layers,
 * wrench, sparkles, search, database, cloud, shield, file, mapPin,
 * briefcase, graduation.
 */
window.PORTFOLIO = {
  name: "Juan Daniel Ramirez",
  shortName: "Juan", // used in the hero greeting
  role: "Senior Applied AI Engineer",
  tagline:
    "I build production AI systems for regulated industries: multi-agent RAG, LLM features with guardrails and evals, and the data pipelines that feed them.",
  location: "Texas, United States",
  education: "Bachelor's in Computer Science, Fontbonne University",
  availability: "", // e.g. "Open to new opportunities" shows a status badge
  email: "juandanielramirezjr1@gmail.com",
  resume: "assets/Juan_Daniel_Ramirez_Resume.pdf", // "" hides the résumé button
  focus: ["RAG & AI agents", "LLM evaluation", "Healthcare, FinTech & EdTech"],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/juan-ramirez-127360365/", icon: "linkedin" },
    { label: "Email", url: "mailto:juandanielramirezjr1@gmail.com", icon: "mail" },
  ],

  about: [
    "I'm a Senior Applied AI Engineer with 7+ years of experience building secure platforms in regulated industries: healthcare, FinTech, EdTech, and online marketplaces.",
    "Most recently I've been shipping multi-agent RAG systems for clinical workflows, production LLM features with guardrails and evaluations, and the data pipelines behind them. Before moving into AI, I engineered digital banking services used by more than 500,000 people.",
  ],

  stats: [
    { value: "7+", label: "Years building production software" },
    { value: "500K+", label: "Users on banking services I engineered" },
    { value: "30–40%", label: "Less clinician documentation time" },
    { value: "120+", label: "Hours of manual reporting automated monthly" },
  ],

  skills: [
    {
      group: "Languages & frameworks",
      icon: "code",
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "SQL",
        "FastAPI",
        "Node.js",
        "Express.js",
        "React",
      ],
    },
    {
      group: "AI & LLMs",
      icon: "sparkles",
      items: [
        "OpenAI",
        "Claude",
        "Claude Code",
        "Gemini",
        "Vertex AI",
        "LangChain",
        "LangGraph",
        "Multi-agent systems",
        "A2A",
        "MCP",
      ],
    },
    {
      group: "Retrieval & LLMOps",
      icon: "search",
      items: [
        "Hybrid RAG",
        "Embeddings",
        "Vector search",
        "BM25",
        "Knowledge graphs",
        "LLM evals",
        "Langfuse",
        "Guardrails",
      ],
    },
    {
      group: "Data & messaging",
      icon: "database",
      items: [
        "PostgreSQL",
        "pgvector",
        "Redis",
        "BigQuery",
        "Feast",
        "ETL/ELT pipelines",
        "Spring Batch",
        "Celery",
        "RabbitMQ",
      ],
    },
    {
      group: "Cloud & DevOps",
      icon: "cloud",
      items: [
        "Google Cloud",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      group: "Security & compliance",
      icon: "shield",
      items: ["OAuth 2.0", "RBAC", "PII redaction (Presidio)", "HIPAA", "NIST AI RMF", "Audit logging"],
    },
  ],

  projects: [
    // `image`, `live`, and `code` are optional. Without an image the card gets
    // a generated cover; without links the card simply has none.
    {
      title: "Clinical RAG Platform",
      org: "Lindy · Healthcare",
      description:
        "A multi-agent hybrid RAG platform for clinical workflows that combines EHR context, knowledge graphs, and vector retrieval. It cut clinician documentation time by 30–40% with HIPAA-compliant auditability.",
      tags: ["AI agents", "RAG", "LangGraph", "Vertex AI", "LLM evals", "Guardrails"],
      featured: true,
    },
    {
      title: "Due Diligence Assistant",
      org: "Acquire.com · Marketplace",
      description:
        "When an offer is accepted, a background job redacts PII with Microsoft Presidio, then an LLM adapts an M&A advisor's checklist to the business type. Every task is validated before saving, so no deal goes without a checklist.",
      tags: ["OpenAI", "Structured output", "LLM evals", "Celery", "PostgreSQL"],
    },
    {
      title: "Buyer–Listing Matching",
      org: "Acquire.com · Marketplace",
      description:
        "Semantic matching between buyers and businesses for sale, pairing vector similarity search with budget and business-type filters and LLM-written match explanations.",
      tags: ["OpenAI", "Embeddings", "pgvector", "PostgreSQL"],
    },
    {
      title: "Conversation Starters",
      org: "Acquire.com · Marketplace",
      description:
        "Generates 3–5 listing-specific questions that help buyers open conversations with sellers, with guardrails, per-listing caching to cut inference costs, full prompt tracing, and an A/B test on replies.",
      tags: ["OpenAI", "FastAPI", "Structured output", "Guardrails", "Redis", "Langfuse"],
    },
    {
      title: "Student Records Chatbot",
      org: "Orbital Education · EdTech",
      description:
        "Lets school staff ask plain-English questions about attendance, grades, and records for 5,000+ students, answered from the reporting database through function calling with role-based access control.",
      tags: ["OpenAI", "Function calling", "PostgreSQL", "RBAC"],
    },
    {
      title: "Rubric-Based Grading",
      org: "Orbital Education · EdTech",
      description:
        "Scores short-answer and essay responses against a rubric and returns structured feedback that teachers review and approve before any grade is recorded.",
      tags: ["OpenAI", "Structured output", "Human-in-the-loop"],
    },
  ],

  experience: [
    // Most recent first; a period containing "Present" marks the current role.
    {
      role: "Applied AI Engineer",
      company: "Lindy",
      period: "Feb 2025 – Present",
      location: "San Francisco, California · Remote",
      points: [
        "Led architecture and production deployment of a multi-agent hybrid RAG platform for clinical workflows, cutting clinician documentation time by 30–40% with HIPAA-compliant auditability.",
        "Built a hybrid retrieval layer combining BM25, dense vector retrieval, metadata filtering, and graph-linked records, improving answer relevance and reducing hallucinations.",
        "Designed agent orchestration in LangChain and LangGraph on the A2A protocol with an MCP layer for state handoffs, tool authorization, and encrypted context passing.",
        "Established an agent evaluation framework with A/B tests, model evals, drift detection, and automated rollback triggers to support safe continuous deployment.",
      ],
      tags: ["LangGraph", "A2A", "MCP", "Vertex AI", "BigQuery"],
    },
    {
      role: "AI Engineer",
      company: "Acquire.com",
      period: "Jul 2024 – Feb 2025",
      location: "San Francisco, California · Remote",
      points: [
        "Shipped AI-generated, listing-specific questions that help buyers start conversations with sellers, with guardrails, Redis caching, Langfuse tracing, and an A/B test.",
        "Built an AI due diligence task manager that redacts PII with Microsoft Presidio and adapts an M&A advisor's checklist to each business type.",
        "Designed semantic buyer–listing matching on OpenAI embeddings with PostgreSQL and pgvector.",
        "Provisioned the infrastructure for all three AI features with Terraform.",
      ],
      tags: ["FastAPI", "OpenAI", "Celery", "pgvector", "Terraform"],
    },
    {
      role: "AI Engineer",
      company: "Orbital Education",
      period: "Jun 2021 – Jun 2024",
      location: "Dallas, Texas · On-site",
      points: [
        "Built an LLM chatbot that answers staff questions about attendance, grades, and records for 5,000+ students using function calling with role-based access control.",
        "Developed rubric-based LLM grading with structured feedback that teachers approve before grades are recorded.",
        "Engineered OCR and LLM document extraction and Spring Batch ETL pipelines processing about 30,000 records nightly, eliminating 120+ hours of manual reporting each month.",
        "Led a team of three engineers across technical planning, mentoring, code reviews, and production delivery.",
      ],
      tags: ["OpenAI", "Java", "Spring Batch", "PostgreSQL"],
    },
    {
      role: "Software Engineer",
      company: "Q2 Holdings",
      period: "May 2020 – May 2021",
      location: "Austin, Texas · On-site",
      points: [
        "Engineered TypeScript (Node.js) and Python microservices for a regulated digital banking platform serving 500,000+ users.",
        "Developed secure REST APIs on AWS with OAuth 2.0, PostgreSQL, and Redis for web, iOS, and Android apps.",
        "Cleared peak-load backlogs by tuning Celery and Redis with dedicated queues, worker concurrency, pipelining, and connection pooling.",
        "Helped build CI/CD pipelines and automated testing standards adopted by more than 15 internal teams.",
      ],
      tags: ["TypeScript", "Python", "AWS", "RabbitMQ", "Jenkins"],
    },
    {
      role: "Software Engineer (Part-Time)",
      company: "Bottle Rocket",
      period: "Mar 2019 – May 2020",
      location: "Dallas, Texas · On-site",
      points: [
        "Maintained and modernized client web apps in React and Node.js, improving stability, performance, and maintainability.",
        "Built REST APIs with Express.js to power React front ends and integrate third-party services.",
        "Fixed memory leaks, blocked event loops, slow API responses, and unnecessary re-renders using Chrome DevTools, the React Profiler, and the Node.js inspector.",
      ],
      tags: ["React", "Node.js", "Express.js", "AWS"],
    },
  ],
};
