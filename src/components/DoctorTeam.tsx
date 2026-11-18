import React from "react";
import { DOCTORS, Doctor, CLINIC_CONFIG } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Calendar, GraduationCap, ShieldCheck, Clock } from "lucide-react";

interface DoctorTeamProps {
  onSelectBooking: (doctorName: string) => void;
}

export const DoctorTeam: React.FC<DoctorTeamProps> = ({ onSelectBooking }) => {
  const handleDoctorWhatsApp = (doc: Doctor) => {
    const text = encodeURIComponent(
      `Halo ${CLINIC_CONFIG.name}, saya ingin konsultasi dengan ${doc.name} untuk keluhan kulit saya. Mohon info ketersediaan slot ${doc.schedule}.`
    );
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="dokter" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Tenaga Medis Berpengalaman
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Tim Dokter Spesialis & Estetika Kami
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Setiap diagnosis dan tindakan dilakukan langsung oleh dokter
            spesialis kulit dan dokter estetika berlisensi resmi dengan
            jam terbang ribuan kasus klinis.
          </p>
        </div>

        {/* 3 Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Portrait with subtle top frame */}
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={doc.image}
                    alt={`Profil ${doc.name} di ${CLINIC_CONFIG.name}`}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-stone-800 border border-stone-200 shadow-2xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Clean unboxed subtitle */}
                  <div className="text-xs font-semibold text-rose-800 mb-1">
                    {doc.role}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-tight">
                    {doc.name}
                  </h3>

                  <div className="text-xs text-stone-500 font-mono mt-1">
                    {doc.strNumber}
                  </div>

                  <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-stone-600">{doc.education}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-stone-700 font-medium">{doc.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleDoctorWhatsApp(doc)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-stone-800 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <WhatsAppIcon variant="brand" className="w-4 h-4 shrink-0" />
                  <span>Jadwalkan Sesi Bersama Dokter</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
