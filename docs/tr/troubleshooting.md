# Sorun Giderme

## Dynamic route build hatasi

Belirti: statik export sirasinda dynamic sayfa hatalari.

Kontroller:

1. `src/data/snapshot.json` gecerli JSON olmali.
2. Koleksiyon alanlari bos olsa bile dizi olarak bulunmali.
3. Su komutu tekrar calistirin:

```bash
npm run build
```

## Sayfa veri gostermiyor

Kontroller:

1. `src/lib/data.ts` icindeki snapshot import yolu dogru mu?
2. Snapshot koleksiyonlari gercekten dolu mu?
3. Beklenen alan adlari mevcut mu?

## GitHub Pages'te asset bozuk

Kontroller:

1. Repo adi hala `reality-api-demo` mu?
2. `next.config.ts` icinde `basePath` ve `assetPrefix` dogru mu?
3. `main` branch'ten yeni build tetikleyin.

## Sayfalar arasi dil tutarsizligi

Kontroller:

1. Bilesenlerde EN/TR key'lerinin ikisi de var mi?
2. Snapshot'ta ceviri alanlari tutarli mi (`*En` ve temel alanlar)?

## Temiz kurulum sifirlama

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```
