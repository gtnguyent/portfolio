import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const featuredProjects = [
    {
      title: "BailLens",
      description: "A data visualization platform exposing bail disparities across Boston neighborhoods built during CivicHacks 2026.",
      details: [
        "Project type: Civic Tech / Data Visualization",
        "Role: UX Designer & Front-End Developer",
        "Industry: Civic Technology",
      ],
      image: "/assets/bailens/bailens_landing.png",
      link: "/case-study/baillens",
      color: "#6FA9BB",
    },
    {
      title: "Match-A-Matcha",
      description: "A quiz-based digital experience translating user taste preferences into personalized matcha recommendations.",
      details: [
        "Project type: Interactive web experience",
        "Role: UI/UX Design + Front-End Development",
        "Industry: Food & Beverage",
      ],
      image: "/assets/matcha/matcha-landing.webp",
      link: "/case-study/match-a-matcha",
      color: "#687D31",
    },
    {
      title: "Nintendo Digital Experience Study",
      description: "Analyzing engagement patterns and interaction behavior across Nintendo's digital platforms.",
      details: [
        "Project type: Research + UX Analysis",
        "Role: Research + UX Analysis",
        "Industry: Digital Platforms",
      ],
      image: "/assets/nintendo/nintendo_switch2.png",
      link: "/case-study/nintendo",
      color: "#406768",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Pure Typography Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-20 pb-16 relative overflow-hidden">
        <div className="w-full max-w-[1600px] relative">
          {/* Main Typography Area */}
          <div className="relative py-4 md:py-6">
            {/* Background Color Blocks */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-20 right-10 w-64 h-64 bg-mustard-green rounded-full blur-3xl opacity-20"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-20 left-10 w-80 h-80 bg-moonstone-blue rounded-full blur-3xl opacity-20"
            />

            {/* GT NGUYEN - Overlapping */}
            <div className="text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none whitespace-nowrap">
                  <span className="text-phthalo-green dark:text-white">GT</span>{" "}
                  <span
                    className="dark:!text-white"
                    style={{
                      WebkitTextStroke: '3px currentColor',
                      WebkitTextFillColor: 'transparent',
                      color: '#687D31',
                    }}
                  >
                    NGUYEN
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Designer Developer Researcher - Closer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-10 text-center relative z-20"
            >
              <div className="inline-block bg-mustard-green px-6 py-3 md:px-8 md:py-4 rounded-full opacity-100">
                <p className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white whitespace-nowrap">
                  Designer · Developer · Researcher
                </p>
              </div>
            </motion.div>

            {/* Decorative Typography Elements */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-0 right-0 md:right-10"
            >
              <span className="text-6xl md:text-8xl font-black text-moonstone-blue opacity-30">
                *
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-0 left-0 md:left-10"
            >
              <span className="text-5xl md:text-7xl font-black text-deep-space-sparkle opacity-30">
                +
              </span>
            </motion.div>
          </div>

          {/* Bottom Info Section - Very Close to Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 md:mt-10 space-y-5"
          >
            {/* Description */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-base md:text-lg font-light leading-relaxed">
                Designing thoughtful digital experiences through research, systems thinking, and technical execution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <Link
                to="/work"
                className="px-8 md:px-10 py-3 md:py-4 bg-phthalo-green dark:bg-transparent text-white border-2 border-transparent dark:border-border font-light tracking-tight hover:bg-mustard-green dark:hover:bg-muted transition-all duration-300 rounded-lg"
              >
                View Work
              </Link>
              <Link
                to="/about"
                className="px-8 md:px-10 py-3 md:py-4 border-2 border-border font-light tracking-tight hover:bg-muted transition-all duration-300 rounded-lg"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-between items-end mb-16"
          >
            <h2 className="font-light tracking-tight">Featured Work</h2>
            <Link
              to="/work"
              className="text-lg font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              View all projects →
            </Link>
          </motion.div>

          <div className="space-y-0">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="-mx-6 md:-mx-12 px-6 md:px-12 py-16 md:py-24"
                style={{ backgroundColor: project.color }}
              >
                <Link to={project.link} className="group block max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="space-y-0 overflow-hidden">
                          <div className="aspect-[4/3] bg-white border border-border overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                            {project.title}
                          </h3>
                          <p className="text-lg font-light leading-relaxed text-white/90">
                            {project.description}
                          </p>
                          <div className="space-y-2">
                            {project.details.map((detail) => (
                              <p key={detail} className="text-sm font-light text-white/80">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-6 md:order-1">
                          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                            {project.title}
                          </h3>
                          <p className="text-lg font-light leading-relaxed text-white/90">
                            {project.description}
                          </p>
                          <div className="space-y-2">
                            {project.details.map((detail) => (
                              <p key={detail} className="text-sm font-light text-white/80">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-0 overflow-hidden md:order-2">
                          <div className="aspect-[4/3] bg-white border border-border overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}