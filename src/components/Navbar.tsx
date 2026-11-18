import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { CLINIC_CONFIG } from "../data/clinicData";
import { ClinicLogo } from "./ClinicLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Menu, X, Phone } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", path: "/" },
    { label: "Layanan", path: "/layanan" },
    { label: "Kontak Kami", path: "/kontak" },
    { label: "Tentang Kami", path: "/tentang" },
  ];

  const handleBookingWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo ${CLINIC_CONFIG.name}, saya ingin booking jadwal konsultasi perawatan kulit. Mohon info ketersediaan slot dokter.`
    );
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5"
            : "bg-[#FAF8F5] border-b border-stone-200/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract: Clinic Logo | 4 Nav Links | Booking Button */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Dedicated Beauty Clinic Logo (Left) */}
            <Link
              to="/"
              className="group whitespace-nowrap shrink-0"
              aria-label={`${CLINIC_CONFIG.name} - Beranda`}
            >
              <ClinicLogo size="md" />
            </Link>

            {/* Zone 2: 4 Single-line Nav Links (Center) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-stone-600">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `py-1 relative transition-colors whitespace-nowrap shrink-0 text-sm ${
                      isActive
                        ? "text-rose-800 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-rose-700 after:rounded-full"
                        : "text-stone-600 hover:text-stone-900 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-stone-300 after:transition-all"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Zone 3: Action "Booking Sekarang" (Right) */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-rose-700 px-3 py-2 rounded-lg hover:bg-stone-100/60 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>{CLINIC_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleBookingWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#25D366]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Booking Sekarang</span>
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-stone-900/50 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF8F5] shadow-xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <ClinicLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4 Menu Nav Links for Mobile */}
              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-lg text-base transition-colors ${
                        isActive
                          ? "bg-rose-100/70 text-rose-800 font-semibold"
                          : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookingWhatsApp();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Booking Sekarang (WA)</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Lumina Aesthetic Clinic, saya ingin bertanya tentang jadwal dokter dan perawatan."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg flex items-center justify-center gap-2"
              >
                <WhatsAppIcon variant="brand" className="w-4 h-4" />
                <span>Chat Admin WhatsApp</span>
              </a>

              <p className="text-center text-xs text-stone-500 pt-1">
                {CLINIC_CONFIG.city} · Buka Setiap Hari
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
