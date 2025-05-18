import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Training completion stats */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">Training Completion</h3>
          <p className="text-gray-400 mb-2">Total number of users completed the training</p>
          <span className="text-5xl font-bold text-purple-400">1.2K</span>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="courses" className="hover:text-purple-400 transition">Courses</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            <li><a href="#faq" className="hover:text-purple-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Email: support@trainingplatform.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 (234) 567-890</p>
          <div className="flex justify-center md:justify-start space-x-6 text-gray-400 text-lg">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-purple-400 transition"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-purple-400 transition"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-purple-400 transition"><FaLinkedinIn /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-purple-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Training Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
