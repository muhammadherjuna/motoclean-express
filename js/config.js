/**
 * MotoClean Express - Konfigurasi Bisnis Terpusat
 * Pengaturan informasi usaha, harga, kontak, dan lokasi.
 */

const CONFIG = {
  brandName: "MotoClean Express",
  tagline: "Motor Bersih Maksimal, Siap Menemani Aktivitas Anda Setiap Hari",
  whatsappNumber: "6281234567890",
  whatsappFormatted: "0812-3456-7890",
  address: {
    street: "Jl. Kemang Raya No.25",
    subdistrict: "Kemang",
    district: "Mampang Prapatan",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12730",
    googleMapsUrl: "https://maps.google.com/?q=Jl.+Kemang+Raya+No.25+Jakarta+Selatan"
  },
  operatingHours: {
    weekdays: "Senin - Sabtu: 08.00 - 18.00 WIB",
    weekend: "Minggu: 09.00 - 16.00 WIB"
  },
  socialMedia: {
    instagram: "@motoclean.express",
    facebook: "MotoClean Express Jakarta",
    tiktok: "@motoclean.express"
  },
  services: [
    {
      id: "basic",
      name: "Basic Wash",
      price: "Rp 15.000",
      rawPrice: 15000,
      duration: "20 - 30 Menit",
      badge: null,
      description: "Pilihan praktis untuk membersihkan kotoran harian agar sepeda motor Anda tetap bersih dan rapi.",
      benefits: [
        "Pencucian bodi motor secara merata",
        "Pembersihan velg dan ban",
        "Pengeringan dengan lap microfiber halus",
        "Semir ban mengkilap"
      ],
      waMessage: "Halo MotoClean Express, saya ingin memesan layanan Basic Wash (Rp15.000). Kapan ada waktu luang untuk hari ini?"
    },
    {
      id: "premium",
      name: "Premium Wash",
      price: "Rp 30.000",
      rawPrice: 30000,
      duration: "40 - 50 Menit",
      badge: "Paling Diminati",
      description: "Pencucian detail hingga bagian kolong dan sela mesin, dilengkapi lapisan pengkilap bodi.",
      benefits: [
        "Seluruh fitur Paket Basic",
        "Pembersihan detail area mesin dan sela kolong",
        "Pembersihan kotoran yang membandel",
        "Aplikasi lapisan pengkilap bodi",
        "Hasil mengkilap dan tahan air"
      ],
      waMessage: "Halo MotoClean Express, saya ingin memesan paket Premium Wash (Rp30.000). Mohon informasi jadwal yang tersedia."
    },
    {
      id: "detailing",
      name: "Motor Detailing",
      price: "Rp 75.000",
      rawPrice: 75000,
      duration: "90 - 120 Menit",
      badge: "Perawatan Total",
      description: "Perawatan menyeluruh untuk membersihkan kerak, jamur bodi, poles ringan, serta merestorasi bagian plastik.",
      benefits: [
        "Pembersihan mendalam hingga sela terkecil",
        "Poles bodi tingkat ringan",
        "Pembersihan kerak mesin dan jamur bodi",
        "Restorasi warna plastik yang kusam",
        "Lapisan proteksi bodi tahan lama"
      ],
      waMessage: "Halo MotoClean Express, saya tertarik dengan layanan Motor Detailing (Rp75.000). Mohon konfirmasi jadwal dan konsultasi."
    }
  ],
  promos: {
    newCustomer: {
      title: "Penawaran Pelanggan Baru",
      discount: "Potongan Harga 20%",
      bonus: "Gratis Pengkilap Bodi untuk Paket Premium",
      code: "MOTOCLEANNEW",
      waMessage: "Halo MotoClean Express, saya ingin mengklaim Penawaran Pelanggan Baru (Diskon 20%). Mohon bantuannya."
    }
  }
};
