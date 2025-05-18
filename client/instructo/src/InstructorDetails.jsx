import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const InstructorDetails = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg flex items-center gap-6"
    >
        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
            <Users className="w-10 h-10 text-white" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-white">Instructor Name</h3>
            <p className="text-gray-400">Designation/Expertise</p>
        </div>
    </motion.div>
);

export default InstructorDetails;