"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Apple, X } from "lucide-react"
import { GlassWrapper } from "./Glass-wraper"

export function CtaSection() {
  const [open, setOpen] = useState(false)

  const handleDownloadClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share",
        "_blank"
      )
    } else {
      setOpen(true)
    }
  }

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
                onClick={handleDownloadClick}
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

      {/* POPUP OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/25 backdrop-blur-[2px]
          "
          onClick={() => setOpen(false)}
        >
          {/* POPUP CARD */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-sm mx-4
              rounded-2xl
              border border-white/25
              bg-white/15 backdrop-blur-xl
              shadow-2xl
              p-6 space-y-4
              text-center
            "
          >
            {/* APPLE STYLE DEPTH */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-b from-white/20 to-transparent
                pointer-events-none
              "
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute right-3 top-3
                inline-flex items-center justify-center
                rounded-full p-1
                hover:bg-white/15
                z-10
              "
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            {/* TITLE */}
            <div className="relative z-10 space-y-1">
              <h3 className="text-lg font-semibold text-white">
                Choose your platform
              </h3>
              <p className="text-sm text-white/70">
                Download Hosta Manager for your device.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="relative z-10 mt-3 flex flex-col gap-3">
              {/* ANDROID */}
              <Button
                asChild
                size="lg"
                className="
                  w-full inline-flex items-center justify-center gap-2
                  rounded-full h-11
                  text-sm font-medium
                  text-black
                  bg-green-500 hover:bg-green-400
                  transition shadow-md border-0
                "
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

              {/* IOS DISABLED */}
              <Button
                size="lg"
                disabled
                className="
                  w-full inline-flex items-center justify-center gap-2
                  rounded-full h-11
                  text-sm font-medium
                  text-white/70
                  border border-white/25
                  bg-white/5 backdrop-blur-md
                  cursor-not-allowed
                "
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
