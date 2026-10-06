# Juan Daniel Ramirez — Portfolio

Portfolio site for Juan Daniel Ramirez, Senior Applied AI Engineer. Built with plain HTML, CSS, and JavaScript: no framework, no build step, no dependencies.

**Features**

- Hero, About, Skills, Projects, and Contact sections
- All personal content lives in one file, [`js/data.js`](js/data.js)
- Light and dark themes (follows the system setting, with a manual toggle that's remembered)
- Responsive from small phones to wide desktops, with a mobile menu
- Project filtering by technology, generated project covers when there's no screenshot
- Accessible: semantic markup, skip link, keyboard-friendly, respects reduced-motion
- Subtle scroll-reveal animations and active-section highlighting in the nav

## Run it locally

You need [Node.js](https://nodejs.org) 18+ and [Git](https://git-scm.com). Get the code once with Git:

```bash
git clone -b claude/portfolio-build-qmphso https://github.com/devasahan/juan_portfolio.git
cd juan_portfolio
npm run dev
```

`npm run dev` opens the site at http://localhost:3000. While it runs:

- **Saving a file reloads the browser.**
- **New changes pushed to GitHub show up automatically.** It checks every 30 seconds, pulls anything new, and the page reloads. It never overwrites edits you've made locally; if an update touches a file you've changed, it skips the update and tells you which file.

There's no `npm install` and no build step. Press `Ctrl+C` to stop. Next time, open the folder and run `npm run dev` again; it pulls anything you missed when it starts.

## Update the content

1. **Edit [`js/data.js`](js/data.js).** This file controls the name, role, tagline, location, education, email, social links, about text, stats, skills, and projects.
   - Remove a section by emptying its array (e.g. `stats: []`); its nav link disappears too.
   - Set `availability` (e.g. `"Open to new opportunities"`) to show a status badge; `""` hides it.
2. **Add project screenshots** (optional): put images in `assets/projects/` and set each project's `image`, e.g. `"assets/projects/taskflow.png"`. A 16:9 ratio looks best.
3. **Update the `<head>` in [`index.html`](index.html):** the `<title>`, `description`, and `og:` tags. Link previews on LinkedIn, Slack, and X read these directly.
4. **Section headings and the contact blurb** are plain text in `index.html` if you want to reword them.
5. **Colors and fonts** are CSS variables at the top of [`css/styles.css`](css/styles.css). Change `--accent` and `--accent-2` to re-theme the whole site.
6. **Favicon:** edit the letter in [`assets/favicon.svg`](assets/favicon.svg).

## Deploy

**GitHub Pages:** go to **Settings → Pages**, set **Source** to _Deploy from a branch_, and pick the branch with the site (usually `main`) and `/ (root)`. The site will be live at `https://<username>.github.io/juan_portfolio/` within a minute or two.

**Netlify / Vercel / Cloudflare Pages:** import the repo with no build command and `/` as the output directory.

## Project structure

```
.
├── index.html        # Page structure and <head> metadata
├── css/styles.css    # Design tokens, layout, and components
├── js/data.js        # ← Your content
├── js/main.js        # Renders data.js and handles interactions
├── assets/           # Favicon and project images
├── package.json      # `npm run dev` script (no dependencies)
└── scripts/dev-server.mjs  # Local server that reloads on save
```
