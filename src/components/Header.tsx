import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  activeRoute?: string;
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activeRoute = '', sticky = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const GOOGLE_FORM_LINK = 'https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`${
        sticky ? 'sticky top-0 z-50' : ''
      } bg-white shadow-md transition-all duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-cyan-600">
          New Era
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                activeRoute === link.href
                  ? 'text-cyan-600'
                  : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeRoute === link.href
                      ? 'text-cyan-600'
                      : 'text-gray-700 hover:text-cyan-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
