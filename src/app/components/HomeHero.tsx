// HomeContent.tsx
"use client"

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ServiceSteps from './ServiceSteps';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';
import ten from '../assets/animations/10.json';

const HomeContent: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  // Use effect to load content
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div w-full>
      <Header />
      {!loaded ? (
        <div className="flex items-center justify-center min-h-screen">
          <Lottie animationData={loadingAnimation} className="w-20 h-20" />
        </div>
      ) : (
        <>
          <section className="flex flex-col md:flex-row items-center min-h-full justify-center md:justify-between px-4 md:px-16 py-20 transition-colors duration-300 ease-in-out dark:bg-gray-900 bg-white">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold leading-tight mb-4 dark:text-white text-gray-900">
                Elevate Your Digital Presence
              </h1>
              <p className="text-xl mb-6 dark:text-gray-300 text-gray-700">
                Innovative full-stack solutions to transform user experience. Specializing in responsive design, dynamic interfaces, and performance-optimized web development.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="/About" className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors">
                  About Me
                </a>
                <a href="/Projects" className="inline-block text-blue-500 dark:text-blue-300 bg-transparent border border-blue-500 font-semibold py-2 px-6 rounded hover:bg-blue-500 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <Lottie animationData={ten} className="w-full md:w-1/2" />
            </div>
          </section>
          <ServiceSteps />
        </>
      )}
    </div>
  );
};

export default HomeContent;
