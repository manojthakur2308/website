import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { JobCard } from '../components/JobCard';
import type { JobCardProps } from '../components/JobCard';
import { motion } from 'framer-motion';

const jobs: JobCardProps[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-4 years',
    requirements: [
      'Proficiency in React, TypeScript, and modern CSS frameworks',
      'Experience with responsive design and accessibility standards',
      'Knowledge of state management (Redux, Zustand)',
      'Strong problem-solving and communication skills',
      'Experience with Git and agile development',
    ],
  },
  {
    id: '2',
    title: 'Backend Developer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-5 years',
    requirements: [
      'Strong proficiency in Node.js and Express or similar frameworks',
      'Database design experience (SQL & NoSQL)',
      'REST API and GraphQL implementation',
      'Experience with Docker and containerization',
      'Knowledge of cloud platforms (AWS/GCP)',
    ],
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-6 years',
    requirements: [
      'Full-stack experience with React and Node.js',
      'Database design and optimization skills',
      'Understanding of DevOps and CI/CD',
      'Experience with Next.js or similar frameworks',
      'Passion for code quality and testing',
    ],
  },
  {
    id: '4',
    title: 'Mobile App Developer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-4 years',
    requirements: [
      'Experience with Flutter or React Native',
      'Understanding of mobile app architecture',
      'API integration and state management',
      'Experience with Firebase or similar backends',
      'Knowledge of app store deployment',
    ],
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-4 years',
    requirements: [
      'Experience with AWS, GCP, or Azure',
      'Docker and Kubernetes expertise',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Monitoring and logging solutions',
    ],
  },
  {
    id: '6',
    title: 'UI/UX Designer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-4 years',
    requirements: [
      'Proficiency in Figma and design tools',
      'User research and usability testing',
      'Responsive and mobile design expertise',
      'Prototyping and user flow design',
      'Strong portfolio demonstrating design thinking',
    ],
  },
];

export const Careers: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Join New Era Infotech</title>
        <meta
          name="description"
          content="Join our growing team! Explore career opportunities in web, mobile, cloud development and design."
        />
      </Helmet>

      <Header activeRoute="/careers" sticky />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Join New Era Infotech
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are growing — join our 2-year-young team building impactful products and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Join Us?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: '📚',
              title: 'Learning Budget',
              desc: 'Annual budget for courses, certifications, and conferences',
            },
            {
              icon: '⏰',
              title: 'Flexible Hours',
              desc: 'Work-life balance with flexible working hours and remote options',
            },
            {
              icon: '🌍',
              title: 'Remote-First',
              desc: 'Work from anywhere with a strong collaborative culture',
            },
            {
              icon: '🚀',
              title: 'Career Growth',
              desc: 'Mentorship and clear career progression opportunities',
              },
            {
              icon: '💰',
              title: 'Competitive Pay',
              desc: 'Competitive salaries and performance bonuses',
            },
            {
              icon: '🤝',
              title: 'Team Culture',
              desc: 'Inclusive, supportive, and innovative team environment',
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-700">We're looking for talented individuals to join our team</p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <JobCard {...job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Application Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Apply', desc: 'Submit your application through our form' },
            { step: '02', title: 'Review', desc: 'We review your qualifications and experience' },
            { step: '03', title: 'Interview', desc: 'Technical and cultural fit interviews' },
            { step: '04', title: 'Offer', desc: 'Receive and accept your offer' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-cyan-600 mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};
