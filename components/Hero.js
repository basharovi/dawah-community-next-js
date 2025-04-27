import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-100 to-blue-50 pt-28 pb-20 text-center"
    >
      <div className="absolute inset-0 bg-[url('/images/islamic-pattern.svg')] opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">আসসালামু আলাইকুম!</h2>
          <p className="text-lg md:text-2xl text-gray-600 mb-6">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জে আপনাকে স্বাগতম।</p>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            আমরা ইসলামের প্রকৃত শিক্ষা ও মূল্যবোধ প্রচার এবং সমাজ উন্নয়নে কাজ করি।
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#about" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
              আরও জানুন
            </a>
            <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
              যোগাযোগ করুন
            </a>
          </div>
        </motion.div>
        
        {/* Foreground Image with Animation */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="/images/banner.png" 
            alt="Dawah Community Gobindaganj" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg" 
          />
        </motion.div>
      </div>
    </section>
  );
}
