import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseData from './CourseData';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CourseRatingsAndReviews from './CourseRatingsAndReviews'; // Adjust this path if needed
const CourseDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = CourseData.find(c => c.id === courseId);
  const [mainVideoId, setMainVideoId] = useState(course?.videos[0]?.id.replace('v=', '') || '');
  const [completedModules, setCompletedModules] = useState([]);
  const totalModules = course?.modules.length || 0;
  const completedCount = completedModules.length;
  const progress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

  const handlePlayVideo = (videoId) => {
    setMainVideoId(videoId.replace('v=', ''));
  };

  const handleCompleteModule = (moduleTitle) => {
    if (!completedModules.includes(moduleTitle)) {
      setCompletedModules([...completedModules, moduleTitle]);
      // You can add logic here to update user progress in a backend or local storage
    }
  };

  if (!course) {
    return <div className="text-center text-red-600 mt-10">Course not found.</div>;
  }

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6">
      {/* Top video / preview section with premium look */}
      <div className="w-full max-w-7xl mx-auto mb-10 relative rounded-xl overflow-hidden shadow-2xl border border-purple-800/30 bg-[#111827]">
        {/* <div className="absolute top-4 left-4 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-semibold z-10">
          Premium Access
        </div> */}
        <iframe
          className="w-full h-[420px]"
          src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1`}
          title={course.videos[0]?.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4 px-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-400 text-sm">{course.description}</p>
          </div>
          {/* Add more premium features indicators here */}
          <div className="flex items-center space-x-2">
            {/* <span className="bg-green-500 text-white rounded-full p-2 text-xs font-bold">HD</span>
            <span className="bg-blue-500 text-white rounded-full p-2 text-xs font-bold">Downloadable</span> */}
          </div>
        </div>
      </div>

      {/* Content and sidebar layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: Course Info */}
        <div className="space-y-6">
          <div className="bg-[#1f2937] bg-opacity-70 p-6 rounded-2xl shadow-lg border border-purple-800/20">
            <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
            <CourseOverview description={course.longDescription} />
          </div>

          <CourseRatingsAndReviews courseId={course.id} />
        </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 max-h-[800px] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Course Content</h2>
            {/* Progress Circle */}
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
          <CourseCurriculum
            modules={course.modules}
            completedModules={completedModules}
            onCompleteModule={handleCompleteModule}
          />
          {/* Gamified elements - Progress bar and module completion */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <div className="bg-[#374151] rounded-full h-4">
              <div
                className="bg-purple-600 rounded-full h-4"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">{completedCount} / {totalModules} Modules Completed</p>
          </div>
          {/* Add more gamified elements like badges, points, etc. */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            {completedCount === totalModules && (
              <div className="bg-green-500 text-white p-3 rounded-md">
                <FaCheckCircle className="inline-block mr-2" /> Course Completed!
              </div>
            )}
            {completedCount > 0 && completedCount < totalModules && (
              <div className="bg-blue-500 text-white p-3 rounded-md">
                <FaCheckCircle className="inline-block mr-2" /> Keep going! You've completed {completedCount} modules.
              </div>
            )}
            {completedCount === 0 && (
              <p className="text-gray-400">Start learning to unlock achievements!</p>
            )}
            {/* Example of a badge */}
            {completedCount > totalModules / 2 && (
              <div className="bg-yellow-500 text-white p-2 rounded-md mt-2 text-sm">
                Intermediate Learner Badge Unlocked!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;