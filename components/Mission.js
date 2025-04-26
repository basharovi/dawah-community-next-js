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
        <h3 className="text-3xl font-bold mb-6 text-gray-800">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
        <ul className="list-group list-group-flush text-left">
          {["যুব সমাজকে ইসলামী আদর্শে গড়ে তোলা", "নৈতিকতা ও দ্বীনি শিক্ষার প্রসার", "সংগঠিতভাবে দাওয়াহ কার্যক্রম পরিচালনা", "অসহায় ও দরিদ্রদের পাশে দাঁড়ানো", "ইসলামী সাহিত্য ও সংস্কৃতি চর্চা", "সমাজে দ্বীনের আলো ছড়িয়ে দেওয়া"].map((item, index) => (
            <motion.li
              key={index}
              className="list-group-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              • {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
