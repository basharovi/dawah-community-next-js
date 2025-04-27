import { motion } from "framer-motion";
import { FaCheckCircle, FaQuran, FaHands, FaUserFriends, FaBook, FaHandHoldingHeart, FaLightbulb, FaMoon, FaStar } from 'react-icons/fa';

export default function Mission() {
  const missions = [
    { 
      icon: <FaQuran className="text-2xl text-islamic-green-600" />,
      title: "যুব সমাজকে ইসলামী আদর্শে গড়ে তোলা", 
      desc: "বর্তমান যুগে যুব সমাজকে ইসলামি আদর্শে শিক্ষিত করে গড়ে তোলার লক্ষ্যে কাজ করা।",
      color: "from-islamic-green-500 to-islamic-green-600"
    },
    { 
      icon: <FaBook className="text-2xl text-islamic-blue-600" />,
      title: "নৈতিকতা ও দ্বীনি শিক্ষার প্রসার", 
      desc: "সমাজে নৈতিকতা ও ইসলামী শিক্ষার প্রসার ঘটানো এবং ধর্মীয় মূল্যবোধ জাগিয়ে তোলা।",
      color: "from-islamic-blue-500 to-islamic-blue-600"
    },
    { 
      icon: <FaUserFriends className="text-2xl text-islamic-blue-700" />,
      title: "সংগঠিতভাবে দাওয়াহ কার্যক্রম পরিচালনা", 
      desc: "সুশৃঙ্খল ও সংগঠিতভাবে ইসলামের প্রকৃত বার্তা মানুষের মাঝে পৌঁছে দেওয়া।",
      color: "from-islamic-blue-600 to-islamic-blue-700"
    },
    { 
      icon: <FaHandHoldingHeart className="text-2xl text-islamic-green-700" />,
      title: "অসহায় ও দরিদ্রদের পাশে দাঁড়ানো", 
      desc: "সমাজের অসহায়, দরিদ্র ও বঞ্চিত মানুষের পাশে দাঁড়িয়ে সাহায্য ও সেবা প্রদান করা।",
      color: "from-islamic-green-600 to-islamic-green-700"
    },
    { 
      icon: <FaLightbulb className="text-2xl text-islamic-gold-500" />,
      title: "ইসলামী সাহিত্য ও সংস্কৃতি চর্চা", 
      desc: "ইসলামী সাহিত্য, সংস্কৃতি ও ইতিহাসের চর্চা এবং প্রচার করা।",
      color: "from-islamic-gold-400 to-islamic-gold-500"
    },
    { 
      icon: <FaHands className="text-2xl text-islamic-green-500" />,
      title: "সমাজে দ্বীনের আলো ছড়িয়ে দেওয়া", 
      desc: "দাওয়াতি কার্যক্রমের মাধ্যমে সমাজের প্রতিটি স্তরে দ্বীনের আলো ছড়িয়ে দেওয়া।",
      color: "from-islamic-teal-500 to-islamic-teal-600"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      {/* Islamic pattern background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-islamic-green-100 filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-islamic-blue-100 filter blur-3xl opacity-30"></div>
      
      {/* Decorative stars */}
      <div className="absolute top-20 right-20">
        <FaStar className="text-islamic-gold-400 text-xl animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20">
        <FaMoon className="text-islamic-blue-400 text-xl transform rotate-12" />
      </div>
      
      {/* Arabic calligraphy decorative element */}
      <div className="absolute right-0 top-0 h-40 w-40 opacity-10">
        <div className="arabic-pattern-circle"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1 bg-islamic-green-100 rounded-full">
            <FaQuran className="text-islamic-green-600 mr-2" size={16} />
            <span className="text-sm font-medium text-islamic-green-700">আমাদের উদ্দেশ্য</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 font-title text-islamic-green-800">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
          
          <div className="h-1 w-20 bg-islamic-gold-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto mt-8 font-medium text-lg leading-relaxed">
            দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ আহলুস সুন্নাহ ওয়াল জামাআহ'র আকীদায় বিশ্বাসী ও কুরআন-সুন্নাহর আলোকে নিম্নলিখিত লক্ষ্য ও উদ্দেশ্য নিয়ে কাজ করছে
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Decorative background for cards */}
          <div className="absolute inset-0 bg-stars-pattern opacity-5 transform -rotate-2"></div>
          
          {missions.map((item, index) => (
            <motion.div
              key={index}
              className="decorative-card hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Card header with gradient */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.color} rounded-t-lg`}></div>
              
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-islamic-green-50 rounded-full transform transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="p-6">
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0 mr-5 mt-1 bg-gradient-to-br from-white to-gray-100 p-3 rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-title">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
