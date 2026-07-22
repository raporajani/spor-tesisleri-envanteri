# Siteyi Aç / Kapat — Hızlı Komutlar

> Bu proje Vercel Hobby (ücretsiz) planında olduğu için "Pause Project" ve "Password Protection" özellikleri kullanılamıyor (ikisi de Pro plan gerektiriyor, 2026-07-22'de kontrol edildi). Bu yüzden siteyi açıp kapatmak için **alias kaldırma / yeniden deploy** yöntemi kullanılıyor.

## Proje bilgisi
- Vercel projesi: `spor-tesisleri-envanteri` (takım: `raporajani-s-projects`)
- Canlı adresler:
  - `tesis-yonetim-sistemi-modulleri.vercel.app`
  - `spor-tesisleri-envanteri-raporajani-s-projects.vercel.app`

## "Kapat" dendiğinde çalıştırılacak komutlar

```
vercel alias rm tesis-yonetim-sistemi-modulleri.vercel.app --yes
vercel alias rm spor-tesisleri-envanteri-raporajani-s-projects.vercel.app --yes
```

Sonuç: Her iki link de 404 döner, site herkese kapanır. Proje, deploy geçmişi ve dosyalar silinmez — sadece link/alias kaldırılır.

## "Aç" dendiğinde çalıştırılacak komut

```
vercel --prod --yes
```

Sonuç: Proje yeniden deploy edilir ve alias'lar otomatik olarak tekrar bağlanır, site tekrar erişilebilir olur.

## Not
Bu dosya ve buradaki kural Claude'un kalıcı hafızasına da kaydedildi: kullanıcı bu proje bağlamında "kapat" veya "aç" dediğinde, doğrulama sormadan doğrudan yukarıdaki ilgili komutlar çalıştırılır.
