import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AnimatedLines from '../components/widgets/AnimatedLines';
import MessageCloud from '../components/common/MessageCloud';
import bg from '../assets/bg.png'; // Import the background image
import '../styles/index.css'; // Import global styles

const HomePage: React.FC = () => {
  const [isSnowing, setIsSnowing] = useState(true);

  const handleToggleSnow = () => {
    setIsSnowing(!isSnowing);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <header
        className="flex-grow flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AnimatedLines isSnowing={isSnowing} />
        <div className="max-w-screen-lg mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to My Fullstack Developer Page!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white-700 dark:text-black">
            Let's make the journey through this app together and see what we have here.
          </p>
          <button
            onClick={handleToggleSnow}
            className="bg-white text-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-transform duration-500"
          >
            {isSnowing ? 'Stop Snowing' : 'Start Snowing'}
          </button>
          <MessageCloud message="Click the button to toggle the snow effect!" />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Login/Register</h3>
              <p className="text-gray-700 dark:text-white">Secure user authentication with JWT or OAuth.</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">API Widget</h3>
              <p className="text-gray-700 dark:text-white">Integrate interesting and dynamic data from free APIs.</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Collections & Filters</h3>
              <p className="text-gray-700 dark:text-white">Create and manage collections with advanced filtering options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-white mb-4">"This is the best developer portfolio I've ever seen!"</p>
              <p className="font-semibold text-gray-900 dark:text-white">- John Doe</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-white mb-4">"Amazing work! Very impressive."</p>
              <p className="font-semibold text-gray-900 dark:text-white">- Jane Smith</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-white mb-4">"Highly recommend this developer."</p>
              <p className="font-semibold text-gray-900 dark:text-white">- Bob Johnson</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;