import React from "react";
import { CLINIC_CONFIG } from "../data/clinicData";
import { CalendarCheck, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="beranda" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle organic background glow accents */}
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
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-800 uppercase mb-4">
              <span>Klinik Dermatologi & Estetika Medis</span>
              <span aria-hidden="true">·</span>
              <span>{CLINIC_CONFIG.city}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 leading-[1.18] tracking-tight text-balance">
              Wajah Bersih, Sehat, dan{" "}
              <span className="italic font-normal text-rose-800">
                Bercahaya Alami
              </span>{" "}
              Ditangani Dokter Spesialis
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty font-normal">
              Perawatan kulit terpadu yang memadukan keahlian dokter spesialis
              dermatologi berlisensi, teknologi laser modern berstandar US FDA,
              serta formulasi klinis aman bersertifikasi BPOM untuk hasil nyata
              tanpa rasa khawatir.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 active:scale-[0.98]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Booking Konsultasi WA</span>
              </button>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-lg shadow-2xs hover:border-stone-300 transition-all whitespace-nowrap text-center"
              >
                <span>Lihat Layanan & Harga</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

            {/* Trust Assurance Strip */}
            <div className="mt-10 pt-8 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-stone-800">100% Produk BPOM</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-medium text-stone-800">Dokter Ber-STR Resmi</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                <span className="font-medium text-stone-800">Konsultasi Awal Gratis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-soft">
                <img
                  src="/src/assets/images/hero_clinic_glow_1793149419940.jpg"
                  alt="Pasien dengan kulit sehat bercahaya alami di Lumina Aesthetic Clinic Jakarta"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-5/4 lg:aspect-4/3"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container in case of asset loading failure
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Subtle scrim & photo caption overlay */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent absolute inset-x-0 bottom-0 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-rose-200">
                      Radiant Glass Skin Treatment
                    </p>
                    <p className="text-sm font-medium text-white/95">
                      Kulit bersih, lembap, dan glowing tanpa filter
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-md px-2.5 py-1 text-[11px] font-medium border border-white/20">
                    Lumina Signature
                  </div>
                </div>
              </div>

              {/* Floating verified trust card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-card flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    Dokter Spesialis Sp.KK
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Prosedur higienis & tersertifikasi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero split */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tabular-nums">
              {CLINIC_CONFIG.stats.patientsServed}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">
              Pasien puas telah dirawat
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tabular-nums">
              {CLINIC_CONFIG.stats.yearsExperience}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">
              Dedikasi dermatologi estetika
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tabular-nums">
              {CLINIC_CONFIG.stats.satisfactionRate}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">
              Tingkat kepuasan hasil klinis
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-rose-800 font-sans">
              {CLINIC_CONFIG.stats.certifiedDoctors}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">
              Dokter berizin resmi IDI & PERDOSKI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
