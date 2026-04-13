# Database

## Demo Repo Politikasi

Bu repoda runtime veritabani baglantisi yoktur.

## Neden

- Public deploy hedefi GitHub Pages'tir (statik hosting)
- Demo read-only ve kolay denetlenebilir kalmalidir
- Operasyonel yuk private platformda yonetilir

## Veri Kaynagi

- Snapshot dosyasi: `src/data/snapshot.json`
- Snapshot kaynagi: tam platform veritabani akisindan uretilen exportlar

## Sonuclar

- Migration yok
- Prisma client yok
- Yazma islemi yok
- Demo sayfalari icin runtime secret gerekmez

## Tam Platform Notu

Schema, migration ve CRUD akislarinin tamami private `commercial` reposundadir.
