// "use client"

// import { Card } from "@/components/ui/card"
// import { Download, Search, CheckCircle } from "lucide-react"

// export function HowItWorksSection() {
//   const steps = [
//     {
//       number: "1",
//       icon: Download,
//       title: "Open the App",
//       description: "Search hospitals, ambulances, or donors",
//     },
//     {
//       number: "2",
//       icon: Search,
//       title: "Choose Your Service",
//       description: "Select doctor, hospital, or emergency",
//     },
//     {
//       number: "3",
//       icon: CheckCircle,
//       title: "Confirm & Go",
//       description: "Instant booking or ambulance dispatch",
//     },
//   ]

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 ">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How It Works</h2>
//           <p className="text-lg text-foreground/60">Three simple steps to access healthcare</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {steps.map((step, index) => {
//             const Icon = step.icon
//             return (
//               <div key={index} className="relative">
//                 <Card className="p-8 glass-card rounded-2xl h-full border-0">
//                   <div className="flex flex-col items-center text-center space-y-4">
//                     <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                       <Icon className="w-8 h-8 text-primary" />
//                     </div>
//                     <div>
//                       <div className="text-4xl font-bold text-primary/30 mb-2">{step.number}</div>
//                       <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
//                       <p className="text-foreground/70 mt-2">{step.description}</p>
//                     </div>
//                   </div>
//                 </Card>
//                 {index < steps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client";

import { Download, Search, CheckCircle } from "lucide-react";
import { GlassWrapper } from "./Glass-wraper";
// adjust the path if this file is not in the same folder as glass-wrapper

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Open the App",
      description: "Search hospitals, ambulances, or donors",
    },
    {
      number: "2",
      icon: Search,
      title: "Choose Your Service",
      description: "Select doctor, hospital, or emergency",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Confirm & Go",
      description: "Instant booking or ambulance dispatch",
    },
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-foreground/60">
            Three simple steps to access healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <GlassWrapper
                  variant="container"
                  className="p-10 sm:p-12 text-center space-y-8 h-full flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary/30 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </GlassWrapper>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
