import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const CourseCard = ({ title, description, imageUrl = 'https://via.placeholder.com/400x225' }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`Preview of ${title}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full flex items-center">
            <PlayIcon className="h-5 w-5 mr-2" /> Preview
          </button>
          {/* If using ReactPlayer, you'd conditionally render it here */}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {/* Future: Add progress bar or other gamified elements here */}
      </div>
    </div>
  );
};

const CoursePreview = () => {
  const courses = [
    { title: 'React Fundamentals: The Gamified Journey', description: 'Learn React.js with fun challenges and rewards.', imageUrl: 'https://via.placeholder.com/400x225/6366f1/ffffff?Text=React+Fun' },
    { title: 'Tailwind CSS Mastery: Level Up Your Styling', description: 'Master Tailwind CSS through interactive exercises and projects.', imageUrl: 'https://via.placeholder.com/400x225/8b5cf6/ffffff?Text=Tailwind+Level' },
    { title: 'Python Quest: From Beginner to Hero', description: 'Embark on a Python programming adventure with exciting quests.', imageUrl: 'https://via.placeholder.com/400x225/a855f7/ffffff?Text=Python+Quest' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Explore Our Exciting Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;