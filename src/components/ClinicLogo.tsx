import React from "react";
import { CLINIC_CONFIG } from "../data/clinicData";

interface ClinicLogoProps {
  size?: "sm" | "md" | "lg";
  inverted?: boolean; // for dark backgrounds like the footer
  showText?: boolean;
  className?: string;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  size = "md",
  inverted = false,
  showText = true,
  className = "",
}) => {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }[size];

  const titleSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  }[size];

  const subSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real Aesthetic Clinic Brand Logo Emblem */}
      <div
        className={`relative ${iconDimensions} rounded-full overflow-hidden shrink-0 border shadow-2xs transition-transform duration-300 hover:scale-105 ${
          inverted
            ? "border-amber-200/40 bg-stone-800"
            : "border-rose-200/90 bg-white"
        }`}
      >
        <img
          src="/src/assets/images/clinic_brand_logo_1793152742077.jpg"
          alt={`Logo ${CLINIC_CONFIG.name}`}
          className="w-full h-full object-cover object-center p-0.5"
          referrerPolicy="no-referrer"
          loading="eager"
          onError={(e) => {
            // Elegant SVG fallback if asset fails to load
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Crisp vector fallback underneath */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-tr from-rose-50 to-amber-50">
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6 text-rose-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M20 6c2 4 7 8 7 14 0 5-3.5 9-7 11-3.5-2-7-6-7-11 0-6 5-10 7-14z" />
            <path d="M20 14c1.5 2 4 4.5 4 7.5 0 2.5-1.8 4.5-4 5.5-2.2-1-4-3-4-5.5 0-3 2.5-5.5 4-7.5z" />
            <circle cx="20" cy="9" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Typography Lockup */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-bold tracking-tight leading-none ${titleSizes} ${
              inverted ? "text-white" : "text-stone-900"
            }`}
          >
            Lumina
            <span className={inverted ? "text-rose-400 font-normal" : "text-rose-700 font-normal"}>
              .
            </span>
          </span>
          <span
            className={`tracking-widest uppercase font-medium mt-0.5 ${subSizes} ${
              inverted ? "text-stone-400" : "text-stone-500"
            }`}
          >
            Aesthetic Clinic
          </span>
        </div>
      )}
    </div>
  );
};
