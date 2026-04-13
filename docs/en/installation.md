# Installation

## Requirements

- Node.js 20+
- npm

## Quick Start

```bash
git clone https://github.com/drokian/reality-api-demo.git
cd reality-api-demo
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build (Static Export)

```bash
npm run build
npm run start
```

`npm run start` serves the generated `out/` directory.

## Notes

- Production mode uses `basePath` and `assetPrefix` for GitHub Pages.
- Keep `next.config.ts` aligned with repository path assumptions.
