import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { DabblePage } from "./pages/DabblePage";
import { MatchAMatchaCaseStudy } from "./pages/MatchAMatchaCaseStudy";
import { BailLensCaseStudy } from "./pages/BailLensCaseStudy";
import { NintendoCaseStudy } from "./pages/NintendoCaseStudy";
import { TrussBridgeCaseStudy } from "./pages/TrussBridgeCaseStudy";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/dabble" element={<DabblePage />} />
              <Route path="/case-study/match-a-matcha" element={<MatchAMatchaCaseStudy />} />
              <Route path="/case-study/baillens" element={<BailLensCaseStudy />} />
              <Route path="/case-study/nintendo" element={<NintendoCaseStudy />} />
              <Route path="/case-study/truss-bridge" element={<TrussBridgeCaseStudy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}