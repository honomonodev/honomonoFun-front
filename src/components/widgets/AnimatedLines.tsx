import React from 'react';

const AnimatedLines: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <line x1="0" y1="0" x2="800" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="800" y1="0" x2="0" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="400" y1="0" x2="400" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="0" y1="300" x2="800" y2="300" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="0" y1="0" x2="0" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="800" y1="0" x2="800" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="0" y1="0" x2="800" y2="0" stroke="white" strokeWidth="2" className="animate-line" />
      <line x1="0" y1="600" x2="800" y2="600" stroke="white" strokeWidth="2" className="animate-line" />
      <circle cx="0" cy="0" r="5" fill="pink" className="animate-point" />
      <circle cx="800" cy="0" r="5" fill="pink" className="animate-point" />
      <circle cx="400" cy="0" r="5" fill="pink" className="animate-point" />
      <circle cx="0" cy="300" r="5" fill="pink" className="animate-point" />
      <circle cx="0" cy="600" r="5" fill="pink" className="animate-point" />
      <circle cx="800" cy="600" r="5" fill="pink" className="animate-point" />
      <circle cx="800" cy="300" r="5" fill="pink" className="animate-point" />
      <circle cx="400" cy="600" r="5" fill="pink" className="animate-point" />
    </svg>
  );
};

export default AnimatedLines;