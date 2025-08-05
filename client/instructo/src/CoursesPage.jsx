import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CourseCard from './CourseCard';
import { Rocket, BookOpen, Users, Zap, X, Plus } from 'lucide-react';
import { useAuth } from './App';
import axios from 'axios';

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

// const tabOptions = ["All Courses", "Active", "Complete", "Favourite"];
const tabOptions = [""];

const CoursesPage = () => {
  const { role, email } = useAuth();
  const normalizedRole = role?.toLowerCase() || "";
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: '',
    instructor: '',
    rating: 0,
    price: '',
    description: '',
    longDescription: '',
    modules: [{ title: '' }],
    videos: [{ id: '', title: '' }],
    imageUrl: ''
  });

  const [fullCourses, setFullCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from the backend
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://nextgen-instructo-1.onrender.com/api/fetchCourses');
      setFullCourses(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    try {
      if (!newCourse.name || !newCourse.description || !newCourse.imageUrl) {
        alert('Please fill in all required fields');
        return;
      }

      await axios.post('http://localhost:3001/api/courses', {
        course: newCourse
      });

      alert('Course added successfully!');
      setShowAddCourseModal(false);
      setNewCourse({
        name: '',
        instructor: '',
        rating: 0,
        price: '',
        description: '',
        longDescription: '',
        modules: [{ title: '' }],
        videos: [{ id: '', title: '' }],
        imageUrl: ''
      });

      // Refresh the course list
      fetchCourses();
    } catch (error) {
      console.error('Error adding course:', error);
      alert(
        error.response?.data?.message ||
        error.message ||
        'Failed to add course'
      );
    }
  };

  const addModule = () => {
    setNewCourse({
      ...newCourse,
      modules: [...newCourse.modules, { title: '' }]
    });
  };

  const addVideo = () => {
    setNewCourse({
      ...newCourse,
      videos: [...newCourse.videos, { id: '', title: '' }]
    });
  };

  const updateModule = (index, value) => {
    const updatedModules = [...newCourse.modules];
    updatedModules[index].title = value;
    setNewCourse({
      ...newCourse,
      modules: updatedModules
    });
  };

  const updateVideo = (index, field, value) => {
    const updatedVideos = [...newCourse.videos];
    updatedVideos[index][field] = value;
    setNewCourse({
      ...newCourse,
      videos: updatedVideos
    });
  };

  const filteredCourses = fullCourses.filter((course) => {
    if (normalizedRole === "mentor") {
      return course.createdBy === email;
    }
    return true;
  });

  const featuredList = normalizedRole === "mentor"
    ? [
        { title: 'Student: Emily Rhodes', tutor: 'emily_rhodes23@lea.com', email: 'UI/UX Learner', icon: <Users className="w-6 h-6 text-yellow-400 mb-2" /> },
        { title: 'Student: Kai Patel', tutor: 'kai_1201@lea.com', email: 'React Enthusiast', icon: <Rocket className="w-6 h-6 text-green-400 mb-2" /> },
        { title: 'Student: Ananya Roy', tutor: 'ananya.roy@lea.com', email: 'Learning Backend Dev', icon: <Zap className="w-6 h-6 text-pink-400 mb-2" /> },
      ]
    : [
        { title: 'Multi Editing Text In Figma', tutor: 'Mr. Evan Black', email: 'evanblack_04@lea.com', icon: <Rocket className="w-6 h-6 text-purple-400 mb-2" /> },
        { title: 'Advance Prototyping', tutor: 'Miss. Jane Cooper', email: 'jane_coop12@lea.com', icon: <BookOpen className="w-6 h-6 text-blue-400 mb-2" /> },
        { title: 'UI Animation Interactions', tutor: 'Miss. Stevi Jessi', email: 'stevi_jessi10@lea.com', icon: <Users className="w-6 h-6 text-green-400 mb-2" /> },
      ];

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col text-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-lg">Loading courses...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col text-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-red-400">
            <p className="text-xl">Error loading courses:</p>
            <p className="mt-2">{error}</p>
            <button 
              onClick={fetchCourses}
              className="mt-4 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Title & Tabs */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-center mb-6">Explore Our Courses</h1>
          {/* <div className="flex justify-center gap-6 text-lg font-medium text-gray-400">
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
          </div> */}

          {normalizedRole === "mentor" && (
            <div className="text-right mt-6">
              <button
                onClick={() => setShowAddCourseModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
              >
                + Add New Course
              </button>
            </div>
          )}
        </div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course) => (
            <motion.div key={course._id} variants={cardVariants}>
              <div className="bg-black/30 backdrop-blur-md border border-purple-800 shadow-lg p-6 rounded-2xl transition transform hover:scale-[1.02] hover:shadow-purple-500/40 duration-300">
                <CourseCard course={course} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Section */}
        <div className="mt-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-white max-w-6xl mx-auto">
            {normalizedRole === "mentor" ? "📚 Featured Students" : "✨ Featured Teachers"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredList.map((item, index) => (
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

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add New Course</h2>
              <button onClick={() => setShowAddCourseModal(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Course Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                    value={newCourse.name}
                    onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Instructor</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                    value={newCourse.instructor}
                    onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Rating</label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                    value={newCourse.rating || 0}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      setNewCourse({
                        ...newCourse,
                        rating: isNaN(value) ? 0 : Math.min(5, Math.max(0, value))
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Short Description</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Long Description</label>
                <textarea
                  className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700 min-h-[100px]"
                  value={newCourse.longDescription}
                  onChange={(e) => setNewCourse({...newCourse, longDescription: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                  value={newCourse.imageUrl}
                  onChange={(e) => setNewCourse({...newCourse, imageUrl: e.target.value})}
                />
              </div>

              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Modules</h3>
                  <button 
                    onClick={addModule}
                    className="text-purple-400 hover:text-purple-300 flex items-center text-sm"
                  >
                    <Plus size={16} className="mr-1" /> Add Module
                  </button>
                </div>
                {newCourse.modules.map((module, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <span className="text-gray-400 mr-2 w-6">{index + 1}.</span>
                    <input
                      type="text"
                      className="flex-1 bg-gray-800 rounded-md px-3 py-2 border border-gray-700"
                      value={module.title}
                      onChange={(e) => updateModule(index, e.target.value)}
                      placeholder={`Module ${index + 1} title`}
                    />
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Videos</h3>
                  <button 
                    onClick={addVideo}
                    className="text-purple-400 hover:text-purple-300 flex items-center text-sm"
                  >
                    <Plus size={16} className="mr-1" /> Add Video
                  </button>
                </div>
                {newCourse.videos.map((video, index) => (
                  <div key={index} className="mb-4 p-3 bg-gray-800 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Video ID</label>
                        <input
                          type="text"
                          className="w-full bg-gray-700 rounded-md px-3 py-2 border border-gray-600"
                          value={video.id}
                          onChange={(e) => updateVideo(index, 'id', e.target.value)}
                          placeholder="YouTube ID or URL"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Video Title</label>
                        <input
                          type="text"
                          className="w-full bg-gray-700 rounded-md px-3 py-2 border border-gray-600"
                          value={video.title}
                          onChange={(e) => updateVideo(index, 'title', e.target.value)}
                          placeholder="Video title"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowAddCourseModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCourse}
                  className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition"
                >
                  Add Course
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CoursesPage;