"use client"

import { Card } from "@/components/ui/card"
import { Hospital, AlertTriangle, Users } from "lucide-react"
import { GlassWrapper } from "./Glass-wraper"

export function FeaturesSection() {
  const features = [
    {
      icon: Hospital,
      title: "Hospital Booking",
      description: "Find hospitals, view specialties, and book appointments instantly.",
      bgColor: "bg-white",        // Added color
    },
    {
      icon: AlertTriangle,
      title: "Emergency Ambulance",
      description: "One-tap SOS emergency support with verified ambulance partners.",
      bgColor: "bg-white",         // Added color
    },
    {
      icon: Users,
      title: "Blood Donor Network",
      description: "Search verified donors by blood group and location.",
      bgColor: "bg-white",        // Added color
    },
  ]

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Key Features</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need for seamless healthcare access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <GlassWrapper
                key={index}
                className="group p-8 glass-card rounded-2xl hover:glass-glow transition-all duration-300 border-0"
              >
                <div className="space-y-4">
                  
                  {/* Icon box updated with dynamic bgColor */}
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors ${feature.bgColor}`}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </GlassWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

