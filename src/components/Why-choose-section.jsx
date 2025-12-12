"use client"

import { CheckCircle } from "lucide-react"

export function WhyChooseSection() {
  const benefits = [
    "Faster emergency response",
    "Verified hospitals and donors",
    "Kerala-wide service availability",
    "Clean and simple interface",
    "Real-time location-based results",
  ]

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Built for real healthcare needs.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-nano p-4 rounded-xl flex items-center gap-4 hover:glass-premium transition-all"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-lg text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
