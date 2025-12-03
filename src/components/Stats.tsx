import { motion } from 'framer-motion';

export interface StatProps {
  number: string;
  label: string;
}

export const Stats: React.FC<{ stats: StatProps[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl font-extrabold text-cyan-600 mb-2">{stat.number}</div>
          <p className="text-gray-700 font-semibold">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};
