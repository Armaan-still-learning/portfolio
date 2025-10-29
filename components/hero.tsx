"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ntg-L9G1Jrd4yomjiVH4pznKdznZscVZQL.jpeg"
              alt="Armaan Khan"
              onLoad={() => setImageLoaded(true)}
              className={`relative w-40 h-40 rounded-full border-4 border-accent object-cover transition-all duration-500 ${
                imageLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-4 text-balance">Armaan Khan</h1>

        <p className="text-xl sm:text-2xl text-accent font-bold mb-4">Creative Developer & UI/UX Designer</p>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Computer Science undergraduate specializing in Creative Design and UI/UX principles. Building intuitive,
          user-centric products with front-end expertise and AI/ML foundations.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 text-sm text-foreground/60">
          <a href="tel:8002444680" className="hover:text-accent transition-colors">
            📞 8002444680
          </a>
          <span>•</span>
          <a href="mailto:karmaan852@gmail.com" className="hover:text-accent transition-colors">
            📧 karmaan852@gmail.com
          </a>
          <span>•</span>
          <span>📍 Bangalore, Karnataka</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="anime-button bg-gradient-to-r from-accent to-accent/80 text-background hover:shadow-lg hover:shadow-accent/50"
          >
            View My Work
          </a>
          <a href="#contact" className="anime-button border-2 border-accent text-accent hover:bg-accent/10">
            Get in Touch
          </a>
          <a
            href="https://github.com/Armaan-still-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="anime-button border-2 border-foreground/30 text-foreground/70 hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-accent" />
        </div>
      </div>
    </section>
  )
}
