import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
const CourseCurriculum = ({ modules, completedModules, onCompleteModule }) => {
  return (
    <ul className="space-y-3">
      {modules.map((module, index) => (
        <li key={index} className="bg-[#111827] bg-opacity-60 p-4 rounded-xl border border-purple-800/20 flex items-center justify-between">
          <span className="flex-grow">{module.title}</span>
          <button
            onClick={() => onCompleteModule(module.title)}
            className={`ml-4 text-sm font-semibold rounded-md ${
              completedModules.includes(module.title) ? 'bg-green-500 text-white px-3 py-1 hover:bg-green-400' : 'bg-gray-700 text-gray-300 px-3 py-1 hover:bg-gray-600'
            }`}
            disabled={completedModules.includes(module.title)}
          >
            {completedModules.includes(module.title) ? <FaCheckCircle className="inline-block mr-1" /> : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseCurriculum;