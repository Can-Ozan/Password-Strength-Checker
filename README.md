# 🔐 Password Strength Checker

> Modern glassmorphism UI ile gerçek zamanlı parola güvenlik analizi yapan, multilingual web uygulaması.

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen?style=flat-square)](https://can-ozan.github.io/Password-Strength-Checker/)
[![GitHub License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## ✨ Özellikler

### 🎨 **Tasarım & UX**
- ✅ **Glassmorphism UI** - Modern frosted glass efektleri
- ✅ **Dark/Light Mode** - Tema seçici ile dinamik temalar
- ✅ **Responsive Design** - Mobile-first approach, tüm cihazlarda mükemmel
- ✅ **Smooth Animations** - 60fps micro-interactions
- ✅ **WCAG 2.1 AA** - Tam erişilebilirlik desteği
- ✅ **PWA Ready** - Offline modda çalışır, App Store'a eklenebilir

### 🔐 **Güvenlik Analizi**
- ✅ **Gerçek Zamanlı Analiz** - Yazarken anında feedback
- ✅ **Güç Puanı (0-100)** - Dinamik strength meter
- ✅ **Güvenlik Kriterleri** - Uppercase, lowercase, numbers, special chars
- ✅ **Entropy Hesaplaması** - Matematiksel güçlük seviyesi
- ✅ **Kırılma Süresi Tahmini** - GPU/CPU brute-force tahminleri
- ✅ **Sözlük Kontrolü** - Yaygın parolaları tespit eder (zxcvbn)
- ✅ **Breach Checker** - Data breach veritabanına karşı kontrol
- ✅ **Tekrar Karakter Tespiti** - Güvensiz desenleri belirler

### 🌍 **Çok Dilli Depo**
- 🇹🇷 Türkçe
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español

### 💻 **Teknik Özellikleri**
- ✅ **Zero Dependencies** - Framework-free (pure CSS)
- ✅ **Lightweight** - <100KB gzipped bundle
- ✅ **Fast** - <50ms parsing time
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Privacy First** - Hiçbir veri sunucuya gönderilmez
- ✅ **SEO Friendly** - Meta tags ve semantic HTML

---

## 🎯 Hızlı Başlangıç

### Demo Sayfası
Uygulamayı hemen deneyebilirsiniz:
👉 [https://can-ozan.github.io/Password-Strength-Checker/](https://can-ozan.github.io/Password-Strength-Checker/)

### Kurulum

#### Prerequisites
- Node.js 16.0+ 
- npm 7.0+ veya yarn

#### Adımlar

1. **Repository'yi klonla**
```bash
git clone https://github.com/Can-Ozan/Password-Strength-Checker.git
cd Password-Strength-Checker
```

2. **Bağımlılıkları yükle**
```bash
npm install
```

3. **Development server'ı başlat**
```bash
npm run dev
```
Tarayıcı otomatik `http://localhost:5173` adresini açacak.

4. **Production build yap**
```bash
npm run build
```
Optimize edilmiş dosyalar `dist/` klasörüne çıkacak.

5. **Preview yap**
```bash
npm run preview
```

---

## 📖 Kullanım

### Web Tarayıcısında

1. **Parola Gir**
   - Input field'ine güvenliğini test etmek istediğin parolayı yaz
   - Analiz otomatik başlayacak

2. **Sonuçları İncele**
   - Güç puanı (0-100)
   - Güvenlik kriterleri (checkmarks)
   - Kırılma süresi tahmini
   - Spesifik öneriler

3. **Güçlü Parola Oluştur**
   - "Güçlü Parola Oluştur" butonuna tıkla
   - Oluşturulan parolayı kopyala

4. **Tema Değiştir**
   - Sağ üstteki theme toggle'ı kullan
   - Dark/Light mode arasında geçiş yap

5. **Dil Seç**
   - Language selector'dan dilini seç
   - UI anında çevirisi yapılacak

---

## 🏗️ Proje Yapısı

```
Password-Strength-Checker/
├── src/
│   ├── main.ts              # Entry point
│   ├── PasswordChecker.ts   # Ana logic
│   ├── StrengthMeter.ts     # Güç hesaplaması
│   ├── Validators.ts        # Validation fonksiyonları
│   ├── UI.ts                # UI bileşenleri
│   └── i18n/
│       ├── tr.json          # Türkçe çeviriler
│       ├── en.json          # English translations
│       └── ...
├── public/
│   ├── manifest.json        # PWA manifest
│   └── icons/               # App icons
├── style.css                # Glassmorphism theme
├── index.html               # HTML template
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies

```

---

## 🎨 Tasarım Sistem

### Renk Paleti
```css
Primary Blue:     #60A5FA
Primary Purple:   #A78BFA
Accent Green:     #34D399
Dark Background:  #0F172A
Glass Surface:    rgba(255, 255, 255, 0.08)
```

### Tipografi
- **Headings:** Inter, 2rem-3rem, Weight 700
- **Body:** Inter, 1rem, Line-height 1.6
- **Code:** Space Mono

### Spacing
- Base unit: 4px
- Padding: 12px, 16px, 20px, 24px
- Margin: 8px, 16px, 24px, 32px

### Animasyonlar
- Smooth transitions: 200-300ms
- Timing function: cubic-bezier(0.4, 0, 0.2, 1)
- GPU accelerated transforms

---

## 📊 Performance Metrikleri

| Metrik | Değer |
|--------|-------|
| Bundle Size | <100KB (gzipped) |
| Lighthouse Score | 95+ |
| First Contentful Paint | <1.5s |
| Time to Interactive | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Frames per Second | 60fps |
| Initial Load Time | <500ms |

---

## 🛠️ Teknik Stack

### Frontend
- **Framework:** Vite 5.0+
- **Language:** TypeScript 5.0+
- **CSS:** Pure CSS3 + CSS Variables (no framework)
- **Icons:** Feather Icons
- **i18n:** Custom JSON-based translation system

### Security
- **CSP Headers** - Content Security Policy
- **XSS Protection** - Input sanitization
- **Privacy** - Client-side only, no tracking
- **HTTPS** - Secure connection only

### Quality Assurance
- **Type Safety:** TypeScript strict mode
- **Accessibility:** WCAG 2.1 AA
- **Performance:** Lighthouse 95+
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

### Build Tools
- **Bundler:** Vite
- **Package Manager:** npm / yarn
- **Version Control:** Git
- **Deployment:** GitHub Pages

---

## 🚀 Öğrendiklerim & Best Practices

### 1. **GitHub Copilot ile Verimli İş**
```
İyi yapılandırılmış prompt → Yüksek kaliteli kod
Copilot'u kontrol et (review et) → Hata azaldı
Iterative feedback → Daha iyi sonuçlar
```

### 2. **CSS Variable Sistemi**
```css
/* Tek yerden tema yönetimi */
:root {
  --primary-color: #60A5FA;
  --backdrop-blur: 10px;
  --transition-speed: 0.3s;
}

/* Dark mode sadece override etmek yeterli */
[data-theme="dark"] {
  --primary-color: #3B82F6;
}
```

### 3. **Performance First**
- Framework seçmek yerine vanilla CSS/JS
- CSS Variables ile dynamic styling
- Image optimization ve lazy loading
- Bundle size monitoring

### 4. **Erişilebilirlik (a11y)**
- Semantic HTML5 elemanları
- ARIA labels ve roles
- Keyboard navigation
- Screen reader uyumluluk
- Color contrast (WCAG AA)

### 5. **PWA Implementation**
```javascript
// Service Worker'da offline desteği
// Install prompt ile App kurulması
// Responsive web design
```

---

## 📱 Browser Desteği

| Browser | Versiyon |
|---------|----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

---

## 🤝 Katkı Sağlamak

Projeye katkı sağlamak istiyorsan:

1. **Fork et** - Repository'yi forklayın
2. **Branch oluştur** - `git checkout -b feature/amazing-feature`
3. **Commit et** - `git commit -m 'Add amazing feature'`
4. **Push et** - `git push origin feature/amazing-feature`
5. **Pull Request aç** - Detaylı açıklama ile PR'ı oluşturun

### Kontribüsyon Kuralları
- TypeScript strict mode'unu koru
- WCAG 2.1 AA uyumluluğunu sağla
- Performance regression'ı test et
- Türkçe ve İngilizce açıklamalar yaz

---

## 🐛 Bug Raporlama

Bir bug bulursan, lütfen [GitHub Issues](https://github.com/Can-Ozan/Password-Strength-Checker/issues) üzerinden rapor et:

```
Başlık: [BUG] Kısa açıklama
Açıklama: Detaylı açıklama
Adımlar:
1. Bu adımı yap
2. Sonrasında bu olur
Beklenen davranış: Ne olması gerekiyordu
Gerçek davranış: Ne oldu
```

---

## 📝 Lisans

Bu proje **MIT Lisansı** ile açık kaynak olarak yayınlanmıştır.

Detaylar için bkz: [LICENSE](LICENSE)

---

## 📞 İletişim

- **GitHub:** [@Can-Ozan](https://github.com/Can-Ozan)
- **Twitter:** [@yourhandle](https://twitter.com/yusfcnozn)
- **LinkedIn:** [Your Profile](https://linkedin.com/in/yusufcanozan)
- **Email:** yusufcanozan9@gmail.com

---

## 🙏 Teşekkürler

- **Icons:** [Feather Icons](https://feathericons.com/)
- **Typography:** [Inter Font](https://rsms.me/inter/)
- **Password Strength:** [zxcvbn](https://github.com/dropbox/zxcvbn)
- **Community:** Tüm contributors ve feedback veren kişilere

---

## 📚 Kaynaklar

- 🔗 [OWASP Password Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- 🔗 [WCAG 2.1 Accessibility](https://www.w3.org/WAI/standards-guidelines/wcag/)
- 🔗 [Web Performance](https://web.dev/performance/)
- 🔗 [Password Security](https://www.ncsc.gov.uk/collection/mobile-device-guidance/using-built-in-platform-features/using-built-in-platform-features-to-protect-passwords)

---

## 📊 Proje İstatistikleri

![GitHub Stars](https://img.shields.io/github/stars/Can-Ozan/Password-Strength-Checker?style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/Can-Ozan/Password-Strength-Checker?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/Can-Ozan/Password-Strength-Checker?style=flat-square)
![Code Size](https://img.shields.io/github/languages/code-size/Can-Ozan/Password-Strength-Checker?style=flat-square)

---

## 🎯 Roadmap

- [ ] **v2.1** - Password generator advanced options
- [ ] **v2.2** - Browser extension
- [ ] **v2.3** - Parola geçmiş (local storage)
- [ ] **v2.4** - API backend (optional)
- [ ] **v3.0** - Mobile app (React Native)

---

## 📄 Changelog

### v2.0 (Current)
- ✨ Glassmorphism redesign
- ✨ Dark/Light mode
- ✨ Multi-language support (5 languages)
- ✨ PWA support
- 🐛 Performance optimizations
- ♿ WCAG 2.1 AA compliance

### v1.0 (Initial Release)
- Core password strength checking
- Basic UI
- Responsive design

---

**Made with ❤️ by [@Can-Ozan](https://github.com/Can-Ozan)**

**⭐ Projeyi beğendiysen, star atarak bize destek ol!**
