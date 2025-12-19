"use client";

import React, { useState } from "react";
import { Smartphone, Apple, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-7 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
                Your Health. Your Hospital.{" "}
                <span className="text-green-600">One App.</span>
              </h1>

              <p className="text-base sm:text-lg text-black/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A simple and powerful healthcare app for Kerala.
                Book hospitals, request ambulances, and find blood donors instantly.
              </p>

              <p className="text-sm text-black/60">
                A product by <strong>Zorrowtech IT Solutions</strong>
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3">
                <a
                  href="https://zorrowtech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-black/15 text-black text-sm font-medium hover:bg-black/5 transition"
                >
                  <Globe className="w-4 h-4" />
                  zorrowtech.in
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-500 transition shadow-lg shadow-green-600/30"
                >
                  <Smartphone className="w-5 h-5" />
                  Get the App
                </button>
              </div>
            </motion.div>

            {/* RIGHT PREVIEW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="relative"
              >
                <div className="w-56 sm:w-64 md:w-72 rounded-3xl p-3 bg-black/5 backdrop-blur-xl border border-black/10 shadow-xl">
                  <img
                    src="/Hero.png"
                    alt="Hosta App Preview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="absolute -inset-10 bg-green-500/20 blur-3xl rounded-full -z-10" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FLOATING GLASS POPUP (STYLE YOU LIKE) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/20 backdrop-blur-[1.5px]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* POPUP CARD */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                relative
                w-full max-w-sm
                rounded-2xl
                bg-white/35 backdrop-blur-lg
                border border-white/40
                shadow-xl
                p-5
                text-black
              "
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 rounded-full p-1 hover:bg-black/10"
              >
                <X className="w-4 h-4 text-black/70" />
              </button>

              {/* TITLE */}
              <div className="text-center space-y-1">
                <h3 className="text-sm font-semibold">
                  Choose your platform
                </h3>
                <p className="text-xs text-black/60">
                  Download Hosta app for your device
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-4 space-y-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2
                    h-10 rounded-full
                    bg-green-500 hover:bg-green-400
                    text-white text-sm font-medium
                    transition
                  "
                >
                  <Smartphone className="w-4 h-4" />
                  Download for Android
                </a>

                <div
                  className="
                    w-full flex items-center justify-center gap-2
                    h-10 rounded-full
                    bg-white/40 border border-white/50
                    text-black/50 text-sm
                    cursor-not-allowed
                  "
                >
                  <Apple className="w-4 h-4" />
                  iOS (Coming Soon)
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
