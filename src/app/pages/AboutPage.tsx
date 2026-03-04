import { motion } from "motion/react";
import { Mail, Linkedin, FileText, Star, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const offlineActivities = [
    {
      title: "watching the sunset",
      image:"/assets/about/gtnguyen_sunset.webp",
    },
    {
      title: "rock climbing",
      image: "/assets/about/gtnguyen_rockclimb.webp",
    },
    {
      title: "traveling",
      image: "/assets/about/gtnguyen_travel.webp",
    },
    {
      title: "snorkeling in the great barrier reef",
      image: "/assets/about/gtnguyen_snorkeling.webp",
    },
    {
      title: "ordering oysters rockefeller",
      image: "/assets/about/gtnguyen_eating.webp",
    },
    {
      title: "sliding down a mountain",
      image: "/assets/about/gtnguyen_snowboard.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Star Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Section Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-24 left-[8%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 rotate-12 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute top-32 right-[12%]"
        >
          <Star className="w-7 h-7 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-25 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute top-[20vh] left-[15%]"
        >
          <Star className="w-5 h-5 fill-white/50 text-white/50 rotate-45 drop-shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute top-[25vh] right-[20%]"
        >
          <Star className="w-6 h-6 fill-moonstone-blue/55 text-moonstone-blue/55 -rotate-30 drop-shadow-md" />
        </motion.div>

        {/* Middle Section Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[45vh] left-[5%]"
        >
          <Star className="w-7 h-7 fill-white/60 text-white/60 rotate-20 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[50vh] right-[8%]"
        >
          <Star className="w-6 h-6 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-15 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-[65vh] left-[10%]"
        >
          <Star className="w-5 h-5 fill-white/55 text-white/55 rotate-35 drop-shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute top-[70vh] right-[6%]"
        >
          <Star className="w-8 h-8 fill-moonstone-blue/45 text-moonstone-blue/45 -rotate-40 drop-shadow-lg" />
        </motion.div>

        {/* Lower Section Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[120vh] left-[7%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 rotate-25 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-[125vh] right-[10%]"
        >
          <Star className="w-7 h-7 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-20 drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-[140vh] left-[12%]"
        >
          <Star className="w-5 h-5 fill-white/50 text-white/50 rotate-50 drop-shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute top-[145vh] right-[5%]"
        >
          <Star className="w-8 h-8 fill-moonstone-blue/55 text-moonstone-blue/55 -rotate-35 drop-shadow-lg" />
        </motion.div>

        {/* Bottom Section Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[180vh] left-[15%]"
        >
          <Star className="w-6 h-6 fill-white/60 text-white/60 rotate-15 drop-shadow-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[185vh] right-[18%]"
        >
          <Star className="w-7 h-7 fill-moonstone-blue/50 text-moonstone-blue/50 -rotate-25 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Centered Hero Title */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-normal leading-none">
            <span
              style={{
                WebkitTextStroke: '2px currentColor',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hello, I'm{" "}
            </span>
            <span>GT!</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Main About Section - 50/50 Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
          {/* Left Half - Profile Image with Links Below */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="aspect-[3/4] bg-muted border border-border overflow-hidden rounded-lg" style={{ maxWidth: '80%', margin: '0 auto' }}>
              <ImageWithFallback
                src="/assets/about/gtnguyen_profile.JPG"
                alt="GT Nguyen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Links */}
            <div className="space-y-3 mt-8" style={{ maxWidth: '80%', margin: '2rem auto 0' }}>
              <a
                href="/assets/about/gtnguyen_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-border font-light text-sm transition-all hover:bg-muted rounded-lg"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="mailto:gtnguyent@gmail.com"
                className="flex items-center gap-3 px-4 py-3 border border-border font-light text-sm transition-all hover:bg-muted rounded-lg"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/gt-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-border font-light text-sm transition-all hover:bg-muted rounded-lg"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Half - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="space-y-6 font-light leading-relaxed text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground font-medium">
                  I enjoy exploring the space where media, data, and human behavior come together.
                </strong>
              </p>

              <p>
                I love analyzing how audiences engage with content and identifying patterns across platforms.
                Whether observing trends, measuring engagement, or experimenting with new storytelling formats, I find satisfaction in turning insights into actions.
              </p>

              <p className="text-lg">
                <strong className="text-foreground font-medium">
                  Tech entered the group chat last summer.
                </strong>
              </p>

              <p>
                My background in Media Science trained me to be analytical and curious, while my project and internship
                experience taught me how to apply insights in practical ways. I took one… or seven{" "}
                <span className="text-moonstone-blue">STEM</span> classes for fun to gain technical skills. It turns out my "interest" in coding was actually a{" "}
                <span className="text-mustard-green">while(true)</span> loop I didn't know how to break.
              </p>

              <p className="text-lg">
                <strong className="text-foreground font-medium">
                  Why this path?
                </strong>
              </p>

              <p>
                "I am preparing you for a job that has yet to exist" is what my teacher told me in my sophomore year of high school.
                This has stuck with me as I explore different career avenues. No matter the project, I'm gravitated to work that helps
                people navigate information and connect with content that matters. I am particularly interested in how data, web
                technologies, and media strategy can work together to create meaningful experiences.
              </p>

              <p>
                <strong className="text-foreground font-medium">
                  Moving forward, I seek to collaborate on projects that combine analytics, content, and technology to
                  build platforms, campaigns, or experiences that inform, engage, and empower audiences.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>

         {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Certifications & Awards</h2>
          
          <div className="space-y-6">
            {/* Bloomberg Certification */}
            <div className="p-8 border border-border bg-background rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-2">Bloomberg Market Concepts (BMC)</h3>
                  <p className="text-sm font-light text-muted-foreground">
                    Completed comprehensive certification covering economic indicators, currencies, fixed income, and equities
                  </p>
                  <a
                    href="https://portal.bloombergforeducation.com/certificates/rFvuQh8aUK1gsyQFXSP3ds8b"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-light text-mustard-green hover:opacity-90"
                  >
                    View certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* BailLens Awards */}
            <div className="p-8 border border-border bg-background rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-2">CivicHacks Hackathon Awards</h3>
                  <ul className="space-y-2 text-sm font-light text-muted-foreground">
                    <li>• Best Use of Blockchain for Civic Impact (Allium)</li>
                    <li>• Best Use of Solana</li>
                    <li>• Best CourtHack</li>
                  </ul>
                  <a
                    href="https://devpost.com/software/baillens"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-light text-mustard-green hover:opacity-90"
                  >
                    View Devpost
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
              {/* Dean's List */}
              <div className="p-8 border border-border bg-background rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2">Dean’s List</h3>
                    <p className="text-sm font-light text-muted-foreground">Recognized for academic excellence</p>
                  </div>
                </div>
              </div>

              {/* BU AdLab */}
              <div className="p-8 border border-border bg-background rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2">BU AdLab</h3>
                    <ul className="space-y-2 text-sm font-light text-muted-foreground">
                      <li>• Nomination for Best Overall (GrandLabbie)</li>
                      <li>• Nomination for Best Team Building</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Offline Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center">When I'm not working, I'm…</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {offlineActivities.map((activity, index) => (
              <motion.figure
                key={activity.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group space-y-3"
              >
                <div className="aspect-square bg-muted border border-border overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <figcaption className="text-sm font-light text-center text-muted-foreground">
                  {activity.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}