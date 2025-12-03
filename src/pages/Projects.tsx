import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import type { ProjectCardProps } from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { useState } from 'react';

const allProjects: ProjectCardProps[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
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
  {
    id: '4',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization for enterprise clients.',
    tags: ['Next.js', 'TypeScript', 'D3.js'],
    category: 'web',
  },
  {
    id: '5',
    title: 'Healthcare Mobile App',
    description: 'HIPAA-compliant mobile app for patient management and telemedicine.',
    tags: ['Flutter', 'Firebase', 'Security'],
    category: 'mobile',
  },
  {
    id: '6',
    title: 'Microservices Architecture',
    description: 'Containerized microservices with Kubernetes orchestration and CI/CD pipelines.',
    tags: ['Docker', 'Kubernetes', 'Jenkins'],
    category: 'cloud',
  },
  {
    id: '7',
    title: 'Brand Redesign Portal',
    description: 'Modern UI/UX redesign improving user engagement by 45%.',
    tags: ['Figma', 'React', 'Tailwind'],
    category: 'design',
  },
  {
    id: '8',
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search and virtual tours.',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    category: 'web',
  },
  {
    id: '9',
    title: 'IoT Device Management',
    description: 'Platform for managing and monitoring IoT devices at scale.',
    tags: ['AWS IoT', 'Python', 'Real-time'],
    category: 'cloud',
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'cloud' | 'design'>('all');

  const filteredProjects =
    filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects & Portfolio | New Era Infotech</title>
        <meta
          name="description"
          content="View our portfolio of successful projects across web, mobile, cloud, and design."
        />
      </Helmet>

      <Header activeRoute="/projects" sticky />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our recent projects and successful deliverables across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {(['all', 'web', 'mobile', 'cloud', 'design'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Interested in a similar project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with our proven expertise.
          </p>
          <a
            href="https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};
