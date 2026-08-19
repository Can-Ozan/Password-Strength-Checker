# VaultCheck Password Strength Checker

VaultCheck, Vite ve TypeScript ile oluşturulmuş, parolaları tarayıcı içinde analiz eden privacy-first bir web uygulamasıdır. Arayüz glassmorphism tasarım sistemi, responsive layout ve erişilebilir etkileşimler kullanır.

## Özellikler

- Gerçek zamanlı parola güç skoru ve güvenlik kriterleri
- Entropy ve tahmini kırılma süresi göstergesi
- Web Crypto API ile güvenli parola üretimi
- Uzunluk ve karakter tipi ayarları
- Tek tıkla kopyalama ve localStorage geçmişi
- İki parola karşılaştırma modu
- Have I Been Pwned k-anonim API ile breach kontrolü
  - Parolanın kendisi gönderilmez; yalnızca SHA-1 hash prefix kullanılır
  - Ağ erişimi yoksa yerel analiz çalışmaya devam eder
- Türkçe, İngilizce, Almanca, Fransızca ve İspanyolca dil seçici
- Dark/light tema
- PWA manifest ve offline shell cache
- Keyboard navigation, focus states, `aria-live` analiz bölgeleri ve reduced-motion desteği
- GitHub Pages için Vite base path yapılandırması

## Teknoloji

- Vite 7
- TypeScript 5
- Vanilla TypeScript DOM controller
- Pure CSS: CSS variables, Grid, Flexbox, glassmorphism
- Web Crypto API, Clipboard API, Service Worker

## Geliştirme

Gereksinimler: Node.js LTS ve npm.

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173/Password-Strength-Checker/` adresinde açılır. Production bundle için:

```bash
npm run build
npm run preview
```

## GitHub Pages

```bash
npm run deploy
```

`vite.config.ts` içindeki `base` değeri repository adıyla eşleşmelidir. PWA dosyaları `public/` klasöründen build çıktısının köküne kopyalanır.

## Güvenlik ve gizlilik

Parolalar sunucuda saklanmaz ve uygulama tarafından loglanmaz. Breach kontrolü için kullanılan istek k-anonimdir. Üretilen parolalar yalnızca kullanıcının cihazındaki localStorage alanında tutulur; hassas hesap parolalarını geçmişte saklamak istemiyorsanız tarayıcı verilerini temizleyebilirsiniz.

## Proje yapısı

```text
index.html              Semantic application shell
style.css               Glassmorphism design system
src/main.ts             App state and DOM event controller
src/PasswordChecker.ts  Local scoring and crack-time logic
src/UI.ts               Legacy UI helper retained for compatibility
src/StrengthMeter.ts    Legacy meter helper retained for compatibility
src/Validators.ts       Validation helpers
public/manifest.webmanifest
public/sw.js            Offline service worker
```

## Lisans

MIT
