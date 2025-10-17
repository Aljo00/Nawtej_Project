import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-charcoal hover:text-primary transition-colors"
            >
              Dr. Nawtej Dosanjh
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('ai-platform')}
              className="text-charcoal hover:text-primary transition-colors font-medium"
            >
              AI Platform
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-charcoal hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-charcoal hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('ai-platform')}
                className="text-charcoal hover:text-primary transition-colors font-medium py-2 text-left"
              >
                AI Platform
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-charcoal hover:text-primary transition-colors font-medium py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-charcoal hover:text-primary transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
