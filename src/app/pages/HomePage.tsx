import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star } from "lucide-react";

export function HomePage() {
  const featuredProjects = [
    {
      title: "BailLens — Visualizing Bail Inequities in Boston",
      impact: "Data visualization platform exposing bail disparities across Boston neighborhoods",
      tags: ["UI/UX", "Front-End", "Civic Tech"],
      image: "/assets/bailens/bailens-mockup.png",
      link: "/case-study/baillens",
      bgColorClass: "bg-gradient-to-br from-moonstone-blue via-moonstone-blue/70 to-moonstone-blue/40",
    },
    {
      title: "Match-A-Matcha",
      impact: "Quiz-based recommendation system helping users discover personalized matcha experiences",
      tags: ["UI/UX", "Front-End", "Research"],
      image: "/assets/matcha/matcha-mac-phone-landing.png",
      link: "/case-study/match-a-matcha",
      bgColorClass: "bg-gradient-to-br from-deep-space-sparkle via-deep-space-sparkle/70 to-deep-space-sparkle/40",
    },
    {
      title: "Nintendo Digital Experience Study",
      impact: "Analyzing engagement patterns and interaction behavior across Nintendo's digital platforms",
      tags: ["Research", "Data", "UI/UX"],
      image: "/assets/nintendo/nintendo_switch2.png",
      link: "/case-study/nintendo",
      bgColorClass: "bg-gradient-to-br from-[#8B7355] via-[#8B7355]/70 to-[#8B7355]/40",
    },
    {
      title: "Acrylic Truss Bridge",
      impact: "Engineering visualization tool for understanding load distribution and structural integrity",
      tags: ["Research", "Data", "Engineering"],
      image: "/assets/truss/truss-phone-mockups.png",
      link: "/case-study/truss-bridge",
      bgColorClass: "bg-gradient-to-br from-mustard-green via-mustard-green/70 to-mustard-green/40",
    },
  ];

  const scrollToFeaturedWork = () => {
    const featuredSection = document.getElementById('featured-work');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to featured-work if navigated here with state or hash
  const location = useLocation();

  useEffect(() => {
    // If navigation passed a state with targetId, scroll after mount
    // @ts-ignore -- location.state may be any
    const targetId = location?.state?.targetId as string | undefined;
    if (targetId === 'featured-work') {
      // small timeout to allow page layout to settle
      setTimeout(() => scrollToFeaturedWork(), 120);
      return;
    }

    // If the URL has the hash already, scroll
    if (location.hash === '#featured-work') {
      setTimeout(() => scrollToFeaturedWork(), 120);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle Star Decorations in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute top-32 left-16"
        >
          <Star className="w-7 h-7 fill-mustard-green/50 text-mustard-green/50 rotate-12 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute top-48 left-[30%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 -rotate-20 drop-shadow-md" />
        </motion.div>

        {/* Top Right Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute top-40 right-40"
        >
          <Star className="w-8 h-8 fill-deep-space-sparkle/45 text-deep-space-sparkle/45 rotate-45 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute top-[20vh] left-[15%]"
        >
          <Star className="w-5 h-5 fill-mustard-green/40 text-mustard-green/40 rotate-12 drop-shadow-sm" />
        </motion.div>

        {/* Middle Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="absolute top-[45vh] left-[15%]"
        >
          <Star className="w-7 h-7 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-30 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="absolute top-[50vh] right-[20%]"
        >
          <Star className="w-6 h-6 fill-white/55 text-white/55 rotate-60 drop-shadow-sm" />
        </motion.div>

        {/* Bottom Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="absolute bottom-[30vh] left-[25%]"
        >
          <Star className="w-8 h-8 fill-mustard-green/45 text-mustard-green/45 rotate-15 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="absolute bottom-[25vh] right-[30%]"
        >
          <Star className="w-7 h-7 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-25 drop-shadow-md" />
        </motion.div>

        {/* Featured Work Section Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[110vh] left-[5%]"
        >
          <Star className="w-6 h-6 fill-deep-space-sparkle/55 text-deep-space-sparkle/55 rotate-20 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[115vh] right-[5%]"
        >
          <Star className="w-7 h-7 fill-white/60 text-white/60 -rotate-30 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-[135vh] left-[48%]"
        >
          <Star className="w-5 h-5 fill-mustard-green/50 text-mustard-green/50 rotate-45 drop-shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute top-[140vh] right-[3%]"
        >
          <Star className="w-8 h-8 fill-moonstone-blue/45 text-moonstone-blue/45 -rotate-15 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute top-[160vh] left-[6%]"
        >
          <Star className="w-6 h-6 fill-white/55 text-white/55 rotate-25 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute top-[165vh] right-[8%]"
        >
          <Star className="w-7 h-7 fill-deep-space-sparkle/50 text-deep-space-sparkle/50 -rotate-35 drop-shadow-lg" />
        </motion.div>

        {/* Lower Featured Work Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[600vh] left-[50%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 rotate-50 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-[185vh] right-[4%]"
        >
          <Star className="w-7 h-7 fill-mustard-green/50 text-mustard-green/50 -rotate-40 drop-shadow-lg" />
        </motion.div>

        {/* Footer Area Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[260vh] left-[12%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 rotate-35 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[265vh] right-[15%]"
        >
          <Star className="w-7 h-7 fill-mustard-green/50 text-mustard-green/50 -rotate-20 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Pure Typography Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-20 pb-16 relative overflow-hidden z-10">
        <div className="w-full max-w-[1600px] relative">
          {/* Main Typography Area */}
          <div className="relative py-4 md:py-6">
            {/* Background Color Blocks */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-mustard-green to-phthalo-green rounded-full blur-3xl opacity-20 drop-shadow-2xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-moonstone-blue to-deep-space-sparkle rounded-full blur-3xl opacity-20 drop-shadow-2xl"
            />

            {/* GT NGUYEN - Overlapping */}
            <div className="text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none whitespace-nowrap drop-shadow-2xl">
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
              <div className="inline-block bg-mustard-green/20 backdrop-blur-xl px-6 py-3 md:px-8 md:py-4 rounded-full border border-mustard-green/30 shadow-lg drop-shadow-xl">
                <p className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-foreground whitespace-nowrap">
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
                BU undergrad exploring full-time opportunities in UX design, web development, marketing and research.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={scrollToFeaturedWork}
                className="px-8 md:px-10 py-3 md:py-4 bg-phthalo-green dark:bg-mustard-green text-white border-2 border-transparent font-medium tracking-tight hover:bg-mustard-green dark:hover:bg-mustard-green/90 transition-all duration-300 rounded-lg shadow-lg dark:shadow-mustard-green/30"
              >
                View Work
              </button>
              <Link
                to="/about"
                className="px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-border font-light tracking-tight hover:bg-muted transition-all duration-300 rounded-lg"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 md:py-32 px-6 md:px-12" id="featured-work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-between items-end mb-16"
          >
            <h2 className="font-light tracking-tight">Work</h2>
            {/*
            <Link
              to="/work"
              className="text-lg font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              View all projects →
            </Link>
            */}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, index) => (
              <Link key={project.title} to={project.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div className={`${project.bgColorClass} overflow-hidden transition-shadow duration-300 hover:shadow-lg rounded-lg aspect-square flex flex-col`}>
                    <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
                      <motion.div
                        className="w-full h-full flex items-center justify-center"
                        whileHover={{ y: -12, scale: 1.05 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>
                    <div className="p-6 space-y-3 bg-black/10 backdrop-blur-sm">
                      <h3 className="font-light tracking-tight text-white">{project.title}</h3>
                      <p className="text-sm font-light text-white/90 leading-relaxed">{project.impact}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-light tracking-wide px-3 py-1 border border-white/40 rounded-full text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
