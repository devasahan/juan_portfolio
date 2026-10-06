/**
 * Renders the portfolio from window.PORTFOLIO (see js/data.js) and wires up
 * the interactive bits: theme toggle, mobile menu, project filters, active
 * nav highlighting, scroll reveals, and copy-to-clipboard.
 */
(function () {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) {
    console.error("Portfolio content not found. Make sure js/data.js loads before js/main.js.");
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
    layers:
      '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    wrench:
      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    sparkles:
      '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="M19 3v4M21 5h-4"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
    graduation:
      '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    shield:
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    briefcase:
      '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
  };

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const hasItems = (list) => Array.isArray(list) && list.length > 0;

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

  function hueFrom(text) {
    let hash = 0;
    for (const char of text) hash = (hash * 31 + char.codePointAt(0)) >>> 0;
    return hash % 360;
  }

  function initials(text) {
    return text
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  }

  function mount(name, ...nodes) {
    const root = $(`[data-render="${name}"]`);
    if (root) root.append(...nodes);
  }

  /** Drops a section and its nav link when there's no content for it. */
  function removeSection(id) {
    $(`#${id}`)?.remove();
    $(`.site-nav a[href="#${id}"]`)?.parentElement.remove();
  }

  function socialLinks() {
    if (!hasItems(data.socials)) return null;
    return h(
      "ul",
      { class: "socials" },
      data.socials.map((social) =>
        h(
          "li",
          null,
          h(
            "a",
            { ...linkAttrs(social.url), class: "icon-btn", "aria-label": social.label, title: social.label },
            icon(social.icon),
          ),
        ),
      ),
    );
  }

  /** Staggers reveal animations across a group of siblings. */
  function stagger(nodes, step = 70) {
    nodes.forEach((node, index) => {
      node.classList.add("reveal");
      node.style.setProperty("--delay", `${Math.min(index, 6) * step}ms`);
    });
    return nodes;
  }

  // ---------------------------------------------------------------------------
  // Sections
  // ---------------------------------------------------------------------------

  function renderMeta() {
    if (data.name && data.role) document.title = `${data.name} — ${data.role}`;
    mount("brand", data.name || "Portfolio", h("span", { class: "brand-dot" }, "."));
  }

  function renderHero() {
    const copy = h(
      "div",
      { class: "hero-copy" },
      data.availability &&
        h(
          "p",
          { class: "status-pill" },
          h("span", { class: "status-dot", "aria-hidden": "true" }),
          data.availability,
        ),
      h(
        "h1",
        { class: "hero-title", id: "hero-title" },
        "Hi, I'm ",
        h("span", { class: "accent-text" }, data.shortName || data.name),
        ".",
      ),
      data.role && h("p", { class: "hero-role" }, data.role),
      data.tagline && h("p", { class: "hero-tagline" }, data.tagline),
      h(
        "div",
        { class: "hero-cta" },
        hasItems(data.projects) &&
          h("a", { class: "btn btn-primary", href: "#projects" }, "View my work", icon("arrowRight")),
        h("a", { class: "btn btn-ghost", href: "#contact" }, "Get in touch"),
        data.resume && h("a", { class: "btn btn-ghost", ...linkAttrs(data.resume) }, icon("file"), "Résumé"),
      ),
      socialLinks(),
    );

    stagger(Array.from(copy.children), 90);
    const card = renderCodeCard();
    card.classList.add("reveal");
    card.style.setProperty("--delay", "200ms");
    mount("hero", copy, card);
  }

  /** A small "about me" object styled like an editor window. */
  function renderCodeCard() {
    const varName =
      (data.shortName || data.name || "me")
        .split(/\s+/)[0]
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9_$]/g, "")
        .replace(/^(?=\d)/, "_") || "me";

    const tok = (kind, text) => h("span", { class: `tok-${kind}` }, text);
    const str = (value) => tok("str", JSON.stringify(value));
    const prop = (key, ...value) => ["  ", key, tok("punc", ": "), ...value, tok("punc", ",")];

    const lines = [[tok("kw", "const "), tok("var", varName), tok("punc", " = {")]];
    if (data.role) lines.push(prop("role", str(data.role)));
    if (data.location) lines.push(prop("location", str(data.location)));
    if (hasItems(data.focus)) {
      lines.push(["  focus", tok("punc", ": [")]);
      data.focus.forEach((item) => lines.push(["    ", str(item), tok("punc", ",")]));
      lines.push(["  ", tok("punc", "],")]);
    }
    if (data.availability) lines.push(prop("available", tok("bool", "true")));
    lines.push([tok("punc", "};"), h("span", { class: "cursor" })]);

    const code = h(
      "code",
      null,
      lines.map((parts, index) => [parts, index < lines.length - 1 ? "\n" : null]),
    );

    return h(
      "figure",
      { class: "code-card", "aria-hidden": "true" },
      h(
        "div",
        { class: "code-card-bar" },
        h("span", { class: "dot" }),
        h("span", { class: "dot" }),
        h("span", { class: "dot" }),
        h("span", { class: "code-card-file" }, "about-me.js"),
      ),
      h("pre", null, code),
    );
  }

  function renderAbout() {
    if (!hasItems(data.about) && !hasItems(data.stats)) return removeSection("about");

    const facts = [
      data.location && { icon: "mapPin", label: "Based in", value: data.location },
      hasItems(data.focus) && { icon: "sparkles", label: "Focused on", value: data.focus.join(", ") },
      data.education && { icon: "graduation", label: "Education", value: data.education },
      data.availability && { icon: "briefcase", label: "Status", value: data.availability },
    ].filter(Boolean);

    const copy = h(
      "div",
      { class: "about-copy reveal" },
      (data.about || []).map((paragraph) => h("p", null, paragraph)),
      hasItems(facts) &&
        h(
          "dl",
          { class: "facts" },
          facts.map((fact) =>
            h(
              "div",
              { class: "fact" },
              h("span", { class: "fact-icon" }, icon(fact.icon)),
              h("div", null, h("dt", null, fact.label), h("dd", null, fact.value)),
            ),
          ),
        ),
    );

    const stats =
      hasItems(data.stats) &&
      h(
        "ul",
        { class: "stats" },
        stagger(
          data.stats.map((stat) =>
            h(
              "li",
              { class: "card stat" },
              h("strong", { class: "stat-value" }, stat.value),
              h("span", { class: "stat-label" }, stat.label),
            ),
          ),
        ),
      );

    mount("about", h("div", { class: "about-grid" }, copy, stats));
  }

  function renderSkills() {
    if (!hasItems(data.skills)) return removeSection("skills");

    mount(
      "skills",
      h(
        "ul",
        { class: "skills-grid" },
        stagger(
          data.skills.map((group) =>
            h(
              "li",
              null,
              h(
                "article",
                { class: "card skill-card" },
                h("h3", null, icon(group.icon || "code"), group.group),
                h(
                  "ul",
                  { class: "chips" },
                  group.items.map((item) => h("li", { class: "chip" }, item)),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  function renderProjects() {
    if (!hasItems(data.projects)) return removeSection("projects");

    const cards = data.projects.map((project) => {
      const cover = h(
        "div",
        { class: "project-cover", style: `--hue: ${project.hue ?? hueFrom(project.title)}` },
        project.image
          ? h("img", { src: project.image, alt: `Screenshot of ${project.title}`, loading: "lazy" })
          : h("span", { class: "project-initials", "aria-hidden": "true" }, initials(project.title)),
      );

      const links = [
        project.live &&
          h("a", { class: "text-link", ...linkAttrs(project.live) }, "Live demo", icon("external")),
        project.code &&
          h("a", { class: "text-link", ...linkAttrs(project.code) }, icon("github"), "Source code"),
      ].filter(Boolean);

      const item = h(
        "li",
        null,
        h(
          "article",
          { class: "project-card" },
          cover,
          h(
            "div",
            { class: "project-body" },
            h(
              "div",
              { class: "project-title-row" },
              h("h3", { class: "project-title" }, project.title),
              project.featured && h("span", { class: "badge" }, "Featured"),
            ),
            project.org && h("p", { class: "project-org" }, project.org),
            h("p", { class: "project-desc" }, project.description),
            h(
              "div",
              { class: "project-foot" },
              hasItems(project.tags) &&
                h(
                  "ul",
                  { class: "tags", "aria-label": "Built with" },
                  project.tags.map((tag) => h("li", { class: "tag" }, tag)),
                ),
              hasItems(links) && h("div", { class: "project-links" }, links),
            ),
          ),
        ),
      );
      item.dataset.tags = JSON.stringify(project.tags || []);
      return item;
    });

    const grid = h("ul", { class: "project-grid" }, stagger(cards));

    // Filter by tags that more than one project shares; a one-project tag
    // filters down to a single card and just adds noise.
    const counts = new Map();
    data.projects
      .flatMap((project) => project.tags || [])
      .forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    const tags = [...counts]
      .filter(([, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
    let filters = null;
    if (data.projects.length > 3 && tags.length > 1) {
      const buttons = ["All", ...tags].map((tag) =>
        h(
          "button",
          { class: "filter-btn", type: "button", "aria-pressed": String(tag === "All"), "data-tag": tag },
          tag,
        ),
      );
      filters = h(
        "div",
        { class: "filters reveal", role: "group", "aria-label": "Filter projects by technology" },
        buttons,
      );
      filters.addEventListener("click", (event) => {
        const button = event.target.closest(".filter-btn");
        if (!button) return;
        const selected = button.dataset.tag;
        buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
        cards.forEach((card) => {
          card.hidden = selected !== "All" && !JSON.parse(card.dataset.tags).includes(selected);
          card.classList.add("is-visible");
        });
      });
    }

    mount("projects", filters, grid);
  }

  function renderExperience() {
    if (!hasItems(data.experience)) return removeSection("experience");

    mount(
      "experience",
      h(
        "ol",
        { class: "timeline" },
        stagger(
          data.experience.map((job) =>
            h(
              "li",
              { class: `timeline-item${/present/i.test(job.period || "") ? " is-current" : ""}` },
              h(
                "article",
                { class: "card timeline-card" },
                h(
                  "div",
                  { class: "timeline-head" },
                  h(
                    "h3",
                    { class: "timeline-role" },
                    job.role,
                    job.company && [" · ", h("span", { class: "timeline-company" }, job.company)],
                  ),
                  job.period && h("p", { class: "timeline-period" }, job.period),
                ),
                job.location && h("p", { class: "timeline-location" }, job.location),
                hasItems(job.points) &&
                  h(
                    "ul",
                    { class: "timeline-points" },
                    job.points.map((point) => h("li", null, point)),
                  ),
                hasItems(job.tags) &&
                  h(
                    "ul",
                    { class: "tags" },
                    job.tags.map((tag) => h("li", { class: "tag" }, tag)),
                  ),
              ),
            ),
          ),
          90,
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
          class: "btn btn-ghost",
          type: "button",
          onclick: async () => {
            const ok = await copyText(data.email);
            copyLabel.textContent = ok ? "Copied!" : "Couldn't copy";
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
      data.email &&
        h(
          "div",
          { class: "contact-actions" },
          h("a", { class: "btn btn-primary", href: `mailto:${data.email}` }, icon("mail"), "Say hello"),
          copyButton,
        ),
      data.email && h("p", { class: "contact-email" }, data.email),
      socialLinks(),
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
    mount(
      "footer",
      h("p", null, `© ${new Date().getFullYear()} ${data.name}. Built with HTML, CSS & JavaScript.`),
      h("a", { href: "#top" }, "Back to top ↑"),
    );
  }

  /** Numbers the section eyebrows ("01", "02", …) after empty sections are removed. */
  function numberSections() {
    $$("main .section .eyebrow").forEach((eyebrow, index) => {
      eyebrow.prepend(`${String(index + 1).padStart(2, "0")} — `);
    });
  }

  // ---------------------------------------------------------------------------
  // Interactions
  // ---------------------------------------------------------------------------

  function setupIcons() {
    $$("[data-icon]").forEach((slot) => slot.append(icon(slot.dataset.icon)));
  }

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

  function setupMenu() {
    const header = $(".site-header");
    const toggle = $(".menu-toggle");
    if (!header || !toggle) return;

    const setOpen = (open) => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    $$(".site-nav a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (header.classList.contains("is-open") && !header.contains(event.target)) setOpen(false);
    });
  }

  function setupScrollState() {
    const header = $(".site-header");
    const backToTop = $(".back-to-top");
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      header?.classList.toggle("is-scrolled", y > 8);
      backToTop?.classList.toggle("is-visible", y > 600);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }

  function setupActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    const links = new Map($$(".site-nav a").map((link) => [link.getAttribute("href").slice(1), link]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link, id) => {
            const active = id === entry.target.id;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    // The hero has no nav link, so observing it clears the highlight at the top.
    $$("main > section[id]").forEach((section) => observer.observe(section));
  }

  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    items.forEach((item) => observer.observe(item));
  }

  // ---------------------------------------------------------------------------
  // Boot
  // ---------------------------------------------------------------------------

  renderMeta();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
  renderFooter();
  numberSections();

  setupIcons();
  setupTheme();
  setupMenu();
  setupScrollState();
  setupActiveNav();
  setupReveal();
})();
