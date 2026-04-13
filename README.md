# Reality API Demo

A public, read-only static demo of the [Reality API](https://github.com/docyazilim/reality-api) research platform — exploring the hypothesis that the universe is a computational system.

**Live:** https://drokian.github.io/reality-api-demo

---

## What is this?

Reality API is an open research project that records and analyses observations supporting the hypothesis that physical reality operates as a computational system. This demo provides a read-only window into the project's data: observations, hypotheses, experiments, analyses, and academic references.

## Features

- Browse all observations, hypotheses, experiments, analyses, and references
- Bilingual — English and Turkish (TR/EN toggle)
- Fully static — no database, no server, no API calls
- Data sourced from `src/data/snapshot.json` (periodically updated from the main database)

## Tech Stack

- [Next.js 16](https://nextjs.org/) — static export (`output: 'export'`)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Local Development

```bash
git clone https://github.com/drokian/reality-api-demo.git
cd reality-api-demo
npm install
npm run dev
# Open http://localhost:3000
```

## Data Updates

This demo's data (`src/data/snapshot.json`) is updated periodically from the main database. When the snapshot is pushed to `main`, GitHub Actions automatically rebuilds and redeploys the site to GitHub Pages.

## Full Platform

The full-featured platform (with database, admin panel, observation forms, and AI-assisted translation) is hosted privately at [docyazilim/reality-api](https://github.com/docyazilim/reality-api).

## License

MIT
