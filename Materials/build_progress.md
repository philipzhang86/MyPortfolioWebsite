# Portfolio Website — Build Progress

**Date**: 2026-03-22 (Day 1)
**Current branch**: `eleventy-skills-main`

---

## Completed

### Step 1: Git Init + Branch Strategy
- Initialized repo with `main` branch (shared base files: CLAUDE.md, Materials, .gitignore)
- Created multiple branches for comparison

### Step 2: SSG Comparison (Hugo vs 11ty)
- Built both Hugo (`hugo` branch) and 11ty (`eleventy` branch) implementations
- Same visual design on both — sidebar + card grid layout
- **Decision: 11ty chosen** — more intuitive template syntax, easier to customize

### Step 3: Base Layout + Sidebar
- Fixed sidebar (280px, sticky) with avatar placeholder, name, tagline, social icons, nav, resume button
- Scrollable main content area with flex layout
- Max-width 1600px on site-wrapper for consistent default page width

### Step 4: Content Sections
- **About**: 3 paragraphs — positioning + GPA, work achievements, job target + citizenship
- **My Tech Stack**: Flat list of icon+name badges (devicon CDN logos) between About and Projects
- **Projects**: 4 project cards (data-driven from `projects.json`) — 3 columns default, 4 on wide screens
- **Blog**: Preview of latest 3 posts as cards, with "View all" link
- **Contact**: Email, GitHub, LinkedIn with permanent brand-colored icons

### Step 5: Blog Pipeline
- Markdown files in `src/blog/` with front matter → auto-rendered by 11ty
- Blog listing page at `/blog/`
- Individual post pages at `/blog/slug/`
- Sample post: "Building My Portfolio Site"

### Step 6: Mobile Responsiveness
- < 768px: sidebar stacks above content, cards go single column
- 769px–1099px: 2-column grid
- 1100px–1399px: 3-column grid (default)
- 1400px+: 4-column grid (max)

### Step 7: Design Refinements
- Project descriptions refined per `portfolio_refinements.md` (What → Achieved → How pattern)
- About section rewritten with quantified achievements and explicit job target
- Section spacing tightened (1.75rem between sections)
- Card padding increased, grid gaps reduced for wider cards
- Social icons use permanent brand colors (GitHub #181717, LinkedIn #0A66C2, Email #EA4335)
- Hover effect: lift only, no color change

### Step 8: Push to GitHub
- Remote: `git@github.com:philipzhang86/MyPortfolioWebsite.git`
- Branches pushed: `main`, `eleventy`, `eleventy-skills-main`

---

## Remaining (Day 2-3)

### Step 9: Vercel Deployment
- [ ] Create Vercel account
- [ ] Import GitHub repo
- [ ] Configure: build command `npx @11ty/eleventy`, output dir `_site`
- [ ] Verify auto-deploy on push

### Step 10: Custom Domain
- [ ] Check availability of `philipzhang.dev`
- [ ] Purchase domain (~$12/year)
- [ ] Point DNS to Vercel
- [ ] Verify HTTPS

### Step 11: Final Polish
- [ ] Replace placeholder avatar with real photo
- [ ] Add real resume PDF and update download link
- [ ] Update email address (currently `philip.zhang@example.com`)
- [ ] Update LinkedIn URL if needed
- [ ] Finalize About section copy
- [ ] Test on real phone
- [ ] Merge `eleventy-skills-main` into `main`

### Future Enhancements (Post-MVP)
- [ ] Syntax highlighting for code blocks in blog posts
- [ ] Open Graph meta tags for link previews
- [ ] RSS feed
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Stock Analysis Agent project card (once built)

---

## Branch Overview

| Branch | Purpose | Status |
|---|---|---|
| `main` | Shared base, will be production branch | Base only |
| `eleventy` | Base 11ty implementation | Complete |
| `eleventy-skills-main` | **Current working version** — skills in main content | Active |
| `eleventy-skills-sidebar` | Alt version — skills in sidebar | Built, not chosen |
| `hugo` | Hugo implementation for comparison | Built, not chosen |
