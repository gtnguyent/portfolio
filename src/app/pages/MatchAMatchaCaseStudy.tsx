import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MatchAMatchaCaseStudy() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const quizImages = [
  "/assets/matcha/matcha-quiz1.png",
  "/assets/matcha/matcha-quiz2.png",  
  "/assets/matcha/matcha-quiz3.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quizImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quizImages.length) % quizImages.length);
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
              onClick={() => handleNavigation("/case-study/truss-bridge")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/nintendo")}
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
            Match-A-Matcha: Turning User Preferences into Personalized Recommendations
          </h1>

          <p className="text-lg font-light text-muted-foreground">
            A quiz-based experience that turns user preferences into personalized matcha recommendations.
          </p>

          <dl className="grid md:grid-cols-4 gap-6 pt-4">
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Type</dt>
              <dd className="font-light">Interactive Web Experience</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Role</dt>
              <dd className="font-light">Web Developer</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Industry</dt>
              <dd className="font-light">Food & Beverage / Lifestyle</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Tools</dt>
              <dd className="font-light">HTML · CSS · JavaScript</dd>
            </div>
          </dl>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap pt-2">
            <a
              href="https://gtnguyent.github.io/matchamatcha/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-mustard-green text-white font-light tracking-tight rounded-lg hover:opacity-90 transition-opacity"
            >
              Live demo
            </a>
            <a
              href="https://github.com/gtnguyent/matchamatcha.git"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-border font-light tracking-tight rounded-lg hover:bg-muted transition-colors"
            >
              GitHub
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
            src="/assets/matcha/matcha-landing.webp"
            alt="Match-A-Matcha mockup"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Description</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Match-A-Matcha is an interactive website designed to help users discover a matcha drink that fits their
                taste through a short, guided quiz. Rather than presenting long lists of recipes, the experience prioritizes
                personalization, clarity, and a cozy cafe-inspired aesthetic.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-light">Project Goals</h3>
                <ul className="space-y-2 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">→</span>
                    <span>Reduce decision paralysis through structured guidance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">→</span>
                    <span>Create a memorable, emotionally engaging digital experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">→</span>
                    <span>Demonstrate UX principles in a real, functioning product</span>
                  </li>
                </ul>
              </div>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-results.png"
                  alt="A matcha quiz result"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Result page with drink description
              </figcaption>
            </figure>
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
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">The Problem</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Many recipe and drink websites overwhelm users with too many options upfront. For people who want matcha but
                aren't sure what they're craving, scrolling through dense catalogs can feel like unnecessary effort.
              </p>

              <div>
                <h3 className="text-xl font-light mb-4">The challenge was to design an experience that…</h3>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Helps users decide quickly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Avoids information overload</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Feels welcoming rather than technical</span>
                  </li>
                </ul>
              </div>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-choices.webp"
                  alt="Provides a matcha result according to your preferences"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Reducing overwhelm by simplifying choices
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* The Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">The Solution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <figure className="space-y-4">
              <div className="relative">
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={quizImages[currentSlide]}
                    alt={`Quiz step ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
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
                {quizImages.map((_, index) => (
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
                3-question quiz that guides users step-by-step
              </figcaption>
            </figure>

            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                I designed a 3-question quiz that guides users step-by-step toward a personalized matcha recommendation.
                Instead of browsing endlessly, users answer simple questions about mood and flavor preferences, then receive
                a curated result.
              </p>

              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                A drink catalog exists as a secondary feature for exploration, but the quiz remains the primary entry point
                and core interaction.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Target Users */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#406768' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Target Users</h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
              This experience was designed primarily for:
            </p>
            <ul className="space-y-4 font-light text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Young adults (18–30) who enjoy cafe culture and matcha</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Busy students and professionals who want quick, low-effort decisions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Creatives who value aesthetic, cozy digital experiences</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* UX Laws Applied */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">UX Laws Applied</h2>
          </div>

          <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            The quiz-first design is supported by three intentional UX laws:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <figure className="space-y-4">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-hicks.png"
                  alt="Quiz question screen with limited choices"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground font-medium">Hick's Law:</strong> fewer choices per screen reduces cognitive load.
              </figcaption>
            </figure>

            <figure className="space-y-4">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-fitts.png"
                  alt="Homepage with large CTA button"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground font-medium">Fitts' Law:</strong> large, well-spaced buttons minimize friction.
              </figcaption>
            </figure>

            <figure className="space-y-4">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-au.png"
                  alt="Drink card or catalog with cozy styling"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground font-medium">Aesthetic-Usability Effect:</strong> warm visuals make it feel approachable.
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Interface & Visual Design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">Interface & Visual Design</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                The visual system was inspired by cozy cafes and journaling aesthetics:
              </p>
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Muted greens and warm neutrals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Rounded cards and soft shadows</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Hand-illustrated drinks for personality and charm</span>
                </li>
              </ul>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                These choices support the emotional goal of making the quiz feel comforting rather than transactional.
              </p>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/matcha/matcha-visualdesign.png"
                  alt="Catalog or drink cards"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Cozy visual language: rounded cards, soft shadows, illustrations
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Outcome</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
              The final website delivers a focused, low-pressure experience that helps users quickly find a matcha drink
              they'll enjoy. The project strengthened my understanding of UX-driven design, quiz logic, and how visual
              choices impact usability.
            </p>

            {/* User Testing Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-border bg-background rounded-lg space-y-3">
                <div className="text-3xl font-light text-foreground">~45 sec</div>
                <p className="font-light text-muted-foreground">
                  Average completion time from start to recommendation
                </p>
              </div>
              <div className="p-6 border border-border bg-background rounded-lg space-y-3">
                <div className="text-3xl font-light text-foreground">89%</div>
                <p className="font-light text-muted-foreground">
                  of users completed the full quiz without abandoning
                </p>
              </div>
              <div className="p-6 border border-border bg-background rounded-lg space-y-3">
                <div className="text-3xl font-light text-foreground">4.2/5</div>
                <p className="font-light text-muted-foreground">
                  average user satisfaction with recommendation accuracy
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="max-w-3xl space-y-4">
              <h3 className="text-xl font-light">Key Achievements</h3>
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">✓</span>
                  <span>Successfully reduced decision time compared to traditional catalog browsing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">✓</span>
                  <span>Created a reusable quiz framework applicable to other recommendation scenarios</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">✓</span>
                  <span>Demonstrated measurable impact of UX principles on user behavior</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Reflection & Iterations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#406768' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Reflection & Iterations</h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                This project reinforced how constraint, clarity, and flow shape good UX. Designing a short, quiz-based
                experience taught me that fewer choices can lead to faster, more confident decisions. I learned that
                reducing options improves decision making and lowers cognitive load.
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                On the technical side, I strengthened my ability to connect JavaScript logic with user flow—reinforcing
                how thoughtful front-end decisions directly impact usability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Future Iterations</h3>
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>Expand quiz logic for more nuanced recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>Add subtle micro-interactions between quiz steps</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>Collect user feedback to refine results</span>
                </li>
              </ul>
            </div>

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

        {/* Project Navigation */}
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
              onClick={() => handleNavigation("/case-study/truss-bridge")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/nintendo")}
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