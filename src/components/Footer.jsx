"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 mt-20"
    >
      <div id="contact" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* معلومات عني */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Mahmud Nagi</h2>
          <p className="text-sm">
            Frontend Developer and MERN Stack enthusiast based in Egypt. I build interactive, accessible, and modern web apps.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-600 transition">About</a></li>
            <li><a href="#projects" className="hover:text-orange-600 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-orange-600 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-orange-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* تواصل معي */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Contact Me</h3>
          <ul className="text-sm space-y-2">
            <li>📧 <a href="mailto:mahmudnagi192003@gmail.com" className="hover:underline">mahmudnagi192003@gmail.com</a></li>
            <li>📱 <a href="https://wa.me/201149564002" target="_blank" className="hover:underline">+20 114 956 4002</a></li>
          </ul>

          <div className="flex items-center mt-4 space-x-4 text-lg">
            <a href="https://wa.me/201149564002" target="_blank"><FaWhatsapp className="hover:text-green-500 transition" /></a>
            <a href="mailto:mahmudnagi192003@gmail.com"><FaEnvelope className="hover:text-red-500 transition" /></a>
            <a href="https://github.com/MahmudAlzhrawy" target="_blank"><FaGithub className="hover:text-black dark:hover:text-white transition" /></a>
            <a href="https://www.linkedin.com/in/mahmud-al-zahrawy-995401263" target="_blank"><FaLinkedin className="hover:text-blue-600 transition" /></a>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} Mahmud Nagi. All rights reserved.
      </div>
    </motion.footer>
  );
}
