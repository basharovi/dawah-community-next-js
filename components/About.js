import { motion } from "framer-motion";
import { FaMosque, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: <FaMosque className="text-3xl text-green-600 mb-2" />,
      title: "আহলুস সুন্নাহ ওয়াল জামাআহ",
      description: "কুরআন ও সহীহ সুন্নাহর আলোকে পরিচালিত একটি ইসলামী সংগঠন"
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600 mb-2" />,
      title: "সম্মিলিত উদ্যোগ",
      description: "পারস্পরিক সহযোগিতা, ভ্রাতৃত্ব ও তাকওয়ার ভিত্তিতে গঠিত একটি সংগঠন"
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl text-orange-600 mb-2" />,
      title: "সমাজ সেবা",
      description: "সমাজের দরিদ্র, অসহায় ও সুবিধাবঞ্চিত মানুষের সেবা ও সহযোগিতা করা"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative">
            আমাদের সম্পর্কে
            <span className="block h-1 w-24 bg-green-500 mx-auto mt-2"></span>
          </h3>
          <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
            একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যা আহলুস সুন্নাহ ওয়াল জামাআহ মতাদর্শে বিশ্বাসী
            এবং কুরআন ও সহীহ সুন্নাহর আলোকে পরিচালিত হবে ইনশাআল্লাহ। আমরা বিশ্বাস করি—ইসলাম একটি ঐক্যের ধর্ম,
            যেখানে বিভেদ নয়, বরং রয়েছে ভ্রাতৃত্ব, সহযোগিতা এবং তাকওয়ার ভিত্তিতে সম্মিলিত পথচলা।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
