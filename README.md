# Shreya Karkun — Research Portfolio

A serverless, responsive, researcher‑focused portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**.
Deploys cleanly on **Vercel** or **GitHub Pages**.

## Quickstart

```bash
pnpm i   # or npm install / yarn
pnpm dev # http://localhost:3000
```

## Build & Export (for static hosting / GitHub Pages)

```bash
# For static export
export STATIC_EXPORT=true
pnpm export
```

If deploying to GitHub Pages in a repo named `shreya-portfolio`:

```bash
export GH_PAGES=true
export STATIC_EXPORT=true
pnpm export
# the static site will be in out/
```

## Vercel Deploy
Just import the repo into Vercel. Optionally set env vars:
- `NEXT_PUBLIC_FORMSPREE_ID` (enable contact form)
- `PLAUSIBLE_DOMAIN` (if you add analytics script)

## Content
- Edit **/data/** JSON for profile, experience, education, publications, projects, talks.
- Add blog posts to **/content/blog** as Markdown.
- Drop PDFs in **/public/papers** and posters in **/public/posters**.

---

Footer shows: **Made with Love by Sughosh**.
Generated on 2025-09-26.
