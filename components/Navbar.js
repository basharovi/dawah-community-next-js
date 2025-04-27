import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMosque, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section tracking
      const sections = ["home", "about", "mission", "team", "projects", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on section click
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white shadow-lg py-2" 
        : "bg-white/90 backdrop-filter backdrop-blur-lg py-4"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* <div className="relative w-12 h-12 flex items-center justify-center mr-2 group">
              <div className="absolute inset-0 bg-islamic-green-100 rounded-full transform transition-all duration-300 group-hover:scale-110"></div>
              <FaMosque className="h-6 w-6 text-islamic-green-600 relative z-10" />
            </div> */}
            <img src="/images/logo.png" alt="Logo" className="h-10 w-16 mr-2" />
          </div>
          <h1 className="text-lg md:text-xl font-medium text-gray-800 text-gradient">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {[
            { id: "home", label: "হোম" },
            { id: "about", label: "আমাদের সম্পর্কে" },
            { id: "mission", label: "লক্ষ্য" },
            { id: "team", label: "টিম" },
            { id: "projects", label: "কার্যক্রম" },
            { id: "gallery", label: "গ্যালারি" },
            { id: "contact", label: "যোগাযোগ" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className={`nav-item ${
                activeSection === item.id
                  ? "nav-item-active"
                  : "text-gray-600 hover:text-islamic-green-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  initial={false}
                />
              )}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-gray-700 hover:bg-islamic-green-50 focus:outline-none focus:ring-2 focus:ring-islamic-green-300 transition-all duration-300"
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-filter backdrop-blur-md border-t shadow-inner"
          >
            <div className="flex flex-col space-y-1 px-4 pt-2 pb-4">
              {[
                { id: "home", label: "হোম" },
                { id: "about", label: "আমাদের সম্পর্কে" },
                { id: "mission", label: "লক্ষ্য" },
                { id: "team", label: "টিম" },
                { id: "projects", label: "কার্যক্রম" },
                { id: "gallery", label: "গ্যালারি" },
                { id: "contact", label: "যোগাযোগ" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className={`px-3 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-islamic-green-600 bg-islamic-green-50 border-l-4 border-islamic-green-500 pl-4"
                      : "text-gray-600 hover:text-islamic-green-600 hover:bg-gray-50 hover:pl-4"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center px-4 py-3 rounded-full bg-islamic-green-600 text-white font-medium hover:bg-islamic-green-700 transition-all duration-300"
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
