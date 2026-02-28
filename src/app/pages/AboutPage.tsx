import { motion } from "motion/react";
import { Mail, Linkedin, FileText } from "lucide-react";
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
    <div className="min-h-screen bg-background">
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
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Certifications</h2>
          <div className="p-8 border border-border bg-background rounded-lg">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-light mb-2">Bloomberg Market Concepts (BMC)</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Completed comprehensive certification covering economic indicators, currencies, fixed income, and equities
                </p>
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