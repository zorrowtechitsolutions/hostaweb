"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Apple, X } from "lucide-react"
import { GlassWrapper } from "./Glass-wraper"

export function CtaSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-5 px-4 sm:px-6 lg:px-8 from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto">
          <GlassWrapper variant="container" className="p-12 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
                Healthcare at your fingertips.
              </h2>
              <p className="text-xl text-foreground/60">
                Download HOSTA now and take control of your health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* SINGLE DOWNLOAD NOW BUTTON */}
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="text-primary-foreground rounded-full gap-2 h-12 px-8 text-base bg-green-600 hover:bg-primary/90 border-0"
              >
                <Download className="w-5 h-5" />
                Download Now
              </Button>
            </div>
          </GlassWrapper>
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
            className="relative w-full max-w-sm mx-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-1 hover:bg-white/10"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>

            <h3 className="text-lg font-semibold text-white">
              Choose your platform
            </h3>
            <p className="text-sm text-white/70">
              Download Hosta Manager for your device.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              {/* ANDROID BUTTON (ACTIVE) */}
              <Button
                asChild
                size="lg"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full h-11 text-sm font-medium 
                text-slate-900 bg-green-600 hover:bg-green-300 transition-colors shadow-md border-0"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </a>
              </Button>

              {/* IOS BUTTON (COMING SOON / DISABLED GLASS STYLE) */}
              <Button
                size="lg"
                disabled
                className="w-full inline-flex items-center justify-center gap-2 rounded-full h-11 text-sm font-medium 
                text-white/70 border border-white/25 bg-white/5 
                backdrop-blur-md cursor-not-allowed"
              >
                <Apple className="w-5 h-5" />
                Download on App Store
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CtaSection

