import React from "react";
import { PRICING_PLANS, PricingPlan, CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Check, Sparkles, Clock } from "lucide-react";

interface PricingPackagesProps {
  onSelectBooking: (planName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectBooking }) => {
  const handleBookingClick = (plan: PricingPlan) => {
    const text = encodeURIComponent(plan.waBookingMessage);
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="harga" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Transparan Tanpa Biaya Tersembunyi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Pilihan Paket Perawatan Medis
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Investasi terbaik untuk kesehatan kulit jangka panjang dengan harga
            terjangkau, produk bersertifikasi BPOM, dan tindakan dokter spesialis.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "bg-[#FFFDFC] border-2 border-rose-600 shadow-card ring-1 ring-rose-600/20 lg:-translate-y-2"
                  : "bg-white border border-stone-200 shadow-2xs hover:shadow-soft"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose-700 text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paling Diminati Pasien</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {plan.savePercent}
                  </span>
                </div>

                <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-6 border-b border-stone-100">
                  <div className="text-xs text-stone-400 line-through">
                    {plan.originalPrice}
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-bold text-stone-900 tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-stone-500">/ paket</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{plan.duration}</span>
                  </div>
                </div>

                {/* Ideal For Note */}
                <div className="my-5 p-3 rounded-lg bg-stone-50 border border-stone-100 text-xs text-stone-600">
                  <strong className="text-stone-800 font-semibold">Cocok untuk: </strong>
                  {plan.idealFor}
                </div>

                {/* Checklist of Included Items */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Sudah Termasuk:
                  </div>
                  <ul className="space-y-2.5 text-xs text-stone-600">
                    {plan.includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => handleBookingClick(plan)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                    plan.isPopular
                      ? "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Booking Paket via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectBooking(plan.name)}
                  className="w-full py-2 px-3 text-xs font-medium text-stone-600 hover:text-stone-900 text-center transition-colors"
                >
                  Isi Formulir Reservasi Manual
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Installment Notice */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl mx-auto">
          <p>
            *Tersedia program cicilan 0% hingga 12 bulan (BCA, Mandiri, BNI,
            CIMB Niaga) untuk semua paket di atas. Seluruh biaya sudah termasuk
            pajak dan alat medis steril sekali pakai.
          </p>
        </div>
      </div>
    </section>
  );
};
