import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; // Example icon

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-24 text-white relative overflow-hidden">
      {/* Subtle geometric background pattern (optional) */}
      <div className="absolute inset-0 bg-purple-700 opacity-10 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }} />
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-indigo-300">Learn</span>. <span className="text-purple-300">Play</span>. <span className="text-blue-300">Grow</span>. – The Future of E-Learning is Fun!
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Gamified learning with XP, badges, leaderboards & more.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-indigo-300 hover:bg-indigo-300 hover:text-indigo-700 text-indigo-300 font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center">
            <PlayIcon className="h-5 w-5 mr-2" /> Watch Demo
          </button>
        </div>
        {/* Optional: Background video or Lottie animation would go here */}
      </div>
      {/* Decorative shapes (optional) */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-15 blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-500 rounded-full opacity-15 blur-xl" />
    </section>
  );
};

export default HeroSection;