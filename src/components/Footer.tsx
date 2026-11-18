import React from "react";
import { Link } from "react-router-dom";
import { CLINIC_CONFIG, SERVICES } from "../data/clinicData";
import { ClinicLogo } from "./ClinicLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ShieldCheck, Phone, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Brand Logo & Tagline */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4 group" aria-label={`${CLINIC_CONFIG.name} - Beranda`}>
              <ClinicLogo size="md" inverted={true} />
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm mb-6">
              Klinik kecantikan dan dermatologi estetika medis di {CLINIC_CONFIG.city}.
              Didedikasikan untuk merawat kesehatan kulit alami dengan pendekatan
              ilmiah, dokter berlisensi, dan teknologi modern.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Izin Klinik Kemenkes RI No. 503/092/KLINIK/DPMPTSP</span>
            </div>
          </div>

          {/* Column 2: 4 Menu Navigasi Utama */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Menu Utama
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="hover:text-white transition-colors">
                  Layanan & Harga
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors">
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Unggulan */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Layanan Populer
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/layanan"
                    className="hover:text-rose-300 transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak & Jam Buka */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Alamat & Reservasi
            </div>
            <address className="not-italic text-xs text-stone-400 space-y-2.5 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONFIG.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="hover:text-white font-mono">
                  {CLINIC_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon variant="brand" className="w-4 h-4 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-mono text-[#25D366]"
                >
                  +{CLINIC_CONFIG.whatsappNumber}
                </a>
              </p>
              <p className="flex items-center gap-2 text-stone-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{CLINIC_CONFIG.openingHours.weekdays}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {CLINIC_CONFIG.name}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Standar Medis BPOM & Kemenkes RI</span>
            <span aria-hidden="true">·</span>
            <Link to="/kontak" className="hover:text-stone-300">
              Lokasi & Petunjuk Arah
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
