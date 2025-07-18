// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "./App"; 

// const Navbar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const { role } = useAuth(); 
//   const normalizedRole = role ? role.toLowerCase() : "";
//   const navLinks =
//   normalizedRole === "mentor"
//     ? [
//         { label: "Home", path: "/" },
//         { label: "About", path: "/about" },
//         // { label: "Students", path: "/students" }, // Mentors see Students
//         { label: "Courses", path: "/courses" },
//         { label: "Profile", path: "/profile" },
//       ]
//     : [
//         { label: "Home", path: "/" },
//         { label: "About", path: "/about" },
//         { label: "Teachers", path: "/teachers" }, // Students see Teachers
//         { label: "Courses", path: "/courses" },
//         { label: "Profile", path: "/profile" },
//       ];
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./App";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { role, logout } = useAuth(); // get logout function from context
  const navigate = useNavigate();

  const normalizedRole = role ? role.toLowerCase() : "";

  const navLinks =
    normalizedRole === "mentor"
      ? [
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Courses", path: "/courses" },
          { label: "Profile", path: "/profile" },
        ]
      : [
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Teachers", path: "/teachers" },
          { label: "Courses", path: "/courses" },
          { label: "Profile", path: "/profile" },
        ];

  const handleSignOut = () => {
    logout(); // clears token and role
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-400 items-center">
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

      {/* Sign Out Button */}
      {role && (
        <button
  onClick={handleSignOut}
  className="ml-4 px-5 py-2 rounded-lg bg-transparent  text-red-500 font-semibold hover:bg-red-500 hover:text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
>
  Sign Out
</button>


      )}
    </nav>
  );
};

export default Navbar;
