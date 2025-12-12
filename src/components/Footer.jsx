

import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/zorrow_space/?next=%2F", 
      label: "Instagram" 
    },
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook" 
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/channel/UCjjB0Tbth5erb-MnIm4LSOg", 
      label: "YouTube" 
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter" 
    },
  ]

  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">HOSTA</h3>
            <p className="text-foreground/100 leading-relaxed">
              Your trusted digital healthcare companion.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "Hospitals", "Ambulance"].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-foreground/100 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">More</h4>
            <nav className="space-y-2">
              {["Donor", "About", "Contact"].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-foreground/100 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-foreground/100">
              <p>📧 zorrowtech@gmail.com</p>
              <p>📱 +91-8714412090</p>
              <p>
                📍 Koottilangadi, Malappuram,<br /> Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-primary font-medium">
            Copyright © {currentYear} Zorrowtech IT Solutions. 
            All rights reserved.
          </p>

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
                  className="w-10 h-10 glass-nano rounded-full flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

      </div>
    </footer>
  )
}



