# Kurulum

## Gereksinimler

- Node.js 20+
- npm

## Hizli Baslangic

```bash
git clone https://github.com/drokian/reality-api-demo.git
cd reality-api-demo
npm install
npm run dev
```

`http://localhost:3000` adresini acin.

## Production Build (Static Export)

```bash
npm run build
npm run start
```

`npm run start`, olusan `out/` klasorunu servis eder.

## Notlar

- Production modunda GitHub Pages icin `basePath` ve `assetPrefix` kullanilir.
- `next.config.ts` ayarlari repo yol varsayimlariyla uyumlu kalmalidir.
