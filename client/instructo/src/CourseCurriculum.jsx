// import React from 'react';
// import { motion } from 'framer-motion';
// import { PlayCircle } from 'lucide-react';

// const CourseCurriculum = ({ modules }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg space-y-4"
//         >
//             <h3 className="text-2xl font-semibold text-white">Course Curriculum</h3>
//             <ul className="space-y-2">
//                 {modules.map((module, index) => (
//                     <li
//                         key={index}
//                         className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
//                     >
//                         <div className="flex items-center gap-4">
//                             <PlayCircle className="w-5 h-5 text-blue-400" />
//                             <span className="text-gray-300">{module.title}</span>
//                         </div>
//                         <span className="text-gray-500 text-sm">Video</span>
//                     </li>
//                 ))}
//             </ul>
//         </motion.div>
//     );
// };

// export default CourseCurriculum;
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