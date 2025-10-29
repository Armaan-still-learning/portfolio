import { Github, Linkedin, Mail, Zap } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Armaan-still-learning", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/armaan-khan-984480292", label: "LinkedIn" },
    { icon: Mail, href: "mailto:karmaan852@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Zap size={28} className="text-accent" />
            <div>
              <h3 className="text-2xl font-black text-foreground neon-glow">Armaan Khan</h3>
              <p className="text-foreground/60 text-sm">Creative Developer & UI/UX Designer</p>
            </div>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border-2 border-accent/30 text-foreground/70 hover:text-accent hover:border-accent transition-all flex items-center justify-center hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-foreground/60 text-sm">
          <p>© 2025 Armaan Khan. All rights reserved. | Built with React & Next.js</p>
        </div>
      </div>
    </footer>
  )
}
