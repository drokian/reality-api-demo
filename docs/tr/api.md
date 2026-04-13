# API

## Genel Bakis

Demo reposu runtime API route yayinlamaz.
Tum sayfalar lokal snapshot dosyasindan statik olarak uretilir.

## Veri Erisim Modeli

- Kaynak dosya: `src/data/snapshot.json`
- Erisim katmani: `src/lib/data.ts`
- Runtime davranisi: build-time/static read-only

## Neden Public API Yok

- Hosting modelini basit ve dusuk riskli tutmak (GitHub Pages)
- Deterministik public cikti saglamak
- Demo reposunda operasyonel karmasikligi azaltmak

## Veri Sozlesmesi (Yuksek Seviye)

`snapshot.json` su ust koleksiyonlari icerir:

- `observations`
- `hypotheses`
- `experiments`
- `analyses`
- `references`
- `connections`
- `tags`

Ayrica `exportedAt`, `version` ve `counts` gibi metadata alanlari da vardir.

## Programatik Erisim Gerekiyorsa

Gecerli oldugu yerlerde tam platform reposu ve ic servisler kullanilmalidir.
Bu demo bilerek statik dagitim modelini korur.
