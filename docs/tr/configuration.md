# Yapilandirma

## Next.js Static Export

Demo static export ile uyumlu kalmalidir.

`next.config.ts` icindeki temel ayarlar:

- `output: "export"`
- Production'da `basePath: "/reality-api-demo"`
- Production'da `assetPrefix: "/reality-api-demo/"`
- `images.unoptimized: true`

## Veri Yapilandirmasi

- Ana veri dosyasi: `src/data/snapshot.json`
- Veri katmani: `src/lib/data.ts`

## Dil Yapilandirmasi

- UI English (`en`) ve Turkce (`tr`) destekler
- Label ve uzun metinlerde EN/TR parity korunmalidir

## Deploy Yapilandirmasi

GitHub Actions workflow'u (`.github/workflows/deploy.yml`) su degisikliklerde tetiklenir:

- `src/data/snapshot.json`
- `src/**`
- `public/**`

Bu sayede veri guncellemesi ve UI guncellemesi tek deploy akisinda kalir.
