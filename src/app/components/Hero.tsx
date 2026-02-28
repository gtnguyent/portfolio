import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              Designing systems
              <br />
              that think.
            </h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed max-w-xl">
              I build thoughtful digital experiences at the intersection of design, engineering, and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-4 bg-primary text-primary-foreground font-light tracking-tight hover:opacity-90 transition-opacity"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border border-border font-light tracking-tight hover:bg-foreground/5 transition-colors"
              >
                About Me
              </button>
            </div>
          </motion.div>

          {/* Right Side - Minimal Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white border border-border" />
              <div className="aspect-square bg-foreground/5 border border-border" />
              <div className="aspect-square bg-foreground/5 border border-border" />
              <div className="aspect-square bg-white border border-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
