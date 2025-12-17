import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/zorrow_space/?next=%2F",
      label: "Instagram",
    },
    { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCjjB0Tbth5erb-MnIm4LSOg",
      label: "YouTube",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className=" text-black">

      {/* GLASS FOOTER BODY */}
      <div className="backdrop-blur-md bg-transparent border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-black tracking-tight">
                HOSTA
              </h3>
              <p className="text-black/80 leading-relaxed">
                Your trusted digital healthcare companion.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {["Home", "Hospitals", "Ambulance"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* More */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black">More</h4>
              <nav className="flex flex-col gap-2">
                {["Donor", "About", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black">Contact</h4>
              <div className="space-y- text-sm text-black/80">
                <p>📧 zorrowtech@gmail.com</p>
                <p>📱 +91-8714412090</p>
                <p>
                  📍 Koottilangadi, Malappuram,<br />
                  Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-14 flex justify-center">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11 h-11 rounded-full
                      border border-black/15
                      flex items-center justify-center
                      text-black
                      hover:bg-black/5
                      transition-all duration-300
                    "
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </a>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT LINE – TRANSPARENT */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px- lg:px-8 py-2 text-center">
          <p className="text-sm font-medium text-black">
            Copyright © {currentYear} Zorrowtech IT Solutions. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}

