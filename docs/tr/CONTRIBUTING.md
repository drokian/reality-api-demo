# CONTRIBUTING

Reality API Demo'ya ilginiz icin tesekkurler.
Bu repo projenin public read-only vitrinidir.

## Nasil Katki Verilir

- Hata, yazim yanlisi, kirik link veya anlasilirlik sorunu icin issue acin.
- Dokumantasyon iyilestirmelerini pull request ile oneriniz.
- Degisiklikleri dar kapsamli ve incelemesi kolay tutun.

## Katki Alanlari

- Dokuman kalitesi ve okunabilirlik
- Public sayfalarda UX iyilestirmeleri
- Erisilebilirlik iyilestirmeleri
- EN/TR tutarliligi
- Build ve deploy guvenilirligi

## Demo Repo Disi Konular

- Yazma yetkili ozellik eklemek
- Admin paneli eklemek
- Runtime veritabani bagimliligi eklemek
- Private veya hassas veri eklemek

## Icerik Kurallari

- Cift dil yapisini koruyun: EN ve TR birlikte guncellenmeli.
- Bilimsel dilde temkinli ve yanlislanabilir kalin.
- Gozlem, hipotez ve yorumu net ayirin.
- Sonuclari abartili iddialarla sunmayin.

## Teknik Kurallar

- Statik export uyumlulugunu koruyun (`output: "export"`).
- GitHub Pages varsayimlarini bozmayin (`basePath`, `assetPrefix`).
- PR oncesi lokal build dogrulamasi yapin.

## Lokal Dogrulama

```bash
npm install
npm run build
npm run start
```

## Pull Request Checklist

- [ ] Kapsam net ve dar
- [ ] EN/TR parity korunuyor
- [ ] `npm run build` basarili
- [ ] Public linkler calisiyor
- [ ] Private veri eklenmedi
