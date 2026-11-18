import React, { useState } from "react";
import { CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Instagram,
  Compass,
} from "lucide-react";

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_CONFIG.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Determine if currently open based on local Jakarta time (WIB UTC+7)
  const isCurrentlyOpen = () => {
    const now = new Date();
    // Convert to Jakarta time
    const jakartaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );
    const day = jakartaTime.getDay(); // 0 is Sunday
    const hour = jakartaTime.getHours();

    if (day === 0) {
      // Sunday: 10.00 - 18.00
      return hour >= 10 && hour < 18;
    } else {
      // Mon - Sat: 09.00 - 20.00
      return hour >= 9 && hour < 20;
    }
  };

  const openNow = isCurrentlyOpen();

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Lokasi & Jam Operasional
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Kunjungi Klinik Kami di {CLINIC_CONFIG.city}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Lokasi strategis di kawasan {CLINIC_CONFIG.area} dengan area parkir
            luas, valet gratis, dan atmosfer klinik yang privat serta tenang.
          </p>
        </div>

        {/* 2-Column Split: Info & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Status & Jam Operasional Card */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-rose-700" />
                  Jam Operasional
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${
                    openNow
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-stone-100 text-stone-600 border-stone-200"
                  }`}
                >
                  {openNow ? "Buka Sekarang" : "Tutup Hari Ini"}
                </span>
              </div>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="font-medium text-stone-800">Senin – Sabtu:</span>
                  <span className="font-mono text-stone-900">09.00 – 20.00 WIB</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-stone-800">Minggu & Hari Libur:</span>
                  <span className="font-mono text-stone-900">10.00 – 18.00 WIB</span>
                </div>
              </div>
            </div>

            {/* Alamat & Arah */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-2xs">
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <MapPin className="w-4 h-4 text-rose-700" />
                Alamat Klinik
              </span>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {CLINIC_CONFIG.fullAddress}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Alamat Tersalin" : "Salin Alamat"}</span>
                </button>

                <a
                  href={CLINIC_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah</span>
                </a>
              </div>
            </div>

            {/* Telepon & Medsos */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600">
                  <Phone className="w-4 h-4 text-rose-700" />
                  <span>Telepon Klinik:</span>
                </div>
                <a
                  href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                  className="font-bold text-stone-900 hover:text-rose-700 font-mono"
                >
                  {CLINIC_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600">
                  <WhatsAppIcon variant="brand" className="w-4 h-4" />
                  <span>WhatsApp Resmi:</span>
                </div>
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] hover:underline font-mono"
                >
                  +{CLINIC_CONFIG.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600">
                  <Mail className="w-4 h-4 text-rose-700" />
                  <span>Email Resmi:</span>
                </div>
                <a
                  href={`mailto:${CLINIC_CONFIG.email}`}
                  className="font-medium text-stone-900 hover:text-rose-700"
                >
                  {CLINIC_CONFIG.email}
                </a>
              </div>

              <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="text-stone-500">Ikuti Media Sosial Kami:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={CLINIC_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-rose-700 flex items-center gap-1 font-medium"
                    aria-label="Instagram Lumina Clinic"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-stone-300">·</span>
                  <a
                    href={CLINIC_CONFIG.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-rose-700 font-medium"
                    aria-label="TikTok Lumina Clinic"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-200 shadow-soft relative min-h-[360px] bg-stone-100 flex flex-col">
            <iframe
              src={CLINIC_CONFIG.mapsEmbedUrl}
              title={`Peta Lokasi ${CLINIC_CONFIG.name} di ${CLINIC_CONFIG.city}`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
