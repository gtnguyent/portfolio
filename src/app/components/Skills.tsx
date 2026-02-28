import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Design Systems", "Interaction Design", "Prototyping", "User Research"],
    },
    {
      title: "Development",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "Front-End Architecture"],
    },
    {
      title: "Research",
      skills: ["Data Analysis", "Biomechanics", "User Testing", "Research Methodology", "Data Visualization"],
    },
    {
      title: "Tools",
      skills: ["Figma", "Git", "VS Code", "Adobe Creative Suite", "Python"],
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-light tracking-tight mb-16 md:mb-24"
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h3 className="font-light tracking-tight pb-2 border-b border-border">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="font-light text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
