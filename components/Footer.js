import { FaMosque, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaQuran, FaPray, FaChevronRight } from "react-icons/fa";
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
    <footer className="bg-gradient-to-br from-islamic-green-900 to-islamic-green-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
      
      {/* Crescent moon decorative element */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-10">
        <img src="/images/crescent-moon.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Bismillah decorative element */}
      <div className="absolute bottom-0 left-0 w-40 opacity-10 transform -translate-x-1/4">
        <img src="/images/bismillah.svg" alt="" className="w-full" />
      </div>
      
      {/* Back to top button */}
      <div className="flex justify-center relative z-10">
        <button 
          onClick={scrollToTop} 
          className="bg-white text-islamic-green-700 p-3 rounded-full shadow-lg transform -translate-y-1/2 hover:bg-islamic-green-50 transition-all duration-300 focus:ring-2 focus:ring-islamic-green-300 focus:ring-offset-2"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-islamic-green-700 rounded-full flex items-center justify-center mr-3">
                <FaMosque className="text-2xl text-islamic-gold-300" />
              </div>
              <h4 className="text-xl font-bold font-title text-white">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h4>
            </div>
            <p className="text-gray-200 mb-6 font-medium leading-relaxed">
              আমরা একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যা কুরআন ও সহীহ সুন্নাহর আলোকে পরিচালিত।
            </p>
            <div className="flex space-x-3 mt-4">
              <a 
                href="https://shorturl.at/RD1sL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center text-white hover:bg-islamic-green-600 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="mailto:dawah.gobi@gmail.com" 
                className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center text-white hover:bg-islamic-green-600 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="#contact" 
                className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center text-white hover:bg-islamic-green-600 transition-all duration-300"
              >
                <FaMapMarkerAlt size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-title text-white relative inline-block">
              দ্রুত লিংক
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-islamic-gold-400"></span>
            </h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-200 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-xs text-islamic-gold-300 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Newsletter subscription teaser */}
            <div className="mt-8 pt-6 border-t border-islamic-green-700">
              <h5 className="text-sm font-semibold mb-4 text-islamic-gold-300">আমাদের একজন সদস্য হিসেবে যোগ দিন</h5>
              <a 
                href="#contact" 
                className="inline-flex items-center bg-islamic-green-700 hover:bg-islamic-green-600 transition-all duration-300 px-4 py-2 rounded-md text-sm text-white"
              >
                যোগদান করুন <FaChevronRight className="ml-2 text-xs" />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-title text-white relative inline-block">
              যোগাযোগের ঠিকানা
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-islamic-gold-400"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-islamic-green-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <FaMapMarkerAlt className="text-islamic-gold-300 text-sm" />
                </div>
                <span className="text-gray-200">গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-islamic-green-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <FaEnvelope className="text-islamic-gold-300 text-sm" />
                </div>
                <a href="mailto:dawah.gobi@gmail.com" className="text-gray-200 hover:text-white transition-all duration-300">
                  dawah.gobi@gmail.com
                </a>
              </li>
              
              {/* Islamic quote */}
              <li className="mt-6 pt-6 border-t border-islamic-green-700">
                <div className="p-4 bg-islamic-green-800 rounded-lg">
                  <div className="flex items-start">
                    <FaQuran className="text-islamic-gold-300 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-200 text-sm">
                      <span className="font-arabic text-base block mb-2">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ</span>
                      "তোমরা কল্যাণের দিকে আহ্বান কর, সৎকাজের আদেশ দাও এবং অসৎকাজ থেকে নিষেধ কর। এরাই সফলকাম।" 
                      <span className="block mt-2 text-islamic-gold-300 text-right">(সূরা আল-ইমরান: ১০৪)</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-islamic-green-700 mt-10 pt-6 text-center">
          <p className="text-gray-300">&copy; ২০২৫ | দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ | সমস্ত অধিকার সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
}
  