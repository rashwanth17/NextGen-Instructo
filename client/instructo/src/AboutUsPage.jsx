    import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header'; 
import Footer from './Footer'; 
const teamMembers = [
    {
        name: 'Rashwanth',
        role: '',
        imageUrl: 'https://imgs.search.brave.com/a5-WD1IngTVUtmtwdhAnZNEzF3niNdKLw0angYBWUbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMy/MTYwMDgvcGhvdG8v/ZG9ua2V5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13dzJO/dXN6RDRqb2Z1aEZ2/M1hoV0lYT25CYjZx/aU4yQ0FyTkxZSnJY/djlBPQ',
        bio: 'Rashwanth contributed to both the frontend and backend development of the platform, playing a crucial role in building its core functionality.',
    },
    {
        name: 'Netra',
        role: '',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',
        bio: 'Netra focused on frontend development, ensuring a smooth and responsive user interface.',
    },
    {
        name: 'Yunus',
        role: '',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',
        bio: 'Yunus worked on both the backend and design aspects of the platform, contributing to its technical structure and visual appeal.',
    },
    {
        name: 'Kanishkanth',
         role: '',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',
        bio: 'Kaniskanth was involved in frontend development and design, helping shape the user experience and overall look of the platform.',
    },
];


const AboutUsPage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the animation of child elements
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-black min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                            NextGen Instructo is an innovative e-learning platform dedicated to providing high-quality education and empowering individuals to achieve their full potential.  We connect students with experienced mentors and offer a wide range of courses designed to enhance skills and advance careers.
                        </p>
                    </motion.div>

                    {/* Our Mission and Vision */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To make quality education accessible to everyone, regardless of their location or background. We strive to create a dynamic and engaging learning environment that fosters growth and success.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To be the leading online learning platform that transforms lives and empowers individuals to shape a better future. We envision a world where everyone has the opportunity to learn, grow, and succeed.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Our Team Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-white text-center">Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-center"
                                >
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                    <p className="text-gray-400 mb-2">{member.role}</p>
                                    <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                     {/* Why Choose NextGen Instructo Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-white text-center">Why Choose NextGen Instructo?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Mentors</h3>
                                <p className="text-gray-400">Learn from experienced professionals and industry leaders who are passionate about teaching.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Flexible Learning</h3>
                                <p className="text-gray-400">Study at your own pace, anytime, anywhere. Our platform is designed to fit your busy lifestyle.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Courses</h3>
                                 <p className="text-gray-400">Access a wide range of courses covering various subjects, designed to enhance your skills and knowledge.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Supportive Community</h3>
                                <p className="text-gray-400">Connect with fellow learners and mentors, creating a collaborative and supportive learning environment.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                                <p className="text-gray-400">Experience a seamless and engaging learning experience with our advanced platform and tools.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;

