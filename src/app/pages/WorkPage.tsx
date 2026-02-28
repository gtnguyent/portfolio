import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  impact: string;
  tags: string[];
  image: string;
  delay?: number;
  link: string;
  color: string;
}

function ProjectCard({ title, impact, tags, image, delay = 0, link, color }: ProjectCardProps) {
  return (
    <Link to={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="group cursor-pointer"
      >
        <div 
          className="bg-white dark:bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg rounded-lg"
          style={{ 
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: color 
          }}
        >
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="font-light tracking-tight">{title}</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">{impact}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-light tracking-wide px-3 py-1 border border-border rounded-full bg-white dark:bg-card text-phthalo-green dark:text-light-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function WorkPage() {
  const projects = [
    {
      title: "BailLens — Visualizing Bail Inequities in Boston",
      impact: "Data visualization platform exposing bail disparities across Boston neighborhoods",
      tags: ["UI/UX", "Front-End", "Civic Tech"],
      image: "/assets/bailens/bailens_landing.png",
      link: "/case-study/baillens",
      color: "#6FA9BB",
    },
    {
      title: "Match-A-Matcha",
      impact: "Quiz-based recommendation system helping users discover personalized matcha experiences",
      tags: ["UI/UX", "Front-End", "Research"],
      image: "/assets/matcha/matcha-landing.webp",
      link: "/case-study/match-a-matcha",
      color: "#687D31",
    },
    {
      title: "Nintendo Digital Experience Study",
      impact: "Analyzing engagement patterns and interaction behavior across Nintendo's digital platforms",
      tags: ["Research", "Data", "UI/UX"],
      image: "/assets/nintendo/nintendo_switch2.png",
      link: "/case-study/nintendo",
      color: "#406768",
    },
    {
      title: "Acrylic Truss Bridge",
      impact: "Engineering visualization tool for understanding load distribution and structural integrity",
      tags: ["Research", "Data", "Engineering"],
      image: "/assets/truss/truss-process-optimal.png",
      link: "/case-study/truss-bridge",
      color: "#D5D3CC",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-normal leading-none mb-16 md:mb-24"
        >
          Work
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}