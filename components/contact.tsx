"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance neon-glow">Let's Connect</h2>
        <p className="text-lg text-foreground/70 mb-12">
          Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing together!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <a
            href="tel:8002444680"
            className="anime-card p-6 flex flex-col items-center text-center hover:border-accent group"
          >
            <Phone className="w-8 h-8 text-accent mb-4 group-hover:scale-125 transition-transform" />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70 text-sm">8002444680</p>
          </a>

          <a
            href="mailto:karmaan852@gmail.com"
            className="anime-card p-6 flex flex-col items-center text-center hover:border-accent group"
          >
            <Mail className="w-8 h-8 text-accent mb-4 group-hover:scale-125 transition-transform" />
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 text-sm">karmaan852@gmail.com</p>
          </a>

          <div className="anime-card p-6 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70 text-sm">Bangalore, Karnataka</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="anime-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-accent mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-accent/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-accent mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-accent/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-accent mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-accent/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full anime-button bg-gradient-to-r from-accent to-accent/80 text-background font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/50"
            >
              <Send size={20} />
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-accent/10 border border-accent rounded-lg text-accent text-center font-semibold animate-pulse">
                ✨ Message sent! I'll get back to you soon!
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Armaan-still-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-background transition-all hover:scale-110"
            >
              <span className="font-bold">GH</span>
            </a>
            <a
              href="https://linkedin.com/in/armaan-khan-984480292"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-background transition-all hover:scale-110"
            >
              <span className="font-bold">IN</span>
            </a>
            <a
              href="mailto:karmaan852@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-background transition-all hover:scale-110"
            >
              <span className="font-bold">✉</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
