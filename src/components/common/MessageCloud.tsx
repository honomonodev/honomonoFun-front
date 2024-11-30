import React, { useEffect, useState } from 'react';

interface MessageCloudProps {
  message: string;
}

const MessageCloud: React.FC<MessageCloudProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in after 3 seconds
    const fadeInTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Fade out after 5 seconds
    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className={`relative max-w-xs md:max-w-md lg:max-w-lg mx-auto my-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg border border-purple-500 bg-opacity-80 inner-shadow transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border border-purple-500"></div>
      <p>{message}</p>
    </div>
  );
};

export default MessageCloud;