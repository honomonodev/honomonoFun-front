import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block md:inline-block text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="block md:inline-block text-gray-700 hover:text-blue-500">About</a>
          <a href="/projects" className="block md:inline-block text-gray-700 hover:text-blue-500">Projects</a>
          <a href="/contact" className="block md:inline-block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;