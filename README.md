# Philip Zhang — Personal Portfolio Website

Personal portfolio website for showcasing projects, blog posts, and professional background.

## Tech Stack

- **Framework**: [11ty (Eleventy)](https://www.11ty.dev/) — static site generator
- **Hosting**: Vercel (planned)
- **Domain**: `philipzhang.dev` (planned)

## Features

- Sidebar + main content layout (fixed sidebar, scrollable main area)
- Project cards with tech stack tags (data-driven from `projects.json`)
- Tech skills section with technology logos via [devicon](https://devicon.dev/)
- Markdown-based blog with auto-generated listing and individual post pages
- Mobile responsive (sidebar stacks above content on small screens)
- Clean, bright theme with warm palette

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:8080
```

## Build

```bash
npm run build
# Output: _site/
```

## Project Structure

```
src/
├── _includes/        # Layout templates (Nunjucks)
│   ├── base.njk      # Master layout with sidebar
│   └── post.njk      # Blog post layout
├── _data/
│   ├── projects.json  # Project card data
│   └── skills.json    # Tech skills data
├── assets/
│   └── css/style.css  # All styles
├── blog/              # Markdown blog posts
├── index.njk          # Home page
└── blog.njk           # Blog listing page
```

## Adding Content

**New blog post**: Create a `.md` file in `src/blog/` with front matter:

```markdown
---
title: "Post Title"
date: 2026-03-22
excerpt: "Short description."
---

Content here...
```

**New project**: Add an entry to `src/_data/projects.json`.

## License

MIT
