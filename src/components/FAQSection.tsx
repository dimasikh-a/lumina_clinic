import React, { useState } from "react";
import { FAQS, FAQItem, CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Pertanyaan Yang Sering Diajukan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Jawaban Seputar Perawatan di Lumina
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Semua hal yang perlu Anda ketahui mengenai keamanan tindakan, biaya,
            persiapan, hingga proses reservasi konsultasi dokter.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF8F5] border-rose-300 shadow-2xs"
                    : "bg-white border-stone-200 hover:border-stone-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-rose-100 text-rose-800"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-rose-100/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 text-center p-6 bg-stone-50 rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-800 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">
                Punya pertanyaan lain yang belum terjawab?
              </div>
              <div className="text-xs text-stone-500">
                Tim admin medis kami siap membantu menjawab via WhatsApp
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Halo Admin Lumina Aesthetic, saya ingin menanyakan hal lain mengenai konsultasi dan perawatan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-2xs transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat CS Lumina via WA</span>
          </a>
        </div>
      </div>
    </section>
  );
};
