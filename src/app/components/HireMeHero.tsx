import React from 'react';
import HomeSocialIcons from './HomeSocialIcons';
import Header from '../components/Header'

import 'animate.css';

const HireMeHero: React.FC = () => (
  <div className="mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-800">
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-20">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-4 animate__animated animate__slideInLeft text-center">
        Pedro Reichow: Software Engineer, Fullstack Developer, DevOps and Tech Enthusiast.
      </h1>
      <HomeSocialIcons />
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 animate__animated animate__slideInLeft">Let's Connect!</h2>
        <p className="text-base mb-8 leading-loose text-zinc-600 dark:text-zinc-400 animate__animated animate__slideInLeft">
          I'm currently open for new opportunities and would love to hear about your ideas and projects. Whether you're looking for a dedicated developer or just want to discuss potential collaborations, feel free to reach out to me via email or WhatsApp. Let's create something amazing together!
        </p>
        <div className="flex space-x-4 mt-2 justify-center mb-12">
          <a href="mailto:pedroreichow3@gmail.com" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 animate__animated animate__slideInLeft">Email Me</a>
          <a href="https://wa.link/2twxai" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 animate__animated animate__slideInLeft">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
);

export default HireMeHero;
