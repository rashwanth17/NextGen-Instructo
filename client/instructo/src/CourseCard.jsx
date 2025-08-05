import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, StarOff } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 
const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const CourseCard = ({ course }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative"
        >
            {/* Favorite Button */}
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-3 right-3 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-110 transition"
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
                {isFavorite ? (
                    <Star className="text-yellow-400 w-5 h-5" />
                ) : (
                    <StarOff className="text-gray-400 w-5 h-5" />
                )}
            </button>

            <img
                className="rounded-t-xl w-full h-48 object-cover"
                src={course.imageUrl || 'https://via.placeholder.com/300x200'}
                alt={course.name}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200';
                }}
            />

            <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{course.name}</h2>
                    <span className="text-sm font-semibold bg-purple-100 text-purple-600 px-3 py-1 rounded-full dark:bg-purple-800 dark:text-purple-200">
                        {course.category || 'General'}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">{course.description}</p>

                <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                    <span>⭐ <strong>Rating:</strong> {course.rating || 0}/5</span>
                    <span>💰 <strong>Price:</strong> {course.price || 'Free'}</span>
                </div>

                <Link to={`/courses/${course._id}`}>
                    <Button
                        variant="default"
                        className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg px-4 py-2 rounded-full flex items-center"
                    >
                        Read more
                        <ChevronRight className="ms-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default CourseCard;