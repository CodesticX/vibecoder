"use client";

import { useState, useEffect } from "react";
import ThemeSwitcher from "./theme-toggle";
import { motion } from "motion/react";

interface NavbarProps {
  hidden?: boolean;
}

function Navbar({ hidden = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home" },
    { name: "Creators" },
    { name: "Sessions" },
    { name: "About" },
  ];

  return (
    <motion.nav
      hidden={hidden}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-60 mx-auto w-full max-w-7xl px-6 ${
        scrolled 
          ? "py-3 md:mt-3" 
          : "py-5 md:mt-5"
      } transition-all duration-300 backdrop-blur-md border ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 shadow-sm border-gray-200 dark:border-gray-800" 
          : "bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-800"
      } rounded-lg`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800">
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">V</span>
          </div>
          <motion.div 
            className="ml-3 font-semibold text-gray-900 dark:text-white text-lg"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            VibeCoders
          </motion.div>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                className="relative"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveItem(item.name)}
              >
                <div className={`py-1 cursor-pointer ${
                  activeItem === item.name 
                    ? "text-gray-900 dark:text-white font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}>
                  <span>{item.name}</span>
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right side - Theme switcher and login */}
        <div className="flex items-center space-x-5">
          <ThemeSwitcher />
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Sign in
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button className="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;