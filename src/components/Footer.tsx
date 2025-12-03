import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const GOOGLE_FORM_LINK = 'https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM';

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-cyan-500 mb-2">New Era Infotech</h3>
            <p className="text-sm text-gray-400">
              Modern IT solutions, built for growth. End-to-end software development and consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-500 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Address:</strong><br />
                New Era Infotech<br />
                Tech Hub, City
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@newerait.com" className="hover:text-cyan-500">
                  info@newerait.com
                </a>
              </p>
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-cyan-500 hover:text-cyan-400 font-medium"
              >
                Contact Form →
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2025 New Era Infotech. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-cyan-500 transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-cyan-500 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-cyan-500 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-cyan-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
