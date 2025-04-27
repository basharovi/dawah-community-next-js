import { FaQuran, FaMosque, FaBookOpen, FaHandsHelping, FaLeaf, FaGlobe, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-islamic-green-50 arabesque-overlay">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 opacity-20 arabic-pattern-circle"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 opacity-20 arabic-pattern-circle"></div>
      
      <div className="container px-4 mx-auto">
        <div className="relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center mb-4 px-3 py-1 bg-islamic-green-100 rounded-full">
              <FaQuran className="mr-2 text-islamic-green-600" size={16} />
              <span className="text-sm font-medium text-islamic-green-700">আমাদের পরিচিতি</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 font-title text-islamic-green-800">আমাদের সম্পর্কে</h2>
            
            <div className="h-1 w-20 bg-islamic-gold-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ, একটি অলাভজনক ইসলামিক সংগঠন যা সমাজে ইসলামের সঠিক বার্তা ছড়িয়ে দেওয়ার লক্ষ্যে কাজ করে। আমরা বিভিন্ন শিক্ষামূলক কর্মসূচি, সামাজিক সেবা ও সমাজের উন্নয়নে নিবেদিত। 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="featured-box group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1 bg-islamic-green-100 p-3 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-islamic-green-200">
                  <FaLeaf className="text-2xl text-islamic-green-600" />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-title font-semibold text-islamic-green-800">আমাদের দর্শন</h3>
                  <p className="text-gray-700">
                    আমরা বিশ্বাস করি যে ইসলাম হল শান্তি ও ভালোবাসার ধর্ম। আমাদের দর্শন হল সমাজের সকল স্তরে ইসলামের সঠিক শিক্ষা ছড়িয়ে দেওয়া এবং মানুষকে তাদের জীবনে ইসলামিক মূল্যবোধ অনুসরণ করতে উৎসাহিত করা।
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm font-medium text-islamic-green-600">
                      <FaBookOpen className="mr-2" />
                      <span>ইসলামের সত্য বার্তা</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}}
              className="featured-box group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1 bg-islamic-blue-100 p-3 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-islamic-blue-200">
                  <FaGlobe className="text-2xl text-islamic-blue-600" />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-title font-semibold text-islamic-blue-800">আমাদের লক্ষ্য</h3>
                  <p className="text-gray-700">
                    আমাদের প্রধান লক্ষ্য হল সমাজে ইসলামের সঠিক বার্তা পৌঁছে দেওয়া, তরুণদের মধ্যে ইসলামিক মূল্যবোধ বিকাশ করা এবং সহানুভূতি বাড়ানো। আমরা বিশ্বাস করি যে সমাজের পরিবর্তন আসে সঠিক জ্ঞান ও শিক্ষার মাধ্যমে।
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm font-medium text-islamic-blue-600">
                      <FaHandsHelping className="mr-2" />
                      <span>মুসলিম ঐক্য</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}}
              className="featured-box group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1 bg-islamic-gold-100 p-3 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-islamic-gold-200">
                  <FaUsers className="text-2xl text-islamic-gold-600" />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-title font-semibold text-islamic-gold-800">আমাদের মূল্যবোধ</h3>
                  <p className="text-gray-700">
                    আমাদের কার্যক্রম কুরআন ও সুন্নাহর উপর ভিত্তি করে পরিচালিত। আমরা ভ্রাতৃত্ব, সততা, সেবা, ও সহানুভূতির মূল্যবোধে বিশ্বাস করি। আমরা মানুষের মধ্যে ধর্মীয় মূল্যবোধ জাগিয়ে তুলতে কাজ করি এবং সমাজে উদারতা ও সহিষ্ণুতা বৃদ্ধি করতে চাই।
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm font-medium text-islamic-gold-600">
                      <FaMosque className="mr-2" />
                      <span>ইসলামিক মূল্যবোধ</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Section */}
          {/* <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}}
            className="mt-16 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-islamic-pattern opacity-5 transform rotate-45"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-green-100 rounded-full mb-4">
                  <FaUsers className="text-2xl text-islamic-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-islamic-green-700 mb-2">৫০+</h3>
                <p className="text-gray-600">সক্রিয় সদস্য</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-blue-100 rounded-full mb-4">
                  <FaHandsHelping className="text-2xl text-islamic-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-islamic-blue-700 mb-2">২০+</h3>
                <p className="text-gray-600">প্রোগ্রাম</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-gold-100 rounded-full mb-4">
                  <FaLeaf className="text-2xl text-islamic-gold-600" />
                </div>
                <h3 className="text-3xl font-bold text-islamic-gold-700 mb-2">৩০+</h3>
                <p className="text-gray-600">প্রকল্প সম্পন্ন</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-teal-100 rounded-full mb-4">
                  <FaGlobe className="text-2xl text-islamic-teal-600" />
                </div>
                <h3 className="text-3xl font-bold text-islamic-teal-700 mb-2">৫+</h3>
                <p className="text-gray-600">বছরের অভিজ্ঞতা</p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
      
      {/* Islamic Divider */}
      <div className="container mx-auto px-4 mt-16">
        <div className="islamic-divider"></div>
      </div>
    </section>
  );
}
