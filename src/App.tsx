import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-rose-100 selection:text-rose-900">
        {/* Sticky Navbar with 4 menus on all pages */}
        <Navbar />

        {/* Dynamic Multi-Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer on all pages */}
        <Footer />

        {/* Global Floating WhatsApp button on all pages */}
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}
