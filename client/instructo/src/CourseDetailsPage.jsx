// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CourseData from './CourseData';
// import CourseOverview from './CourseOverview';
// import CourseCurriculum from './CourseCurriculum';
// import { FaPlay, FaCheckCircle } from 'react-icons/fa';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import CourseRatingsAndReviews from './CourseRatingsAndReviews'; // Adjust this path if needed
// const CourseDetails = () => {
//   const { id } = useParams();
//   const courseId = parseInt(id, 10);
//   const course = CourseData.find(c => c.id === courseId);
//   const [mainVideoId, setMainVideoId] = useState(course?.videos[0]?.id.replace('v=', '') || '');
//   const [completedModules, setCompletedModules] = useState([]);
//   const totalModules = course?.modules.length || 0;
//   const completedCount = completedModules.length;
//   const progress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

//   const handlePlayVideo = (videoId) => {
//     setMainVideoId(videoId.replace('v=', ''));
//   };

//   const handleCompleteModule = (moduleTitle) => {
//     if (!completedModules.includes(moduleTitle)) {
//       setCompletedModules([...completedModules, moduleTitle]);
//       // You can add logic here to update user progress in a backend or local storage
//     }
//   };

//   if (!course) {
//     return <div className="text-center text-red-600 mt-10">Course not found.</div>;
//   }

//   return (
//     <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6">
//       {/* Top video / preview section with premium look */}
//       <div className="w-full max-w-7xl mx-auto mb-10 relative rounded-xl overflow-hidden shadow-2xl border border-purple-800/30 bg-[#111827]">
//         {/* <div className="absolute top-4 left-4 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-semibold z-10">
//           Premium Access
//         </div> */}
//         <iframe
//           className="w-full h-[420px]"
//           src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1`}
//           // src={"https://youtu.be/--x7q3PTT_c?si=qTeZOKreFeM5h_BB"}
//           title={course.videos[0]?.title}
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4 px-6 flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-semibold">{course.name}</h2>
//             <p className="text-gray-400 text-sm">{course.description}</p>
//           </div>
//           {/* Add more premium features indicators here */}
//           <div className="flex items-center space-x-2">
//             {/* <span className="bg-green-500 text-white rounded-full p-2 text-xs font-bold">HD</span>
//             <span className="bg-blue-500 text-white rounded-full p-2 text-xs font-bold">Downloadable</span> */}
//           </div>
//         </div>
//       </div>

//       {/* Content and sidebar layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
//         {/* Left: Course Info */}
//         <div className="space-y-6">
//           <div className="bg-[#1f2937] bg-opacity-70 p-6 rounded-2xl shadow-lg border border-purple-800/20">
//             <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
//             <CourseOverview description={course.longDescription} />
//           </div>

//           <CourseRatingsAndReviews courseId={course.id} />
//         </div>
//                 <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 max-h-[800px] overflow-y-auto">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold">Course Content</h2>
//             {/* Progress Circle */}
//             <div className="w-16 h-16 relative">
//               <CircularProgressbar
//                 value={progress}
//                 text={`${Math.round(progress)}%`}
//                 styles={buildStyles({
//                   textColor: '#fff',
//                   pathColor: '#a855f7',
//                   trailColor: '#374151',
//                 })}
//               />
//             </div>
//           </div>
//           {/* <CourseCurriculum
//             modules={course.modules}
//             completedModules={completedModules}
//             onCompleteModule={handleCompleteModule}
//           /> */}
//           <div className="space-y-4">
//   {course.modules.map((module, index) => (
//     <div
//       key={index}
//       className="flex items-center justify-between bg-[#1f2937] p-4 rounded-lg hover:bg-[#2d3748] transition duration-200"
//     >
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={() => handlePlayVideo(module.videoId)}
//           className="text-purple-500 hover:text-purple-400 transition"
//         >
//           <FaPlay />
//         </button>
//         <span className="text-white">{module.title}</span>
//       </div>
//       <button
//         onClick={() => handleCompleteModule(module.title)}
//         className={`text-sm font-medium px-3 py-1 rounded-md ${
//           completedModules.includes(module.title)
//             ? "bg-green-600 text-white"
//             : "bg-purple-600 text-white hover:bg-purple-700"
//         }`}
//       >
//         {completedModules.includes(module.title) ? "Completed" : "Mark as Done"}
//       </button>
//     </div>
//   ))}
// </div>

//           {/* Gamified elements - Progress bar and module completion */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
//             <div className="bg-[#374151] rounded-full h-4">
//               <div
//                 className="bg-purple-600 rounded-full h-4"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-400 mt-1">{completedCount} / {totalModules} Modules Completed</p>
//           </div>
//           {/* Add more gamified elements like badges, points, etc. */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">Achievements</h3>
//             {completedCount === totalModules && (
//               <div className="bg-green-500 text-white p-3 rounded-md">
//                 <FaCheckCircle className="inline-block mr-2" /> Course Completed!
//               </div>
//             )}
//             {completedCount > 0 && completedCount < totalModules && (
//               <div className="bg-blue-500 text-white p-3 rounded-md">
//                 <FaCheckCircle className="inline-block mr-2" /> Keep going! You've completed {completedCount} modules.
//               </div>
//             )}
//             {completedCount === 0 && (
//               <p className="text-gray-400">Start learning to unlock achievements!</p>
//             )}
//             {/* Example of a badge */}
//             {completedCount > totalModules / 2 && (
//               <div className="bg-yellow-500 text-white p-2 rounded-md mt-2 text-sm">
//                 Intermediate Learner Badge Unlocked!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaPlay, FaCheckCircle, FaPlus } from 'react-icons/fa';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import CourseRatingsAndReviews from './CourseRatingsAndReviews';
// import CourseOverview from './CourseOverview';
// import React, { useState, useEffect } from 'react';

