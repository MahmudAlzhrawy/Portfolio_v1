"use client";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FiMenu, FiX } from "react-icons/fi";
// import LanguageSwitcher from './LangSwap';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-3xl shadow-lg px-6 py-3 flex items-center justify-between h-16">
      <a href="#home" className="logo hover:cursor-pointer border border-orange-600 px-3 py-1 rounded-3xl font-semibold text-orange-700">
        Mahmud Nagi
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-orange-600">Home</a></li>
        <li><a href="#about" className="hover:text-orange-600">About</a></li>
        <li><a href="#projects" className="hover:text-orange-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        <li><a href="#services" className="hover:text-orange-600">Services</a></li>
        <li><a href="#skills" className="hover:text-orange-600">Skills</a></li>
      </ul>

      {/* Right Controls */}
      <div className="hidden md:flex items-center">
        {/* <DarkModeToggle /> */}
        {/* <LanguageSwitcher /> */}
        <a
          href="/Mahmud Nagi M.pdf"
          download
          className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition"
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-lg px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
          <a href="#home" className="hover:text-orange-600" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-orange-600" onClick={toggleMenu}>About</a>
          <a href="#projects" className="hover:text-orange-600" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="hover:text-orange-600" onClick={toggleMenu}>Contact</a>
          <a href="#services" className="hover:text-orange-600" onClick={toggleMenu}>Services</a>
          <a href="#skills" className="hover:text-orange-600" onClick={toggleMenu}>Skills</a>
          <div className="flex items-center justify-between pt-2 border-t border-gray-300 dark:border-gray-700">
            {/* <DarkModeToggle /> */}
            <a
              href="/Mahmud Nagi M.pdf"
              download
              className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
