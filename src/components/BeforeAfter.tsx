import React, { useState, useRef, useEffect, useCallback } from "react";
import { BEFORE_AFTER_CASES, BeforeAfterCase } from "../data/clinicData";
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const BeforeAfter: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase: BeforeAfterCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <section id="before-after" className="py-20 sm:py-24 bg-stone-50/70 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Dokumentasi Klinis Nyata
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Galeri Transformasi Sebelum & Sesudah
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Hasil perawatan nyata pasien Lumina Aesthetic Clinic. Geser bilah di
            tengah foto untuk melihat perbandingan tekstur dan kecerahan kulit.
          </p>

          {/* Case Navigation Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-200/60 rounded-xl max-w-2xl mx-auto">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCaseIndex === idx
                    ? "bg-white text-stone-900 shadow-xs font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-card">
          {/* Draggable Image Comparison Slider Container */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative aspect-4/3 sm:aspect-16/10 rounded-xl overflow-hidden select-none cursor-ew-resize border border-stone-200 bg-stone-100 shadow-inner"
              onMouseDown={() => setIsDragging(true)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "AFTER" Layer (Full Background: Radiant Smooth Skin) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF2EC] via-[#FFF8F3] to-[#F7ECE4] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-full h-full rounded-lg flex flex-col justify-between p-6 relative overflow-hidden bg-rose-50/40 border border-rose-100">
                  <div className="flex justify-between items-start z-10">
                    <span className="text-xs font-bold text-rose-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-rose-200 shadow-2xs">
                      {currentCase.afterLabel}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      {currentCase.badge}
                    </span>
                  </div>

                  <div className="my-auto z-10 max-w-md mx-auto text-left">
                    <div className="flex items-center gap-2 text-rose-800 text-xs font-semibold mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>Kondisi Pasca Perawatan</span>
                    </div>
                    <p className="text-sm font-medium text-stone-800">
                      {currentCase.afterDesc}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-stone-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{currentCase.duration}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-500 text-left z-10 border-t border-rose-200/60 pt-2">
                    Protokol: {currentCase.solution}
                  </div>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped Overlay: Dull / Bumpy Skin Simulation) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 select-none pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-full flex flex-col justify-between p-6 bg-stone-100/95 border-r border-stone-300"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : "100%",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-stone-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-stone-300 shadow-2xs">
                      {currentCase.beforeLabel}
                    </span>
                  </div>

                  <div className="my-auto max-w-md text-left pr-12">
                    <div className="text-xs font-semibold text-stone-700 mb-1">
                      Kondisi Awal Kulit
                    </div>
                    <p className="text-sm font-medium text-stone-700">
                      {currentCase.beforeDesc}
                    </p>
                    <div className="mt-3 text-xs text-stone-500">
                      Keluhan: {currentCase.problem}
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-500 text-left border-t border-stone-200 pt-2">
                    Dokumentasi klinis awal di klinik
                  </div>
                </div>
              </div>

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize select-none pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg border-2 border-rose-700 flex items-center justify-center text-rose-700 slider-handle-glow">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Slider Hint */}
            <div className="mt-3 text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5 text-stone-400" />
              <span>Tahan dan geser bilah untuk melihat perbandingan</span>
            </div>
          </div>

          {/* Right Column: Clinical Case Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-semibold text-rose-800 uppercase tracking-wide mb-1">
                Studi Kasus Pasien
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
                {currentCase.title}
              </h3>

              <div className="mt-5 space-y-4">
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Keluhan Utama
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentCase.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-rose-50/60 border border-rose-200/60">
                  <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">
                    Prosedur Tindakan Medis
                  </div>
                  <p className="text-xs text-rose-950 font-medium leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
                    <span>Catatan Dokter Penanggung Jawab</span>
                  </div>
                  <p className="text-xs text-stone-600 italic leading-relaxed">
                    "{currentCase.doctorNote}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span>Waktu Evaluasi: {currentCase.duration}</span>
              <a
                href="#booking"
                className="font-semibold text-rose-700 hover:text-rose-800 underline"
              >
                Konsultasikan Keluhan Serupa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
