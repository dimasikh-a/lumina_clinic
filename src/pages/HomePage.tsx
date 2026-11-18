import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CLINIC_CONFIG, SERVICES, ADVANTAGES, ServiceItem } from "../data/clinicData";
import { Advantages } from "../components/Advantages";
import { Testimonials } from "../components/Testimonials";
import { ServiceDetailModal } from "../components/ServiceDetailModal";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Leaf,
  Layers,
  Award,
} from "lucide-react";

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    document.title = `${CLINIC_CONFIG.name} – Klinik Kecantikan & Dermatologi Medis ${CLINIC_CONFIG.city}`;
  }, []);

  const featuredServices = SERVICES.slice(0, 4);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "facial-glow-hydra":
        return <Sparkles className="w-5 h-5 text-rose-700" />;
      case "pico-laser":
        return <Zap className="w-5 h-5 text-rose-700" />;
      case "botanical-peeling":
        return <Leaf className="w-5 h-5 text-rose-700" />;
      case "microneedling-rf":
        return <Layers className="w-5 h-5 text-rose-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-700" />;
    }
  };

  const handleBookingWA = () => {
    const text = encodeURIComponent(
      `Halo ${CLINIC_CONFIG.name}, saya ingin booking jadwal konsultasi dokter spesialis kulit. Mohon info jadwal yang tersedia.`
    );
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Hero Section */}
      <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Headline & 2 CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 uppercase mb-4">
                <span>Dermatologi Estetika & Skincare Medis</span>
                <span aria-hidden="true">·</span>
                <span>{CLINIC_CONFIG.city}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 leading-[1.18] tracking-tight text-balance">
                Wajah Bersih, Sehat, dan{" "}
                <span className="italic font-normal text-rose-800">
                  Bercahaya Alami
                </span>{" "}
                Bersama Dokter Spesialis
              </h1>

              <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty font-normal">
                Perawatan kulit terpadu yang memadukan keahlian dokter spesialis
                berlisensi resmi, teknologi laser modern berstandar US FDA,
                dan formulasi klinis aman bersertifikasi BPOM untuk hasil nyata yang tahan lama.
              </p>

              {/* 2 Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={handleBookingWA}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Booking Konsultasi WA</span>
                </button>

                <Link
                  to="/layanan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-lg shadow-2xs hover:border-stone-300 transition-all whitespace-nowrap text-center"
                >
                  <span>Lihat Layanan & Harga</span>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </Link>
              </div>

              {/* Trust markers */}
              <div className="mt-10 pt-8 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-stone-800">Produk Resmi BPOM</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="font-medium text-stone-800">Dokter Ber-STR Resmi</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                  <span className="font-medium text-stone-800">Free 3D Skin Analysis</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-soft">
                  <img
                    src="/src/assets/images/hero_clinic_glow_1793149419940.jpg"
                    alt={`Pasien dengan kulit wajah glowing alami di ${CLINIC_CONFIG.name}`}
                    className="w-full h-auto object-cover aspect-4/3 sm:aspect-5/4 lg:aspect-4/3"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="p-4 sm:p-5 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent absolute inset-x-0 bottom-0 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-rose-200">
                        Radiant Glass Skin Treatment
                      </p>
                      <p className="text-sm font-medium text-white/95">
                        Kulit bersih, lembap, dan kenyal seketika
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-md px-2.5 py-1 text-[11px] font-medium border border-white/20">
                      Signature Glow
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-card flex items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">
                      Dokter Spesialis Sp.KK
                    </div>
                    <div className="text-[11px] text-stone-500">
                      100% Prosedur Steril & Aman
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Metric Strip */}
          <div className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">
                {CLINIC_CONFIG.stats.patientsServed}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 mt-1">
                Pasien telah dirawat
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">
                {CLINIC_CONFIG.stats.yearsExperience}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 mt-1">
                Dedikasi medis estetika
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">
                {CLINIC_CONFIG.stats.satisfactionRate}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 mt-1">
                Tingkat kepuasan hasil
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-rose-800 font-sans">
                {CLINIC_CONFIG.stats.certifiedDoctors}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 mt-1">
                Izin resmi IDI & PERDOSKI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Keunggulan Klinik (4 Kartu Ikon) */}
      <Advantages />

      {/* 3. Cuplikan 4 Layanan Unggulan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
                Pilihan Perawatan Terpopuler
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Layanan Unggulan di {CLINIC_CONFIG.name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl">
                Solusi dermatologis paling diminati untuk mengatasi jerawat,
                flek hitam, dan peremajaan kulit tanpa rasa sakit berlebih.
              </p>
            </div>

            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100/90 rounded-lg transition-colors whitespace-nowrap self-start md:self-end border border-rose-200/80"
            >
              <span>Lihat Semua 8 Layanan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100/80 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    {service.popular && (
                      <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/70">
                        Favorit
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 group-hover:text-rose-800 transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-medium">
                      Mulai dari
                    </span>
                    <span className="text-xs font-bold text-stone-900">
                      {service.priceStart}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-800 group-hover:translate-x-0.5 transition-all p-1"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 hover:underline"
            >
              <span>Telusuri seluruh katalog perawatan & daftar harga paket</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimoni Pelanggan */}
      <Testimonials />

      {/* 5. Banner Ajakan (CTA) Booking */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-900 via-stone-900 to-stone-950 text-white relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-rose-300 mb-3 block">
            Jadwalkan Kunjungan Anda Sekarang
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Konsultasikan Kondisi Kulit Anda dengan Dokter Spesialis Kami
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Dapatkan evaluasi kondisi kulit akurat dengan 3D Skin Analyzer digital
            secara gratis. Tim kami siap membantu Anda mewujudkan kulit sehat,
            bersih, dan bercahaya.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleBookingWA}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat & Booking via WhatsApp</span>
            </button>

            <Link
              to="/kontak"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Isi Form Reservasi / Info Lokasi</span>
            </Link>
          </div>

          <p className="text-xs text-stone-400 mt-5">
            Admin klinik merespon pesan WhatsApp setiap hari pukul 09.00 – 20.00 WIB.
          </p>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectBooking={(serviceName) => {
          setSelectedService(null);
          const text = encodeURIComponent(
            `Halo ${CLINIC_CONFIG.name}, saya ingin booking perawatan ${serviceName}. Kapan ada jadwal dokter?`
          );
          window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
        }}
      />
    </div>
  );
};
