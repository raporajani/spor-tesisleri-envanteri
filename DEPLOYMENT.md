# Deployment Kurulumu — GitHub + Vercel Bağlantısı

Bu doküman, projenin GitHub'a ve Vercel'e nasıl bağlandığını, hangi araçların/anahtarların kullanıldığını ve deploy akışının nasıl çalıştığını anlatır. İleride yeni bir bilgisayarda veya yeni bir oturumda aynı kurulumu tekrarlamak ya da sorun gidermek gerekirse referans olarak kullanılabilir.

## Genel Mimari

```
Yerel klasör (bu repo)
      │  git push
      ▼
GitHub reposu: raporajani/spor-tesisleri-envanteri (private)
      │  Vercel GitHub App (otomatik webhook)
      ▼
Vercel projesi: raporajani-s-projects/spor-tesisleri-envanteri
      │  build + deploy
      ▼
Canlı site: https://spor-tesisleri-envanteri.vercel.app
```

`main` branch'ine yapılan her `git push`, Vercel'in GitHub entegrasyonu üzerinden otomatik olarak algılanır ve yeni bir production deploy tetiklenir. Elle `vercel --prod` çalıştırmaya gerek yoktur.

---

## 1) GitHub Bağlantısı

### Kullanılan araç
- **GitHub CLI (`gh`)** — `winget install --id GitHub.cli -e` ile kuruldu.

### Kimlik doğrulama — Personal Access Token (PAT)
GitHub API'ye ve `git push` işlemlerine erişim için bir **Personal Access Token** oluşturuldu.

- **Token oluşturma linki:** https://github.com/settings/tokens/new
- **Gerekli scope'lar:**
  - `repo` — repo oluşturma, push, private repo erişimi
  - `workflow` — (opsiyonel, GitHub Actions kullanılırsa gerekir)
  - `delete_repo` — bir repoyu tamamen silmek gerekirse (bizim kurulumda kullanılmadı, repo silmek yerine arşivlendi)
  - `read:org` — `gh auth login --with-token` ile token'ı **diske kalıcı olarak** kaydetmek istenirse bu scope da gerekir. Biz bunun yerine token'ı yalnızca oturum bazlı `GH_TOKEN` ortam değişkeni olarak kullandık.

> **Not:** Token'ın kendisi hiçbir dosyaya veya bu repoya yazılmadı. Yalnızca komut çalıştırılırken geçici olarak ortam değişkeni (`GH_TOKEN`) üzerinden kullanıldı. `gh auth setup-git` komutu, git'in push/pull sırasında `gh`'nin kendi güvenli kimlik doğrulama mekanizmasını (credential helper) kullanmasını sağladı — token tekrar elle girilmeden git işlemleri çalışabiliyor.

### Yapılan işlemler
1. Eski repo (`raporajani/analiz`) `raporajani/analiz-arsiv` olarak yeniden adlandırıldı ve arşivlendi (salt-okunur, silinmedi):
   ```
   gh repo rename analiz-arsiv --repo raporajani/analiz --yes
   gh repo archive raporajani/analiz-arsiv --yes
   ```
2. Yeni private repo oluşturuldu:
   ```
   gh repo create spor-tesisleri-envanteri --private --description "..."
   ```
3. Yerel klasörde git geçmişi sıfırdan başlatıldı (`.git` silinip `git init` yapıldı) ve dosyalar ilk commit olarak push edildi:
   ```
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/raporajani/spor-tesisleri-envanteri.git
   git push -u origin main
   ```

---

## 2) Vercel Bağlantısı

