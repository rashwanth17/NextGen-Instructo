import React from 'react';
import { Button } from "./Button";
import Navbar from './Navbar';

// Reusable Header Component
const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">NextGen Instructo</h1>
        <Navbar />
        <Button
          variant="outline"
          className="text-white  hover:bg-gray-800 hover:border-gray-600"
        >
          
        </Button>
      </div>
    </header>
  );
};

export default Header;
