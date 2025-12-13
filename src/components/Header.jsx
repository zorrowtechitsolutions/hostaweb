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
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const openDownloadModal = () => setIsDownloadOpen(true);
  const closeDownloadModal = () => setIsDownloadOpen(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-2 mt-2 rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex justify-between items-center h-16">
            {/* Left cluster: logo + profile/logo section */}
            <div className="flex items-center gap-4">
              {/* PROFILE / HOSTA LOGO SECTION (visible on md+) */}
              <div className=" md:flex items-center gap-3 ml-2">
                {/* HOSTA Logo Placeholder (you will replace src manually) */}
                <div
                  className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md bg-white/10 backdrop-blur-xl
                  flex items-center justify-center"
                  title="HOSTA logo (replace /hosta-logo.png)"
                  >
                  <img
                    src="/logo.png" // <-- replace with your logo path
                    alt="Hosta Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Profile Avatar Placeholder */}
                <div
            
                ></div>
              </div>
              {/* Main Text Logo (click scroll to hero) */}
              <button
                onClick={() => handleScroll("hero")}
                className="text-2xl font-bold tracking-tight text-green-600"
                aria-label="Go to top / Home"
              >
                HOSTA
              </button>

              
            </div>

      

            {/* Desktop Download Button (glass / green) */}
            <div className="hidden md:flex">
              <button
                onClick={openDownloadModal}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold 
                text-slate-900 bg-green-600 border border-green-500 shadow-md 
                backdrop-blur-xl hover:bg-green-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-slate-900/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button> */}
          </div>

       
        </div>
      </div>

      {/* Download Modal (Glass Popup) */}
      {isDownloadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-sm mx-4 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl p-6 space-y-6">
            {/* Close Button */}
            <button
              onClick={closeDownloadModal}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/15 transition-colors"
              aria-label="Close download dialog"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            {/* Header */}
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-green-400/30 border border-white/20 mb-1">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Download HOSTA
              </h3>
              <p className="text-sm text-slate-200/80">
                Choose your platform to get started with HOSTA.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              {/* Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 bg-green-500 hover:bg-green-300 transition-all shadow-md border-0"
              >
                <Smartphone className="w-4 h-4" />
                Download on Play Store
              </a>

              {/* App Store (Coming Soon, glass & disabled) */}
              <button
                disabled
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold 
                text-white/80 bg-white/10 border border-white/25 
                backdrop-blur-md cursor-not-allowed"
              >
                <Apple className="w-4 h-4 " />
                Download on App Store
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-200/60">
              By downloading, you agree to our Terms &amp; Privacy Policy.
            </p>
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
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="why-hosta">
          <WhyChooseSection />
        </section>

        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        <section id="screenshots">
          <ScreenshotsSection />
        </section>

        <section id="cta">
          <CtaSection />
        </section>

        <section id="key-features">
          <Keyfeatures />
        </section>
      </main>
    </>
  );
}


