/**
 * Portfolio content: edit this file to update the site.
 *
 * Everything personal on the page is rendered from this object, so updating
 * your info shouldn't require touching index.html or main.js. Remove an
 * array's items (e.g. `stats: []`) to hide that section entirely.
 *
 * Available icon names: github, linkedin, x, mail, globe, code, layers,
 * wrench, sparkles, search, database, cloud, shield, mapPin,
 * briefcase, graduation.
 */
window.PORTFOLIO = {
  name: "Juan Daniel Ramirez",
  shortName: "Juan", // used in the hero greeting
  role: "Senior Software Engineer",
  specialty: "AI & backend",
  tagline:
    "I design and build backend systems and production AI features: APIs, microservices, data pipelines, and LLM-powered services for regulated industries.",
  location: "Texas, United States",
  experienceYears: "7+",
  education: "Bachelor's in Computer Science, Fontbonne University",
  availability: "", // e.g. "Open to new opportunities" shows a status badge
  email: "juandanielramirezjr1@gmail.com",
  focus: ["Backend & APIs", "AI & LLM systems", "Data pipelines"],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/juan-ramirez-127360365/", icon: "linkedin" },
    { label: "Email", url: "mailto:juandanielramirezjr1@gmail.com", icon: "mail" },
  ],

  about: [
    "I'm a senior software engineer with 7+ years of experience building secure, reliable backend systems for regulated industries: healthcare, FinTech, EdTech, and online marketplaces.",
    "I specialize in backend engineering and AI: microservices and REST APIs, data pipelines and messaging, and production LLM features with guardrails and evaluations. That work ranges from digital banking services used by more than 500,000 people to a multi-agent RAG platform that cut clinician documentation time by 30–40%.",
  ],

  stats: [
    // `source` says where the number comes from.
    { value: "500K+", label: "Users on banking services I engineered", source: "Q2 Holdings" },
    { value: "~30K", label: "Records processed nightly by my ETL pipelines", source: "Orbital Education" },
    { value: "120+", label: "Hours of manual reporting automated monthly", source: "Orbital Education" },
    { value: "30–40%", label: "Less clinician documentation time", source: "Lindy" },
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
      group: "Databases & messaging",
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
      group: "Security & compliance",
      icon: "shield",
      items: ["OAuth 2.0", "RBAC", "PII redaction (Presidio)", "HIPAA", "NIST AI RMF", "Audit logging"],
    },
  ],

  projects: [
    // `image`, `live`, and `code` are optional. Without an image the card gets
    // a generated cover; without links the card simply has none. `result` and
    // `pipeline` are optional extras that the concept design shows.
    {
      title: "Clinical RAG Platform",
      org: "Lindy · Healthcare",
      description:
        "A multi-agent RAG platform for clinical workflows that combines EHR context, knowledge graphs, and vector retrieval, running on GCP inference pipelines with on-prem/cloud routing, low-latency autoscaling, and HIPAA-compliant auditability.",
      tags: ["AI agents", "RAG", "LangGraph", "Vertex AI", "LLM evals", "Guardrails"],
      featured: true,
      result: "30–40% less clinician documentation time",
      pipeline: [
        { stage: "Capture", items: ["Voice capture", "Speech-to-text"] },
        {
          stage: "Retrieve",
          items: ["BM25 keyword search", "Vector search", "Metadata filters", "Knowledge graph"],
        },
        { stage: "Generate", items: ["Summarization agent", "EHR-intent agent"] },
        { stage: "Safeguard", items: ["Evals & drift checks", "Guardrails", "Audit log"] },
      ],
      pipelineNote:
        "Agents are orchestrated with LangGraph on the A2A protocol, with an MCP layer for tool authorization and encrypted context passing.",
    },
    {
      title: "Digital Banking Microservices",
      org: "Q2 Holdings · FinTech",
      description:
        "TypeScript (Node.js) and Python microservices for authentication, accounts, investments, and transactions on a regulated banking platform, with secure REST APIs on AWS and RabbitMQ messaging to decouple transaction events.",
      tags: ["TypeScript", "Node.js", "Python", "AWS", "OAuth 2.0", "RabbitMQ", "PostgreSQL", "Redis"],
      result: "500K+ users across web, iOS, and Android",
    },
    {
      title: "Student Data Pipelines",
      org: "Orbital Education · EdTech",
      description:
        "Spring Batch ETL pipelines on Quartz schedules that consolidate student, attendance, and grading data into audit-ready PostgreSQL reporting models, hardened with restartable steps, skip policies, and failure alerts.",
      tags: ["Java", "Spring Batch", "PostgreSQL", "ETL"],
      result: "~30,000 records nightly, replacing 120+ hours of manual reporting a month",
    },
    {
      title: "Due Diligence Assistant",
      org: "Acquire.com · Marketplace",
      description:
        "When an offer is accepted, a background job redacts PII with Microsoft Presidio, then an LLM adapts an M&A advisor's checklist to the business type. Every task is validated before saving, so no deal goes without a checklist.",
      tags: ["OpenAI", "Structured output", "LLM evals", "Celery", "PostgreSQL"],
    },
    {
      title: "Peak-Load Queue Tuning",
      org: "Q2 Holdings · FinTech",
      description:
        "Diagnosed Celery and Redis bottlenecks with Flower and Redis SLOWLOG, then routed long-running tasks to dedicated queues, tuned worker concurrency and prefetch, and added pipelining and connection pooling.",
      tags: ["Python", "Celery", "Redis"],
      result: "Cleared task backlogs at peak load",
    },
    {
      title: "Buyer–Listing Matching",
      org: "Acquire.com · Marketplace",
      description:
        "Semantic matching between buyers and businesses for sale, pairing vector similarity search with budget and business-type filters and LLM-written match explanations.",
      tags: ["OpenAI", "Embeddings", "pgvector", "PostgreSQL"],
    },
  ],
};
