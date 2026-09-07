# MotoClean Express - Premium Motorcycle Wash Landing Page

A modern responsive landing page for a motorcycle wash service built with HTML, CSS, and Vanilla JavaScript.

## Fitur Utama

- **Desain Modern Premium**: Tema gelap dengan aksen glassmorphism dan tipografi yang elegan (Poppins & Inter).
- **Performa Cepat**: Dibangun sepenuhnya menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa framework eksternal, memastikan waktu muat yang sangat cepat.
- **Responsif dan Mobile-First**: Tampilan disesuaikan sempurna untuk perangkat seluler, tablet, dan desktop. Termasuk menu navigasi geser (drawer) untuk tampilan mobile.
- **Interaktif dan Dinamis**:
  - Slider interaktif Sebelum/Sesudah untuk perbandingan gambar.
  - Galeri foto dengan filter kategori dan tampilan pratinjau (lightbox modal).
  - Navigasi menempel (sticky header) dengan penyorot otomatis berdasarkan posisi gulir layar.
  - Akordion interaktif untuk Pertanyaan Umum (FAQ).
  - Animasi elemen muncul perlahan (scroll reveal).
- **Konfigurasi Bisnis Terpusat (`js/config.js`)**: Kemudahan mengelola informasi bisnis, harga layanan, daftar fitur, dan pesan otomatis WhatsApp dalam satu berkas khusus, tanpa perlu mengubah HTML.
- **Integrasi WhatsApp**: Pembuatan tautan WhatsApp secara dinamis untuk setiap tombol layanan, termasuk templat pesan yang mempermudah calon pelanggan melakukan pemesanan.

## Struktur Berkas

```
motoclean-express/
├── index.html               # Halaman utama dengan struktur HTML5 semantik dan tag meta SEO
├── README.md                # Dokumentasi proyek
├── css/
│   └── styles.css           # Sistem desain, variabel CSS, efek visual, dan penataan responsif
├── js/
│   ├── config.js            # Konfigurasi data bisnis (kontak, layanan, promo)
│   └── main.js              # Logika JavaScript untuk semua fitur interaktif
└── assets/
    └── images/              # Semua aset gambar (contoh, hasil kerja, profil pelanggan)
```

## Cara Menjalankan Secara Lokal

1. Kloning repositori ini ke komputer Anda.
2. Buka folder proyek (`motoclean-express`).
3. Anda dapat langsung membuka berkas `index.html` pada peramban web (browser).
4. Untuk pengalaman terbaik, disarankan menggunakan peladen (server) lokal seperti [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code, atau menjalankan `npx serve` / `python -m http.server` di terminal.

## Lisensi

Proyek portofolio ini dapat digunakan dan dimodifikasi secara bebas untuk kebutuhan referensi atau pengembangan lanjutan.
