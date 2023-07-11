"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import meImage from '../assets/me.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';
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
        <FaMoon className="w-6 h-6" /> : 
        <FaSun className="w-6 h-6" />
      }
    </button>
  );
};

const Header: React.FC = () => (
  <header className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-0 pt-8 mx-auto w-full animate__animated animate__slideInDown">
    <div className="justify-self-center md:justify-self-end">
      <a href="/" className="relative w-10 h-10 inline-block cursor-pointer overflow-hidden rounded-full">
        <span className="block absolute top-0 left-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900"></span>
        <Image src={meImage} alt="My Portfolio" className="absolute z-10" width={40} height={40} />
      </a>
    </div>
    <div className="bg-slate-400 text-white dark:text-gray-200 py-2 px-8 rounded-full mt-4 md:mt-0">
      <nav className="flex justify-center md:justify-end space-x-4">
        <NavItem href="/About" label="About"/>
        <NavItem href="/Experiences" label="Experiences"/>
        <NavItem href="/Projects" label="Projects"/>
        <NavItem href="/HireMe" label="Hire Me!"/>
      </nav>
    </div>
    <div className="justify-self-center md:justify-self-start mt-4 md:mt-0">
      <DarkModeSwitch />
    </div>
  </header>
);

export default Header;
