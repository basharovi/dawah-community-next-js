import { FaMosque, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    { name: "হোম", href: "#home" },
    { name: "আমাদের সম্পর্কে", href: "#about" },
    { name: "লক্ষ্য", href: "#mission" },
    { name: "টিম", href: "#team" },
    { name: "কার্যক্রম", href: "#projects" },
    { name: "গ্যালারি", href: "#gallery" },
    { name: "যোগাযোগ", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      {/* Back to top button */}
      <div className="flex justify-center">
        <button 
          onClick={scrollToTop} 
          className="bg-white text-blue-800 p-3 rounded-full shadow-lg transform -translate-y-1/2 hover:bg-blue-100 transition duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <FaMosque className="text-3xl text-white mr-2" />
              <h4 className="text-xl font-bold">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h4>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              আমরা একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যা কুরআন ও সহীহ সুন্নাহর আলোকে পরিচালিত।
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://shorturl.at/RD1sL" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={22} />
              </a>
              <a href="mailto:dawah.gobi@gmail.com" className="text-gray-300 hover:text-white transition">
                <FaEnvelope size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaMapMarkerAlt size={22} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">যোগাযোগের ঠিকানা</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-300 mr-3 flex-shrink-0" />
                <a href="mailto:dawah.gobi@gmail.com" className="text-gray-300 hover:text-white transition">
                  dawah.gobi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">&copy; ২০২৫ | দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ | সমস্ত অধিকার সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
}
  