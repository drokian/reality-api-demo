# Troubleshooting

## Build fails on dynamic routes

Symptom: static export errors around dynamic pages.

Checks:

1. Ensure `src/data/snapshot.json` is valid JSON.
2. Ensure collection arrays exist even when empty.
3. Re-run:

```bash
npm run build
```

## Page loads without data

Checks:

1. Verify `src/lib/data.ts` imports snapshot from the correct path.
2. Confirm snapshot collections are populated.
3. Confirm expected field names are present.

## Broken assets on GitHub Pages

Checks:

1. Confirm repository name still matches `reality-api-demo`.
2. Confirm `basePath` and `assetPrefix` in `next.config.ts`.
3. Trigger a fresh build from `main`.

## Language mismatch between pages

Checks:

1. Verify EN/TR keys both exist in relevant components.
2. Keep translated fields in snapshot consistent (`*En` plus base fields).

## Clean install reset

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```
