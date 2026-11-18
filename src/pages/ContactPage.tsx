import React, { useEffect } from "react";
import { CLINIC_CONFIG } from "../data/clinicData";
import { BookingForm } from "../components/BookingForm";
import { ContactLocation } from "../components/ContactLocation";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = `Kontak & Reservasi Konsultasi – ${CLINIC_CONFIG.name} ${CLINIC_CONFIG.city}`;
  }, []);

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Halaman */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#FAF8F5] via-white to-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Layanan Pelanggan & Reservasi
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Hubungi Kami & Jadwalkan Kunjungan
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Klinik kami berlokasi strategis di kawasan {CLINIC_CONFIG.area},{" "}
            {CLINIC_CONFIG.city}. Silakan kirimkan formulir reservasi atau hubungi
            kami langsung via WhatsApp untuk respon cepat.
          </p>

          {/* Quick Contact Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <WhatsAppIcon variant="brand" className="w-4 h-4" />
              <span>WhatsApp: +{CLINIC_CONFIG.whatsappNumber} (Respon &lt; 5 mnt)</span>
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 font-semibold hover:bg-stone-200 transition-colors shadow-2xs font-mono"
            >
              <Phone className="w-4 h-4 text-stone-600" />
              <span>{CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Formulir Booking / Kontak Terintegrasi WhatsApp */}
      <BookingForm />

      {/* 3. Kontak, Alamat, Jam Operasional, Embed Maps, Medsos */}
      <ContactLocation />
    </div>
  );
};
