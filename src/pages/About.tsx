import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About New Era Infotech — 2 Years of Innovation</title>
        <meta
          name="description"
          content="Learn about New Era Infotech's mission, vision, and 2-year journey in delivering IT solutions."
        />
      </Helmet>

      <Header activeRoute="/about" sticky />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              About New Era Infotech
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Founded with a vision to simplify technology for businesses, New Era Infotech has spent the
              last 2 years delivering reliable IT solutions to startups and SMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative, scalable, and cost-effective IT solutions that
                drive growth and create lasting value. We are committed to delivering excellence through
                transparent communication, skilled expertise, and unwavering dedication to our clients'
                success.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the trusted partner of choice for businesses seeking reliable, innovative IT
                solutions. We envision a future where technology is accessible, affordable, and
                transformative for businesses of all sizes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Founder & CEO',
                role: 'Visionary Leader',
                bio: 'Passionate about technology and business innovation with 10+ years of industry experience.',
              },
              {
                name: 'Lead Developer',
                role: 'Technical Expert',
                bio: 'Full-stack developer specializing in scalable architecture and modern frameworks.',
              },
              {
                name: 'Project Manager',
                role: 'Operations Lead',
                bio: 'Ensures seamless project execution and exceptional client satisfaction.',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2023', title: 'Founded', desc: 'New Era Infotech was established with a mission to deliver quality IT solutions.' },
              {
                year: '2023',
                title: 'First Major Client',
                desc: 'Completed our first enterprise project, establishing credibility in the market.',
              },
              { year: '2024', title: 'Team Growth', desc: 'Expanded our team with specialized developers and designers.' },
              { year: '2024', title: 'Service Expansion', desc: 'Launched cloud and DevOps services alongside web development.' },
              {
                year: '2025',
                title: 'Milestone Achievement',
                desc: '20+ successful projects and growing client base across multiple industries.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 pb-8 border-l-2 border-cyan-600 pl-8 relative"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 bg-cyan-600 rounded-full" />
                <div className="flex-1">
                  <p className="text-cyan-600 font-bold">{item.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🎯', title: 'Excellence', desc: 'Commitment to highest standards in every project.' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent communication and honest dealings.' },
              { icon: '🚀', title: 'Innovation', desc: 'Continuous learning and adoption of latest technologies.' },
              { icon: '💡', title: 'Quality', desc: 'Delivering robust, tested, and scalable solutions.' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};
