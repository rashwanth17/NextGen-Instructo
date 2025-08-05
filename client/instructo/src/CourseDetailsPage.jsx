import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CourseOverview from './CourseOverview';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CourseRatingsAndReviews from './CourseRatingsAndReviews';
import 'react-circular-progressbar/dist/styles.css';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainVideoId, setMainVideoId] = useState('');
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://nextgen-instructo-1.onrender.com/api/courses/${id}`);
        setCourse(response.data);
        
        // Set the first video ID if videos exist
        if (response.data.videos && response.data.videos.length > 0) {
          const firstVideo = response.data.videos[0];
          // Extract YouTube ID whether it's a full URL or just an ID
          const videoId = firstVideo.id.includes('youtube.com') 
            ? firstVideo.id.split('v=')[1].split('&')[0]
            : firstVideo.id;
          setMainVideoId(videoId);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const totalModules = course?.modules?.length || 0;
  const completedCount = completedModules.length;
  const progress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

  const handlePlayVideo = (videoId) => {
    // Extract YouTube ID whether it's a full URL or just an ID
    const extractedId = videoId.includes('youtube.com') 
      ? videoId.split('v=')[1].split('&')[0]
      : videoId;
    setMainVideoId(extractedId);
  };

  const handleCompleteModule = (moduleTitle) => {
    if (!completedModules.includes(moduleTitle)) {
      setCompletedModules([...completedModules, moduleTitle]);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6 flex items-center justify-center">
        <div className="text-center text-red-400">
          <p className="text-xl">Error loading course:</p>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6 flex items-center justify-center">
        <div className="text-center text-red-600">Course not found.</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6">
      {/* Course Header with Image */}
      <div className="w-full max-w-7xl mx-auto mb-10">
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-purple-800/30 bg-[#111827] h-64">
          <img 
            src={course.imageUrl} 
            alt={course.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Course+Image';
            }}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4 px-6">
            <h2 className="text-2xl font-semibold">{course.name}</h2>
            <p className="text-gray-400">{course.description}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 mr-1">★</span>
              <span>{course.rating || 'No rating'}</span>
              <span className="mx-2">•</span>
              <span>{course.price || 'Free'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Section (only if videos exist) */}
      {course.videos && course.videos.length > 0 && (
        <div className="w-full max-w-7xl mx-auto mb-10 relative rounded-xl overflow-hidden shadow-2xl border border-purple-800/30 bg-[#111827]">
          <iframe
            className="w-full h-[420px]"
            src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1`}
            title={course.videos[0]?.title || 'Course Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Content and sidebar layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: Course Info */}
        <div className="space-y-6">
          <div className="bg-[#1f2937] bg-opacity-70 p-6 rounded-2xl shadow-lg border border-purple-800/20">
            <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
            <CourseOverview description={course.longDescription || course.description} />
          </div>

          <CourseRatingsAndReviews courseId={course._id} />
        </div>

        {/* Right: Course Content */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 max-h-[800px] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Course Content</h2>
            <div className="w-16 h-16 relative">
              <CircularProgressbar
                value={progress}
                text={`${Math.round(progress)}%`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: '#a855f7',
                  trailColor: '#374151',
                })}
              />
            </div>
          </div>

          {/* Modules List */}
          {course.modules && course.modules.length > 0 ? (
            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#1f2937] p-4 rounded-lg hover:bg-[#2d3748] transition duration-200"
                >
                  <div className="flex items-center space-x-3">
                    {course.videos?.[index] && (
                      <button
                        onClick={() => handlePlayVideo(course.videos[index].id)}
                        className="text-purple-500 hover:text-purple-400 transition"
                        title="Play video"
                      >
                        <FaPlay />
                      </button>
                    )}
                    <span className="text-white">{module.title || `Module ${index + 1}`}</span>
                  </div>
                  <button
                    onClick={() => handleCompleteModule(module.title || `Module ${index + 1}`)}
                    className={`text-sm font-medium px-3 py-1 rounded-md ${
                      completedModules.includes(module.title || `Module ${index + 1}`)
                        ? "bg-green-600 text-white"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {completedModules.includes(module.title || `Module ${index + 1}`) 
                      ? "Completed" 
                      : "Mark as Done"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No modules available for this course yet.</p>
          )}

          {/* Progress section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <div className="bg-[#374151] rounded-full h-4">
              <div
                className="bg-purple-600 rounded-full h-4"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {completedCount} / {totalModules} Modules Completed
            </p>
          </div>

          {/* Achievements section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            {completedCount === totalModules && totalModules > 0 ? (
              <div className="bg-green-500 text-white p-3 rounded-md">
                <FaCheckCircle className="inline-block mr-2" /> Course Completed!
              </div>
            ) : completedCount > 0 ? (
              <div className="bg-blue-500 text-white p-3 rounded-md">
                <FaCheckCircle className="inline-block mr-2" /> 
                Progress: {completedCount}/{totalModules} modules
              </div>
            ) : (
              <p className="text-gray-400">Start learning to unlock achievements!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;