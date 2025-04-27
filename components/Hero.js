import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaQuran, FaMosque, FaLeaf } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-islamic-green-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-geometric-light opacity-10"></div>
      
      {/* Animated circles with Islamic patterns */}
      <div className="absolute top-20 right-20 arabic-pattern-circle w-56 h-56 opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 arabic-pattern-circle w-64 h-64 opacity-15 animate-spin-slow-reverse"></div>
      
      {/* Floating elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-1/4 w-8 h-8 bg-islamic-gold-200 rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-32 right-1/4 w-12 h-12 bg-islamic-green-200 rounded-full"
      />
      
      <div className="container mx-auto px-6 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          >
            <div className="mt-5">
              {/* <h3 className="text-base font-medium text-islamic-green-700">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</h3> */}
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-title"
            >
              <span className="block text-islamic-green-800">তারুণ্যের জাগরণই</span>
              <span className="block text-gradient">উম্মাহর পুনর্জাগরণ</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ, একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যারা সমাজে ইসলামের সত্য বার্তা ছড়িয়ে দিতে এবং সামাজিক উন্নয়নে কাজ করছি।
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <a href="#about" className="islamic-button group flex items-center justify-center sm:justify-start">
                <span>আরো জানুন</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#projects" className="islamic-button-outline flex items-center justify-center sm:justify-start">
                <span>আমাদের কার্যক্রম</span>
                <FaLeaf className="ml-2 text-islamic-green-600" />
              </a>
            </motion.div>
            
            {/* Islamic quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-4 bg-islamic-green-50 border-l-4 border-islamic-gold-400 rounded-r-lg md:max-w-lg hidden md:block"
            >
              <p className="text-sm italic text-gray-600">
                <span className="font-arabic text-base">"وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ"</span>
                <br />
                <span className="block mt-2">আর যে আল্লাহর দিকে মানুষকে আহ্বান করে, নেক আমল করে এবং বলে, 'আমি মুসলিম' তার চেয়ে উত্তম কথা আর কার?</span>
                <span className="block text-xs text-right mt-1 text-islamic-green-700">- সূরা ফুসসিলাত, আয়াত ৩৩</span>
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/banner.png" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-islamic-green-900/60 to-transparent"></div>
              
              {/* Caption */}
              
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-islamic-gold-400 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-islamic-green-400 rounded-2xl -z-10"></div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 z-20 hidden lg:block"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-islamic-green-100 flex items-center justify-center mr-3">
                  <FaQuran className="text-islamic-green-600" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
