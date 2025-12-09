# 🎮 Klavye Ustası - Klavye Öğrenme Oyunu

5. Sınıf Bilişim Teknolojileri dersi için geliştirilmiş, web tabanlı etkileşimli klavye öğrenme oyunu.

## 📋 Proje Hakkında

Klavye Ustası, öğrencilere Q Türkçe klavyenin tüm tuşlarını, görevlerini ve temel kısayollarını eğlenceli bir şekilde öğretmek için tasarlanmış çok etaplı bir eğitim oyunudur.

### 🎯 Hedef Kitle
- 5. sınıf öğrencileri
- Okul bilgisayar laboratuvarları
- Masaüstü/laptop ve fiziksel klavye ile oynanır

### 📚 Müfredat Uyumu
MEB 5. Sınıf Bilişim Teknolojileri müfredatı:
- ✅ Fare ve Klavye Kullanımı
- ✅ Klavye Tuşlarının Görevleri
- ✅ En Çok Kullanılan Kısayol Tuşları

## 🎮 Oyun Özellikleri

### 5 Farklı Etap

1. **📝 Etap 1 - Tanıma & Görev Bul**
   - Tuşun görevini okuyup doğru tuşa basma
   - Kavramsal öğrenme odaklı

2. **🔤 Etap 2 - Tuşu Gör, Bas!**
   - Ekrandaki karakteri klavyede bulma
   - Motor beceri geliştirme

3. **🎯 Etap 3 - Düşen Tuşlar (Arcade)**
   - Yukarıdan düşen tuşlara zamanında basma
   - Hız ve refleks geliştirme
   - Seviye bazlı zorluk artışı

4. **⌨️ Etap 4 - Kısayol Göster**
   - Ekranda gösterilen kısayolu yapma (örn: Ctrl+C)
   - Pratik beceri kazanma

5. **🧠 Etap 5 - Tanımdan Kısayol Bul**
   - Açıklamadan kısayolu hatırlayıp yapma
   - Bilgi transferi ve ezber

### Oyun Mekanikleri

- **⏱️ Süre Sistemi**: Her soru için geri sayım (15-30 saniye)
- **❤️ Can Sistemi**: 3 hak, her yanlış -1 can
- **🎯 Skor Sistemi**: Hız + doğruluk bonusu
- **🔥 Combo Sistemi**: 3+ ardışık doğru cevap bonusu
- **📊 Seviye Sistemi**: Kademeli zorluk artışı
- **🔊 Ses Efektleri**: Doğru/yanlış/seviye atlama sesleri

### Öğretmen Özellikleri

- **⚙️ Pratik Modu**: Süre sınırı kaldırılabilir
- **📝 Tuş Adları**: Göster/gizle seçeneği
- **🔊 Ses Kontrolü**: Açma/kapama
- **📊 İstatistikler**: Öğrenci performans takibi
- **⚠️ Hata Analizi**: En çok zorlanılan tuşları gösterir

## 🚀 Nasıl Oynanır?

### Dosya Erişimi

Oyuna 2 şekilde erişebilirsiniz:

1. **Standalone HTML (Önerilen)**
   ```
   Dosya konumu: /app/frontend/public/klavye-ustasi.html
   Tarayıcıda açın ve oynamaya başlayın!
   ```

2. **React Uygulaması İçinden**
   ```
   http://localhost:3000
   "Oyunu Başlat" butonuna tıklayın
   ```

### Oyun Kontrolleri

