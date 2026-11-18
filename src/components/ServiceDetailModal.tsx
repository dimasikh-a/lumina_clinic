import React from "react";
import { ServiceItem, CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { X, Clock, Check, AlertCircle, Sparkles } from "lucide-react";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectBooking: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectBooking,
}) => {
  if (!service) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo ${CLINIC_CONFIG.name}, saya tertarik dengan layanan *${service.name}* (${service.priceStart}). Boleh minta info jadwal dokter yang tersedia?`
    );
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl border border-stone-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 uppercase tracking-wide mb-1">
              <span>Perawatan Medis Lumina</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{service.category}</span>
            </div>
            <h3
              id="modal-service-title"
              className="font-serif text-2xl font-bold text-stone-900"
            >
              {service.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Tutup detail layanan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-3.5 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-600">
          <div>
            <span className="text-stone-400 block text-[11px]">Durasi Tindakan</span>
            <span className="font-semibold text-stone-900 flex items-center gap-1.5 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              {service.duration}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">Mulai Dari</span>
            <span className="font-semibold text-rose-700 text-sm mt-0.5 block">
              {service.priceStart}
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-stone-400 block text-[11px]">Waktu Pemulihan</span>
            <span className="font-semibold text-stone-800 mt-0.5 block">
              {service.downtime}
            </span>
          </div>
        </div>

        {/* Full Description */}
        <p className="text-sm text-stone-600 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* Benefits & Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-5 border-t border-stone-200">
          {/* Manfaat */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>Manfaat Utama</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tahapan Tindakan */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-600" />
              <span>Tahapan Prosedur Medis</span>
            </h4>
            <ol className="space-y-2 text-xs text-stone-600 list-decimal list-inside">
              {service.steps.map((step, i) => (
                <li key={i} className="leading-snug">
                  <span className="text-stone-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Cocok Untuk */}
        <div className="mt-5 p-3 bg-rose-50/50 rounded-lg border border-rose-100 flex items-start gap-2 text-xs text-rose-900">
          <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Direkomendasikan untuk: </span>
            {service.recommendedFor.join(", ")}.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectBooking(service.name);
            }}
            className="px-5 py-2.5 text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-center"
          >
            Pilih di Form Booking
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Tanya Jadwal Dokter via WA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
