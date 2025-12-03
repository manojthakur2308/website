import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { ServicesList } from '../components/ServiceCard';
import type { ServiceCardProps } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import type { ProjectCardProps } from '../components/ProjectCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import type { TestimonialProps } from '../components/TestimonialCarousel';
import { Stats } from '../components/Stats';
import type { StatProps } from '../components/Stats';
import { motion } from 'framer-motion';

const services: ServiceCardProps[] = [
  {
    icon: '🌐',
    title: 'Custom Web Development',
    description: 'React, Next.js, Node.js, Express, REST & GraphQL APIs.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Flutter & React Native apps, end-to-end deployment.',
    technologies: ['Flutter', 'React Native', 'Firebase'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS/GCP, CI/CD, containerization, monitoring.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered interfaces, Figma prototypes.',
    technologies: ['Figma', 'UI Design', 'UX Research'],
  },
  {
    icon: '✅',
    title: 'QA & Testing',
    description: 'Automated tests, manual QA, performance testing.',
    technologies: ['Jest', 'Selenium', 'Cypress'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: 'SLA-based maintenance, bug fixes, feature updates.',
    technologies: ['Support', 'DevOps', 'Monitoring'],
  },
];

const projects: ProjectCardProps[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
  },
  {
    id: '2',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans and social features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Scalable AWS infrastructure with auto-scaling and comprehensive monitoring.',
    tags: ['AWS', 'Terraform', 'CloudWatch'],
    category: 'cloud',
  },
];

const testimonials: TestimonialProps[] = [
  {
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'Tech Startup Inc',
    quote: 'New Era Infotech delivered our project on time and exceeded expectations. Their team is highly skilled and professional.',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Global Solutions Ltd',
    quote: 'Excellent communication and transparent pricing. They understood our requirements perfectly and delivered quality work.',
  },
  {
    name: 'Amit Patel',
    role: 'CEO',
    company: 'InnovateTech',
    quote: 'One of the best agencies we have worked with. Highly recommended for any software development needs.',
  },
];

const stats: StatProps[] = [
  { number: '2+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Satisfied Clients' },
];

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>New Era Infotech — IT Solutions | Web, Mobile, Cloud</title>
        <meta
          name="description"
          content="New Era Infotech provides end-to-end IT solutions: web & mobile development, cloud & DevOps, UI/UX and support. 2 years experience, multiple projects and clients."
        />
        <meta property="og:title" content="New Era Infotech — Modern IT solutions" />
        <meta
          property="og:description"
          content="End-to-end software development, web, mobile, and cloud solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header activeRoute="/" sticky />
      <Hero />

      {/* What We Do */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>
        <ServicesList services={services} />
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We combine expertise, reliability, and innovation to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Clear costs, no hidden fees' },
              { icon: '👥', title: 'Skilled Team', desc: '2+ years of proven expertise' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Showcase of our recent work and successful deliverables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <a href="/projects" className="btn-primary">
            View All Projects →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Stats stats={stats} />
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to start?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with technology.
          </p>
          <a
            href="https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};
