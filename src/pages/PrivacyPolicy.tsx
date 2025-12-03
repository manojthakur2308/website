import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | New Era Infotech</title>
        <meta name="description" content="Privacy Policy for New Era Infotech website and services." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header activeRoute="" sticky />

      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-700">
              Effective Date: January 1, 2025 | Last Updated: December 3, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            New Era Infotech ("we," "us," "our," or "Company") operates the website and services
            available at www.newerait.com (the "Website"). This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our Website and use our
            services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with our policies and
            practices, please do not use our Website. Your use of our Website indicates your acceptance
            of this Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Contact Information:</strong> When you submit our contact form, we collect your
              name, email address, phone number, company name, and message.
            </li>
            <li>
              <strong>Job Application Information:</strong> When you apply for a position, we collect
              resume/CV, work experience, educational background, and cover letter.
            </li>
            <li>
              <strong>Service Request Information:</strong> Details about your project requirements,
              timeline, and budget.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2.2 Information Collected Automatically</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Analytics Data:</strong> We use Google Analytics to track website usage, including
              pages visited, time spent, and user interactions.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your browsing
              experience. You can control cookie preferences through your browser settings.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type, operating system, and
              referring URLs.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Use of Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Process job applications and contact applicants</li>
            <li>Improve our Website and services based on user feedback</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Analyze website usage and user behavior through analytics</li>
            <li>Comply with legal obligations and prevent fraud</li>
            <li>Protect the rights, property, and safety of our Company, users, and public</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">4.1 Google Forms</h3>
          <p>
            Contact and job application forms are hosted by Google Forms. By submitting information
            through these forms, you acknowledge that your data is collected and stored by Google. Please
            review Google's Privacy Policy at{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">4.2 Google Analytics</h3>
          <p>
            We use Google Analytics to analyze website traffic. Google Analytics collects data about your
            browsing behavior, device information, and IP address. You can opt-out by installing the
            Google Analytics Opt-Out Browser Add-on.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">4.3 Other Third Parties</h3>
          <p>
            We do not sell or share your personal information with third parties except as necessary to
            provide our services or as required by law.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However, no
            data transmission over the internet or electronic storage method is 100% secure. While we
            strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and
            comply with legal obligations. You may request deletion of your information at any time by
            contacting us at info@newerait.com.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for data processing</li>
            <li>Data portability (receive your data in a standard format)</li>
            <li>Lodge complaints with data protection authorities</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
          <p>
            Our Website uses cookies to enhance your experience. Types of cookies include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for basic Website functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Track usage patterns through Google Analytics
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and preferences
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect Website
            functionality.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
          <p>
            Our Website is not intended for individuals under 18 years of age. We do not knowingly
            collect personal information from children. If we become aware that we have collected
            information from a child, we will delete such information immediately.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Changes will be effective
            immediately upon posting to the Website. Your continued use of the Website after changes
            constitutes your acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us
            at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <p className="font-semibold text-gray-900">New Era Infotech</p>
            <p className="text-gray-700">Email: info@newerait.com</p>
            <p className="text-gray-700">Address: Tech Hub, City, Country</p>
            <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">12. Additional Information</h2>
          <p>
            <strong>Consent for Marketing:</strong> By providing your email address, you may receive
            marketing communications from New Era Infotech. You can opt-out at any time by clicking the
            unsubscribe link in our emails.
          </p>
          <p className="mt-4">
            <strong>International Data Transfers:</strong> If you are located outside the country where
            our servers are located, your information may be transferred to and processed in other
            countries. By using our Website, you consent to such transfers.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};
