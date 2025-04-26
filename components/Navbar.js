import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h1>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#home" className="hover:text-blue-500">হোম</a>
          <a href="#about" className="hover:text-blue-500">আমাদের সম্পর্কে</a>
          <a href="#mission" className="hover:text-blue-500">লক্ষ্য</a>
          <a href="#team" className="hover:text-blue-500">টিম</a>
          <a href="#projects" className="hover:text-blue-500">প্রকল্প</a>
          <a href="#gallery" className="hover:text-blue-500">গ্যালারি</a>
          <a href="#contact" className="hover:text-blue-500">যোগাযোগ</a>
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden flex flex-col space-y-2 px-6 pb-4 bg-white"
        >
          <a href="#home" className="hover:text-blue-500">হোম</a>
          <a href="#about" className="hover:text-blue-500">আমাদের সম্পর্কে</a>
          <a href="#mission" className="hover:text-blue-500">লক্ষ্য</a>
          <a href="#team" className="hover:text-blue-500">টিম</a>
          <a href="#projects" className="hover:text-blue-500">প্রকল্প</a>
          <a href="#gallery" className="hover:text-blue-500">গ্যালারি</a>
          <a href="#contact" className="hover:text-blue-500">যোগাযোগ</a>
        </motion.div>
      )}
    </nav>
  );
}
