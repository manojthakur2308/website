import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const GOOGLE_FORM_LINK = 'https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM';

  return (
    <>
      <Helmet>
        <title>Contact Us | New Era Infotech</title>
        <meta
          name="description"
          content="Get in touch with New Era Infotech. Let's discuss your project and how we can help."
        />
      </Helmet>

      <Header activeRoute="/contact" sticky />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Want to work together? Tell us about your project and let's discuss how we can help
              transform your business with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '📍',
              title: 'Address',
              details: ['New Era Infotech', 'Tech Hub, City', 'Country'],
            },
            {
              icon: '📧',
              title: 'Email',
              details: ['info@newerait.com', 'support@newerait.com'],
            },
            {
              icon: '📱',
              title: 'Phone',
              details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <div className="space-y-2">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-700">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-12 rounded-xl text-center"
        >
          <h2 className="text-4xl font-extrabold mb-6">Send us a message</h2>
          <p className="text-lg mb-8 opacity-90">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            Open Contact Form
          </a>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200"
        >
          <p className="text-sm text-gray-600 text-center">
            <strong>Privacy Notice:</strong> By submitting a form, you consent to sharing your data with
            New Era Infotech and Google Forms. We respect your privacy and will only use your information
            to respond to your inquiry. Please see our{' '}
            <a href="/privacy-policy" className="text-cyan-600 hover:underline">
              Privacy Policy
            </a>{' '}
            for more details.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity and scope. We usually provide estimates after understanding your requirements. Simple projects may take 2-4 weeks, while complex ones could take 3-6 months.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes, we offer comprehensive maintenance and support packages with SLA guarantees. This includes bug fixes, performance monitoring, and feature updates.',
              },
              {
                q: 'What technologies do you specialize in?',
                a: 'We specialize in React, Node.js, Flutter, React Native, AWS, and modern DevOps practices. We also adapt to your technology preferences.',
              },
              {
                q: 'How do you ensure code quality?',
                a: 'We follow best practices including code reviews, automated testing, continuous integration, and comprehensive QA testing before deployment.',
              },
              {
                q: 'Can you work on existing projects?',
                a: 'Absolutely! We can take over existing projects, refactor code, add new features, or fix bugs. Our team can quickly understand and improve your codebase.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer flexible pricing models: fixed-price for well-defined projects, hourly rates for ongoing work, and retainer packages for continuous support.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
