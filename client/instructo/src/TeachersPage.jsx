// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import axios from "axios";

// const TeachersPage = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend
//     axios.get("http://localhost:3001/teachers")
//       .then(res => setTeachers(res.data))
//       .catch(err => console.error("Error fetching teachers:", err));
//   }, []);

//   return (
//     <div className="bg-black min-h-screen text-white">
//       <Header />

//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-4xl font-bold text-center text-pink-500 mb-10">
//           Meet Our Expert Teachers
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {teachers.map((teacher, index) => (
//             <div
//               key={index}
//               className="bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-600 transition duration-300"
//             >
//               <img
//                 src={teacher.image || "https://via.placeholder.com/300x200?text=No+Image"}
//                 alt={teacher.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-purple-400 mb-1">
//                   {teacher.name}
//                 </h3>
//                 <p className="text-pink-500 font-medium">{teacher.area_of_expertise}</p>
//                 <p className="text-sm text-zinc-300 mt-2">{teacher.bio || "No bio available."}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default TeachersPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const TeachersPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/mentors")
      .then(res => setMentors(res.data))
      .catch(err => console.error("Error fetching mentors:", err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-10">
          Meet Our Expert Teachers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-600 transition duration-300"
            >
              <img
                src={"https://via.placeholder.com/300x200?text=Mentor"}
                alt={mentor.username}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-1">
                  {mentor.username}
                </h3>
                <p className="text-pink-500 font-medium">{mentor.mentorExpertise}</p>
                <p className="text-sm text-zinc-300 mt-2">
                  From {mentor.institution}, Age {mentor.age}
                </p>
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
