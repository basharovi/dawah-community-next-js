import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <motion.div 
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-6 text-gray-800">আমাদের সম্পর্কে</h3>
        <p className="text-gray-600 leading-7">
          দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ একটি অরাজনৈতিক, অলাভজনক এবং স্বেচ্ছাসেবী ইসলামী সংগঠন। 
          আমরা সমাজে নৈতিকতা, দ্বীনি শিক্ষা এবং মানবিক সহায়তার প্রসারে কাজ করি। 
          আমরা নবীজির আদর্শে সমাজ গঠনে প্রতিশ্রুতিবদ্ধ।
        </p>
      </motion.div>
    </section>
  );
}
