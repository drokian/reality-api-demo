# Maintenance - Git Temizligi

Bu rehber, demo reposunda duzenli git hijyeni icin kullanilir.

## Hedefler

- Gecmisi anlasilir tutmak
- Pull request'leri odakli tutmak
- Uretilmis veya alakasiz dosyalarin yanlislikla eklenmesini engellemek

## Onerilen Rutin

1. Duzenleme oncesi working tree'yi kontrol edin.
2. Iliskili degisiklikleri tek amacli commit'lerde toplayin.
3. Icerik guncellemesini refactor ile karistirmayin.
4. PR oncesi `npm run build` calistirin.

## Snapshot Guncelleme Hijyeni

`src/data/snapshot.json` guncellenirken:

- JSON dogrulugu kontrol edilmeli
- Sayimlar ve icerik niyeti tutarli olmali
- Hassas/private veri eklenmediginden emin olunmali

## Branch Hatirlatmasi

Branch isimlendirme ve PR hedef kurallari workspace dokumaninda tanimlandigi gibi uygulanmalidir.
Feature/docs degisikliklerinde taban branch tipik olarak `develop` kabul edilir.
