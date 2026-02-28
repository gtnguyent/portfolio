import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TrussBridgeCaseStudy() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const designImages = [
    "/assets/truss/truss-process-design1.png",
    "/assets/truss/truss-process-design2.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % designImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + designImages.length) % designImages.length);
  };

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
              onClick={() => handleNavigation("/case-study/nintendo")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/baillens")}
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
          <p className="text-lg font-light text-muted-foreground">
            Designed, analyzed, fabricated, and load-tested a clear-span acrylic truss bridge optimized for buckling
            resistance and load-to-cost efficiency.
          </p>

          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
              Acrylic Truss Bridge
            </h1>
            <p className="text-sm font-light text-muted-foreground uppercase tracking-widest">
              Structure Analysis & Testing
            </p>
          </div>

          <dl className="grid md:grid-cols-4 gap-6 pt-4">
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Type</dt>
              <dd className="font-light">Engineering Design & Structural Analysis</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Role</dt>
              <dd className="font-light">Engineer & Analyst</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Industry</dt>
              <dd className="font-light">Structural / Mechanical Engineering</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Tools</dt>
              <dd className="font-light">MATLAB · Excel · Acrylic fabrication · Experimental load testing</dd>
            </div>
          </dl>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-[16/9] bg-muted border border-border overflow-hidden mb-24 rounded-lg"
        >
          <ImageWithFallback
            src="/assets/truss/truss-team.webp"
            alt="Clear-span acrylic truss bridge during compressive load testing"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                This project involved end-to-end structural design of a clear-span acrylic truss bridge, from fundamental
                material testing through theoretical modeling, fabrication, and destructive load testing. Experimental
                buckling data was used to inform design decisions and optimize the final truss geometry for maximum load
                capacity.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
                  <p className="text-xs font-light text-muted-foreground uppercase tracking-wider mb-2">
                    Predicted / achieved W<sub>max</sub>
                  </p>
                  <p className="text-lg font-light">54.5 oz</p>
                </div>
                <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
                  <p className="text-xs font-light text-muted-foreground uppercase tracking-wider mb-2">
                    Failure mode
                  </p>
                  <p className="text-lg font-light">Buckling (primary compression member)</p>
                </div>
                <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
                  <p className="text-xs font-light text-muted-foreground uppercase tracking-wider mb-2">
                    Efficiency
                  </p>
                  <p className="text-lg font-light">0.296 oz / dollar</p>
                </div>
              </div>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/truss/truss-overview.webp"
                  alt="Acrylic truss bridge during final compressive load testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Clear-span acrylic truss bridge during final compressive load testing
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-12"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">Process</h2>
          </div>

          {/* Step 1 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light">1. Fundamental member testing</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  To establish material behavior, individual acrylic members were tested under compressive loading at
                  varying lengths.
                </p>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Measured critical buckling loads (P<sub>crit</sub>) experimentally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Verified inverse relationship between member length and buckling strength</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Generated empirical data to inform truss calculations</span>
                  </li>
                </ul>
                <p className="text-sm font-light text-muted-foreground">
                  <strong className="text-foreground">Outcome:</strong> A linear fit between length and critical buckling load provided reliable
                  material parameters for downstream modeling.
                </p>
              </div>

              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-buckle-1.webp"
                    alt="Acrylic member compressive buckling test setup"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Individual member testing used to estimate buckling parameters
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light">2. Iterative design & theoretical modeling</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Carousel */}
              <figure className="space-y-4">
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={designImages[currentSlide]}
                      alt={`Design ${currentSlide + 1} truss geometry`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Carousel Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2">
                  {designImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-foreground' : 'bg-border'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <figcaption className="text-sm font-light text-muted-foreground">
                  Statics + internal force modeling to identify critical compression members
                </figcaption>
              </figure>

              <div className="space-y-6">
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  Two candidate truss geometries were developed and evaluated.
                </p>

                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Calculated internal member forces using statics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Identified critical compression members governing failure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Predicted maximum load capacity (W<sub>max</sub>) for each design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Compared designs using load-to-cost efficiency</span>
                  </li>
                </ul>

                <p className="text-sm font-light text-muted-foreground">
                  <strong className="text-foreground">Result:</strong> Design 1 outperformed Design 2 in both predicted load capacity and efficiency,
                  and was selected for fabrication.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light">3. Structural optimization</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  The selected design was refined to maximize performance.
                </p>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Adjusted geometry to reduce unsupported compression lengths</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Controlled material cost while increasing predicted load capacity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Final design achieved a predicted W<sub>max</sub> of <strong className="text-foreground">54.5 oz</strong></span>
                  </li>
                </ul>
              </div>

              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-process-optimal.png"
                    alt="Optimized truss geometry and member lengths"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Geometry refinement to reduce buckling risk in compression members
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light">4. Fabrication & assembly</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-process-building.webp"
                    alt="Acrylic members fabricated and assembled"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Acrylic members fabricated and assembled with reinforced joints to mitigate shear and buckling
                </figcaption>
              </figure>

              <div className="space-y-6">
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  The final truss was fabricated using acrylic members with reinforced joints.
                </p>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Clear-span construction with pin and roller supports</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Reinforcement applied at high-stress joints to mitigate shear and buckling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light">5. Buckling & failure testing</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  The assembled bridge was tested under increasing compressive load until failure.
                </p>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Validated theoretical predictions with experimental results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Observed buckling in the predicted critical member (m3)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Confirmed close agreement between analytical and physical behavior</span>
                  </li>
                </ul>
              </div>

              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-process-testing.webp"
                    alt="Bridge buckling at the critical compression member during testing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Observed buckling aligned with the predicted critical compression member
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Results</h2>
          </div>

          <div className="space-y-8">
            <ul className="space-y-4 font-light text-muted-foreground max-w-3xl">
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Maximum supported load:</strong> 54.5 oz</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Critical failure mode:</strong> buckling of primary compression member</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Design efficiency:</strong> 0.296 oz / dollar</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Takeaway:</strong> experimental results closely matched theoretical predictions</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-3 gap-6">
              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-buckle-1.webp"
                    alt="Buckling load vs length plot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Member buckling data (P<sub>crit</sub>) vs length
                </figcaption>
              </figure>

              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-process-optimal.png"
                    alt="Final truss diagram with member labels"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Final truss geometry + critical compression member
                </figcaption>
              </figure>

              <figure className="space-y-3">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="/assets/truss/truss-process-testing.webp"
                    alt="Load testing setup during final test"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-sm font-light text-muted-foreground">
                  Final load test setup
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.section>

        {/* What I Learned */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#406768' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">What I Learned</h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              This project strengthened my ability to connect theoretical models with real-world structural behavior,
              especially in identifying failure modes driven by instability rather than material strength.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ↑ back to top
            </a>
          </div>
        </motion.section>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center pt-16 border-t border-border"
        >
          <button
            onClick={() => handleNavigation("/work")}
            className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
          >
            ← Back to Work
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => handleNavigation("/case-study/nintendo")}
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
      </div>
    </div>
  );
}
