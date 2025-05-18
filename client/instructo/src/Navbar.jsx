import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Teachers", path: "/teachers" },
    { label: "Courses", path: "/courses" },
    { label: "Profile", path: "/profile" },
  ];

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
