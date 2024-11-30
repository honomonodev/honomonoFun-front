import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4 md:px-6">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="space-x-4 mt-4">
          <a href="https://github.com/yourusername" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-400">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;