"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Apple, X } from "lucide-react"
import { GlassWrapper } from "./Glass-wraper"

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share"

const APP_STORE_URL =
  "https://apps.apple.com/app/id0000000000" // 🔴 replace with real ID

export function CtaSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CTA SECTION */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassWrapper
            variant="container"
            className="p-12 text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
                Healthcare at your fingertips.
              </h2>
              <p className="text-xl text-foreground/60">
                Download HOSTA now and take control of your health.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="
                  rounded-full gap-2 h-12 px-8 text-base
                  bg-green-600 hover:bg-green-500
                  text-black border-0
                "
              >
                <Download className="w-5 h-5" />
                Download Now
              </Button>
            </div>
          </GlassWrapper>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/20 backdrop-blur-[1.5px]
          "
          onClick={() => setOpen(false)}
        >
          {/* CARD — MATCH CHAT POPUP */}
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
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 rounded-full p-1 hover:bg-black/10"
            >
              <X className="w-4 h-4 text-black/80" />
            </button>

            {/* TITLE */}
            <div className="text-center space-y-1">
              <h3 className="text-base font-semibold text-black">
                Choose your platform
              </h3>
              <p className="text-sm text-black/70">
                Download Hosta Manager for your device
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-5 space-y-3">
              {/* ANDROID */}
              <a
                href={PLAY_STORE_URL}
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
                <Download className="w-4 h-4" />
                Download for Android
              </a>

              {/* IOS */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full flex items-center justify-center gap-2
                  h-11 rounded-full
                  bg-black/70
                  text-white text-sm font-medium
                  hover:bg-black/80 transition
                "
              >
                <Apple className="w-4 h-4" />
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CtaSection
