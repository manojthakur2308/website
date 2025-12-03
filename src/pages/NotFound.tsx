import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
  return (
    <>
      <Header sticky />

      <section className="min-h-[60vh] flex items-center bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-extrabold text-cyan-600 mb-4">404</h1>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <Link to="/" className="btn-primary">
              Go Back Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};
