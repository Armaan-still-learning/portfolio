"use client"

export default function About() {
  const skills = {
    programming: ["C++", "Java", "Python", "JavaScript"],
    web: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code"],
    ml: ["scikit-learn", "pandas", "NumPy", "matplotlib"],
  }

  const experience = [
    {
      role: "Creative Designing Lead",
      company: "Google Developers Group on Campus",
      period: "Aug 2024 – Present",
      description: "Led creative and branding strategy, hosted hackathons and technical workshops",
    },
    {
      role: "Software Engineer Intern",
      company: "Akansha Foundation, Bangalore",
      period: "Dec 2024 – May 2025",
      description:
        "Building cross-platform app with React (Ionic), Node.js, and PostgreSQL for NGO-volunteer connection",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-16 text-balance neon-glow">About Me</h2>

        {/* Bio Section */}
        <div className="mb-16 anime-card p-8">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm a passionate Computer Science undergraduate with a keen eye for design and a drive to build intuitive,
            user-centric digital experiences. Specializing in UI/UX principles and front-end development, I blend
            creative design thinking with robust engineering practices.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            With hands-on experience in React, Node.js, and modern web technologies, I transform ideas into elegant
            digital solutions. Currently leading creative initiatives at Google Developers Group while building
            innovative applications as a Software Engineer Intern.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent mb-8">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="anime-card p-6 border-l-4 border-accent">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <span className="text-sm text-accent font-semibold">{exp.period}</span>
                </div>
                <p className="text-foreground/70 font-semibold mb-2">{exp.company}</p>
                <p className="text-foreground/60">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="anime-card p-6">
                <h4 className="text-lg font-bold text-accent mb-4 capitalize">{category.replace(/([A-Z])/g, " $1")}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent border border-accent/30 hover:border-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
