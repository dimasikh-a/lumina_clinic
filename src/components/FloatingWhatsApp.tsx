import React, { useState } from "react";
import { CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { X, Send } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickPrompts = [
    "Halo, mau tanya jadwal dokter spesialis kulit minggu ini?",
    "Berapa biaya promo paket glowing laser bulan ini?",
    "Mau tanya perawatan untuk bekas jerawat bopeng dan flek.",
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customMsg || "Halo Lumina Aesthetic, saya ingin konsultasi perawatan kulit.";
    window.open(
      `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsOpen(false);
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header with WhatsApp branding */}
          <div className="bg-[#075E54] text-white p-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center shrink-0 border border-white/20">
                <WhatsAppIcon className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">
                  WhatsApp {CLINIC_CONFIG.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online · Respon cepat &lt; 5 menit</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Tutup chat WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#EFEAE2]/60 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-stone-200 text-xs text-stone-700 shadow-2xs">
              Halo! Selamat datang di <strong>{CLINIC_CONFIG.name}</strong>. Ada
              yang bisa dokter atau admin kami bantu seputar keluhan kulit Anda hari ini?
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Pertanyaan Cepat:
              </div>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50/70 border border-stone-200/90 hover:border-[#25D366] text-xs text-stone-700 transition-colors flex items-center justify-between group shadow-2xs"
                >
                  <span className="line-clamp-1">{q}</span>
                  <WhatsAppIcon variant="brand" className="w-3.5 h-3.5 shrink-0 ml-1.5" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 bg-white border border-stone-300 rounded-lg p-1.5 focus-within:border-[#25D366] focus-within:ring-1 focus-within:ring-[#25D366]">
                <input
                  type="text"
                  placeholder="Ketik pertanyaan untuk dokter/admin..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="w-full text-xs text-stone-900 px-2 py-1 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  className="p-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md shrink-0 transition-colors shadow-2xs"
                  aria-label="Kirim ke WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button with Real WhatsApp Logo */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-stone-200 shadow-md text-xs font-semibold text-stone-800 hover:text-stone-950 cursor-pointer select-none group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat WhatsApp Klinik</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95 relative group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          aria-label="Buka Chat WhatsApp Resmi Klinik"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <WhatsAppIcon className="w-7 h-7 fill-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                1
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
