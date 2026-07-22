# Memory — 2026-07-22 (20:51, Türkiye Saati)

Bu dosya, bugün bu proje üzerinde yapılan işlemlerin özetidir.

## Yapılanlar

### 1. Sorun tespiti
- `fonksiyon-sistemi.vercel.app` canlı adresinde eski/placeholder "Rapor Deneme 12" sayfası görünüyordu, yerel `modul-fonksiyon-envanteri.html` ile eşleşmiyordu.
- İncelemede görüldü: bu domain, projenin bağlı olduğu Vercel takımındaki (`raporajani-s-projects`) hiçbir projeye ait değildi — muhtemelen başka/eski bir hesaba bağlı bir domaindi. Kod tarafında bir hata yoktu.

### 2. Sıfırdan GitHub + Vercel kurulumu
Kullanıcı isteği üzerine proje sıfırdan yeni bir repo ve yeni bir Vercel projesiyle kuruldu:

- **GitHub CLI (`gh`)** `winget` ile kuruldu.
- Kullanıcının verdiği Personal Access Token ile `gh` kimlik doğrulaması yapıldı (`GH_TOKEN` ortam değişkeni + `gh auth setup-git` ile git credential helper bağlandı; token diske kalıcı yazılmadı).
- Eski GitHub reposu `raporajani/analiz` → `raporajani/analiz-arsiv` olarak yeniden adlandırılıp **arşivlendi** (silinmedi, salt-okunur).
- Eski Vercel projeleri (`analiz`, `rapordeneme12`) **silindi**.
- Yeni private repo oluşturuldu: **`raporajani/spor-tesisleri-envanteri`**.
- Yerel klasörde git geçmişi sıfırdan başlatıldı (`.git` silinip `git init`), `.claude/` klasörü `.gitignore`'a eklendi, dosyalar tek commit halinde push edildi.
- Yeni Vercel projesi (`spor-tesisleri-envanteri`) oluşturuldu ve GitHub reposuna bağlandı.
  - İlk bağlantı denemesinde hata alındı: Vercel'in GitHub App'i yeni repoya erişimli değildi. Kullanıcı https://github.com/settings/installations üzerinden Vercel uygulamasına `spor-tesisleri-envanteri` repo erişimini manuel verdi.
  - Bağlantı ve ilk production deploy başarıyla tamamlandı.

### 3. Doğrulama
- Canlı site test edildi: **https://spor-tesisleri-envanteri.vercel.app** → HTTP 200, doğru başlık ("Spor Tesisleri Şube Müdürlüğü — Modül ve Alt Modül Envanteri") geliyor.
- Bundan sonra `main` branch'ine yapılan her `git push`, Vercel'de otomatik yeni production deploy tetikleyecek.

### 4. Dokümantasyon
- `DEPLOYMENT.md` dosyası oluşturuldu: GitHub/Vercel bağlantı süreci, kullanılan token/API key'ler, hangi linklerden alındığı, deploy akışı ve güncelleme için günlük kullanım komutları detaylıca yazıldı.

## Güncel Durum (bugün sonu itibarıyla)

| Kalem | Değer |
|---|---|
| Aktif GitHub repo | https://github.com/raporajani/spor-tesisleri-envanteri (private) |
| Arşivlenen eski repo | https://github.com/raporajani/analiz-arsiv |
| Canlı site | https://spor-tesisleri-envanteri.vercel.app |
| Vercel proje | raporajani-s-projects/spor-tesisleri-envanteri |
| Silinen eski Vercel projeleri | analiz, rapordeneme12 |
| Kodda kullanılan API key | Yok (statik HTML/CSS site, backend yok) |

## Açık / Takip Edilecek Nokta
- Kullanıcıya, sohbet geçmişinde düz metin olarak kalan GitHub PAT'ı https://github.com/settings/tokens adresinden iptal edip gerekirse yeni token oluşturması önerildi (henüz teyit edilmedi).
