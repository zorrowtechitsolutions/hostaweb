"use client"

import { Stethoscope, Ambulance, Droplet, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Stethoscope,
      title: "Hospital Appointment Booking",
      bgColor: "bg-white",
    },
    {
      icon: Ambulance,
      title: "1-Tap Emergency Ambulance",
      bgColor: "bg-white",
    },
    {
      icon: Droplet,
      title: "Blood Donor Finder",
      bgColor: "bg-white",
    },
    {
      icon: Users,
      title: "Doctor Search",
      bgColor: "bg-white",
    },
  ]

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading + Text */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What is HOSTA?
          </h2>

          <p className="text-lg text-foreground/100 leading-relaxed max-w-3xl mx-auto">
            HOSTA is a digital healthcare assistant designed for everyone. It connects hospitals,
            ambulances, doctors, and blood donors into one unified platform. Fast, secure, and built
            for Kerala's healthcare system.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="glass-nano p-5 rounded-xl flex items-center gap-4 text-left"
              >
                {/* Icon with custom background color */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.bgColor}`}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <p className="font-semibold text-foreground">
                  {feature.title}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
