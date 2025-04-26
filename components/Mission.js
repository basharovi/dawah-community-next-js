import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <motion.div 
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-6 text-gray-800">আমাদের লক্ষ্য</h3>
        <p className="text-gray-600 leading-7">
          আমাদের লক্ষ্য যুব সমাজকে দ্বীনের পথে আহবান করা, ইসলামী মূল্যবোধ ছড়িয়ে দেয়া এবং সমাজে ন্যায় ও মানবিকতার চর্চা নিশ্চিত করা।
          দাওয়াহ কমিউনিটি গোবিন্দগঞ্জের মাধ্যমে আমরা সামাজিক উন্নয়ন ও দ্বীনি জ্ঞান প্রসারে কাজ করি।
        </p>
      </motion.div>
    </section>
  );
}
