"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import meImage from '../assets/me.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';
import 'animate.css';
import { useTheme } from '../context/themeProvider';


type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <a href={href} className="transition hover:text-teal-500 dark:hover:text-teal-400">{label}</a>
);

const DarkModeSwitch: React.FC = () => {
  // Initialize dark mode value from localStorage or system preference
  const { isDarkMode, setIsDarkMode } = useTheme();

  // Apply the dark mode class on mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Function to toggle dark mode and store preference
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-600 dark:bg-gray-400 rounded-full">
      {isDarkMode ? 
        <FaSun className="w-6 h-6" /> :
        <FaMoon className="w-6 h-6" /> 
      }
    </button>
  );
};

const Header: React.FC<{}> = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        // Downscroll
        setScrollingUp(false);
      } else {
        // Upscroll
        setScrollingUp(true);
      }
      setVisible(scrollingUp);
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, scrollingUp]);

  useEffect(() => {
    // Delay the hiding of the header to ensure the scroll up has finished
    const delayHide = setTimeout(() => {
      if (!scrollingUp) {
        setVisible(false);
      }
    }, 100);

    return () => clearTimeout(delayHide);
  }, [scrollingUp]);

  
  return (
    <header className={`fixed left-0 w-full z-30 transition transform ease-in-out duration-150 grid sm-grid-col-1 grid-cols-3 items-center justify-items-center gap-2 pt-12 mx-auto w-full animate__animated ${visible ? 'animate__slideInDown' : 'animate__slideOutUp'}` }>
      <div className="flex justify-start">
        <a href="/" className="block w-12 h-12 relative">
          <Image src={meImage} alt="My Portfolio" layout="fill" className="rounded-full" />
        </a>
      </div>
      <nav className="bg-slate-400 text-white dark:text-gray-200 py-2 px-4 rounded-full">
        <div className="flex space-x-4 justify-center">
          <NavItem href="/About" label="About"/>
          <NavItem href="/Experiences" label="Experiences"/>
          <NavItem href="/Projects" label="Projects"/>
          <NavItem href="/HireMe" label="Hire Me!"/>
        </div>
      </nav>
      <div className="flex justify-end">
        <DarkModeSwitch />
      </div>
    </header>
  );
}

export default Header;
