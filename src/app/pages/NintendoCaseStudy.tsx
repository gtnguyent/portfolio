import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NintendoCaseStudy() {
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
              onClick={() => handleNavigation("/case-study/match-a-matcha")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/truss-bridge")}
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
            Developing a Data-Driven Marketing Strategy for Nintendo
          </h1>

          <p className="text-lg font-light text-muted-foreground">
            A data-driven analysis of media, social, and search behavior to understand audience perception of the
            Nintendo Switch 2 and inform launch + engagement strategy.
          </p>

          <dl className="grid md:grid-cols-4 gap-6 pt-4">
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Type</dt>
              <dd className="font-light">Marketing Analytics / Strategy</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Role</dt>
              <dd className="font-light">Data Analyst</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Industry</dt>
              <dd className="font-light">Gaming / Consumer Technology</dd>
            </div>
            <div>
              <dt className="text-xs font-light text-muted-foreground mb-1 uppercase tracking-wide">Tools</dt>
              <dd className="font-light">Meltwater · Communalytic · Google Trends · Canva</dd>
            </div>
          </dl>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
              <div className="text-2xl font-light text-foreground mb-1">50K+</div>
              <p className="text-sm font-light text-muted-foreground">Social mentions analyzed across platforms</p>
            </div>
            <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
              <div className="text-2xl font-light text-foreground mb-1">62%</div>
              <p className="text-sm font-light text-muted-foreground">Neutral sentiment—conversion opportunity</p>
            </div>
            <div className="p-4 border border-moonstone-blue/40 bg-moonstone-blue/10 rounded-lg">
              <div className="text-2xl font-light text-foreground mb-1">4 weeks</div>
              <p className="text-sm font-light text-muted-foreground">Pre/post-announcement analysis period</p>
            </div>
          </div>
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
            src="/assets/nintendo/nintendo-landing.png"
            alt="Nintendo Switch 2 marketing analysis"
            className="w-full h-full object-cover"
          />
        </motion.div>

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                As anticipation for the Nintendo Switch 2 grew, online conversation showed strong awareness but inconsistent
                engagement. Nintendo faced the challenge of sustaining momentum beyond announcement cycles while addressing
                price sensitivity, uncertainty, and platform-specific engagement gaps.
              </p>

              <div>
                <h3 className="text-xl font-light mb-4">Objectives</h3>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Understand how audiences perceive the Nintendo Switch 2 over time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Identify drivers of engagement, sentiment, and drop-off</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Evaluate platform performance and conversation quality</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>Translate insights into actionable marketing recommendations</span>
                  </li>
                </ul>
              </div>
            </div>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-spike-problem.png"
                  alt="Visual for problem / objectives"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Example visual: engagement spike → drop-off
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Research Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#D5D3CC' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-phthalo-green">Research Approach</h2>
          </div>

          {/* Business Question */}
          <div className="p-6 border border-border bg-muted rounded-lg">
            <p className="text-sm font-light text-muted-foreground uppercase tracking-wide mb-2">Business question</p>
            <p className="text-lg font-light leading-relaxed">
              How can Nintendo sustain engagement momentum beyond announcement cycles while addressing
              price sensitivity and platform performance gaps?
            </p>
          </div>

          {/* Two visuals side-by-side */}
          <div className="grid md:grid-cols-2 gap-8">
            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-wordcloud.png"
                  alt="Top conversation themes word cloud"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Top conversation themes (word cloud)
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-platform-sentiment.png"
                  alt="Sentiment distribution across platforms"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Sentiment distribution across platforms
              </figcaption>
            </figure>
          </div>

          {/* Text content underneath */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              To evaluate audience perception of the Nintendo Switch 2, I designed a multi-source analysis combining
              media coverage, social conversation, and search behavior. The objective was to identify how awareness
              translated into engagement, how sentiment evolved over time, and where strategic opportunities existed.
            </p>

            <div>
              <h3 className="text-xl font-light mb-4">Research Design</h3>
              <p className="font-light text-muted-foreground leading-relaxed">
                I compared pre- and post-announcement periods to measure changes in visibility, sentiment distribution,
                and engagement intensity. This allowed me to assess both the immediate impact of launch moments and the
                sustainability of audience interest.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Data Sources</h3>
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Meltwater:</strong> Measured media volume, reach, and timing of coverage to identify announcement-driven spikes and decay patterns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Communalytic:</strong> Analyzed sentiment distribution, toxicity levels, and network clusters to uncover perception trends and conversation drivers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Google Trends:</strong> Tracked search interest over time to distinguish between short-term hype and sustained curiosity.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Analytical Methods</h3>
              <ul className="space-y-3 font-light text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Sentiment analysis:</strong> Categorized conversations into positive, neutral, and negative clusters to identify perception gaps and conversion potential.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Keyword/topic clustering:</strong> Identified dominant themes (pricing, franchises, performance, hardware updates) shaping audience discourse.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Engagement & timing analysis:</strong> Measured spike intensity and drop-off rates to evaluate the durability of launch-driven momentum.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              By triangulating media, social, and search data, the analysis minimized single-platform bias and produced a holistic
              view of audience perception, engagement quality, and strategic opportunity.
            </p>
          </div>
        </motion.section>

        {/* Key Insights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#6FA9BB' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Key Insights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h3 className="text-xl font-light">Awareness is high, engagement is fragile</h3>
              <p className="font-light text-muted-foreground">
                Nintendo generates strong hype during announcements, but engagement drops quickly after reveal cycles.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground">Why it matters:</strong> Short-lived spikes limit long-term brand momentum.
              </p>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h3 className="text-xl font-light">Neutral sentiment = untapped opportunity</h3>
              <p className="font-light text-muted-foreground">
                Sentiment skews neutral rather than negative, indicating users are aware but not fully convinced.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground">Why it matters:</strong> Neutral audiences are easier to convert than skeptical ones.
              </p>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h3 className="text-xl font-light">Price sensitivity coexists with franchise loyalty</h3>
              <p className="font-light text-muted-foreground">
                Deals/pricing dominate discussion, but Mario + Pokémon remain strong motivators.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground">Why it matters:</strong> Perceived value matters more than absolute price.
              </p>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h3 className="text-xl font-light">Platform performance is uneven</h3>
              <p className="font-light text-muted-foreground">
                Nintendo performs strongly on YouTube and X, but underperforms on Instagram and TikTok.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                <strong className="text-foreground">Why it matters:</strong> Identical cross-posting limits reach and engagement.
              </p>
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
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#406768' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Results</h2>
          </div>

          {/* Results intro */}
          <div className="space-y-4">
            <p className="text-sm font-light text-muted-foreground uppercase tracking-wide">Key findings</p>
            <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
              The analysis revealed strong launch-driven awareness, but fragile long-term engagement.
              While sentiment skewed predominantly neutral rather than negative, pricing uncertainty and
              hardware expectations shaped much of the conversation. Platform performance was also uneven,
              with stronger traction on YouTube and X compared to Instagram and TikTok.
            </p>
          </div>

          {/* Results visuals */}
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-results-one.png"
                  alt="Engagement trends over time"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Conversation volume spikes sharply around announcement moments, then quickly returns to baseline.
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-results-two.png"
                  alt="Topic clustering results"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                Topic clustering reveals distinct conversation groups centered on pricing, performance expectations, and franchise-driven excitement.
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="/assets/nintendo/nintendo-results-three.png"
                  alt="Platform comparison chart"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-sm font-light text-muted-foreground">
                AI clustering identifies the most dominant conversation themes, with hardware upgrades, pricing, and franchise titles driving the majority of mentions.
              </figcaption>
            </figure>
          </div>

          {/* Strategy section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light">Strategic Response</h3>
            <p className="font-light text-muted-foreground leading-relaxed max-w-3xl">
              These findings informed a multi-pronged strategy designed to convert neutral audiences, extend
              engagement momentum beyond announcement cycles, and optimize platform-specific performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-moonstone-blue bg-background rounded-lg space-y-4">
              <h4 className="text-xl font-light">Nintendo Clarity Project</h4>
              
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wide mb-2">Insight addressed</p>
                <p className="text-sm font-light text-muted-foreground">
                  High neutral sentiment driven by pricing and performance uncertainty.
                </p>
              </div>

              <p className="font-light">
                <strong className="text-foreground">Strategic objective:</strong> Convert neutral awareness into positive engagement.
              </p>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Short-form explanation videos clarifying feature upgrades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Visual infographics comparing performance metrics</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Side-by-side gameplay demonstrations</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h4 className="text-xl font-light">Nintendo-Together (Community Strategy)</h4>
              
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wide mb-2">Insight addressed</p>
                <p className="text-sm font-light text-muted-foreground">
                  Strong franchise loyalty but under-leveraged fan advocacy.
                </p>
              </div>

              <p className="font-light">
                <strong className="text-foreground">Strategic objective:</strong> Transform loyal players into brand advocates.
              </p>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Fan unboxing and comparison content campaigns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Branded hashtag initiatives</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Amplification of high-quality user-generated content</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h4 className="text-xl font-light">Influencer Partnerships</h4>
              
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wide mb-2">Insight addressed</p>
                <p className="text-sm font-light text-muted-foreground">
                  Engagement spikes were short-lived following official announcements.
                </p>
              </div>

              <p className="font-light">
                <strong className="text-foreground">Strategic objective:</strong> Extend visibility beyond launch cycles.
              </p>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Staggered early-access partnerships with diverse creators</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Coordinated posting schedules across creators</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Blend of technical reviewers and lifestyle creators</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-border bg-background rounded-lg space-y-4">
              <h4 className="text-xl font-light">Platform-Specific Content Strategy</h4>
              
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wide mb-2">Insight addressed</p>
                <p className="text-sm font-light text-muted-foreground">
                  Underperformance on Instagram and TikTok relative to YouTube and X.
                </p>
              </div>

              <p className="font-light">
                <strong className="text-foreground">Strategic objective:</strong> Optimize reach and long-term engagement per platform.
              </p>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Tailor content format to platform behavior</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Avoid identical cross-posting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">→</span>
                  <span>Prioritize short-form content for IG and TikTok</span>
                </li>
              </ul>
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
          <div className="py-12 px-8 -mx-6 md:-mx-12" style={{ backgroundColor: '#687D31' }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">What I Learned</h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              This project strengthened my ability to translate large-scale social and media data into clear, actionable
              marketing strategies. To take this a step further, I would incorporate A/B testing and post-launch metrics
              to quantify the impact of each recommendation.
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
              onClick={() => handleNavigation("/case-study/match-a-matcha")}
              className="text-sm font-light tracking-tight hover:opacity-60 transition-opacity"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleNavigation("/case-study/truss-bridge")}
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