import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block md:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="/about" className="block md:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="/projects" className="block md:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</a>
          <a href="/contact" className="block md:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
          <button onClick={toggleTheme} className="text-yellow-400 dark:text-gray-300 focus:outline-none">
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.34l-.71-.71M6.05 6.05l-.71-.71m12.02 12.02l-.71-.71M6.05 17.95l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.293 14.707A8 8 0 1112 4v1a7 7 0 105.293 12.707z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;