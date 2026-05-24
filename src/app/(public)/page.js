"use client";

import { useState } from "react";

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function HomePage() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={
        darkMode
          ? "bg-slate-950 text-white min-h-screen"
          : "bg-slate-50 text-slate-900 min-h-screen"
      }
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <HeroSection darkMode={darkMode} />

      <FeaturesSection darkMode={darkMode} />

      <AboutSection darkMode={darkMode} />

      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} />

    </main>
  );
}