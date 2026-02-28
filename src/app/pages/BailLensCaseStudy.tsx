import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function BailLensCaseStudy() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center mb-12 pb-6 border-b border-border"
        >
          <button
            onClick={() => handleNavigation("/work")}
            className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
          >
            ← Back to Work
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => handleNavigation("/case-study/truss-bridge")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/match-a-matcha")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              Next →
            </button>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            BailLens: Visualizing Bail Inequities in Boston
          </h1>

          <p className="text-lg font-light text-muted-foreground">
            A data visualization platform exposing bail disparities across Boston neighborhoods.
          </p>

          <dl className="grid md:grid-cols-4 gap-6 pt-4">
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Type</dt>
              <dd className="font-light">Civic Tech / Data Visualization</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Role</dt>
              <dd className="font-light">Frontend Engineer & Visualization Lead</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Industry</dt>
              <dd className="font-light">Civic Technology</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Tools</dt>
              <dd className="font-light">React · D3.js · TailwindCSS · Adobe Illustrator · Figma</dd>
            </div>
          </dl>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap pt-2">
            <a
              href="https://github.com/xyaei/CivicHacks-2026"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-mustard-green text-white font-light tracking-tight rounded-lg hover:opacity-90 transition-opacity"
            >
              View GitHub
            </a>
            <a
              href="https://devpost.com/software/baillens"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-border font-light tracking-tight rounded-lg hover:bg-muted transition-colors"
            >
              View Devpost
            </a>
          </div>
        </motion.div>

        {/* Hero Image/Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-[16/9] bg-muted border border-border overflow-hidden mb-24 rounded-lg"
        >
          <ImageWithFallback
            src="/assets/bailens/bailens_landing.png"
            alt="BailLens interactive platform"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Overview</h2>
          </div>

          <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            BailLens is a civic-tech project built during CivicHacks 2026 to analyze and visualize bail disparities across Boston neighborhoods. Using publicly available court data, our team transformed raw datasets into an interactive experience that allows users to explore median bail amounts by location.
          </p>

          <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            The goal was to make complex legal and socioeconomic data accessible, transparent, and actionable for the public.
          </p>

          {/* 3-Column Summary */}
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Problem</h3>
              <p className="text-sm font-light text-muted-foreground">
                Bail data is difficult to access and understand, obscuring systemic disparities
              </p>
            </div>
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Approach</h3>
              <p className="text-sm font-light text-muted-foreground">
                Transform raw court data into interactive neighborhood-level visualizations
              </p>
            </div>
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Impact</h3>
              <p className="text-sm font-light text-muted-foreground">
                Empower communities with transparency and spark conversations about equity
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">The Problem</h2>
          </div>

          <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            Cash bail systems disproportionately affect low-income communities, reinforcing cycles of incarceration and economic hardship. However, the data behind these disparities is often difficult to access or understand.
          </p>

          <div className="w-full h-px bg-border my-8"></div>
        </motion.section>

        {/* Research & Data */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">Research & Data</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Sourced Boston court bail datasets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Cleaned and structured neighborhood-level data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Calculated median bail amounts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Identified geographic patterns</span>
                </li>
              </ul>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/bailens/bailens_researchdata.png"
                  alt="Data cleaning workflow diagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Architecture of how we approached data cleaning
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#406768' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Design Process</h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h3 className="text-xl font-light">1. Mapping Neighborhoods</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Created an interactive Boston neighborhood map that serves as the foundation for data exploration, allowing users to navigate geographically and understand local context.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-light">2. Heatmap Visualization</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Developed color scaling logic for median bail amounts, using visual hierarchy to make disparities immediately apparent and patterns easy to identify.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-light">3. Hover Interactions</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Implemented neighborhood pop-out and tooltip system to provide detailed data on demand without overwhelming the interface.
              </p>
            </div>
          </div>

          {/* Two side-by-side mockups */}
          <div className="grid md:grid-cols-2 gap-8">
            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/bailens/bailens_interactive_map.png"
                  alt="Final Interactive Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Final Interactive State Map
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/bailens/bailens_gridview.png"
                  alt="Final Interactive Heatmap"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Final Interactive Heatmap
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Final Product */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">The Product</h2>
          </div>

          {/* Large mockup (YouTube demo) */}
          <figure className="space-y-3">
            <div className="w-full aspect-[16/9] bg-muted border border-border overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kyHoALkD8zM?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=kyHoALkD8zM"
                title="BailLens interactive platform demo"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </figure>

          {/* Feature highlights grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Interactive Hover</h3>
              <p className="text-sm font-light text-muted-foreground">
                Neighborhood-level interactions reveal detailed bail data
              </p>
            </div>
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Median Bail Display</h3>
              <p className="text-sm font-light text-muted-foreground">
                Tooltips show precise median amounts per area
              </p>
            </div>
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Heatmap Scaling</h3>
              <p className="text-sm font-light text-muted-foreground">
                Color-coded visualization highlights disparities
              </p>
            </div>
            <div className="p-6 border border-border bg-background rounded-lg space-y-3">
              <h3 className="text-lg font-light">Clean Civic UI</h3>
              <p className="text-sm font-light text-muted-foreground">
                Accessible, minimal interface for public use
              </p>
            </div>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Why It Matters</h2>
          </div>

          <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            BailLens demonstrates how design and data visualization can empower communities with transparency. By translating raw court data into a clear visual narrative, we aimed to spark conversations about equity in the justice system.
          </p>
        </motion.section>

        {/* Project Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">Project Links</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://github.com/xyaei/CivicHacks-2026"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-phthalo-green text-white font-light tracking-tight rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span>View GitHub Repository</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://devpost.com/software/baillens"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border-2 border-border font-light tracking-tight rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Devpost Submission</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}