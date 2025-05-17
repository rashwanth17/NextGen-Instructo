import React from 'react';
import { BookOpenIcon, PlayCircleIcon, QuestionMarkCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    { icon: BookOpenIcon, title: 'Browse Courses', description: 'Explore our vast library of engaging courses.', color: 'purple' },
    { icon: PlayCircleIcon, title: 'Watch Engaging Videos', description: 'Learn through interactive and captivating video lessons.', color: 'blue' },
    { icon: QuestionMarkCircleIcon, title: 'Take Quizzes', description: 'Test your understanding with fun and challenging quizzes.', color: 'green' },
    { icon: SparklesIcon, title: 'Earn Rewards', description: 'Gain XP and collect badges as you master new skills.', color: 'yellow' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className={`flex justify-center items-center h-12 w-12 rounded-full bg-${step.color}-100 text-${step.color}-600 mb-4`}>
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;