// // Mocked: Replace with actual auth logic
// const userRole = 'teacher'; // or 'student'
// const userId = '12345'; // current logged in user's ID

// const CourseDetails = () => {
//   const { id: courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [mainVideoId, setMainVideoId] = useState('');
//   const [completedModules, setCompletedModules] = useState([]);

//   useEffect(() => {
//     async function fetchCourse() {
//       try {
//         const endpoint =
//           userRole === 'teacher'
//             ? `/api/courses/${courseId}?mentorId=${userId}`
//             : `/api/courses/${courseId}`;

//         const res = await fetch(endpoint);
//         if (!res.ok) throw new Error('Course fetch failed');
//         const data = await res.json();

//         if (
//           userRole === 'teacher' &&
//           data.mentorId !== userId
//         ) {
//           alert('You are not authorized to view this course');
//           return;
//         }

//         setCourse(data);

//         if (data.videos && data.videos.length > 0) {
//           setMainVideoId(data.videos[0].id.replace('v=', ''));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchCourse();
//   }, [courseId]);

//   const handleAddCourse = () => {
//     // Redirect to add course page or show modal
//     alert('Redirect to add course form');
//   };

//   const handleAddModule = async () => {
//     const newModuleTitle = prompt('Enter new module title:');
//     if (!newModuleTitle) return;
//     try {
//       const res = await fetch(`/api/courses/${courseId}/modules`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: newModuleTitle }),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.error || 'Failed to add module');
//         return;
//       }
//       setCourse(data.course);
//     } catch (error) {
//       alert('Error adding module');
//       console.error(error);
//     }
//   };

//   const handleAddVideoToCourse = async () => {
//     const newVideoTitle = prompt('Enter video title:');
//     const newVideoUrl = prompt('Enter YouTube video URL:');
//     if (!newVideoTitle || !newVideoUrl) return;

//     const videoIdMatch = newVideoUrl.match(/v=([^&]+)/);
//     const videoId = videoIdMatch ? videoIdMatch[1] : newVideoUrl;

//     try {
//       const res = await fetch(`/api/courses/${courseId}/videos`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id: videoId, title: newVideoTitle }),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.error || 'Failed to add video');
//         return;
//       }
//       setCourse(data.course);
//     } catch (error) {
//       alert('Error adding video');
//       console.error(error);
//     }
//   };

//   if (!course) {
//     return (
//       <div className="text-center text-red-600 mt-10">
//         {userRole === 'teacher'
//           ? 'Loading your course...'
//           : 'Loading course...'}
//       </div>
//     );
//   }

//   const totalModules = course.modules?.length || 0;
//   const completedCount = completedModules.length;
//   const progress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

//   return (
//     <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white p-6">
//       {/* Top section */}
//       <div className="w-full max-w-7xl mx-auto mb-10 relative rounded-xl overflow-hidden shadow-2xl border border-purple-800/30 bg-[#111827]">
//         <iframe
//           className="w-full h-[420px]"
//           src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1`}
//           title={course.videos[0]?.title}
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4 px-6 flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-semibold">{course.name}</h2>
//             <p className="text-gray-400 text-sm">{course.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Conditional Teacher Add Course Button */}
//       {/* {userRole === 'teacher' && (
//         <div className="max-w-7xl mx-auto mb-8 text-right">
//           <button
//             onClick={handleAddCourse}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
//           >
//             + Add New Course
//           </button>
//         </div>
//       )} */}
//       {normalizedRole === "mentor" && (
//   <div className="flex justify-end mb-6">
//     <button
//       onClick={() => alert('Open Add Course Modal')} // Replace with your actual handler
//       className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-md shadow"
//     >
//       + Add Course
//     </button>
//   </div>
// )}


//       {/* Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
//         {/* Info and Reviews */}
//         <div className="space-y-6">
//           <div className="bg-[#1f2937] p-6 rounded-2xl shadow-lg border border-purple-800/20">
//             <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
//             <CourseOverview description={course.longDescription} />
//           </div>
//           <CourseRatingsAndReviews courseId={course._id} />
//         </div>

//         {/* Modules Section */}
//         <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 max-h-[800px] overflow-y-auto">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold">Course Content</h2>
//             <div className="w-16 h-16 relative">
//               <CircularProgressbar
//                 value={progress}
//                 text={`${Math.round(progress)}%`}
//                 styles={buildStyles({
//                   textColor: '#fff',
//                   pathColor: '#a855f7',
//                   trailColor: '#374151',
//                 })}
//               />
//             </div>
//           </div>

//           {/* Add module (for teachers only) */}
//           {userRole === 'teacher' && (
//             <button
//               onClick={handleAddModule}
//               className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md mb-4 flex items-center gap-2"
//             >
//               <FaPlus /> Add Module
//             </button>
//           )}

//           {/* Modules */}
//           {course.modules.map((module, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="text-lg font-semibold text-purple-400 mb-2">
//                 {module.title}
//               </h3>

//               {/* Add video (teacher only) */}
//               {userRole === 'teacher' && (
//                 <button
//                   onClick={handleAddVideoToCourse}
//                   className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2"
//                 >
//                   <FaPlus /> Add Video
//                 </button>
//               )}
//             </div>
//           ))}

//           {/* Videos list */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2 text-purple-400">
//               All Videos
//             </h3>
//             <ul>
//               {course.videos.map((video, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center justify-between bg-[#374151] p-3 rounded-lg cursor-pointer hover:bg-[#4b5563]"
//                   onClick={() => setMainVideoId(video.id)}
//                 >
//                   <span>{video.title}</span>
//                   <FaPlay />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;



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
        const response = await axios.get(`http://localhost:3001/api/courses/${id}`);
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