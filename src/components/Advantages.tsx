import React from "react";
import { ADVANTAGES } from "../data/clinicData";
import { ShieldCheck, CheckCircle2, Sparkles, MessageCircleHeart } from "lucide-react";

export const Advantages: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-700" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-rose-700" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-rose-700" />;
      case "MessageCircleHeart":
        return <MessageCircleHeart className="w-6 h-6 text-rose-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-rose-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Standar Keamanan Medis
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Mengapa Memilih Lumina Aesthetic Clinic?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Kombinasi integritas medis dokter berlisensi, transparansi prosedur,
            dan teknologi dermatologi teruji untuk memberikan hasil perawatan
            yang aman dan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={adv.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100/70 transition-colors">
                    {getIcon(adv.iconName)}
                  </div>
                  <span className="text-xs font-mono text-stone-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs text-rose-800 font-medium mb-1.5">
                  {adv.badge}
                </div>

                <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                  {adv.title}
                </h3>

                <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-medium text-stone-500 group-hover:text-rose-700 transition-colors">
                <span>Standar Klinik Utama</span>
                <span aria-hidden="true">·</span>
                <span>Higienis & Steril</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
