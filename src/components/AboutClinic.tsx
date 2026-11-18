import React from "react";
import { CLINIC_CONFIG } from "../data/clinicData";
import { Sparkles, HeartHandshake, ShieldAlert, Award } from "lucide-react";

export const AboutClinic: React.FC = () => {
  return (
    <section id="tentang" className="py-20 sm:py-24 bg-stone-50/60 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clinic Atmosphere Photography */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-soft bg-white">
                <img
                  src="/src/assets/images/clinic_interior_room_1793149420920.jpg"
                  alt={`Suasana ruang perawatan privat di ${CLINIC_CONFIG.name} ${CLINIC_CONFIG.city}`}
                  className="w-full h-auto object-cover aspect-16/10"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating feature note */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 bg-white p-4 rounded-xl border border-stone-200 shadow-card max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-700 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">
                      Private Suite Treatment
                    </div>
                    <div className="text-[11px] text-stone-500">
                      Privasi maksimal & sterilisasi standar medis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story, Vision, Philosophy */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
              Tentang Kami & Filosofi Medis
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
              Kecantikan Alami yang Tumbuh dari Kesehatan Kulit yang Sejati
            </h2>

            <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed">
              Didirikan di {CLINIC_CONFIG.city},{" "}
              <strong className="text-stone-800 font-semibold">{CLINIC_CONFIG.name}</strong>{" "}
              hadir dengan misi mendefinisikan ulang standar perawatan estetika.
              Kami percaya bahwa kecantikan sejati tidak membutuhkan perubahan
              ekstrem, melainkan pemulihan fungsi alami barrier kulit, hidrasi
              maksimal, dan stimulasi kolagen yang terarah.
            </p>

            <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
              Seluruh tindakan di klinik kami berlandaskan prinsip evidence-based
              dermatology—mengedepankan diagnosis medis yang akurat dan
              menolak janji hasil instan yang berbahaya bagi kesehatan jangka panjang.
            </p>

            {/* Vision & Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5 text-rose-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Visi Kami</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Menjadi rujukan klinik estetika medis terdepan yang paling
                  terpercaya melalui standar higienitas tertinggi dan etika medis tanpa kompromi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5 text-rose-800 text-xs font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Pendekatan Pasien</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Konsultasi personal tanpa tekanan penjualan paket (no hard-selling),
                  berfokus penuh pada solusi keluhan dan kenyamanan Anda.
                </p>
              </div>
            </div>

            {/* Safety Commitment Footnote */}
            <div className="mt-6 flex items-center gap-2.5 text-xs text-stone-500">
              <ShieldAlert className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                Izin Operasional Klinik Pratama Terdaftar Kemenkes RI No.
                503/092/KLINIK/DPMPTSP.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
