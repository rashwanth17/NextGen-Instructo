import React from 'react';
import {
    BookOpen,
    CheckCircle,
    Users,
    Briefcase,
    Trophy,
    Book,
    Star,
} from 'lucide-react';
import { Button } from './Button';
import { cn } from './cn';
import Header from './Header';
import Footer from './Footer';


const CourseCard = ({ title, lessonsCompleted, duration, instructor }) => {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/30 transition-colors duration-200 p-4">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <div className="space-y-2 mt-2">
                <p className="text-gray-400 text-sm">Lessons Completed: {lessonsCompleted}</p>
                <p className="text-gray-400 text-sm">Duration: {duration}</p>
                <p className="text-gray-400 text-sm">Instructor: {instructor}</p>
            </div>
        </div>
    );
};


const RecommendedCoursesCard = ({ courses }) => {

    return (
        <div className="bg-gray-900 border-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Recommended for you</h2>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-[#2d3748] p-4 rounded-lg border border-gray-700">
                            <h3 className="text-md font-semibold text-white">{course.title}</h3>
                            <p className="text-gray-400 text-sm">{course.lessons}</p>
                            <p className="text-gray-400 text-sm">{course.hours}</p>
                            <Button
                                variant="outline"
                                className="mt-4 w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 border-purple-500/30"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Main Component
const ProfilePage = () => {
    // Mock Data
    const coursesInProgress = [
        { title: 'UX Design Certificate', lessonsCompleted: '18/40 (48%)', duration: '24h 13m 28s', instructor: 'Sloan' },
        { title: 'SEO Experts from Zero', lessonsCompleted: '21/23 (97%)', duration: '10h 0m 0s', instructor: 'Mckinney' },
        { title: 'Project Management', lessonsCompleted: '7/35 (20%)', duration: '17h 59m 0s', instructor: 'Johnson' },
    ];



    const recommendedCourses = [
        { title: "HTML Front-end Development", lessons: "30 Lessons", hours: "83 Hours" },
        { title: "SEO Experts from Zero", lessons: "25 Lessons", hours: "18 Hours" },
        { title: "UI Design Learn Creative Design", lessons: "35 Lessons", hours: "95 Hours" },
    ];

    const personalDetails = {
        name: 'Robert Fox',
        studentId: '#10532',
        email: 'robert.fox@example.com',
        major: 'Computer Science',
        university: 'Stanford University'
    };

    const rewards = [
        { title: "Beginner Badge", points: 100, date: "2024-01-15" },
        { title: "Completed First Course", points: 250, date: "2024-02-20" },
        { title: "Top Contributor (Forum)", points: 500, date: "2024-03-10" },
    ];

    return (
        <div className="bg-gray-950 min-h-screen">
            <Header />
            <main className="p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Overview</h2>
                        <p className="text-gray-400 text-sm">Welcome, {personalDetails.name} ({personalDetails.studentId})</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30 flex items-center gap-4">
                        <BookOpen className="w-6 h-6 text-purple-400" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Courses Enrolled</h3>
                            <p className="text-gray-300">18</p>
                        </div>
                    </div>
                    <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30 flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Courses Completed</h3>
                            <p className="text-gray-300">97</p>
                        </div>
                    </div>
                    <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30 flex items-center gap-4">
                        <Trophy className="w-6 h-6 text-blue-400" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Certificates Earned</h3>
                            <p className="text-gray-300">62</p>
                        </div>
                    </div>
                    <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30 flex items-center gap-4">
                        <Users className="w-6 h-6 text-yellow-400" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Community Support</h3>
                            <p className="text-gray-300">245</p>
                        </div>
                    </div>
                </div>

                {/* Personal Details Section */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Personal Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <p><span className="font-medium text-white">Name:</span> {personalDetails.name}</p>
                            <p><span className="font-medium text-white">Student ID:</span> {personalDetails.studentId}</p>
                            <p><span className="font-medium text-white">Email:</span> {personalDetails.email}</p>
                        </div>
                        <div>
                            <p><span className="font-medium text-white">Major:</span> {personalDetails.major}</p>
                            <p><span className="font-medium text-white">University:</span> {personalDetails.university}</p>
                        </div>
                    </div>
                </div>

                {/* Rewards Earned Section */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Star className="w-6 h-6 text-yellow-400" /> Rewards Earned
                    </h2>
                    <div className="space-y-2">
                        {rewards.map((reward, index) => (
                            <div key={index} className="flex items-center justify-between text-gray-300">
                                <div>
                                    <h3 className="font-medium text-white">{reward.title}</h3>
                                    <p className="text-sm">Date: {reward.date}</p>
                                </div>
                                <span className="text-yellow-400 font-semibold">{reward.points} Points</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Courses You're Taking</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {coursesInProgress.map((course, index) => (
                            <CourseCard
                                key={index}
                                title={course.title}
                                lessonsCompleted={course.lessonsCompleted}
                                duration={course.duration}
                                instructor={course.instructor}
                            />
                        ))}
                    </div>
                </div>

                <RecommendedCoursesCard courses={recommendedCourses} />
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;

