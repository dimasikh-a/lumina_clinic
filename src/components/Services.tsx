import React, { useState } from "react";
import { SERVICES, ServiceItem } from "../data/clinicData";
import { ServiceDetailModal } from "./ServiceDetailModal";
import {
  Sparkles,
  Zap,
  Leaf,
  Layers,
  HeartPulse,
  TrendingUp,
  Droplets,
  Flame,
  ArrowRight,
  Clock,
} from "lucide-react";

interface ServicesProps {
  onSelectBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
      case "acne-clear-solution":
        return <HeartPulse className="w-5 h-5 text-rose-700" />;
      case "anti-aging-hifu":
        return <TrendingUp className="w-5 h-5 text-rose-700" />;
      case "radiance-whitening":
        return <Droplets className="w-5 h-5 text-rose-700" />;
      case "laser-hair-removal":
        return <Flame className="w-5 h-5 text-rose-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-700" />;
    }
  };

  const filteredServices = SERVICES.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "wajah", label: "Perawatan Wajah & Jerawat" },
    { id: "laser", label: "Laser & Flek" },
    { id: "antiaging", label: "Anti-Aging & Kontur" },
    { id: "tubuh", label: "Tubuh & Infus" },
  ];

  return (
    <section id="layanan" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Protokol Perawatan Medis
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Layanan Dermatologi & Estetika Unggulan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Setiap perawatan disesuaikan dengan kondisi unik kulit Anda
            berdasarkan hasil diagnosis dokter spesialis dan skin analyzer digital.
          </p>

          {/* Interactive Filter Control */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-stone-100/90 rounded-xl max-w-2xl mx-auto border border-stone-200/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-white text-stone-900 shadow-xs font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header row: Icon + Price */}
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

                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-2">
                  <Clock className="w-3 h-3" />
                  <span>{service.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{service.category}</span>
                </div>

                <h3 className="text-base font-bold text-stone-900 group-hover:text-rose-800 transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Card Footer: Price & Details button */}
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
                  aria-label={`Detail lengkap layanan ${service.name}`}
                >
                  <span>Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              Belum yakin perawatan mana yang cocok untuk jenis kulit Anda?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              Jadwalkan sesi konsultasi dan digital skin check dengan dokter kami
              tanpa dipungut biaya apa pun.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectBooking("Konsultasi & Skin Analyzer Gratis")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg shadow-2xs transition-all whitespace-nowrap shrink-0"
          >
            Konsultasi Gratis Sekarang
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectBooking={onSelectBooking}
      />
    </section>
  );
};