### Kullanılan araç
- **Vercel CLI** — `vercel@54.14.0` (önceden kuruluydu).
- Kimlik doğrulama: `vercel whoami` ile zaten oturum açık haldeydi (hesap: `maliyebelgelerim-6717`, takım: `raporajani-s-projects`). Ayrı bir API key girilmedi — CLI'nin kendi tarayıcı tabanlı login oturumu kullanıldı.
- Eğer yeniden giriş gerekirse: `vercel login` (tarayıcı üzerinden e-posta doğrulama ister) veya `vercel login --token <VERCEL_TOKEN>` (token, https://vercel.com/account/tokens adresinden oluşturulur).

### Yapılan işlemler
1. Eski Vercel projeleri (`analiz`, `rapordeneme12`) silindi:
   ```
   vercel remove analiz --yes
   vercel remove rapordeneme12 --yes
   ```
2. Yerel klasör yeni bir Vercel projesine bağlandı:
   ```
   vercel link --yes --project spor-tesisleri-envanteri
   ```
3. GitHub reposu Vercel projesine bağlandı:
   ```
   vercel git connect --yes
   ```
   > İlk denemede şu hata alındı: *"Failed to connect... Make sure you have access to the repository if it's private."* Sebebi: Vercel'in GitHub App'i (GitHub hesabındaki "Installed GitHub Apps" listesinde görünür) yeni oluşturulan private repoya henüz izinli değildi. Çözüm: https://github.com/settings/installations → **Vercel** → **Configure** → Repository access altına `spor-tesisleri-envanteri` eklendi. Ardından `vercel git connect --yes` tekrar çalıştırılınca bağlantı başarılı oldu.
4. İlk production deploy tetiklendi:
   ```
   vercel --prod --yes
   ```
   Bu adımdan sonra sistem GitHub'a bağlı olduğu için **artık elle deploy komutuna gerek yok** — her `git push origin main` otomatik yeni bir production deploy başlatır.

---

## 3) API Key / Token Özeti

| Anahtar | Nerede kullanıldı | Nereden alınır | Nerede saklanıyor |
|---|---|---|---|
| GitHub Personal Access Token | Repo oluşturma, arşivleme, `git push` kimlik doğrulaması | https://github.com/settings/tokens/new | Diskte saklanmıyor; `gh auth setup-git` sayesinde git işlemleri sırasında `gh`'nin kendi credential helper mekanizması kullanılıyor |
| Vercel oturumu | Proje oluşturma/silme, deploy | `vercel login` (tarayıcı) veya https://vercel.com/account/tokens | Vercel CLI'nin yerel config dosyasında (`~/.vercel` / `%USERPROFILE%\.vercel`), CLI zaten önceden bu hesapla giriş yapılmış haldeydi |

Projenin kendi kodunda (HTML/CSS) herhangi bir API çağrısı veya API key **kullanılmıyor** — bu statik bir HTML dashboard'dur, backend/env variable gerektirmez. Yukarıdaki iki anahtar yalnızca **deploy sürecini** (GitHub'a push, Vercel'e yayına alma) yönetmek için kullanıldı, uygulamanın çalışma zamanında (runtime) kullanılmıyor.

---

## 4) Önemli Linkler

- GitHub repo: https://github.com/raporajani/spor-tesisleri-envanteri
- Arşivlenen eski repo: https://github.com/raporajani/analiz-arsiv
- Canlı site: https://spor-tesisleri-envanteri.vercel.app
- Vercel proje paneli: https://vercel.com/raporajani-s-projects/spor-tesisleri-envanteri
- GitHub token oluşturma: https://github.com/settings/tokens/new
- GitHub App izinleri (Vercel'e repo erişimi vermek için): https://github.com/settings/installations
- Vercel token oluşturma (CLI için gerekirse): https://vercel.com/account/tokens

---

## 5) Yeni Değişiklik Yayınlama (Günlük Kullanım)

Kod üzerinde değişiklik yaptıktan sonra yayına almak için tek gereken:

```
git add -A
git commit -m "değişiklik açıklaması"
git push
```

Push işlemi otomatik olarak Vercel'de yeni bir production build tetikler, birkaç saniye içinde https://spor-tesisleri-envanteri.vercel.app adresine yansır.
