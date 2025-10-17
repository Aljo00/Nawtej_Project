import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              &copy; 2025 AI Strategiser. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/drnawtejdosanjh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
