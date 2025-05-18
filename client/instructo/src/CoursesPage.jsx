import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CourseCard from './CourseCard';
import CourseData from './CourseData';
import { Rocket, BookOpen, Users, Zap, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const tabOptions = ["All Courses", "Active", "Complete", "Favourite"];

const CoursesPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Title & Tabs */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-center mb-6">Explore Our Courses</h1>
          <div className="flex justify-center gap-6 text-lg font-medium text-gray-400">
            {tabOptions.map((tab, index) => (
              <button
                key={index}
                className={`transition duration-300 px-3 py-1 rounded-md ${
                  index === 0 ? 'text-white border-b-2 border-purple-500' : 'hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CourseData.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <div className="bg-black/30 backdrop-blur-md border border-purple-800 shadow-lg p-6 rounded-2xl transition transform hover:scale-[1.02] hover:shadow-purple-500/40 duration-300">
                <CourseCard course={course} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Courses */}
      <div className="mt-20 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-semibold mb-6 text-white max-w-6xl mx-auto">✨ Featured Courses</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { 
        title: 'Multi Editing Text In Figma', 
        tutor: 'Mr. Evan Black', 
        email: 'evanblack_04@lea.com',
        icon: <Rocket className="w-6 h-6 text-purple-400 mb-2" /> 
      },
      { 
        title: 'Advance Prototyping', 
        tutor: 'Miss. Jane Cooper', 
        email: 'jane_coop12@lea.com',
        icon: <BookOpen className="w-6 h-6 text-blue-400 mb-2" /> 
      },
      { 
        title: 'UI Animation Interactions', 
        tutor: 'Miss. Stevi Jessi', 
        email: 'stevi_jessi10@lea.com',
        icon: <Users className="w-6 h-6 text-green-400 mb-2" /> 
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-black/40 backdrop-blur-xl border border-purple-800 p-6 rounded-xl shadow-md"
      >
        {item.icon}
        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-purple-300">{item.tutor}</p>
        <p className="text-sm text-purple-400 mt-1">{item.email}</p>
      </motion.div>
    ))}
  </div>
</div>

      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
