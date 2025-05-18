    import React from 'react';
import { motion } from 'framer-motion';
//import { Button } from '@/components/ui/button'; // Assuming Button is correctly set up  -- REMOVED
//import { cn } from '@/lib/utils'; // Utility for combining class names (if you have one)  -- REMOVED
import Header from './Header'; // Import your Header component
import Footer from './Footer'; // Import your Footer component

// Placeholder Header and Footer - replace with your actual components
// const Header = () => (
//     <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-800">
//         <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-white">NextGen Instructo</h1>
//             {/* Add navigation links here */}
//             <nav className="hidden md:flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentors</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
//             </nav>
//         </div>
//     </header>
// );

// const Footer = () => (
//     <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
//         <div className="text-center text-gray-400">
//             © {new Date().getFullYear()} NextGen Instructo. All rights reserved.
//         </div>
//     </footer>
// );


// Team member data
const teamMembers = [
    {
        name: 'Rashwanth',
        role: 'Founder & CEO',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C', // Replace with actual image URLs
        bio: 'Rashwanth is a passionate entrepreneur with a vision to revolutionize online education.  He is responsible for the overall strategy and direction of NextGen Instructo.',
    },
    {
        name: 'Netra',
        role: 'CTO',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',  // Replace
        bio: 'Netra leads the technology development at NextGen Instructo.  She ensures the platform is robust, scalable, and provides a seamless learning experience.',
    },
    {
        name: 'Yunus',
        role: 'Head of Content',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',  // Replace
        bio: 'Yunus oversees the creation of high-quality educational content. He works with mentors to develop engaging and effective learning materials.',
    },
    {
        name: 'Kaniskanth',
        role: 'Marketing Lead',
        imageUrl: 'https://placehold.co/400x400/EEE/31343C',  // Replace
        bio: 'Kaniskanth is responsible for the marketing and promotion of NextGen Instructo. He focuses on reaching a wider audience and building the NextGen Instructo brand.',
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

