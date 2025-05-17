import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold text-white">NextGen Instructo</h4>
          {/* Optional: Add a small logo */}
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-100">Home</a>
          <a href="/courses" className="hover:text-gray-100">Courses</a>
          <a href="/contact" className="hover:text-gray-100">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-100"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-gray-100"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-gray-100"><FaInstagram size={20} /></a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} NextGen Instructo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;