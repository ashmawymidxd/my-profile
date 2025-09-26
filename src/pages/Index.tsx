import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-primary">
              Ahmed Hassan
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button className="p-2">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-foreground"></div>
                  <div className="w-full h-0.5 bg-foreground"></div>
                  <div className="w-full h-0.5 bg-foreground"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-4">Ahmed Hassan Shehata</div>
            <div className="text-muted-foreground mb-6">Full Stack Developer • Bani Swayf, Egypt</div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:ahmedhassanshehata551@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
              <a href="https://linkedin.com/in/ahmed-hassan-shehata" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://github.com/ashmawymidxd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="https://t.me/G1_ahmed_hassan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahmed Hassan Shehata. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
