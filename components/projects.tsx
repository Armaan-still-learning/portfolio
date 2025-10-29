"use client"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Pill Alert and Recovery Assistant",
      description:
        "Patient-centric mobile application that acts as a reminder agent for timely medication intake with automated status reporting to caregivers.",
      tags: ["React", "Mobile", "Healthcare", "Real-time"],
      date: "Nov 2025",
      image: "/medication-reminder-app-interface.jpg",
    },
    {
      id: 2,
      title: "Codeera – Skill Development Assessment Platform",
      description:
        "Platform for continuous skill assessment with interactive modules and performance tracking for developers.",
      tags: ["React.js", "Node.js", "Assessment", "Analytics"],
      date: "Jul 2024",
      image: "/skill-assessment-dashboard.jpg",
    },
    {
      id: 3,
      title: "Oil and Gas Leak Detection Dashboard",
      description:
        "Real-time sensor dashboard for monitoring and detecting leaks. Finalist in NER Innovation Challenge 2024 (Top 60/1000).",
      tags: ["Real-time", "IoT", "Dashboard", "Sensors"],
      date: "Jun 2025",
      image: "/industrial-monitoring-dashboard.jpg",
    },
    {
      id: 4,
      title: "Snake Game – Optimized Classic",
      description:
        "Implemented optimized grid rendering and real-time control for smooth gameplay with enhanced performance.",
      tags: ["JavaScript", "Game Dev", "Optimization"],
      date: "Jun 2023",
      image: "/retro-snake-game.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-16 text-balance neon-glow">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="anime-card group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground flex-1">{project.title}</h3>
                  <span className="text-xs text-accent font-semibold whitespace-nowrap ml-2">{project.date}</span>
                </div>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
