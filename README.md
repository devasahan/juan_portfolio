# Juan — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript: no framework, no build step, no dependencies.

**Features**

- Hero, About, Skills, Projects, Experience, and Contact sections
- All personal content lives in one file, [`js/data.js`](js/data.js)
- Light and dark themes (follows the system setting, with a manual toggle that's remembered)
- Responsive from small phones to wide desktops, with a mobile menu
- Project filtering by technology, generated project covers when there's no screenshot
- Accessible: semantic markup, skip link, keyboard-friendly, respects reduced-motion
- Subtle scroll-reveal animations and active-section highlighting in the nav

## Run it locally

Open `index.html` in a browser, or serve the folder (recommended, so the copy-email button can use the clipboard):

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Make it yours

1. **Edit [`js/data.js`](js/data.js).** Every placeholder is marked `TODO`. This file controls your name, role, tagline, location, email, social links, about text, stats, skills, projects, and experience.
   - Remove a section by emptying its array (e.g. `experience: []`); its nav link disappears too.
   - Set `availability: ""` to hide the "available" badge.
2. **Add project screenshots** (optional): put images in `assets/projects/` and set each project's `image`, e.g. `"assets/projects/taskflow.png"`. A 16:9 ratio looks best.
3. **Add your résumé** (optional): drop `resume.pdf` into `assets/` and set `resume: "assets/resume.pdf"`.
4. **Update the `<head>` in [`index.html`](index.html):** the `<title>`, `description`, and `og:` tags. Link previews on LinkedIn, Slack, and X read these directly.
5. **Section headings and the contact blurb** are plain text in `index.html` if you want to reword them.
6. **Colors and fonts** are CSS variables at the top of [`css/styles.css`](css/styles.css). Change `--accent` and `--accent-2` to re-theme the whole site.
7. **Favicon:** edit the letter in [`assets/favicon.svg`](assets/favicon.svg).

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
└── assets/           # Favicon, project images, résumé
```
