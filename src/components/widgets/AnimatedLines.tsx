import React, { useEffect } from 'react';
import './AnimatedLines.css';

interface AnimatedLinesProps {
  isSnowing: boolean;
}

const AnimatedLines: React.FC<AnimatedLinesProps> = ({ isSnowing }) => {
  useEffect(() => {
    if (!isSnowing) {
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach(snowflake => snowflake.remove());
      return;
    }

    const createSnowflake = () => {
      const snowflake = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      snowflake.setAttribute('class', 'snowflake');
      snowflake.setAttribute('viewBox', '0 0 24 24');
      snowflake.setAttribute('width', '24');
      snowflake.setAttribute('height', '24');
      snowflake.innerHTML = `
        <path d="M12 0L13.09 8.26L21.18 6.18L15 12L21.18 17.82L13.09 15.74L12 24L10.91 15.74L2.82 17.82L9 12L2.82 6.18L10.91 8.26L12 0Z" />
      `;
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
  }, [isSnowing]);

  return <div className="animated-lines"></div>;
};

export default AnimatedLines;