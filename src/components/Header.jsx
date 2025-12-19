"use client";

import React, { useState } from "react";
import { Menu, X, Download, Apple, Smartphone } from "lucide-react";
import { AboutSection } from "./About-section";
import HeroSection from "./Hero-section";
import { FeaturesSection } from "./Feature-section";
import { WhyChooseSection } from "./Why-choose-section";
import HowItWorksSection from "./Howit-works-section";
import { ScreenshotsSection } from "./Screenshot-section";
import CtaSection from "./Cta-section";
import { Keyfeatures } from "./Keyfeatures";

export const Header = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* HEADER CONTAINER */}
      <div className="mx-2 mt-2 rounded-3xl border border-white/30 bg-white/30 backdrop-blur-md shadow-lg relative">
        
        {/* Subtle depth layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 ml-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 bg-white/20 backdrop-blur-md flex items-center justify-center shadow-sm">
                  <img
                    src="/logo.png"
                    alt="Hosta Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button
                onClick={() => handleScroll("hero")}
                className="text-2xl font-bold tracking-tight text-green-600"
              >
                HOSTA
              </button>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex">
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold 
                text-slate-900 bg-green-500 hover:bg-green-400 transition shadow-md"
              >
                <Download className="w-4 h-4" />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD POPUP */}
      {isDownloadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/20 backdrop-blur-[1.5px]"
          onClick={() => setIsDownloadOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm mx-4 rounded-2xl
            bg-white/35 backdrop-blur-lg border border-white/40 shadow-xl p-5"
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsDownloadOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-black/10"
            >
              <X className="w-4 h-4 text-black/70" />
            </button>

            <div className="text-center space-y-1">
              <h3 className="text-sm font-semibold">Choose your platform</h3>
              <p className="text-xs text-black/60">
                Download Hosta app for your device
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 h-10 rounded-full bg-green-500 hover:bg-green-400 text-white text-sm font-medium transition"
              >
                <Smartphone className="w-4 h-4" />
                Download for Android
              </a>

              <div className="w-full flex items-center justify-center gap-2 h-10 rounded-full bg-white/40 border border-white/50 text-black/50 text-sm cursor-not-allowed">
                <Apple className="w-4 h-4" />
                iOS (Coming Soon)
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="features"><FeaturesSection /></section>
        <section id="why-hosta"><WhyChooseSection /></section>
        <section id="how-it-works"><HowItWorksSection /></section>
        <section id="screenshots"><ScreenshotsSection /></section>
        <section id="cta"><CtaSection /></section>
        <section id="key-features"><Keyfeatures /></section>
      </main>
    </>
  );
}