- **Klavye**: Tüm oyun klavye ile oynanır
- **Tuşlar**: Gerçek klavyenizden tuşlara basın
- **Kısayollar**: Ctrl, Alt, Shift kombinasyonları yapın
- **Gezinme**: Fare ile menülerde gezinme

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renk**: Mavi tonları (#2563eb, #1e40af)
- **Arka Plan**: Açık mavi gradyanlar
- **Vurgu**: Yeşil (doğru), kırmızı (yanlış)
- **Stil**: Eğitici, modern, temiz

### Arayüz
- ✅ Büyük fontlar (5. sınıf için uygun)
- ✅ Yüksek kontrast (okunabilirlik)
- ✅ Responsive tasarım
- ✅ Animasyonlar ve geri bildirimler
- ✅ Renk körü uyumlu

## 🛠️ Teknik Detaylar

### Teknoloji
- **Tek HTML Dosyası**: Tüm kod içinde (CSS + JS)
- **Framework**: Vanilla JavaScript (bağımlılık yok)
- **Çalışma**: İstemci tarafı, sunucu gerektirmez
- **Tarayıcı**: Modern tarayıcılarda çalışır

### Klavye Algılama
- `keydown` ve `keyup` olayları
- Set veri yapısı ile kombinasyon takibi
- CapsLock durumu dikkate alınır
- Türkçe karakterler (ç, ğ, ı, ö, ş, ü) desteklenir

### Ses Efektleri
- Web Audio API ile oluşturulur
- Doğru: Yükselen ton
- Yanlış: Alçalan ton
- Seviye atlama: Arpej
- Açma/kapama seçeneği

## 📖 Pedagojik Yaklaşım

### Bloom Taksonomisi
Etaplar öğrenme piramidini takip eder:
1. Hatırlama (Etap 1)
2. Anlama (Etap 2)
3. Uygulama (Etap 3)
4. Analiz (Etap 4)
5. Değerlendirme (Etap 5)

### Öğrenme İlkeleri
- **Kademeli Zorluk**: Kolaydan zora
- **Anında Geri Bildirim**: Her cevap sonrası
- **Oyunlaştırma**: Skor, seviye, combo
- **Pratik Yapma**: Tekrarlı alıştırma
- **Hata Analizi**: Zayıf noktaları gösterir

## 📊 Kapsanan İçerik

### Özel Tuşlar (31 adet)
- Esc, Tab, CapsLock, Shift, Control, Alt, AltGraph
- Enter, Backspace, Delete, Insert
- Home, End, PageUp, PageDown
- NumLock, PrintScreen
- F1-F6 fonksiyon tuşları

### Klavye Kısayolları (13 adet)
- Ctrl + C, V, X (Kopyala, Yapıştır, Kes)
- Ctrl + S, P, A (Kaydet, Yazdır, Tümünü Seç)
- Ctrl + F, Z (Bul, Geri Al)
- Ctrl + B, U, I (Kalın, Altı Çizili, İtalik)
- Alt + F4, Alt + Tab (Kapat, Geçiş)

## 📈 İstatistikler ve Raporlama

Oyun sonu ekranında:
- ✅ Toplam soru sayısı
- ✅ Doğru/yanlış cevap sayısı
- ✅ Başarı oranı (%)
- ✅ En yüksek combo
- ✅ Ulaşılan seviye
- ✅ En çok zorlanılan tuşlar listesi

## 🎯 Öneriler

### Öğrenciler İçin
1. Hızdan çok doğruluk önemli - acele etme!
2. Her tuşa dikkatli davran
3. Yanlış tuşa basarsan öğren ve tekrar dene
4. Combo yapmak için ardışık doğru cevaplar ver

### Öğretmenler İçin
1. İlk oturumlarda pratik modunu kullanın
2. Öğrencilerin klavyeye bakmasını teşvik edin
3. Grup içi yarışmalar düzenleyin
4. Hata analizi raporlarını inceleyin
5. Düzenli pratik yapılmasını sağlayın

## 📝 Lisans ve Kullanım

Bu oyun eğitim amaçlı geliştirilmiştir ve ücretsiz olarak kullanılabilir.

---

**Geliştirme Tarihi**: Aralık 2024  
**Hedef Sınıf**: 5. Sınıf  
**Konu**: Bilişim Teknolojileri - Klavye Kullanımı  
**Platform**: Web Tarayıcı (Standalone HTML)
