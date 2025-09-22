import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">
            Nathalia Valli
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;