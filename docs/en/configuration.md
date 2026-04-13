# Configuration

## Next.js Static Export

The demo must stay compatible with static export.

Key settings in `next.config.ts`:

- `output: "export"`
- `basePath: "/reality-api-demo"` in production
- `assetPrefix: "/reality-api-demo/"` in production
- `images.unoptimized: true`

## Data Configuration

- Primary data file: `src/data/snapshot.json`
- Data adapter: `src/lib/data.ts`

## Language Configuration

- UI supports English (`en`) and Turkish (`tr`)
- Labels and long-form content should preserve EN/TR parity

## Deployment Configuration

GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on:

- `src/data/snapshot.json`
- `src/**`
- `public/**`

This keeps data refresh and UI refresh in one deploy path.
