import { motion } from 'framer-motion';

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  technologies?: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  technologies = [],
}) => {
  return (
    <motion.div
      className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-sm mb-6">{description}</p>
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <a
        href="https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
      >
        Get Quote →
      </a>
    </motion.div>
  );
};

export const ServicesList: React.FC<{ services: ServiceCardProps[] }> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  );
};
