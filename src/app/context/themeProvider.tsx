"use client"
import { createContext, useContext, useEffect, useState, ReactNode, useLayoutEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
};

// Provide a default value matching the shape of ThemeContextType
const defaultContextValue: ThemeContextType = {
  isDarkMode: false, // default value
  setIsDarkMode: () => {}, // empty function as a placeholder
};

// Create context with the default value
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useLayoutEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        const isDark = savedMode === 'true';
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
      }, []);
    

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
