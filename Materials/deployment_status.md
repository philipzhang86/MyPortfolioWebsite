# Portfolio Website — Deployment Status

**Last Updated**: 2026-03-24

---

## Deployment Info

| Item | Value |
|---|---|
| **Platform** | Vercel (Hobby / free tier) |
| **Live URL** | `my-portfolio-website-liart-gamma.vercel.app` |
| **Vercel Project Name** | `my-portfolio-website` |
| **GitHub Repo** | `git@github.com:philipzhang86/MyPortfolioWebsite.git` |
| **Production Branch** | `eleventy-skills-main` |
| **Framework Preset** | Eleventy (11ty) |
| **Build Command** | `npx @11ty/eleventy` (Vercel default for Eleventy) |
| **Output Directory** | `_site` |
| **Root Directory** | `./` |
| **Status** | ✅ Live and deployed |

## CI/CD

- Vercel auto-deploys on every `git push` to `eleventy-skills-main`
- GitHub integration scoped to `MyPortfolioWebsite` repo only (least privilege)

---

## Changes Log (2026-03-24)

### Content Updates
- **About section**: Rewrote bio — now leads with "I build backend systems, distributed infrastructure, and AI/ML pipelines" + Context Engineering focus
- **About tags**: Added `Applied AI · Context Engineering · Systems · Infrastructure · Distributed Systems` badges below About text
- **Sidebar tagline**: Changed to "Software Engineer in AI, Systems & Infra"
- **Blog post**: Replaced with "Coming Soon" placeholder describing upcoming topics
- **Project cards**: Added GitHub links for Multithreaded File Server and Distributed File System

### Contact Info Fixes
- **Email**: Updated to `philipzhang74@gmail.com` (sidebar + contact section)
- **LinkedIn**: Updated to `https://www.linkedin.com/in/zhipeng-zhang-5856097b/` (sidebar + contact section)

### Resume
- **Download Resume button**: Now functional — links to `src/assets/Zhipeng_Zhang_Resume_Portfolio.pdf` with `download` attribute
- Resume PDF source: `assets/Zhipeng(Philip) Zhang Resume_Portfolio.pdf` → copied to `src/assets/Zhipeng_Zhang_Resume_Portfolio.pdf`

### UI Polish
- **Section spacing**: Reduced from `2.5rem` to `1.75rem` between sections
- **Social icons**: GitHub (#181717), LinkedIn (#0A66C2), Email (#EA4335) always show brand colors — no color change on hover, lift effect preserved
- **Skills section**: Removed Protocol Buffers icon; renamed "Tech Stack" to "My Tech Stack"

### Files Modified
- `src/index.njk` — About content, about tags, email address
- `src/_includes/base.njk` — Sidebar tagline, LinkedIn URL, email URL, resume download link
- `src/_data/projects.json` — GitHub links for 2 project cards
- `src/_data/skills.json` — Removed Protocol Buffers
- `src/assets/css/style.css` — Section spacing, brand-colored icons, about-tag styles
- `src/blog/hello-world.md` — Replaced with "Coming Soon" post
- `src/assets/Zhipeng_Zhang_Resume_Portfolio.pdf` — Updated resume PDF

---

## Remaining Tasks

### Immediate
- [ ] Purchase custom domain (`philipzhang.dev` or alternative)
- [ ] Connect domain in Vercel → Project Settings → Domains
- [ ] Replace placeholder avatar with real photo
- [ ] Test on real phone
- [ ] Create PR and merge `eleventy-skills-main` into `main`

### Future Enhancements
- [ ] Open Graph meta tags for link previews
- [ ] Syntax highlighting for code blocks in blog posts
- [ ] RSS feed
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Stock Analysis Agent project card (once built)
