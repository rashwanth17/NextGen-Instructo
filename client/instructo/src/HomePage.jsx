import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, BookOpen, Users, Zap, ChevronRight } from 'lucide-react';
import { Button } from "./Button";
import Header from './Header'; // Import Header
import Footer from './Footer'; // Import Footer
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
  const { title, description, icon } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
    >
      {icon}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Button 
        variant="outline"
        className="text-purple-300 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 w-full flex items-center justify-between px-4 py-2"
      >
        Learn More <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
};

const HomePage = () => {
  const leadershipRef = useRef(null);
  const isLeadershipInView = useInView(leadershipRef, { once: true });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Keep Learning On Track
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Elevate your management skills with our cutting-edge courses. Join Our Courses for Comprehensive Learning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          >
             <li>
  <Link to="/courses" className="hover:text-purple-400 transition">
    <Button
      variant="default"
      size="lg"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg px-8 py-3"
    >
      Start Now
    </Button>
  </Link>
</li>
          </motion.div>
        </div>
      </main>

      {/* Featured Courses Section (Bottom) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CourseCard
            title="Essentials of Leadership"
            description="Learn the fundamentals of effective leadership and develop your managerial skills."
            icon={<Rocket className="w-6 h-6 text-purple-400 mb-2" />}
          />
          <CourseCard
            title="Management Mastery"
            description="Master the fundamentals of effective management."
            icon={<BookOpen className="w-6 h-6 text-blue-400 mb-2" />}
          />
          <CourseCard
            title="Strategic Planning"
            description="Learn strategic planning skills."
            icon={<Users className="w-6 h-6 text-green-400 mb-2" />}
          />
        </div>
      </section>

      {/* Advanced Leadership Section */}
      <section ref={leadershipRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Advanced Leadership Strategies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore case studies and real-world examples that illustrate the
              application of advanced leadership strategies in various industries.
              Enhance your decision-making skills, refine your communication
              techniques, and develop the ability to influence and motivate
              others.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isLeadershipInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Adaptive Leadership Framework Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Adaptive Leadership Framework</h3>
              </div>
              <p className="text-gray-400">
                Learn to navigate and lead through complex and rapidly changing
                environments.
              </p>
            </motion.div>

            {/* Transformational Leadership Techniques Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  Transformational Leadership Techniques
                </h3>
              </div>
              <p className="text-gray-400">
                Discover powerful strategies to inspire and drive positive
                organizational change.
              </p>
            </motion.div>

            {/* Influential Communication Mastery Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Influential Communication Mastery</h3>
              </div>
              <p className="text-gray-400">
                Develop advanced communication skills to effectively engage and
                influence stakeholders.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
