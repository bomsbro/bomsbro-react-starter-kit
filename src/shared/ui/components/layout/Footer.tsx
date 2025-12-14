import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-[#2C4E9C] text-white mt-16">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* About Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shop" className="text-white/80 hover:text-white transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 pt-8 text-center">
        <p className="text-sm text-white/60">© 2025 Minimal Blog. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

