// AnimatedLines.tsx
import React, { useEffect } from 'react';
import './AnimatedLines.css';

const AnimatedLines = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = Math.random().toString();
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 100);

    return () => clearInterval(interval);
  }, []);

  return <div className="animated-lines"></div>;
};

export default AnimatedLines;