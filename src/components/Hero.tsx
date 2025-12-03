import { motion } from 'framer-motion';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export const Hero: React.FC<HeroProps> = ({
  headline = 'New Era Infotech — Modern IT solutions, built for growth',
  subheadline = 'End‑to‑end software, web & mobile development, cloud solutions, and managed services. 2 years of real-world delivery across multiple projects and clients.',
  primaryCTA = {
    label: 'Contact Us',
    href: 'https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM',
  },
  secondaryCTA = {
    label: 'Our Services',
    href: '#services',
  },
}) => {
  return (
    <section className="min-h-[72vh] flex items-center bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -right-40 w-80 h-80 bg-cyan-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 left-40 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={primaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              {primaryCTA.label}
            </a>
            <a href={secondaryCTA.href} className="btn-secondary text-center">
              {secondaryCTA.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
