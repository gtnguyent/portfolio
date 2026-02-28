import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[3/4] bg-muted border border-border overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655517638075-6a2ffa954c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTkwODA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="GT Nguyen"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="font-light tracking-tight mb-8">About</h2>
            <div className="space-y-5 font-light leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-foreground">Media Science</span> student at{" "}
                <span className="text-foreground">Boston University</span>, graduating May 2026. My work sits at
                the intersection of UI/UX design, front-end development, and research-driven methodology.
              </p>
              <p>
                With a background in biomechanics data analysis and research, I bring a systems-thinking approach
                to digital product design. I believe the best interfaces are built from understanding how people
                actually interact with technology—not just how we think they should.
              </p>
              <p>
                My focus is on creating experiences that feel intuitive, purposeful, and technically sound. I
                design what I build and build what I design, bridging the gap between concept and execution.
              </p>
              <p>
                I'm interested in systems design, digital storytelling, and the quiet moments where design,
                engineering, and human behavior converge. Currently seeking opportunities in product design,
                design engineering, or front-end development roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
