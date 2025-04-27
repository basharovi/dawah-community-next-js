import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMosque } from "react-icons/fa";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-4"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <div className="flex items-center">
            <FaMosque className="h-6 w-6 text-blue-600 mr-2" />
            <img src="/images/logo.png" alt="Logo" className="h-10 w-14 mr-2" />
          </div>
          <h1 className="text-lg md:text-xl font-medium text-gray-800">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h1>
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
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="h-1 bg-blue-500 mt-1 rounded-full"
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
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
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
            className="md:hidden bg-white border-t"
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
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
