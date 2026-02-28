import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="tracking-tight font-light relative group"
          >
            <span className="relative z-10">GT Nguyen</span>
            <span className="absolute inset-0 bg-mustard-green opacity-0 group-hover:opacity-10 transition-opacity -m-2 rounded" />
          </Link>
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              <Link
                to="/work"
                className={`font-light tracking-tight relative group ${
                  location.pathname === "/work" || location.pathname.includes("/case-study") ? "opacity-100" : "opacity-70"
                }`}
              >
                <span className="relative z-10">Work</span>
                <span className="absolute inset-0 bg-moonstone-blue opacity-0 group-hover:opacity-10 transition-opacity -m-2 rounded" />
              </Link>
              <Link
                to="/about"
                className={`font-light tracking-tight relative group ${
                  location.pathname === "/about" ? "opacity-100" : "opacity-70"
                }`}
              >
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-deep-space-sparkle opacity-0 group-hover:opacity-10 transition-opacity -m-2 rounded" />
              </Link>
              <Link
                to="/dabble"
                className={`font-light tracking-tight relative group ${
                  location.pathname === "/dabble" ? "opacity-100" : "opacity-70"
                }`}
              >
                <span className="relative z-10">Dabble</span>
                <span className="absolute inset-0 bg-mustard-green opacity-0 group-hover:opacity-10 transition-opacity -m-2 rounded" />
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}