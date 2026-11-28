// Isi dua nilai SUPABASE di bawah (lihat PANDUAN.md langkah 4).
window.CFG = {
  SUPABASE_URL: "GANTI-DENGAN-PROJECT-URL",
  SUPABASE_KEY: "GANTI-DENGAN-ANON-PUBLIC-KEY",

  // true  = guru cukup memilih nama (tanpa kata sandi). Pengembang tetap memakai kata sandi.
  // false = guru memakai kata sandi pribadi (daftar pertama kali dengan kode pendaftaran).
  TANPA_SANDI: true,
  // Kode pendaftaran otomatis (harus sama dengan kode di database; awalnya paacep83)
  KODE_DAFTAR: "paacep83"
};
