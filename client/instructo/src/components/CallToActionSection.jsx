import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 leading-tight">Ready to Level Up Your Skills?</h2>
        <p className="text-xl text-indigo-200 mb-8">Join thousands of learners and earn XP while you grow!</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-semibold py-4 px-12 rounded-full text-lg shadow-md transition duration-300">
          Start Learning Now
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;