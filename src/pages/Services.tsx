import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServicesList } from '../components/ServiceCard';
import type { ServiceCardProps } from '../components/ServiceCard';
import { motion } from 'framer-motion';

const servicesDetail: ServiceCardProps[] = [
  {
    icon: '🌐',
    title: 'Custom Web Development',
    description:
      'End-to-end web solutions using modern frameworks. We build responsive, fast, and user-friendly web applications tailored to your business needs.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'REST', 'GraphQL'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications for iOS and Android. From concept to deployment, we handle the complete development cycle.',
    technologies: ['Flutter', 'React Native', 'Firebase', 'Push Notifications'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Scalable cloud infrastructure, containerization, and continuous deployment pipelines. We leverage AWS, GCP, and Kubernetes for optimal performance.',
    technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design that converts. We create intuitive, beautiful interfaces that enhance user experience and drive engagement.',
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    icon: '✅',
    title: 'QA & Testing',
    description:
      'Comprehensive testing strategies ensuring quality and reliability. Automated, manual, and performance testing for robust applications.',
    technologies: ['Jest', 'Selenium', 'Cypress', 'Load Testing', 'Accessibility'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description:
      'Ongoing support and maintenance with SLA guarantees. Bug fixes, feature updates, and proactive monitoring for uninterrupted service.',
    technologies: ['Monitoring', 'Log Management', 'Performance Tuning'],
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services | New Era Infotech — Web, Mobile, Cloud Solutions</title>
        <meta
          name="description"
          content="Explore our IT services: web development, mobile apps, cloud & DevOps, UI/UX design, QA & testing, and 24/7 support."
        />
      </Helmet>

      <Header activeRoute="/services" sticky />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ServicesList services={servicesDetail} />
        </motion.div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-700">How we deliver exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', desc: 'Understand your requirements and business goals' },
              { number: '02', title: 'Planning', desc: 'Create detailed project roadmap and timeline' },
              { number: '03', title: 'Development', desc: 'Build with cutting-edge technologies' },
              { number: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl font-extrabold text-cyan-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which services best fit your needs and create a custom solution for your business.
          </p>
          <a
            href="https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};
