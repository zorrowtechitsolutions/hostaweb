"use client";

import React, { useState } from "react";
import {
  X,
  Download,
  Apple,
  Smartphone,
  Phone,
  MessageCircle,
} from "lucide-react";

import { AboutSection } from "./About-section";
import HeroSection from "./Hero-section";
import { FeaturesSection } from "./Feature-section";
import { WhyChooseSection } from "./Why-choose-section";
import HowItWorksSection from "./Howit-works-section";
import { ScreenshotsSection } from "./Screenshot-section";
import CtaSection from "./Cta-section";
import { Keyfeatures } from "./Keyfeatures";

const SUPPORT_PHONE = "918714412090"; // 🔴 replace with real number

/* ---------------- HEADER ---------------- */

export const Header = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* HEADER GLASS */}
      <div className="mx-2 mt-2 rounded-3xl border border-white/30 bg-white/30 backdrop-blur-md shadow-lg relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 bg-white/20 backdrop-blur-md shadow-sm">
                <img
                  src="/logo.png"
                  alt="HOSTA Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-2xl font-bold tracking-tight text-green-600">
                HOSTA
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* CHAT ICON (VISIBLE ON MOBILE + DESKTOP) */}
              <button
                onClick={() => setIsChatOpen(true)}
                className="
                  w-10 h-10 rounded-full
                  bg-white/40 border border-white/40 backdrop-blur-md
                  flex items-center justify-center
                  hover:bg-white/60 transition
                "
                aria-label="Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* DOWNLOAD (HIDE ON VERY SMALL IF NEEDED) */}
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="
                  hidden sm:inline-flex
                  items-center gap-2
                  rounded-full px-5 py-2
                  text-sm font-semibold
                  text-slate-900 bg-green-500
                  hover:bg-green-400 transition shadow-md
                "
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT POPUP */}
{isChatOpen && (
  <GlassOverlay onClose={() => setIsChatOpen(false)}>
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative w-full max-w-sm mx-4
        rounded-2xl
        bg-white/45 backdrop-blur-lg
        border border-white/50
        shadow-xl
        p-6
      "
    >
      {/* CLOSE */}
      <button
        onClick={() => setIsChatOpen(false)}
        className="absolute top-3 right-3 rounded-full p-1 hover:bg-black/10"
      >
        <X className="w-4 h-4 text-black/80" />
      </button>

      {/* TEXT */}
      <div className="text-center space-y-1">
        <h3 className="text-base font-semibold text-black">
          Need Help?
        </h3>
        <p className="text-sm text-black/70">
          Call or chat with Hosta support
        </p>
      </div>

      {/* ACTIONS */}
      <div className="mt-5 space-y-3">
        <a
          href={`tel:+${SUPPORT_PHONE}`}
          className="
            w-full flex items-center justify-center gap-2
            h-11 rounded-full
            bg-white/60
            border border-white/60
            text-black text-sm font-medium
            hover:bg-white/80 transition
          "
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        <a
          href={`https://wa.me/${SUPPORT_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full flex items-center justify-center gap-2
            h-11 rounded-full
            bg-green-500
            text-white text-sm font-medium
            hover:bg-green-400 transition
          "
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  </GlassOverlay>
)}


      {/* DOWNLOAD POPUP */}
      {isDownloadOpen && (
        <GlassOverlay onClose={() => setIsDownloadOpen(false)}>
          <GlassCard onClose={() => setIsDownloadOpen(false)}>
            <PopupTitle
              title="Choose your platform"
              subtitle="Download Hosta app"
            />

            <div className="mt-4 space-y-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
                target="_blank"
                rel="noopener noreferrer"
                className="popup-primary"
              >
                <Smartphone className="w-4 h-4" />
                Android
              </a>

              <div className="popup-disabled">
                <Apple className="w-4 h-4" />
                iOS (Coming Soon)
              </div>
            </div>
          </GlassCard>
        </GlassOverlay>
      )}
    </header>
  );
};

/* ---------------- GLASS COMPONENTS ---------------- */

const GlassOverlay = ({ children, onClose }) => (
  <div
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/20 backdrop-blur-[1.5px]
    "
    onClick={onClose}
  >
    {children}
  </div>
);

const GlassCard = ({ children, onClose }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    className="
      relative w-full max-w-sm mx-4
      rounded-2xl
      bg-white/35 backdrop-blur-lg
      border border-white/40
      shadow-xl
      p-5
    "
  >
    <button
      onClick={onClose}
      className="absolute top-3 right-3 rounded-full p-1 hover:bg-black/10"
    >
      <X className="w-4 h-4 text-black/70" />
    </button>

    {children}
  </div>
);

const PopupTitle = ({ title, subtitle }) => (
  <div className="text-center space-y-1">
    <h3 className="text-sm font-semibold">{title}</h3>
    <p className="text-xs text-black/60">{subtitle}</p>
  </div>
);

/* ---------------- PAGE ---------------- */

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <CtaSection />
        <Keyfeatures />
      </main>
    </>
  );
}

/* ---------------- OPTIONAL TAILWIND HELPERS ---------------- */
/*
.popup-primary {
  @apply w-full flex items-center justify-center gap-2 h-10 rounded-full
  bg-green-500 hover:bg-green-400 text-white text-sm font-medium transition;
}

.popup-whatsapp {
  @apply w-full flex items-center justify-center gap-2 h-10 rounded-full
  bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium transition;
}

.popup-disabled {
  @apply w-full flex items-center justify-center gap-2 h-10 rounded-full
  bg-white/40 border border-white/50 text-black/50 text-sm cursor-not-allowed;
}
*/

