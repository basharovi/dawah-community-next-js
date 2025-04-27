import { motion } from "framer-motion";
import { FaCheckCircle, FaQuran, FaHands, FaUserFriends, FaBook, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';

export default function Mission() {
  const missions = [
    { 
      icon: <FaQuran className="text-2xl text-green-600" />,
      title: "যুব সমাজকে ইসলামী আদর্শে গড়ে তোলা", 
      desc: "বর্তমান যুগে যুব সমাজকে ইসলামি আদর্শে শিক্ষিত করে গড়ে তোলার লক্ষ্যে কাজ করা।" 
    },
    { 
      icon: <FaBook className="text-2xl text-blue-600" />,
      title: "নৈতিকতা ও দ্বীনি শিক্ষার প্রসার", 
      desc: "সমাজে নৈতিকতা ও ইসলামী শিক্ষার প্রসার ঘটানো এবং ধর্মীয় মূল্যবোধ জাগিয়ে তোলা।" 
    },
    { 
      icon: <FaUserFriends className="text-2xl text-indigo-600" />,
      title: "সংগঠিতভাবে দাওয়াহ কার্যক্রম পরিচালনা", 
      desc: "সুশৃঙ্খল ও সংগঠিতভাবে ইসলামের প্রকৃত বার্তা মানুষের মাঝে পৌঁছে দেওয়া।" 
    },
    { 
      icon: <FaHandHoldingHeart className="text-2xl text-red-600" />,
      title: "অসহায় ও দরিদ্রদের পাশে দাঁড়ানো", 
      desc: "সমাজের অসহায়, দরিদ্র ও বঞ্চিত মানুষের পাশে দাঁড়িয়ে সাহায্য ও সেবা প্রদান করা।" 
    },
    { 
      icon: <FaLightbulb className="text-2xl text-yellow-600" />,
      title: "ইসলামী সাহিত্য ও সংস্কৃতি চর্চা", 
      desc: "ইসলামী সাহিত্য, সংস্কৃতি ও ইতিহাসের চর্চা এবং প্রচার করা।" 
    },
    { 
      icon: <FaHands className="text-2xl text-purple-600" />,
      title: "সমাজে দ্বীনের আলো ছড়িয়ে দেওয়া", 
      desc: "দাওয়াতি কার্যক্রমের মাধ্যমে সমাজের প্রতিটি স্তরে দ্বীনের আলো ছড়িয়ে দেওয়া।" 
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 inline-block relative">
            আমাদের লক্ষ্য ও উদ্দেশ্য
            <span className="block h-1 w-24 bg-green-500 mx-auto mt-2"></span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ আহলুস সুন্নাহ ওয়াল জামাআহ'র আকীদায় বিশ্বাসী ও কুরআন-সুন্নাহর আলোকে নিম্নলিখিত লক্ষ্য ও উদ্দেশ্য নিয়ে কাজ করছে
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-block bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-800 font-medium flex items-center">
              <FaCheckCircle className="mr-2" />
              আমরা বিশ্বাস করি, একতাবদ্ধ হয়ে ও সঠিক পদ্ধতিতে কাজ করলে আমাদের সমাজে ইতিবাচক পরিবর্তন আনা সম্ভব।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
