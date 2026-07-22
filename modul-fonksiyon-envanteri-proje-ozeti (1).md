# Spor Tesisleri Şube Müdürlüğü — Modül ve Fonksiyon Envanteri

Bu doküman, üst yönetime sunulacak bir "Modül ve Fonksiyon Envanteri" çalışmasının tüm bağlamını içerir. Bu dosyayı başka bir Claude oturumuna yüklersen, Claude'un projeyi sıfırdan anlaması ve kaldığın yerden devam edebilmesi için gereken her şey burada.

## Amaç

Bu bir yazılım demosu **değildir**. Amaç, mevcut bir sistemdeki (fitness/spor kulübü üyelik yazılımı) modülleri ve fonksiyonları üst yönetime tek bakışta anlatmaktır: hangi modüller var, her fonksiyon ne işe yarıyor, önem derecesi ne. Gerçek ödeme tabloları, seans katılımcı tabloları gibi operasyonel ekranlar gösterilmiyor — sadece envanter/kapsam anlatımı.

## Bugüne kadar üretilen çıktılar

1. **İnteraktif HTML dashboard** (`modul-fonksiyon-envanteri.html`) — tarayıcıda açılan, düzenlenebilir, filtrelenebilir tek sayfalık envanter sayfası.
2. **PowerPoint sunumu** (`modul-fonksiyon-envanteri.pptx`) — 8 slaytlık üst yönetim sunumu, aynı veri ve tasarım dilini kullanır.
3. Modül ekran görüntüleri için ChatGPT görsel üretim promptları (aşağıda).

## Tasarım sistemi (her iki çıktıda da tutarlı kullanıldı)

**Renkler:**
- Koyu lacivert (ana): `#0E2A4A`
- Lacivert tonları: `#153A63`, `#1C4A7D`
- Turkuaz (vurgu): `#0FA3A3`, koyusu `#0B7A7A`
- Petrol yeşili (vurgu): `#0E7C6B`, koyusu `#0A5E52`
- Arka plan: beyaz / çok açık gri `#F5F7F8`
- Metin: `#152436` (ana), `#5B6B7B` (ikincil), `#8A96A3` (soluk)

