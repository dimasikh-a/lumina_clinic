import React, { useState } from "react";
import { CLINIC_CONFIG, SERVICES, buildWhatsAppBookingUrl } from "../data/clinicData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  CalendarCheck,
  Send,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

interface BookingFormProps {
  initialService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService }) => {
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [layanan, setLayanan] = useState(initialService || "Hydra Deep Glow Facial");
  const [tanggal, setTanggal] = useState("");
  const [sesiWaktu, setSesiWaktu] = useState("Pagi (10.00 – 13.00 WIB)");
  const [catatan, setCatatan] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update layanan if initialService prop changes
  React.useEffect(() => {
    if (initialService) {
      setLayanan(initialService);
    }
  }, [initialService]);

  // Today's date string for input min attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!nama.trim() || nama.trim().length < 2) {
      errs.nama = "Mohon masukkan nama lengkap Anda.";
    }
    const cleanPhone = telepon.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      errs.telepon = "Masukkan nomor WhatsApp yang aktif (minimal 9 digit).";
    }
    if (!tanggal) {
      errs.tanggal = "Pilih tanggal konsultasi yang Anda harapkan.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildWhatsAppBookingUrl({
      nama,
      telepon,
      layanan,
      tanggal,
      sesiWaktu,
      catatan,
    });

    setSubmitted(true);
    // Open WhatsApp in new window
    window.open(waUrl, "_blank");
  };

  const handleCopyText = () => {
    const lines = [
      `Halo ${CLINIC_CONFIG.name}, saya ingin reservasi konsultasi:`,
      `Nama: ${nama}`,
      `No WA: ${telepon}`,
      `Layanan: ${layanan}`,
      `Tanggal: ${tanggal}`,
      `Waktu: ${sesiWaktu}`,
      catatan ? `Keluhan: ${catatan}` : "",
    ].filter(Boolean);

    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="booking" className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-800 uppercase mb-2">
            Reservasi Cepat & Mudah
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Booking Konsultasi Dokter via WhatsApp
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            Lengkapi formulir di bawah ini. Sistem kami akan otomatis merangkum
            dan membuka percakapan WhatsApp resmi klinik untuk konfirmasi cepat
            kurang dari 5 menit.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-card">
          {submitted ? (
            /* Success confirmation screen */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Permintaan Reservasi Siap Dikirim!
              </h3>
              <p className="text-sm text-stone-600 max-w-lg mx-auto mb-6">
                WhatsApp otomatis dibuka di jendela baru. Jika tidak terbuka
                otomatis, silakan klik tombol di bawah atau salin ringkasan pesan.
              </p>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 max-w-md mx-auto text-left text-xs text-stone-700 font-mono mb-6 space-y-1">
                <div>Nama: <strong>{nama}</strong></div>
                <div>Layanan: <strong>{layanan}</strong></div>
                <div>Tanggal: <strong>{tanggal}</strong> ({sesiWaktu})</div>
                {catatan && <div>Keluhan: <em>{catatan}</em></div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppBookingUrl({
                    nama,
                    telepon,
                    layanan,
                    tanggal,
                    sesiWaktu,
                    catatan,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Buka Ulang WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="px-5 py-3 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Tersalin ke Clipboard!" : "Salin Format Pesan"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setNama("");
                    setTelepon("");
                    setCatatan("");
                  }}
                  className="px-4 py-3 text-xs text-stone-500 hover:text-stone-800 underline"
                >
                  Buat Reservasi Baru
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                  >
                    Nama Lengkap <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="nama"
                    value={nama}
                    onChange={(e) => {
                      setNama(e.target.value);
                      if (errors.nama) setErrors({ ...errors, nama: "" });
                    }}
                    placeholder="Contoh: Amanda Putri"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors ${
                      errors.nama
                        ? "border-rose-500 bg-rose-50/20 focus:ring-1 focus:ring-rose-500"
                        : "border-stone-300 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                    }`}
                  />
                  {errors.nama && (
                    <p className="mt-1 text-xs text-rose-600">{errors.nama}</p>
                  )}
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label
                    htmlFor="telepon"
                    className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                  >
                    Nomor WhatsApp <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="telepon"
                      value={telepon}
                      onChange={(e) => {
                        setTelepon(e.target.value);
                        if (errors.telepon) setErrors({ ...errors, telepon: "" });
                      }}
                      placeholder="Contoh: 081289001234"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors ${
                        errors.telepon
                          ? "border-rose-500 bg-rose-50/20 focus:ring-1 focus:ring-rose-500"
                          : "border-stone-300 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                      }`}
                    />
                    <Phone className="w-4 h-4 text-stone-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.telepon && (
                    <p className="mt-1 text-xs text-rose-600">{errors.telepon}</p>
                  )}
                </div>
              </div>

              {/* Pilihan Layanan / Paket */}
              <div>
                <label
                  htmlFor="layanan"
                  className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                >
                  Pilihan Perawatan / Paket <span className="text-rose-600">*</span>
                </label>
                <select
                  id="layanan"
                  value={layanan}
                  onChange={(e) => setLayanan(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:border-rose-600 focus:outline-none focus:ring-1 focus:ring-rose-600"
                >
                  <optgroup label="Konsultasi Awal">
                    <option value="Konsultasi Dokter & 3D Skin Analyzer Gratis">
                      Konsultasi Dokter & 3D Skin Analyzer (GRATIS)
                    </option>
                  </optgroup>
                  <optgroup label="Paket Hemat All-in-One">
                    <option value="Paket Basic Fresh Glow (Rp 499.000)">
                      Paket Basic Fresh Glow (Rp 499.000)
                    </option>
                    <option value="Paket Intensive Radiance Laser (Rp 1.190.000) - Favorit">
                      Paket Intensive Radiance Laser (Rp 1.190.000) - Terpopuler
                    </option>
                    <option value="Paket Royal Youth Prestige (Rp 2.450.000)">
                      Paket Royal Youth Prestige (Rp 2.450.000)
                    </option>
                  </optgroup>
                  <optgroup label="Layanan Satuan">
                    {SERVICES.map((s) => (
                      <option key={s.id} value={`${s.name} (${s.priceStart})`}>
                        {s.name} — Mulai {s.priceStart}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Tanggal & Waktu Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="tanggal"
                    className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                  >
                    Tanggal Preferensi <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="tanggal"
                      min={todayStr}
                      value={tanggal}
                      onChange={(e) => {
                        setTanggal(e.target.value);
                        if (errors.tanggal) setErrors({ ...errors, tanggal: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-stone-900 focus:outline-none transition-colors ${
                        errors.tanggal
                          ? "border-rose-500 bg-rose-50/20"
                          : "border-stone-300 focus:border-rose-600"
                      }`}
                    />
                  </div>
                  {errors.tanggal && (
                    <p className="mt-1 text-xs text-rose-600">{errors.tanggal}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="sesiWaktu"
                    className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                  >
                    Sesi Waktu Kunjungan
                  </label>
                  <select
                    id="sesiWaktu"
                    value={sesiWaktu}
                    onChange={(e) => setSesiWaktu(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:border-rose-600 focus:outline-none focus:ring-1 focus:ring-rose-600"
                  >
                    <option value="Pagi (10.00 – 13.00 WIB)">
                      Pagi (10.00 – 13.00 WIB)
                    </option>
                    <option value="Siang (13.00 – 16.00 WIB)">
                      Siang (13.00 – 16.00 WIB)
                    </option>
                    <option value="Sore/Malam (16.00 – 19.30 WIB)">
                      Sore / Malam (16.00 – 19.30 WIB)
                    </option>
                    <option value="Fleksibel sesuai ketersediaan dokter">
                      Fleksibel (Sesuai Ketersediaan Dokter)
                    </option>
                  </select>
                </div>
              </div>

              {/* Catatan Khusus / Keluhan Kulit */}
              <div>
                <label
                  htmlFor="catatan"
                  className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                >
                  Ceritakan Keluhan Kulit Anda (Opsional)
                </label>
                <textarea
                  id="catatan"
                  rows={3}
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  placeholder="Misal: Sudah 6 bulan berjerawat di pipi, sering kambuh, dan ada bekas flek gelap..."
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:border-rose-600 focus:outline-none focus:ring-1 focus:ring-rose-600 resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg text-white font-semibold text-sm sm:text-base bg-[#25D366] hover:bg-[#20bd5a] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#25D366]"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Kirim & Lanjutkan ke WhatsApp Klinik</span>
                </button>
                <p className="text-center text-xs text-stone-500 mt-3">
                  Tanpa pungutan biaya pemesanan. Admin klinik kami akan langsung
                  membalas via WhatsApp dalam beberapa menit.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
