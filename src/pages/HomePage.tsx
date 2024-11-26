import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AnimatedLines from '../components/widgets/AnimatedLines';

const HomePage: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <header className="flex-grow bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center text-white p-6 relative overflow-hidden">
        <AnimatedLines />
        <div className="max-w-screen-lg mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to My Fullstack Developer Page!</h1>
          <p className="text-lg md:text-xl mb-8">Let's make the journey through this app together and see what we have here.</p>
          <button
            onClick={handleToggle}
            className={`bg-white text-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-transform duration-500 ${
              isToggled ? 'animate-bounce' : 'animate-pulse'
            }`}
          >
            Explore Features
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Login/Register</h3>
              <p className="text-gray-700">Secure user authentication with JWT or OAuth.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2">API Widget</h3>
              <p className="text-gray-700">Integrate interesting and dynamic data from free APIs.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Collections & Filters</h3>
              <p className="text-gray-700">Create and manage collections with advanced filtering options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"This is the best developer portfolio I've ever seen!"</p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Amazing work! Very impressive."</p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Highly recommend this developer."</p>
              <p className="font-semibold">- Bob Johnson</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;