**Önem derecesi renk kodlaması** (hem HTML hem PPTX'te aynı):
- Kritik → kırmızı: bg `#FDECEC`, yazı `#B3261E`, kenarlık `#F3B9B6`
- Yüksek → turuncu: bg `#FFF1E3`, yazı `#B4590B`, kenarlık `#F5CDA0`
- Orta → sarı: bg `#FFF9DB`, yazı `#8A6D00`, kenarlık `#F0E29B`
- Düşük → mavi-gri: bg `#EAF2FA`, yazı `#3C6E9C`, kenarlık `#C7DCEE`

**Tipografi:** Kurumsal sans-serif (Segoe UI ailesi HTML'de; PowerPoint'te başlıklar Cambria, gö## Veri modeli — 16 modül, 158 fonksiyon

Her fonksiyonun: adı, kısa açıklaması, önem derecesi (Kritik / Yüksek / Orta / Düşük) var. HTML sürümünde ayrıca: kullanım durumu (Aktif / Pasif / Eski Ekran / Yeni Sürüm / İncelenecek / Birleştirilebilir) ve yönetici notu alanları da var. Sistemdeki modüller **TYS (Tesis Yönetim Sistemi)** ve **SUY (Spor Okulları Yönetimi)** olmak üzere 2 ana grup altında yapılandırılmıştır.

**Genel toplam:** 16 modül, 158 fonksiyon → 46 Kritik, 61 Yüksek, 53 Orta, 7 Düşük.

---

### A) TYS Modülleri (10 Modül, 133 Fonksiyon)

#### 1) Tanımlar Modülü (26 fonksiyon)

> Tesis, salon, kurum, indirim, devamsızlık ve genel sistem tanımlamalarının yönetildiği TYS modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Belge Onaylama | Sisteme yüklenen belgelerin onaylama ve kontrol kriterlerinin tanımlanmasını sağlar. | Yüksek |
| Bildirim Gönder | Sistem içi ve harici kullanıcılara otomatik bildirim ve duyuru tanımlarının yapılmasını sağlar. | Orta |
| Devamsızlık Mazeret | Üyeler için geçerli devamsızlık mazeret türlerinin ve kurallarının tanımlanmasını sağlar. | Orta |
| Dolap | Tesislerde yer alan kiralık ve genel dolapların numara, bölge ve durum tanımlamalarını yönetir. | Orta |
| Duyuru Düzenle | Sistem geneli ve panel bazlı duyuru metinlerinin ve şablonlarının düzenlenmesini sağlar. | Orta |
| İndirim | Farklı üye grupları ve kampanyalar için uygulanacak indirim oran ve tanımlarının yönetilmesini sağlar. | Yüksek |
| İşlem | Sistemde gerçekleştirilen operasyonel işlem türlerinin tanımlanması ve kategorize edilmesini sağlar. | Orta |
| Kurum | Anlaşmalı kamu, özel kurum ve şirket tanımlamalarının sisteme eklenmesini ve yönetilmesini sağlar. | Yüksek |
| Masa | Tesis bünyesindeki masa ve alan tahsis alanlarının tanımlanmasını sağlar. | Düşük |
| Oda | Tesis içerisindeki oda, çalışma alanı ve özel bölümlerin tanımlanmasını ve takibini sağlar. | Orta |
| Öteleme | Sistemsel bazda geçerli öteleme mazeret ve kural tanımlamalarının yapılandırılmasını sağlar. | Yüksek |
| Özel Uyarı | Kullanıcı veya üye bazlı gösterilecek özel uyarı mesajı parametrelerinin tanımlanmasını sağlar. | Orta |
| Program | Spor ve etkinlik program şablonlarının sisteme tanımlanmasını ve yönetilmesini sağlar. | Yüksek |
| Sağlık Kurum | Anlaşmalı sağlık kurumları ve rapor kabul eden tesislerin tanımlanmasını sağlar. | Orta |
| Saha Etkinlikleri | Açık alan ve saha etkinliklerinin tür, alan ve kural tanımlamalarının yapılmasını sağlar. | Orta |
| Salon | Tesis bünyesindeki salonların (fitness, stüdyo vb.) tanımlanması ve yönetilmesini sağlar. | Kritik |
| Salon Büyüklük | Salonların alan (m²), kapasite ve büyüklük kategorilerinin tanımlanmasını sağlar. | Düşük |
| Salon Tür | Farklı kullanım amaçlarına uygun salon türlerinin ve kategorilerinin tanımlanmasını sağlar. | Orta |
| Satış Çizelge Gösterim | Satış ve paket çizelgelerinin görüntülenme parametrelerinin yapılandırılmasını sağlar. | Orta |
| Satis Dakika | Satış ve seans sürelerinin dakika bazlı opsiyonlarının ve limitlerinin tanımlanmasını sağlar. | Orta |
| Sıra Süre Ekleme | Hizmet sıralarında bekleme ve ek süre tanımlamalarının yapılmasını sağlar. | Orta |
| Tesis | Sistemde yer alan tüm spor tesisi ve komplekslerin genel bilgilerinin tanımlanmasını sağlar. | Kritik |
| Tesis Branş Belge | Tesis ve branş bazında üyelerden talep edilen zorunlu belge türlerinin tanımlanmasını sağlar. | Yüksek |
| Tesis RFID | Tesis giriş-çıkış noktalarında kullanılan RFID cihaz ve geçiş noktalarının tanımlanmasını sağlar. | Yüksek |
| Toplu Program | Birden fazla branş veya tesis için toplu program şablonlarının oluşturulmasını sağlar. | Orta |
| Üye Yaş Üstü | Kullanım hakkı ve paketler için üst yaş sınırı kurallarının tanımlanmasını sağlar. | Orta |

#### 2) Protokol Satış Modülü (5 fonksiyon)

> Kurumsal protokoller, BESYO, ESH, ÖSH ve özel statüdeki üyelik satış süreçlerinin yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Protokol Ücretsiz | Ücretsiz protokol kapsamındaki üyelik ve hizmet tanımlarının satış işlemlerini yönetir. | Yüksek |
| Protokol BESYO | BESYO öğrencileri ve eğitmenleri için belirlenen özel protokol satışlarını yönetir. | Yüksek |
| Protokol ESH | Engelli Spor Hizmetleri (ESH) protokolüne tabi üye satış operasyonlarını yönetir. | Kritik |
| Protokol ÖSH | Özel Spor Hizmetleri (ÖSH) protokolü çerçevesinde gerçekleşen satış işlemlerini yönetir. | Kritik |
| Protokol Ücretli | İndirimli veya özel şartlı ücretli kurumsal protokol satışlarının takibini sağlar. | Kritik |

#### 3) Seans Modülü (7 fonksiyon)

> Seans takvimleri, seans ücretleri, günlük yoklama ve toplu seans operasyonlarının yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Günlük Yoklama Listesi | Günlük olarak gerçekleşen tüm seansların katılım ve yoklama listelerinin takibini sağlar. | Kritik |
| Satış Günü | Seans satışlarına açılacak günlerin ve tarih aralıklarının tanımlanmasını sağlar. | Yüksek |
| Seans | Bireysel ve grup seanslarının oluşturulması, saatlerinin ve kapasitelerinin belirlenmesini sağlar. | Kritik |
| Seans Seans | Detaylı seans içi saat periyotlarının ve seans çakışma kontrollerinin yönetilmesini sağlar. | Orta |
| Seans Ücret | Farklı branş ve seans türleri için geçerli birim ücretlerin tanımlanmasını sağlar. | Kritik |
| Toplu Seans | Belirli tarih aralıkları için birden fazla seansın toplu olarak tanımlanmasını ve açılmasını sağlar. | Yüksek |
| Zaman Türü | Seanslarda geçerli zaman aralığı (dk/saat) ve zaman dilimi türlerinin yapılandırılmasını sağlar. | Orta |

#### 4) Satış ve Operasyon Modülü (6 fonksiyon)

> Üyelik, paket, ek hizmet, satış sonrası düzenleme ve operasyonel işlem süreçlerinin yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Akademi | Akademi kayıt ve ilgili operasyon süreçlerinin yönetilmesini sağlar. | Orta |
| BESYO | BESYO kapsamındaki kayıt, başvuru ve üyelik işlemlerinin takibini sağlar. | Orta |
| Devamsızlık Geri Alım | Devamsızlık nedeniyle düşürülen kullanım haklarının yetkili kullanıcı tarafından geri alınmasını sağlar. | Kritik |
| Dolap | Üyelere dolap tahsis edilmesi, değiştirilmesi ve dolap kullanımının takip edilmesini sağlar. | Orta |
| ESH Gerisi | Geçmiş ESH işlemlerinin görüntülenmesini ve gerekli düzeltmelerin yapılmasını sağlar. | Yüksek |
| Üyelik Paketleri | Üyelere sunulan paketlerin tanımlanmasını, güncellenmesini ve yönetilmesini sağlar. | Kritik |

#### 5) Üye Modülü (33 fonksiyon)

> Üyenin sisteme kaydından belge, ödeme, paket, satış, seans, spor ve sözleşme süreçlerine kadar bütün üye operasyonlarının yönetildiği ana modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Belgesiz Üyeler | Eksik veya tamamlanmamış belgesi bulunan üyelerin listelenmesini sağlar. | Yüksek |
| Hızlı Kayıt Davet | Yeni üyelere hızlı kayıt bağlantısı ve daveti gönderilmesini sağlar. | Orta |
| Tüm Üye Spor | Bütün üyelerin tanımlı spor ve branş kayıtlarını toplu olarak gösterir. | Orta |
| Üye Aktar ve Sil | Üye kayıtlarının aktarılması, birleştirilmesi veya yetkili kullanıcı tarafından silinmesini sağlar. | Kritik |
| Üye Ara | Üyelere kimlik, iletişim veya üye numarası bilgileriyle hızlı erişim sağlar. | Yüksek |
| Üye Arama Listesi | Arama ve filtreleme kriterlerine uyan üyeleri liste halinde gösterir. | Yüksek |
| Üye Arama Listesi V2 | Üye arama ekranının geliştirilmiş yeni sürümüdür. | Orta |
| Üye Belge Rapor | Üyelere ait eksik, onaylı ve geçerliliği sona yaklaşan belgeleri raporlar. | Yüksek |
| Üye Belgeleri | Seçilen üyeye ait bütün belge ve dosyaların yönetilmesini sağlar. | Yüksek |
| Üye Durum Düzenle | Üyenin aktif, pasif veya diğer üyelik durumlarının değiştirilmesini sağlar. | Kritik |
| Üye Ekle | Yeni bir üyenin kişisel ve üyelik bilgileriyle sisteme kaydedilmesini sağlar. | Kritik |
| Üye HES Kodu | Üyelere ait geçmiş dönem HES kodu kayıtlarının görüntülenmesini sağlar. | Düşük |
| Üye Kart | Üyenin paket, ödeme, belge, seans ve iletişim bilgilerinin tek profilde gösterilmesini sağlar. | Kritik |
| Üye Kiralık Öteleme | Kiralık hizmetlerin kullanım tarihlerinin ileri bir tarihe ötelenmesini sağlar. | Yüksek |
| Üye Ödeme | Üyeye ait ödeme, tahsilat ve kalan borç işlemlerinin yönetilmesini sağlar. | Kritik |
| Üye Özel Öteleme | Standart kurallar dışındaki özel paket veya üyelik ötelemelerini yönetir. | Yüksek |
| Üye Paket Düzenle | Üyenin paket süresi, kullanım hakkı ve paket bilgilerinin değiştirilmesini sağlar. | Kritik |
| Üye PAR-Q Test | Üyenin fiziksel aktiviteye uygunluk formunun kayıt altına alınmasını sağlar. | Yüksek |
| Üye Plaka | Üyelere ait araç ve plaka bilgilerinin yönetilmesini sağlar. | Düşük |
| Üye Puan | Üyenin kazandığı ve kullandığı puanların takip edilmesini sağlar. | Orta |
| Üye Satış | Üyeye paket, ürün veya hizmet satışı yapılmasını sağlar. | Kritik |
| Üye Satış İşlem | Üyeye ait tamamlanan, bekleyen veya iptal edilen satış işlemlerini gösterir. | Kritik |
| Üye Seans Seviye | Üyenin branş veya seans seviyesinin tanımlanmasını ve güncellenmesini sağlar. | Orta |
| Üye Seans Tüm Liste | Üyenin geçmiş ve gelecek bütün seans kayıtlarını gösterir. | Yüksek |
| Üye SEDEP | Üyeye ait SEDEP kapsamındaki kayıtların ve durum bilgilerinin yönetilmesini sağlar. | Orta |
| Üye Sepet Rapor | Üyelerin sepet ve satışa dönüşen işlem hareketlerini raporlar. | Orta |
| Üye Sepet Rapor Yeni | Sepet hareketlerinin geliştirilmiş raporlama ekranıdır. | Orta |
| Üye Sıra | Üyelerin işlem ve hizmet bekleme sıralarının yönetilmesini sağlar. | Orta |
| Üye SMS Listesi | Üyelere gönderilen SMS kayıtlarını ve gönderim durumlarını gösterir. | Orta |
| Üye SO Sepet Rapor | SO kapsamındaki üye sepet ve işlem kayıtlarını raporlar. | Orta |
| Üye Sözleşme | Üyeye ait sözleşmelerin oluşturulmasını, görüntülenmesini ve takip edilmesini sağlar. | Kritik |
| Üye Spor | Seçilen üyeye tanımlanan spor, branş ve programların yönetilmesini sağlar. | Yüksek |
| Üye Yaş | Üyelerin yaş ve yaş gruplarına göre listelenmesini sağlar. | Düşük |

#### 6) Yönetim Modülü (5 fonksiyon)

> Kullanıcı, rol, tesis, branş ve sistem kurallarının merkezi olarak yapılandırıldığı yetkilendirme ve yönetim modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Devamsızlık Ayarları | Devamsızlık, geç iptal, hak düşümü ve bildirim kurallarının tanımlanmasını sağlar. | Yüksek |
| Kullanıcı | Sistemi kullanacak personel ve yönetici hesaplarının oluşturulmasını sağlar. | Kritik |
| Kullanıcı Tesis | Kullanıcıların erişebileceği tesislerin belirlenmesini sağlar. | Kritik |
| Kullanıcı Tesis Branş | Kullanıcıların tesis ve branş bazındaki işlem yetkilerini belirler. | Kritik |
| Rol | Kullanıcı rollerinin ve ekran bazlı erişim yetkilerinin yönetilmesini sağlar. | Kritik |

#### 7) SMS Modülü (1 fonksiyon)

> Toplu SMS gönderim operasyonlarının ve duyuru şablonlarının yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Toplu SMS Gönder | Üyelere veya belirli gruplara bildirim, hatırlatma ve kampanya amaçlı toplu SMS gönderilmesini sağlar. | Kritik |

#### 8) Raporlar Modülü (33 fonksiyon)

> Tesis kullanımı, aktif üyeler, seans durumları, kurum işlemleri ve etkinliklerin detaylı raporlandığı modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Aktif Üye İletişim | Aktif durumdaki tüm üyelerin iletişim bilgilerini ve bildirim tercihlerini raporlar. | Yüksek |
| Aktif Üye Raporu | Tesis, branş ve paket bazında aktif üyelerin güncel sayılarını ve dağılımını raporlar. | Kritik |
| Belge Kurum Raporu | Kurum bazlı üyelerin belge eksikliklerini ve onay durumlarını raporlar. | Orta |
| Branş Bazlı Aktif Üye | Farklı spor branşlarını kullanan aktif üyeliklerin dökümünü ve oranlarını raporlar. | Yüksek |
| Genel Sıra | Tesis ve hizmet bazında sıra bekleyen ve işlem gören üyelerin genel durumunu raporlar. | Orta |
| Hakediş Özet Raporu | Eğitmen ve personel hakedişlerinin özet tablolar halinde raporlanmasını sağlar. | Kritik |
| İstanbul Senin Rapor | İstanbul Senin uygulaması üzerinden gelen üye ve kullanım verilerinin raporlanmasını sağlar. | Yüksek |
| Kullanıcı Belge Takip | Kullanıcıların üyeler için yüklediği veya onayladığı belgelerin takip raporudur. | Orta |
| Kullanım Raporu | Tesislerin saatlik, günlük ve haftalık genel kullanım yoğunluğunu raporlar. | Kritik |
| Kurum Belge Raporu | Anlaşmalı kurumlar bazında teslim edilen belgelerin geçerlilik ve durum raporudur. | Orta |
| Kurum Ziyareti | Kurum temsilcileri ve toplu üyelik ziyaret hareketlerinin raporlanmasını sağlar. | Orta |
| Ödeme Raporu | Tüm ödeme yöntemleri (kredi kartı, nakit, havale) bazında gerçekleşen tahsilat raporudur. | Kritik |
| Ödeme Raporu Paket | Satılan üyelik paketleri bazında ödeme ve gelir dağılımını raporlar. | Yüksek |
| Protokol Ödeme Raporu | Protokol satışlarından elde edilen gelir ve muafiyetlerin dökümünü raporlar. | Yüksek |
| Rezervasyon İşlemleri | Üyelerin seans ve saha rezervasyon hareketlerini ve iptallerini raporlar. | Yüksek |
| Saha Etkinlikleri Kayıt | Açık saha ve dış etkinlik kayıtlarının katılımcı bazlı dökümünü verir. | Orta |
| Seans Durumları | Planlanan seansların doluluk, iptal ve gerçekleşme durumlarını raporlar. | Yüksek |
| Seans Hafta Sıra | Haftalık seans bazında oluşan sıra ve katılım yoğunluğunu raporlar. | Orta |
| Seans Türü Doluluk | Seans türlerine (grup, özel vb.) göre kapasite kullanım oranlarını raporlar. | Yüksek |
| Sıra Özet Raporu | Hizmet sıralarında bekleyen üyelerin ortalama bekleme ve işlem sürelerini raporlar. | Orta |
| Sömestr Etkinlikleri | Sömestr döneminde düzenlenen özel kurs ve etkinliklerin katılım raporudur. | Orta |
| Tesis - Eğitmen Raporu | Eğitmenlerin tesis bazlı verdikleri ders sayılarını ve üye katılımlarını raporlar. | Yüksek |
| Tesis Anlık Kullanım | Tesislerde anlık olarak bulunan üye sayılarını turnike geçiş verileriyle gösterir. | Kritik |
| Tesis Kimlik | Tesis kartı ve kimlik doğrulama verilerinin kullanım raporudur. | Düşük |
| Tesis Sıra Toplu | Tüm tesis genelinde toplu olarak sıra bekleyen üye durumlarını raporlar. | Orta |
| Tesis Üye Sıra | Belirli bir tesisteki branş ve üye sıra takip verilerini raporlar. | Orta |
| Üye Arama Raporu | Üye arama sorguları ve arama sonuç verilerinin analiz raporudur. | Düşük |
| Üye Paket | Üyelerde tanımlı aktif, süresi dolmuş veya dondurulmuş paketlerin dağılım raporudur. | Yüksek |
| Üye Sayıları Raporu | Dönemlik üye artış, ayrılış ve toplam üye sayısı istatistiklerini raporlar. | Kritik |
| Yasaklı Üyeler | Kuralları ihlal ettiği için sisteme girişi yasaklanan veya askıya alınan üyeleri raporlar. | Yüksek |
| Yaz Spor Okulu Kayıtlı | Yaz spor okullarına kayıt yaptıran öğrencilerin ve branşların döküm raporudur. | Orta |
| Yaz Spor Okulu Sıra | Yaz spor okulu branşlarında oluşan yedek ve başvuru sırası raporudur. | Orta |
| Yoklama Listesi | Seans ve derslere katılan üyelerin yoklama ve imza durumlarını raporlar. | Kritik |

#### 9) Tesis Büyük Rapor Modülü (2 fonksiyon)

> Tesis bazlı ödeme ve kullanım hakları seçim raporlarının sunulduğu modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Aylık Ödeme Raporu | Tesis bazında aylık gerçekleşen ödeme ve tahsilat hareketlerini raporlar. | Kritik |
| Hak Seçim Raporu | Üyelere tanımlanan ve seçilen kullanım haklarının tesis bazlı raporlanmasını sağlar. | Yüksek |

#### 10) Büyük Raporlar Modülü (15 fonksiyon)

> Kullanım, ödeme, seans, hakediş ve üye iletişim verilerinin üst yönetim tarafından analiz edilmesini sağlayan kurumsal raporlama modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Aylık Kullanım | Aylık kullanım sayılarını tesis ve branş bazında karşılaştırmalı olarak gösterir. | Yüksek |
| Büyük Ödeme Belge | Ödeme işlemlerine ait belge kayıtlarının toplu kontrolünü sağlar. | Yüksek |
| Büyük Ödeme Özet | Ödeme ve tahsilat verilerinin üst yönetim için özet icmal tablosunu raporlar. | Kritik |
| Büyük Ödeme Raporu | Tahsilat, ödeme yöntemi, kalan borç ve tesis gelirlerini raporlar. | Kritik |
| Günlük Seans | Gün içinde gerçekleşen ve planlanan seansların özetini gösterir. | Yüksek |
| Günlük Seans Detay | Seansların tesis, branş, eğitmen, katılım ve kapasite detaylarını gösterir. | Yüksek |
| Hak Karşılaştırma | Tanımlanan, kullanılan ve kalan üyelik haklarını karşılaştırır. | Yüksek |
| Hak Seçim | Üye, paket ve seans bazında kullanılabilecek hakların seçilmesini sağlar. | Yüksek |
| Hakediş Günlük Sayım | Eğitmenlerin günlük seans ve katılımcı sayılarına göre hakedişlerini hesaplar. | Kritik |
| Hakediş Raporu | Eğitmen hakedişlerini dönem, tesis ve branş bazında raporlar. | Kritik |
| Seans Detay | Seansların saat, kapasite, eğitmen, üye katılımı ve durum bilgilerini gösterir. | Yüksek |
| Seans Saat | Seans ve katılım yoğunluğunu saat aralıklarına göre analiz eder. | Orta |
| Tekil Üye Kullanım | Seçilen bir üyenin tesis, seans ve kullanım geçmişini gösterir. | Yüksek |
| Üye İletişim | Üyelerle yapılan SMS, telefon ve e-posta iletişimlerini takip eder. | Orta |
| Yıllık Kullanım | Yıllık kullanım eğilimlerini ay, tesis ve branş bazında karşılaştırır. | Yüksek |

---

### B) SUY (Spor Okulları Yönetimi) Modülleri (6 Modül, 25 Fonksiyon)

#### 11) Suy - Tanımlar Modülü (8 fonksiyon)

> Belge, bilet, branş, etkinlik, indirim, öteleme ve paket tanımlamalarının yönetildiği Spor Okulları Yönetim (SUY) modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Belge | SUY kapsamındaki zorunlu belge ve evrak tanımlamalarını yönetir. | Yüksek |
| Bilet | Spor okulu etkinlik ve organizasyon bilet tanımlamalarını yönetir. | Orta |
| Brans | Spor okullarında verilen spor branşlarının tanımlanmasını sağlar. | Kritik |
| Dönemsel Etkinlik | Sezonluk ve dönemsel spor okulu etkinliklerinin tanımlanmasını sağlar. | Yüksek |
| Etkinlik | Spor okulu bünyesinde düzenlenen genel etkinliklerin tanımlanmasını sağlar. | Orta |
| İndirim | SUY kapsamında uygulanacak özel indirim ve burs tanımlarını yönetir. | Yüksek |
| Öteleme | SUY kayıt ve ders öteleme kurallarının tanımlanmasını sağlar. | Yüksek |
| Paket | Spor okulu kurs ve dönem paketlerinin tanımlanmasını sağlar. | Kritik |

#### 12) Suy - Duyuru Modülü (2 fonksiyon)

> SUY üye, veli ve kullanıcılarına yönelik özel uyarı ve popup duyurularının yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Özel Uyarı | SUY portalı üye ve velileri için gösterilecek özel uyarı mesajlarını yönetir. | Yüksek |
| PopupDuyuru | SUY giriş paneli ve mobil uygulamadaki pop-up duyuruları yönetir. | Kritik |

#### 13) Suy - Yönetim Modülü (3 fonksiyon)

> SUY sistemi kullanıcı hesapları, sözleşme şablonları ve üye arama panellerinin yönetildiği modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Kullanıcı | SUY sistemini kullanacak antrenör, personel ve yönetici hesaplarını yönetir. | Kritik |
| Sözleşme | SUY üyelik ve veli sözleşme şablonlarının yönetilmesini sağlar. | Kritik |
| Üye Arama Dashboard | SUY öğrenci ve veli kayıtlarına hızlı erişim sağlayan gösterge panelidir. | Yüksek |

#### 14) Suy - Spor Okulu Modülü (5 fonksiyon)

> Spor okulu programları, öğrenci kayıtları, denetim, teknik değerlendirme ve karne süreçlerinin yönetildiği SUY modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Denetim Düzenleme | Spor okulu ders ve antrenör denetim kayıtlarının düzenlenmesini sağlar. | Orta |
| Spor Okulu Program | Spor okulu yaş grupları ve branş programlarının oluşturulmasını sağlar. | Yüksek |
| Spor Okulu Üye Listesi | Spor okuluna kayıtlı tüm öğrencilerin ve grupların listelenmesini sağlar. | Kritik |
| Teknik Değerlendirme | Öğrencilerin branş bazındaki teknik gelişim ve değerlendirme puanlarının girilmesini sağlar. | Yüksek |
| Test-Karne Listesi | Dönem sonu gelişim testleri ve karne sonuçlarının listelenmesini sağlar. | Yüksek |

#### 15) Suy - Spor Okulu Raporları Modülü (2 fonksiyon)

> Spor okulu öğrencilerinin genel durum ve arşivleşmiş dönem raporlarının sunulduğu SUY modülüdür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Durum Arşivli | Spor okullarına ait geçmiş dönem ve arşivlenmiş durum kayıtlarını raporlar. | Orta |
| Durum Raporu | Spor okullarındaki mevcut öğrencilerin anlık durum ve katılım raporunu sunar. | Yüksek |

#### 16) Suy - Raporlar Modülü (5 fonksiyon)

> SUY seans detayları, antrenör hakedişleri ve aktif kullanım hakkı bulunan öğrenci raporlarının sunulduğu modüldür.

| Fonksiyon | Kısa açıklama | Önem |
|---|---|---|
| Aylık Günlük Seans Detay | SUY ders ve seanslarının aylık/günlük detay dökümünü raporlar. | Yüksek |
| Aylık Günlük Seans Detay Liste | Seans detaylarının liste formatında dışa aktarılabilir raporudur. | Orta |
| Aylık Hak Ediş | SUY antrenör ve eğitmenlerinin aylık hakediş hesaplama raporudur. | Kritik |
| Aylık Hak Ediş Günlük Kullanım | Hakedişe esas günlük ders ve yoklama kullanım detaylarını raporlar. | Yüksek |
| Kullanım Hakkı Olan Uye | SUY aktif kurs kullanım hakkı devam eden öğrencilerin raporudur. | Kritik |

## Çıktı 1 — İnteraktif HTML dashboard

Dosya: `modul-fonksiyon-envanteri.html` (tek dosya, bağımlılık yok, çift tıkla tarayıcıda açılır).

**Üst kısım:** Toplam modül / fonksiyon / kritik / yüksek / orta / düşük sayaçları (otomatik hesaplanır).

**Kontroller:** Fonksiyon arama, modül filtrele, önem derecesine göre filtrele, "yalnızca kritik" butonu, tümünü genişlet/daralt, Excel'e aktar (CSV indirir), PDF oluştur (yazdırma diyaloğu açar), **Düzenleme modunu aç/kapat**.

**Düzenleme modu kapalıyken (varsayılan / sunum modu):** Sayfa salt-okunur, hiçbir düzenleme butonu görünmez.

**Düzenleme modu açıkken şunlar yapılabiliyor:**
- Fonksiyon adı ve açıklamasını serbestçe yazıp değiştirme
- Önem derecesini açılır menüden değiştirme (Kritik/Yüksek/Orta/Düşük)
- Kullanım durumunu değiştirme (Aktif/Pasif/Eski Ekran/Yeni Sürüm/İncelenecek/Birleştirilebilir)
- Yönetici notu ekleme
- Yeni fonksiyon ekleme (her modülün altında "+ Yeni fonksiyon ekle")
- Fonksiyon silme (satırdaki çöp kutusu ikonu)
- Modül açıklamasını ve adını düzenleme
- Yeni modül ekleme (sayfanın altında "+ Yeni modül ekle")
- Modül silme (başlıkta çöp kutusu ikonu, içindeki tüm fonksiyonlarla birlikte, onay ister)
- Modül ve fonksiyon sıralarını sürükle-bırak ile değiştirme

**Diğer:** Satıra tıklayınca sağdan detay paneli açılır (fonksiyon adı, açıklama, önem, durum, not, ekran görüntüsü alanı). Her modülün sol tarafında ekran görüntüsü placeholder'ı var — büyüt butonu ve tam ekran lightbox ile.

**Önemli:** Bu bir tarayıcı içi (client-side) düzenleme aracıdır, kalıcı depolama/backend yok. Sayfa kapatılıp açıldığında yapılan değişiklikler sıfırlanır. Kalıcı kayıt için "Excel'e aktar" ile ara ara yedek alınması öneriliyor.

## Çıktı 2 — PowerPoint sunumu

Dosya: `modul-fonksiyon-envanteri.pptx`, 8 slayt, `LAYOUT_WIDE` (13.33×7.5"), `pptxgenjs` ile üretildi.

1. Kapak — başlık, alt başlık, 3 büyük istatistik (modül/fonksiyon/kritik sayısı), koyu lacivert zemin
2. Genel bakış — 6 istatistik kartı + modül bazında öncelik dağılımı (yığılmış çubuk grafik, native PowerPoint chart)
3. Satış ve Operasyon Modülü — açıklama + rozetler + tam fonksiyon tablosu (6 satır)
4. Üye Modülü (1/2) — kritik öncelikli 9 fonksiyonun tam tablosu
5. Üye Modülü (2/2) — yüksek öncelikli 10 fonksiyon iki sütunlu liste + "11 orta, 3 düşük" özet kutusu
6. Yönetim Modülü — tam fonksiyon tablosu (5 satır)
7. Büyük Raporlar Modülü — kritik tablosu (3 satır) + yüksek öncelikli liste (9 fonksiyon, iki sütun) + "2 orta" notu
8. Kapanış / özet — ana mesaj ve üç aksiyon maddesi, koyu lacivert zemin

Büyük modüllerde (33 ve 14 fonksiyonlu) tüm fonksiyonlar tek tabloya sığmadığı için sadece Kritik + Yüksek öncelikliler detaylandırıldı, Orta/Düşük olanlar sayı olarak özetlendi — üst yönetim sunumunun akıcı kalması için.

## Ekran görüntüsü promptları (ChatGPT görsel üretimi için)

Genel stil ön eki (her promptun başına ekli):

```
Clean, modern SaaS admin dashboard UI screenshot, flat design, no gradients, no 3D effects, professional enterprise software aesthetic, dark navy blue header/sidebar (#0E2A4A), turquoise and petrol green accent colors (#0FA3A3, #0E7C6B), white and light gray background, clean sans-serif typography, realistic UI elements, landscape orientation, high detail, no watermark, no logos, generic placeholder text and numbers (not real data).
```

**Satış ve Operasyon Modülü:**
```
Clean, modern SaaS admin dashboard UI screenshot, flat design, dark navy blue header, turquoise and petrol green accents, white background, sans-serif typography, landscape orientation. Show a sales and operations management screen for a fitness club software: a data table listing membership packages and add-on services with columns for package name, price, duration, and status, plus a locker assignment panel on the side with a grid of numbered locker icons. Include a top navigation bar with menu icons and a search field. Generic placeholder text only, no real brand names or logos.
```

**Üye Modülü:**
```
Clean, modern SaaS admin dashboard UI screenshot, flat design, dark navy blue header, turquoise and petrol green accents, white background, sans-serif typography, landscape orientation. Show a member management screen for a fitness club software: a member profile card on the left with a circular avatar placeholder, name, membership status badge, and contact info, and a data table on the right listing members with columns for member number, name, package, payment status, and session count. Include filter and search controls at the top. Generic placeholder text only, no real names or logos.
```

**Yönetim Modülü:**
```
Clean, modern SaaS admin dashboard UI screenshot, flat design, dark navy blue header, turquoise and petrol green accents, white background, sans-serif typography, landscape orientation. Show a system administration and user management screen for a business software: a table of staff user accounts with columns for name, role, assigned facility, and permission level, plus a role-permission matrix panel with checkboxes/toggles. Include a left sidebar with settings icons. Generic placeholder text only, no real names or logos.
```

**Büyük Raporlar Modülü:**
```
Clean, modern SaaS admin dashboard UI screenshot, flat design, dark navy blue header, turquoise and petrol green accents, white background, sans-serif typography, landscape orientation. Show an analytics and reporting dashboard for a business software: a row of KPI summary cards at the top with large numbers and small trend arrows, a bar chart comparing monthly usage below, and a line chart showing revenue trends beside it. Include a date range filter at the top right. Generic placeholder text only, no real data, no logos.
```

## Devam etmek istersen (yeni Claude oturumunda)

- "HTML dashboard'daki placeholder görsel alanlarına şu görselleri yerleştir" → görselleri yükle, hangi modüle ait olduklarını söyle
- "PowerPoint'e de aynı görselleri ekle"
- "Yeni bir modül/fonksiyon ekle" → HTML'de düzenleme modunu aç ile de yapılabilir, ya da bu dosyayı güncelleyip Claude'a yeniden ürettirebilirsin
- "Envanterdeki [X] fonksiyonunun önem derecesini değiştir" → veri tablosunu güncelleyip iki çıktıyı da yeniden üretmesini isteyebilirsin

Bu dokümandaki tablolar ve tasarım tokenleri, hem HTML hem PPTX dosyalarını sıfırdan yeniden üretmek için yeterli bilgiyi içeriyor.
