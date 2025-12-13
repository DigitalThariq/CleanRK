import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Facebook, Instagram, Heart, Globe, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Services', path: '/services' },
  { label: 'Our Helpers', path: '/helpers' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'About Us', path: '/about' },
  { label: 'FAQ', path: '/faq' },
];

// Secondary nav items for the sticky bar
const serviceNavItems = [
  { label: 'Included Services', id: 'included-services' },
  { label: 'Comparison', id: 'service-comparison' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  // Global hash scroll handler
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 180; // Adjust based on your sticky header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    // If it's a hash link on the same page, we might need to force scroll if useEffect doesn't trigger (e.g. same hash click)
    if (path.includes('#')) {
      const targetHash = path.split('#')[1];
      if (location.pathname === path.split('#')[0] && location.hash === `#${targetHash}`) {
        // Force scroll if already on the page/hash
        const element = document.getElementById(targetHash);
        if (element) {
          const headerOffset = 180;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
    closeMenu();
  };

  const handleServiceNavClick = (id: string) => {
    navigate(`/services#${id}`);
  };

  // Check if we should show the secondary nav (hide on /services to avoid duplication)
  // Actually, the user wants it "same like services", implying they LIKE the one on Services.
  // If we assume Services.tsx keeps its own (which has language logic), we should hide this one on /services.
  const showSecondaryNav = location.pathname !== '/services';

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2 px-4 text-sm text-center md:text-right md:px-8">
        <span className="opacity-90">Singapore-Registered Agency | License: 12C3456</span>
      </div>

      {/* Sticky Header Container */}
      <div className="sticky top-0 z-50 flex flex-col w-full">
        {/* Main Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm border-b border-brand-beige shadow-sm relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
                <img src="/logo-gold.png" alt="I.RK Logo" className="h-28 md:h-40 w-auto transition-all duration-300" />
                <span className="text-2xl text-black tracking-widest uppercase font-bold pt-2">MAID SERVICE</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${isActive && !item.path.includes('#') ? 'text-brand-gold font-semibold' : 'text-brand-charcoal hover:text-brand-navy'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/contact">
                  <button className="bg-brand-navy text-white px-5 py-2 rounded hover:bg-[#132c46] transition text-sm font-semibold">
                    Contact Us
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-brand-navy p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium ${isActive && !item.path.includes('#') ? 'text-brand-gold bg-brand-cream' : 'text-brand-charcoal'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center mt-4 bg-brand-navy text-white px-5 py-3 rounded font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  to="/contact?type=helper"
                  onClick={closeMenu}
                  className="block w-full text-center mt-2 border border-brand-gold text-brand-gold px-5 py-3 rounded font-semibold"
                >
                  Join as a Helper
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Secondary Navigation Bar (Hidden on Services page) */}
        {showSecondaryNav && (
          <div className="bg-white border-b border-brand-beige shadow-md relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-3 relative flex flex-col md:flex-row items-center justify-center">

              {/* Scrollable Nav Buttons - Centered */}
              <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide justify-center">
                {serviceNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleServiceNavClick(item.id)}
                    className="px-6 py-2 rounded-full bg-brand-cream text-brand-navy font-medium text-sm hover:bg-brand-navy hover:text-white transition-colors whitespace-nowrap border border-brand-beige shadow-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-105 z-40 flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline font-semibold">Chat with Us</span>
      </a>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-xl font-bold mb-4">I.RK</h3>
              <p className="text-brand-beige text-sm leading-relaxed mb-4">
                Connecting compassionate Indonesian helpers with Singapore families. Built on trust, transparency, and heart.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-brand-gold hover:text-white transition"><Facebook size={20} /></a>
                <a href="#" className="text-brand-gold hover:text-white transition"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-gold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-brand-beige">
                <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
                <li><Link to="/helpers" className="hover:text-white">Our Helpers</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white">Process</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-gold">Contact</h4>
              <ul className="space-y-2 text-sm text-brand-beige">
                <li className="flex items-center gap-2"><Phone size={16} /> +65 1234 5678</li>
                <li className="flex items-center gap-2"><MessageCircle size={16} /> WhatsApp Us</li>
                <li>123 Orchard Road, #05-01<br />Singapore 238888</li>
                <li className="text-xs mt-2 opacity-75">Mon-Sat: 10am - 7pm</li>
              </ul>
            </div>

            <div className="bg-[#132c46] p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Heart className="text-brand-gold" size={20} fill="#D4A574" />
                Are you a Helper?
              </h4>
              <p className="text-sm font-semibold text-brand-gold mb-1 italic">Apakah Anda seorang Pembantu?</p>
              <p className="text-sm text-brand-beige mb-2">
                We are looking for compassionate helpers. No agency fees for helpers.
              </p>
              <p className="text-sm text-brand-beige mb-4 italic opacity-80">
                Kami mencari pembantu yang penuh kasih. Tidak ada biaya agen untuk pembantu.
              </p>
              <Link to="/contact?type=helper">
                <button className="w-full bg-brand-gold text-brand-navy font-bold py-2 rounded hover:bg-white transition flex flex-col items-center justify-center">
                  <span>Join Our Family</span>
                  <span className="text-xs font-normal">Bergabunglah dengan Keluarga Kami</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="border-t border-[#2a4d75] pt-6 text-center text-sm text-brand-beige">
            <p>&copy; {new Date().getFullYear()} I.RK Pte Ltd. All rights reserved. | Licence No: 12C3456</p>
            <p className="mt-3 text-xs opacity-60">
              Website by{' '}
              <a
                href="https://wa.me/6588992295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white transition-colors font-medium"
              >
                Centrovert
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};