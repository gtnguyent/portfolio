import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  impact: string;
  tags: string[];
  image: string;
  delay?: number;
}

function ProjectCard({ title, impact, tags, image, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
    >
      <div className="bg-white border border-border overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="font-light tracking-tight">{title}</h3>
          <p className="text-sm font-light text-muted-foreground leading-relaxed">{impact}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-light tracking-wide px-3 py-1 border border-border bg-background"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWork() {
  const projects = [
    {
      title: "Match-A-Matcha",
      impact: "Quiz-based recommendation system helping users discover personalized matcha experiences",
      tags: ["UI/UX", "Front-End", "Research"],
      image: "https://images.unsplash.com/photo-1749280447307-31a68eb38673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcxOTA4MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Bail Behavior Heatmap",
      impact: "Interactive data visualization revealing patterns in civic justice systems",
      tags: ["Data", "Research", "UI/UX"],
      image: "https://images.unsplash.com/photo-1771012998159-749e638544cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGhlYXRtYXAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTA4MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Truss Bridge Structural Analysis",
      impact: "Engineering visualization tool for understanding load distribution and structural integrity",
      tags: ["Research", "Data", "Front-End"],
      image: "https://images.unsplash.com/photo-1724118135465-edeef6acf221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBhcmNoaXRlY3R1cmUlMjBzdHJ1Y3R1cmUlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NzE5MDgwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Guinea Fowl CoM Biomechanics Study",
      impact: "Research-driven analysis of avian movement patterns and center of mass dynamics",
      tags: ["Research", "Data"],
      image: "https://images.unsplash.com/photo-1718085875421-b8597dab6403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwYmlvbWVjaGFuaWNzJTIwc2NpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc3MTkwODA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Interactive Front-End Experiments",
      impact: "Collection of interface explorations pushing the boundaries of web interaction design",
      tags: ["Front-End", "UI/UX"],
      image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwaW50ZXJmYWNlJTIwZnJvbnRlbmQlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzE5MDgwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-light tracking-tight mb-16 md:mb-24"
        >
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
