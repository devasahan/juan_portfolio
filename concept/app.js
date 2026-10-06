/**
 * Design concept: renders the same content as the main site (../js/data.js)
 * in a recruiter-first layout. Identity is pinned on the left; impact, work,
 * skills, and contact scroll on the right.
 */
(function () {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) {
    console.error("Portfolio content not found. Make sure js/data.js loads before concept/app.js.");
    return;
  }

  // Icon paths adapted from Lucide (ISC license) and Tabler (MIT license).
  const ICONS = {
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    x: '<path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46L20 4"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
    external:
      '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    sparkles:
      '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="M19 3v4M21 5h-4"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    shield:
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    layers:
      '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    wrench:
      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    briefcase:
      '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    graduation:
      '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  };

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const hasItems = (list) => Array.isArray(list) && list.length > 0;
  const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;

  /** Minimal element builder: h("a", { href: "#" }, "text", childNode, [more]). */
  function h(tag, props, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props || {})) {
      if (value == null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat(Infinity)) {
      if (child == null || child === false || child === "") continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  function icon(name) {
    const template = document.createElement("template");
    template.innerHTML =
      `<svg class="icon icon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
      `stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">` +
      `${ICONS[name] || ICONS.globe}</svg>`;
    return template.content.firstElementChild;
  }

  function linkAttrs(url) {
    return /^https?:\/\//i.test(url)
      ? { href: url, target: "_blank", rel: "noopener noreferrer" }
      : { href: url };
  }

  function mount(name, ...nodes) {
    const root = $(`[data-render="${name}"]`);
    if (root) root.append(...nodes);
  }

  function removeSection(id) {
    $(`#${id}`)?.remove();
  }

  /** "30–40% less documentation time" -> { value: "30–40%", label: "less documentation time" } */
  function splitResult(text) {
    const match = /^(\S*\d\S*)\s+(.+)$/.exec(text);
    return match ? { value: match[1], label: match[2] } : { value: "", label: text };
  }

  // Profiles other than email; email gets its own button.
  const profiles = (data.socials || []).filter((social) => !social.url.startsWith("mailto:"));

  // ---------------------------------------------------------------------------
  // Sections
  // ---------------------------------------------------------------------------

  function renderProfile() {
    const meta = [
      data.location && [icon("mapPin"), data.location],
      data.experienceYears && [icon("briefcase"), `${data.experienceYears} years in production`],
    ].filter(Boolean);

    // Each nav entry says what's inside, so a recruiter knows where to jump.
    const sections = [
      { id: "about", label: "About" },
      { id: "impact", label: "Impact", hint: hasItems(data.stats) && plural(data.stats.length, "result") },
      {
        id: "work",
        label: "Selected work",
        hint: hasItems(data.projects) && plural(data.projects.length, "project"),
      },
      { id: "skills", label: "Skills", hint: hasItems(data.skills) && plural(data.skills.length, "area") },
      { id: "contact", label: "Contact" },
    ].filter((section) => document.getElementById(section.id));

    const nav = h(
      "nav",
      { class: "toc", "aria-label": "Sections" },
      h(
        "ol",
        null,
        sections.map((section) =>
          h(
            "li",
            null,
            h(
              "a",
              { href: `#${section.id}` },
              h("span", { class: "toc-dot", "aria-hidden": "true" }),
              section.label,
              section.hint && h("span", { class: "toc-hint" }, section.hint),
            ),
          ),
        ),
      ),
    );

    const themeToggle = h(
      "button",
      { class: "icon-btn theme-toggle", type: "button", "aria-label": "Toggle dark mode" },
      h("span", { "data-icon": "sun" }, icon("sun")),
      h("span", { "data-icon": "moon" }, icon("moon")),
    );

    mount(
      "profile",
      h(
        "div",
        { class: "profile-intro" },
        data.availability &&
          h(
            "p",
            { class: "status" },
            h("span", { class: "status-dot", "aria-hidden": "true" }),
            data.availability,
          ),
        h("h1", { class: "profile-name" }, data.name),
        data.role &&
          h("p", { class: "profile-role" }, [data.role, data.specialty].filter(Boolean).join(" · ")),
        data.tagline && h("p", { class: "profile-pitch" }, data.tagline),
        hasItems(meta) &&
          h(
            "ul",
            { class: "profile-meta" },
            meta.map((item) => h("li", null, item)),
          ),
        nav,
      ),
      h(
        "div",
        { class: "profile-actions" },
        data.email &&
          h("a", { class: "btn btn-primary", href: `mailto:${data.email}` }, icon("mail"), "Email me"),
        profiles.map((social) =>
          h(
            "a",
            { ...linkAttrs(social.url), class: "icon-btn", "aria-label": social.label, title: social.label },
            icon(social.icon),
          ),
        ),
        themeToggle,
      ),
    );
  }

  function renderAbout() {
    if (!hasItems(data.about)) return removeSection("about");
    mount(
      "about",
      h(
        "div",
        { class: "about" },
        data.about.map((paragraph) => h("p", null, paragraph)),
        data.education && h("p", { class: "about-edu" }, icon("graduation"), data.education),
      ),
    );
  }

  function renderImpact() {
    if (!hasItems(data.stats)) return removeSection("impact");
    mount(
      "impact",
      h(
        "ul",
        { class: "metrics" },
        data.stats.map((stat) =>
          h(
            "li",
            { class: "metric" },
            h("strong", { class: "metric-value" }, stat.value),
            h("span", { class: "metric-label" }, stat.label),
            stat.source && h("span", { class: "metric-source" }, stat.source),
          ),
        ),
      ),
    );
  }

  function tagList(tags) {
    return (
      hasItems(tags) &&
      h(
        "ul",
        { class: "tags", "aria-label": "Built with" },
        tags.map((tag) => h("li", { class: "tag" }, tag)),
      )
    );
  }

  function caseLinks(project) {
    const links = [
      project.live && h("a", linkAttrs(project.live), "Live demo", icon("external")),
      project.code && h("a", linkAttrs(project.code), icon("github"), "Source code"),
    ].filter(Boolean);
    return hasItems(links) && h("div", { class: "case-links" }, links);
  }

  function renderPipeline(project) {
    const steps = [];
    project.pipeline.forEach((stage, index) => {
      if (index > 0) {
        steps.push(h("li", { class: "connector", "aria-hidden": "true" }, h("span", { class: "flow" })));
      }
      steps.push(
        h(
          "li",
          { class: "stage" },
          h("p", { class: "stage-label" }, stage.stage),
          h(
            "ul",
            { class: "stage-items" },
            stage.items.map((item) => h("li", null, item)),
          ),
        ),
      );
    });

    return h(
      "figure",
      { class: "pipeline" },
      h("ol", { class: "pipeline-stages", "aria-label": "How it works" }, steps),
      project.pipelineNote && h("figcaption", { class: "pipeline-caption" }, project.pipelineNote),
    );
  }

  function renderFeatured(project) {
    const result = project.result && splitResult(project.result);
    return h(
      "article",
      { class: "case-featured" },
      h(
        "div",
        { class: "case-meta" },
        project.org && h("span", { class: "case-org" }, project.org),
        h("span", { class: "badge" }, "Featured"),
      ),
      h("h3", { class: "case-title" }, project.title),
      result &&
        h(
          "p",
          { class: "case-result" },
          result.value && h("strong", { class: "case-result-value" }, result.value),
          h("span", { class: "case-result-label" }, result.label),
        ),
      h("p", { class: "case-desc" }, project.description),
      hasItems(project.pipeline) && renderPipeline(project),
      tagList(project.tags),
      caseLinks(project),
    );
  }

  function renderCaseRow(project) {
    return h(
      "li",
      { class: "case-row" },
      project.org && h("p", { class: "case-org" }, project.org),
      h("h3", { class: "case-row-title" }, project.title),
      h("p", { class: "case-desc" }, project.description),
      project.result && h("p", { class: "case-row-result" }, icon("check"), project.result),
      tagList(project.tags),
      caseLinks(project),
    );
  }

  function renderWork() {
    if (!hasItems(data.projects)) return removeSection("work");
    const featured = data.projects.find((project) => project.featured) || data.projects[0];
    const rest = data.projects.filter((project) => project !== featured);
    mount(
      "work",
      renderFeatured(featured),
      hasItems(rest) && h("ul", { class: "cases" }, rest.map(renderCaseRow)),
    );
  }

  function renderSkills() {
    if (!hasItems(data.skills)) return removeSection("skills");
    mount(
      "skills",
      h(
        "dl",
        { class: "skill-table" },
        data.skills.map((group) =>
          h(
            "div",
            { class: "skill-row" },
            h("dt", null, icon(group.icon || "code"), group.group),
            h(
              "dd",
              null,
              h(
                "ul",
                { class: "skill-list" },
                group.items.map((item) => h("li", null, item)),
              ),
            ),
          ),
        ),
      ),
    );
  }

  function renderContact() {
    const copyLabel = h("span", { "aria-live": "polite" }, "Copy email");
    let resetTimer;
    const copyButton =
      data.email &&
      h(
        "button",
        {
          class: "btn btn-quiet",
          type: "button",
          onclick: async () => {
            const ok = await copyText(data.email);
            copyLabel.textContent = ok ? "Copied" : "Couldn't copy";
            copyButton.firstElementChild.replaceWith(icon(ok ? "check" : "copy"));
            clearTimeout(resetTimer);
            resetTimer = setTimeout(() => {
              copyLabel.textContent = "Copy email";
              copyButton.firstElementChild.replaceWith(icon("copy"));
            }, 2000);
          },
        },
        icon("copy"),
        copyLabel,
      );

    mount(
      "contact",
      h("p", { class: "contact-title" }, "Let's talk."),
      h("p", { class: "contact-text" }, "Email is the fastest way to reach me."),
      data.email && h("a", { class: "contact-email", href: `mailto:${data.email}` }, data.email),
      h(
        "div",
        { class: "contact-actions" },
        copyButton,
        profiles.map((social) =>
          h("a", { ...linkAttrs(social.url), class: "btn btn-quiet" }, icon(social.icon), social.label),
        ),
      ),
    );
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Clipboard API unavailable (e.g. non-HTTPS); fall back to a hidden textarea.
      const area = h("textarea", { readonly: true, style: "position:fixed;top:0;left:0;opacity:0" });
      area.value = text;
      document.body.append(area);
      area.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      area.remove();
      return ok;
    }
  }

  function renderFooter() {
    mount("footer", `© ${new Date().getFullYear()} ${data.name}`);
  }

  // ---------------------------------------------------------------------------
  // Interactions
  // ---------------------------------------------------------------------------

  function setupTheme() {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const current = () => root.dataset.theme || (prefersDark.matches ? "dark" : "light");

    $(".theme-toggle")?.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be blocked (private mode); the toggle still works for this visit.
      }
    });
  }

  /** Marks the nav entry for the section in the middle of the screen. */
  function setupActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    const links = $$(".toc a");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    $$(".content > section[id]").forEach((section) => observer.observe(section));
  }

  // ---------------------------------------------------------------------------
  // Boot
  // ---------------------------------------------------------------------------

  if (data.name && data.role) document.title = `${data.name} — ${data.role}`;
  renderAbout();
  renderImpact();
  renderWork();
  renderSkills();
  renderContact();
  renderFooter();
  renderProfile();

  setupTheme();
  setupActiveNav();
})();
