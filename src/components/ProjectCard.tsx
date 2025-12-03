import { motion } from 'framer-motion';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'cloud' | 'design';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  category,
}) => {
  const categoryColors: Record<string, string> = {
    web: 'bg-blue-100 text-blue-700',
    mobile: 'bg-purple-100 text-purple-700',
    cloud: 'bg-orange-100 text-orange-700',
    design: 'bg-pink-100 text-pink-700',
  };

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-200 to-blue-200" />
      )}
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
