# Güneş Hafriyat

Bilecik ve çevre illerde (Bursa, Eskişehir, Kütahya, Sakarya, Kocaeli) hafriyat, nakliyat ve kazı
hizmetleri sunan işletme için Vite + React + TypeScript ile hazırlanmış, SEO'ya uygun tek sayfa site.

## Geliştirme

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # prod build (tsc + vite build + prerender)
npm run lint
```

`npm run build` sonrasında `postbuild` adımı, `scripts/prerender.mjs` ile sayfayı bir kez
Chromium'da render edip sonucu `dist/index.html` içine gömer; böylece arama motoru botları JS
çalıştırmadan da tam içeriği görür. Ortamda Chromium yoksa bu adım hatasız atlanır.

## Yayına almadan önce doldurulacak placeholder'lar

Aşağıdaki bilgiler henüz gerçek değil, örnek (placeholder) veridir. Yayına almadan önce
güncellenmeli:

- **Domain**: `guneshafriyat.com` — `index.html`, `public/robots.txt`, `public/sitemap.xml`
  içinde geçiyor. Gerçek alan adı belli olunca hepsinde değiştirilmeli.
- **E-posta**: `info@guneshafriyat.com` — `src/data/content.ts` içindeki `business.email`.
- **OG görseli**: `public/og-image.jpg`, `scripts/og-card.html` üzerinden otomatik üretildi
  (`node scripts/generate-og-image.mjs`). Gerçek marka/foto materyali hazır olunca yenilenmeli.
- **Saha fotoğrafları**: Şu an sitede gerçek fotoğraf yok, sadece SVG logo/ikon var.

Telefon (`0535 321 99 78`) ve adres (İstiklal Mahallesi, Şerif Paşa Caddesi, Bilecik Merkez)
gerçek bilgilerle güncellendi.
