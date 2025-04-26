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
        একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যা আহলুস সুন্নাহ ওয়াল জামাআহ মতাদর্শে বিশ্বাসী
        এবং কুরআন ও সহীহ সুন্নাহর আলোকে পরিচালিত হবে ইনশাআল্লাহ। আমরা বিশ্বাস করি—ইসলাম একটি ঐক্যের ধর্ম,
         যেখানে বিভেদ নয়, বরং রয়েছে ভ্রাতৃত্ব, সহযোগিতা এবং তাকওয়ার ভিত্তিতে সম্মিলিত পথচলা।
        </p>
      </motion.div>
    </section>
  );
}
