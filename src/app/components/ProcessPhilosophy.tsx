import { motion } from "motion/react";

export function ProcessPhilosophy() {
  const principles = [
    "I design from systems, not screens.",
    "I prioritize clarity over decoration.",
    "I validate with research before polishing visuals.",
    "I build what I design.",
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-light tracking-tight mb-16 md:mb-20"
        >
          How I Think
        </motion.h2>
        <div className="space-y-8 md:space-y-10">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-relaxed"
            >
              {principle}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
