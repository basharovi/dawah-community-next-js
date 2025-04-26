import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-100 to-blue-50 pt-28 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">আসসালামু আলাইকুম!</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">দাওয়াহ কমিউনিটি গোবিন্দগঞ্জে আপনাকে স্বাগতম।</p>
        <a href="#about" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          আরও জানুন
        </a>
      </motion.div>
    </section>
  );
}
