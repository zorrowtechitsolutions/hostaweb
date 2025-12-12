"use client"

import { Card } from "@/components/ui/card"

export function ScreenshotsSection() {
  const screenshots = [
    {
      id: 1,
      title: "First Page",
      image: "/firstpage.jpeg",
    },
    {
      id: 2,
      title: "Book Appointment",
      image: "/2.jpeg", // make sure file names match exactly
    },
    {
      id: 3,
      title: "Booking Screen",
      image: "/3.jpeg",
    },
    {
      id: 4,
      title: "Doctors List",
      image: "/4.jpeg",
    },
    {
      id: 5,
      title: "Blood Page",
      image: "/5.jpeg",
    },
     {
      id: 5,
      title: "Blood Page",
      image: "/6.jpeg",
    },
  ]
  

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">App Screenshots</h2>
          <p className="text-lg text-foreground/60">Designed for speed, trust, and simplicity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="aspect-[9/16] glass-card rounded-2xl overflow-hidden hover:glass-glow transition-all cursor-pointer border-0 group"
            >
              <div className="relative w-full h-full">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-white/90 font-medium drop-shadow text-left">
                    {screenshot.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
