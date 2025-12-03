import { motion } from 'framer-motion';
import { useState } from 'react';

export interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const TestimonialCarousel: React.FC<{ testimonials: TestimonialProps[] }> = ({
  testimonials,
}) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[current].quote}"</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full" />
          <div>
            <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
            <p className="text-sm text-gray-600">
              {testimonials[current].role} at {testimonials[current].company}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          ←
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? 'bg-cyan-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
};
