import React, { useEffect, useState } from "react";
import { CLINIC_CONFIG, SERVICES, ServiceItem } from "../data/clinicData";
import { PricingPackages } from "../components/PricingPackages";
import { FAQSection } from "../components/FAQSection";
import { ServiceDetailModal } from "../components/ServiceDetailModal";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import {
  Sparkles,
  Zap,
  Leaf,
  Layers,
  HeartPulse,
  TrendingUp,
  Droplets,
  Flame,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    document.title = `Layanan & Daftar Harga – ${CLINIC_CONFIG.name} ${CLINIC_CONFIG.city}`;
  }, []);

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

  const handleConsultWhatsApp = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Halo ${CLINIC_CONFIG.name}, saya ingin konsultasi mengenai layanan *${service.name}* (estimasi ${service.priceStart}). Boleh minta info rekomendasi dan jadwal dokter?`
    );
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  const filteredServices = SERVICES.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: "all", label: "Semua 8 Layanan" },
    { id: "wajah", label: "Facial & Acne Solution" },
    { id: "laser", label: "Laser & Peeling" },
    { id: "antiaging", label: "Anti-Aging & HIFU" },
    { id: "tubuh", label: "Whitening & Hair Removal" },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Page Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#FAF8F5] via-white to-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Katalog Tindakan Medis Terpadu
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Layanan Dermatologi & Estetika Medis
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Setiap tindakan ditangani langsung oleh dokter spesialis kulit dan
            dokter estetika bersertifikasi resmi, menggunakan peralatan medis
            FDA-cleared serta produk aman terdaftar BPOM.
          </p>

          {/* Category Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-2xl mx-auto border border-stone-200/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-white text-stone-900 shadow-xs font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Grid Kartu Layanan (8 Layanan) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100/80 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    {service.popular && (
                      <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/70">
                        Paling Dicari
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium">BPOM</span>
                  </div>

                  <h2 className="text-base font-bold text-stone-900 group-hover:text-rose-800 transition-colors leading-snug">
                    {service.name}
                  </h2>

                  <p className="mt-2 text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-baseline justify-between">
                    <span className="text-[11px] text-stone-400">Estimasi Biaya:</span>
                    <span className="text-xs font-bold text-stone-900 tabular-nums">
                      Mulai {service.priceStart}
                    </span>
                  </div>
                </div>

                {/* 2 Action Buttons: Detail Modal & Direct WhatsApp Consult */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2 px-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors text-center"
                  >
                    Detail Tindakan
                  </button>

                  <button
                    type="button"
                    onClick={() => handleConsultWhatsApp(service)}
                    className="flex-1 py-2 px-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Konsultasi</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Daftar Harga Paket (Basic, Glow, Premium) */}
      <PricingPackages
        onSelectBooking={(planName) => {
          const text = encodeURIComponent(
            `Halo ${CLINIC_CONFIG.name}, saya ingin booking paket *${planName}*. Boleh minta jadwal dokter yang tersedia?`
          );
          window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
        }}
      />

      {/* 4. FAQ Accordion (5-6 Pertanyaan) */}
      <FAQSection />

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectBooking={(serviceName) => {
          setSelectedService(null);
          const text = encodeURIComponent(
            `Halo ${CLINIC_CONFIG.name}, saya tertarik dengan perawatan *${serviceName}*. Kapan ada jadwal dokter yang tersedia?`
          );
          window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
        }}
      />
    </div>
  );
};
