// HomeContent.tsx
"use client"
// HomeContent.tsx

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ServiceSteps from './ServiceSteps';
import Lottie from 'lottie-react';
import loading from '../assets/animations/loading.json';

const HomeContent: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000); // adjust the time as needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
      <Header />
      {!loaded ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-200">
            <Lottie animationData={loading} />
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <ServiceSteps />
        </div>
      )}
    </div>
  );
};

export default HomeContent;
