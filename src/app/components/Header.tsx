"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import meImage from '../assets/me.jpg';
import 'animate.css'; // import animate.css

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <a href={href} className="transition hover:text-teal-500 dark:hover:text-teal-400">{label}</a>
);

const DarkModeSwitch: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    setIsDarkMode(darkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', String(!isDarkMode));
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full">
      {isDarkMode ? 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg> : 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      }
    </button>
  );
};

const Header: React.FC = () => (
  <header className="grid grid-cols-3 items-center justify-items-center gap-0 pt-8 mx-auto w-full animate__animated animate__slideInDown">
    <div className="justify-self-end">
      <a href="/" className="relative w-10 h-10 inline-block cursor-pointer overflow-hidden rounded-full">
        <span className="block absolute top-0 left-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900"></span>
        <Image src={meImage} alt="My Portfolio" className="absolute z-10" />
      </a>
    </div>
    <div className="bg-slate-400 text-white dark:text-gray-200 py-2 px-8 rounded-full">
      <nav className="flex justify-center space-x-4">
        <NavItem href="/About" label="About"/>
        <NavItem href="/Experiences" label="Experiences"/>
        <NavItem href="/Projects" label="Projects"/>
        <NavItem href="/HireMe" label="Hire Me!"/>
      </nav>
    </div>
    <div className="justify-self-start">
      <DarkModeSwitch />
    </div>
  </header>
);

export default Header;
