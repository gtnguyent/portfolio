import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-light tracking-tight">GT Nguyen</h3>
            <p className="text-sm font-light text-muted-foreground">
              Designing thoughtful digital experiences through research, systems thinking, and technical execution.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-light tracking-tight">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit">
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-green group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/work" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit">
                <span className="relative z-10">Work</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-moonstone-blue group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/about" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit">
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deep-space-sparkle group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/dabble" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit">
                <span className="relative z-10">Dabble</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-green group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-light tracking-tight">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="mailto:gtnguyent@gmail.com"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit"
              >
                <span className="relative z-10">gtnguyent@gmail.com</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-moonstone-blue group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/gt-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit"
              >
                <span className="relative z-10">LinkedIn</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deep-space-sparkle group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="/assets/about/gtnguyen_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group w-fit"
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-green group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <p className="text-sm font-light text-muted-foreground text-center">
            © 2026 GT Nguyen. Designed and developed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}