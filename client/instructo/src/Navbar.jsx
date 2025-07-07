// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const navLinks = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Teachers", path: "/teachers" },
//     { label: "Courses", path: "/courses" },
//     { label: "Profile", path: "/profile" },
//   ];

//   return (
//     <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-400">
//       {navLinks.map((link) => (
//         <Link
//           key={link.path}
//           to={link.path}
//           className={`transition duration-300 px-2 py-1 rounded-md ${
//             currentPath === link.path
//               ? "text-white border-b-2 border-purple-500 font-semibold"
//               : "hover:text-white"
//           }`}
//         >
//           {link.label}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./App"; // import your auth context hook

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { role } = useAuth(); // get user role from auth context

  // Normalize role to avoid case sensitivity issues
  const normalizedRole = role ? role.toLowerCase() : "";

  // Define links based on role
  const navLinks =
  normalizedRole === "mentor"
    ? [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        // { label: "Students", path: "/students" }, // Mentors see Students
        { label: "Courses", path: "/courses" },
        { label: "Profile", path: "/profile" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Teachers", path: "/teachers" }, // Students see Teachers
        { label: "Courses", path: "/courses" },
        { label: "Profile", path: "/profile" },
      ];
// console.log("Role:", response.data.role); // Will print "Mentor" or "Student"


  return (
    <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-400">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`transition duration-300 px-2 py-1 rounded-md ${
            currentPath === link.path
              ? "text-white border-b-2 border-purple-500 font-semibold"
              : "hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
