import React, { useEffect } from "react";
import { CLINIC_CONFIG, CLINIC_VALUES, CLINIC_GALLERY, DOCTORS, Doctor } from "../data/clinicData";
import { DoctorTeam } from "../components/DoctorTeam";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Award,
  CheckCircle2,
  Building2,
  CalendarCheck,
  FileCheck,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `Tentang Kami & Tim Dokter – ${CLINIC_CONFIG.name} ${CLINIC_CONFIG.city}`;
  }, []);

  const getValueIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-700" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-rose-700" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-rose-700" />;
      case "Award":
        return <Award className="w-6 h-6 text-rose-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-rose-700" />;
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Halaman */}
      <section className="pt-10 pb-14 bg-gradient-to-b from-[#FAF8F5] via-white to-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Dedikasi Medis & Perjalanan Kami
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Mengenal {CLINIC_CONFIG.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Klinik estetika medis di {CLINIC_CONFIG.city} yang mengutamakan
            kesehatan skin barrier alami, keselamatan pasien, dan standar
            ilmiah dermatologi berlisensi.
          </p>
        </div>
      </section>

      {/* 2. Cerita Singkat Klinik, Visi & Misi */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
                Filosofi & Sejarah
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
                Berawal dari Keyakinan Bahwa Kulit yang Sehat adalah Fondasi Kecantikan Abadi
              </h2>

              <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed">
                Didirikan pada tahun 2017 di kawasan Senopati, {CLINIC_CONFIG.city},{" "}
                <strong>{CLINIC_CONFIG.name}</strong> lahir untuk memberikan
                alternatif klinik kecantikan yang menjunjung tinggi etika medis.
                Di tengah maraknya produk instan yang berisiko menipiskan kulit,
                kami konsisten menerapkan protokol regeneratif berbasis sains.
              </p>

              <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
                Kami percaya setiap kulit memiliki karakter biologis yang unik.
                Oleh sebab itu, kami tidak menawarkan perawatan seragam yang kaku.
                Melalui alat 3D Digital Skin Analyzer dan diagnosis dokter spesialis,
                setiap pasien memperoleh terapi personal yang menyehatkan hingga lapisan dermis terdalam.
              </p>

              {/* Visi & Misi Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-700" />
                    <span>Visi Klinik</span>
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Menjadi rujukan utama klinik estetika dan dermatologi di Indonesia yang paling tepercaya, aman, dan berintegritas tinggi.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Misi Klinik</span>
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Menghadirkan teknologi peremajaan kulit mutakhir yang minim downtime dan ramah pasien, tanpa kompromi pada standar keselamatan medis.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-soft bg-white relative">
                <img
                  src="/src/assets/images/clinic_lounge_reception_1793150495935.jpg"
                  alt={`Area Lounge dan Resepsionis di ${CLINIC_CONFIG.name}`}
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block">
                    Ruang Sambut & Resepsionis Lumina
                  </span>
                  <span className="text-stone-500 text-[11px]">
                    Kawasan Senopati, Kebayoran Baru, Jakarta Selatan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nilai-Nilai Klinik (4 Poin dengan Ikon) */}
      <section className="py-16 sm:py-20 bg-stone-50/70 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
              Prinsip Layanan Kami
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Nilai Utama yang Kami Junjung
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              Komitmen kami kepada setiap pasien yang mempercayakan kesehatan kulitnya di Lumina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_VALUES.map((val, idx) => (
              <div
                key={val.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4">
                    {getValueIcon(val.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                  Pilar 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tim Dokter (3 Kartu Profil) */}
      <DoctorTeam
        onSelectBooking={(doctorName) => {
          const text = encodeURIComponent(
            `Halo ${CLINIC_CONFIG.name}, saya ingin konsultasi langsung dengan ${doctorName}. Kapan jadwal terdekat dokter?`
          );
          window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
        }}
      />

      {/* 5. Foto Suasana Klinik (Galeri Sederhana) */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
              Fasilitas & Ambiance
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Galeri Suasana Klinik Kami
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              Dirancang dengan konsep minimalist luxury yang tenang, wangi aromaterapi alami, dan menjaga privasi penuh Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CLINIC_GALLERY.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-card transition-all duration-300 group"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sertifikasi & Izin Klinik Resmi */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
              Legalitas & Kepatuhan Medis
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Sertifikasi & Izin Operasional Resmi
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
              {CLINIC_CONFIG.name} beroperasi di bawah payung hukum medis Republik
              Indonesia dan mematuhi kode etik kedokteran dermatologi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 text-center">
              <Building2 className="w-6 h-6 text-rose-700 mx-auto mb-2" />
              <div className="text-xs font-bold text-stone-900">Kemenkes RI</div>
              <div className="text-[11px] text-stone-500 mt-1">
                Izin Operasional No. 503/092/KLINIK
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 text-center">
              <ShieldCheck className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
              <div className="text-xs font-bold text-stone-900">BPOM RI</div>
              <div className="text-[11px] text-stone-500 mt-1">
                100% Serum & Skincare Terdaftar
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 text-center">
              <Award className="w-6 h-6 text-rose-700 mx-auto mb-2" />
              <div className="text-xs font-bold text-stone-900">IDI & PERDOSKI</div>
              <div className="text-[11px] text-stone-500 mt-1">
                Dokter Ber-STR & Anggota Aktif
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 text-center">
              <FileCheck className="w-6 h-6 text-stone-700 mx-auto mb-2" />
              <div className="text-xs font-bold text-stone-900">US FDA & CE Mark</div>
              <div className="text-[11px] text-stone-500 mt-1">
                Mesin Laser & HIFU Standar Global
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
