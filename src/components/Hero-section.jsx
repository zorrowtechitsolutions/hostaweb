"use client";

import React, { useState } from "react";
import { Smartphone, Apple, X, Globe } from "lucide-react";

export function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[20vh] flex items-center overflow-hidden">
        {/* Background (keep empty or add gradient if needed) */}
        <div className="absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5 lg:py-28">
          {/* Use a 1-column layout on mobile so the preview sits under the text and is centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              {/* TITLE */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
                  Your Health. Your Hospital.{" "}
                  <span className="text-green-600">One App.</span>
                </h1>

                <p className="text-lg sm:text-xl text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A simple and powerful healthcare app for Kerala. Book hospitals, request ambulances, and find blood donors instantly.
                </p>

                {/* BRAND LINE */}
                <p className="text-sm text-slate-600 max-w-xl mx-auto lg:mx-0">
                  Hosta is released by <strong>Zorrowtech IT Solutions</strong> — visit{" "}
                  <a href="https://zorrowtech.in" target="_blank" rel="noopener noreferrer" className="underline">
                    zorrowtech.in
                  </a>
                </p>
              </div>

              {/* SINGLE DOWNLOAD BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="https://zorrowtech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-base font-medium text-slate-900 bg-white/90 hover:bg-white/80 transition-colors shadow-sm border"
                >
                  <Globe className="w-4 h-4" />
                  zorrowtech.in
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-12 text-base font-medium text-slate-900 bg-green-500 hover:bg-green-300 transition-colors shadow-lg border-0"
                >
                  <Smartphone className="w-5 h-5" />
                  Download App Now
                </button>
              </div>
            </div>

            {/* RIGHT APP PREVIEW */}
            {/* On mobile this will appear below the text (grid-cols-1) and is centered.
                The phone size is responsive: smaller on mobile, larger on desktop. */}
            <div className="flex justify-center lg:justify-center mt-0 lg:mt-0">
              <div className="relative">
                {/* Responsive GLASS PHONE */}
                <div
                  className="
                    w-56 sm:w-64 md:w-72
                   
                    p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl
                    flex items-center justify-center overflow-hidden mx-auto
                  "
                >
                  {/* PHONE SCREEN IMAGE */}
                  <img
                    src="/Hero.png" // change to your image path
                    alt="App Screenshot"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* GLOW BEHIND */}
                <div className="absolute -inset-6 bg-green-400/20 blur-3xl rounded-full -z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* POPUP CARD */}
          <div
            className="relative w-full max-w-sm mx-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-1 hover:bg-white/10"
              aria-label="Close download dialog"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>

            <h3 className="text-lg font-semibold text-white">Choose your platform</h3>
            <p className="text-sm text-white/70">Download Hosta Manager — provided by Zorrowtech IT Solutions.</p>

            <div className="mt-2 flex flex-col gap-3">
              {/* ANDROID BUTTON (ACTIVE) */}
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-medium text-slate-900 bg-green-500 hover:bg-green-300 transition-colors shadow-md"
              >
                <Smartphone className="w-5 h-5" />
                Download for Android
              </a>

              {/* IOS BUTTON (DISABLED, GLASS TYPE) */}
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-medium text-white/70 border border-white/25 bg-white/5 backdrop-blur-md cursor-not-allowed"
              >
                <Apple className="w-5 h-5" />
                Download on App Store
              </button>
            </div>

            {/* SMALL FOOTER */}
            <div className="pt-3 border-t border-white/10 mt-4">
              <p className="text-xs text-white/60">
                Hosta is a product of <strong>Zorrowtech IT Solutions</strong>. Learn more at{" "}
                <a href="https://zorrowtech.in" target="_blank" rel="noopener noreferrer" className="underline">
                  zorrowtech.in
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
