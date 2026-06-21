# AGENTS.md

## Stack
- Astro 5 static site (`src/pages/index.astro` is the only route).
- ESM (`"type": "module"` in `package.json`).
- TypeScript extends `astro/tsconfigs/strict`; auto-generated types live in `.astro/types.d.ts` (gitignored).
- Three.js (`three` + `@types/three`) powers the `<canvas class="sky-canvas">` in `src/components/Jumbotron.astro`.

## Commands
- `npm run dev` — local dev server.
- `npm run build` — produces `./dist` (this is what GH Pages deploys).
- `npm run preview` — preview the built site.
- There are **no `test`, `lint`, `format`, or `typecheck` scripts** defined. Do not invent them; if verification is needed, `npm run build` is the only available check.

## Site base path (important)
`astro.config.mjs` sets `site: 'https://adonisdaniel.github.io'` and `base: '/portfolio'`. The site is served from `https://adonisdaniel.github.io/portfolio/`, so:
- Any hardcoded asset path in markup must be prefixed with `/portfolio/` (see `src/layouts/Layout.astro` favicon/font/main.css links).
- Internal links and `<a href="/...">` values likewise need the `/portfolio/` prefix.

## Deployment
- `.github/workflows/deploy.yml` builds on push to `main` (Node 20, `npm ci`, `npm run build`) and deploys `./dist` via `actions/deploy-pages@v4` to the `github-pages` environment.
- Both `package-lock.json` and `yarn.lock` are committed; CI uses npm. Pick one locally and don't mix — `.github/workflows/deploy.yml` is the source of truth.

## Layout (where to edit what)
- `src/pages/index.astro` — single page; composes TopBar, Jumbotron, Projects, AboutMe, ContactMe, Footer, CustomCursor.
- `src/layouts/Layout.astro` — `<html>` shell, global styles, scroll behavior script. Inline client script uses `DOMContentLoaded` + scroll listener for `.logo-container` / `.topbar-wrapper` `.scrolled` toggling.
- `src/components/` — section components + `icons/` + `interfaces/`.
- `src/helpers/projects-data.ts` — array of `IProject` (typed by `src/components/interfaces/projects.interfaces.ts`). Edit project entries here.
- `src/styles/` — global CSS.
- `public/` — static assets served at site root; referenced via the `/portfolio/...` base path from markup.

## Conventions
- No comments in code unless necessary (follow existing minimal-comment style).
- Component files use Astro frontmatter for imports, then a single root template element.
- Styles are mostly per-component `<style>` blocks plus a global stylesheet.
