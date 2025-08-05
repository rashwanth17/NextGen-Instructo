import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const TeachersPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get("https://nextgen-instructo-1.onrender.com/mentors")
      .then(res => setMentors(res.data))
      .catch(err => console.error("Error fetching mentors:", err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">
          Our Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-purple-800 rounded-xl p-6 shadow-md hover:shadow-purple-600 transition duration-300"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">
                {mentor.username}
              </h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p><span className="text-white font-medium">Expertise:</span> {mentor.mentorExpertise || 'N/A'}</p>
                <p><span className="text-white font-medium">Institution:</span> {mentor.institution}</p>
                <p><span className="text-white font-medium">Age:</span> {mentor.age}</p>
                <p><span className="text-white font-medium">Email:</span> {mentor.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeachersPage;
