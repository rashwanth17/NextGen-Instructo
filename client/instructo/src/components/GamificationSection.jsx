import React from 'react';
import { TrophyIcon, ShieldCheckIcon, PresentationChartLineIcon, FireIcon } from '@heroicons/react/24/outline';

const GamificationSection = () => {
  const features = [
    { icon: TrophyIcon, title: 'XP System', description: 'Earn experience points as you conquer courses and challenges.', color: 'yellow' },
    { icon: ShieldCheckIcon, title: 'Badges', description: 'Collect prestigious badges for your achievements and milestones.', color: 'green' },
    { icon: PresentationChartLineIcon, title: 'Leaderboards', description: 'Compete with fellow learners and climb the ranks to become a top scholar.', color: 'blue' },
    { icon: FireIcon, title: 'Daily Challenges', description: 'Engage in exciting daily quests to earn extra rewards and stay sharp.', color: 'red' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Unlock the Fun of Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className={`flex justify-center items-center h-12 w-12 rounded-full bg-${feature.color}-100 text-${feature.color}-600 mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;