import React, { useState } from "react";
import { TESTIMONIALS, Testimonial } from "../data/clinicData";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current: Testimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimoni" className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Cerita Pasien Kami
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Pengalaman Nyata Pasien Lumina Aesthetic
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
            Ulasan jujur dari pasien yang telah merasakan perubahan kesehatan
            kulit mereka bersama tim dokter spesialis kami.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-card relative">
          <Quote className="w-12 h-12 text-rose-200/80 absolute top-6 right-6 pointer-events-none" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-5">
            {[...Array(current.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="ml-2 text-xs font-bold text-stone-700">
              5.0 / 5.0
            </span>
          </div>

          {/* Quote text */}
          <p className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed italic">
            "{current.review}"
          </p>

          {/* Result Metric Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Hasil: {current.resultMetric}</span>
          </div>

          {/* Author Info & Nav Arrows */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900 text-base">
                  {current.name}
                </span>
                <span className="text-xs text-stone-400">({current.age} thn)</span>
                {current.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Pasien Terverifikasi
                  </span>
                )}
              </div>
              <div className="text-xs text-stone-500 mt-1">
                {current.profession} · {current.location} · Tindakan:{" "}
                <span className="font-medium text-rose-800">
                  {current.treatment}
                </span>
              </div>
            </div>

            {/* Carousel Control Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors"
                aria-label="Ulasan sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-stone-400 px-2 font-mono tabular-nums">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors"
                aria-label="Ulasan berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Secondary Mini Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                currentIndex === idx
                  ? "bg-white border-rose-600 shadow-xs"
                  : "bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300"
              }`}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs text-stone-600 line-clamp-2 italic">
                "{item.review}"
              </p>
              <div className="mt-3 text-xs font-semibold text-stone-900">
                {item.name} · <span className="text-stone-500 font-normal">{item.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
