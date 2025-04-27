import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaQuran } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        type: 'success', 
        text: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা যত দ্রুত সম্ভব যোগাযোগ করব ইনশাআল্লাহ' 
      });
      setFormState({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Islamic pattern background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-islamic-green-500 opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-islamic-blue-500 opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-title">যোগাযোগ করুন</h2>
          <div className="w-20 h-1 bg-islamic-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">আমাদের সাথে যোগাযোগ করুন যেকোনো তথ্য বা সহযোগিতার জন্য। আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত আছি।</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border-t-4 border-islamic-green-600 h-fit"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 font-title">আমাদের ঠিকানা</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="p-3 bg-islamic-green-50 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-islamic-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">ঠিকানা</h4>
                  <p className="text-gray-600">গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-islamic-blue-50 rounded-lg mr-4">
                  <FaEnvelope className="text-islamic-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">ইমেইল</h4>
                  <a href="mailto:dawah.gobi@gmail.com" className="text-islamic-blue-600 hover:underline">dawah.gobi@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-islamic-gold-50 rounded-lg mr-4">
                  <FaPhone className="text-islamic-gold-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">মোবাইল</h4>
                  <a href="tel:+8801234567890" className="text-islamic-gold-600 hover:underline">+৮৮ ০১২৩৪৫৬৭৮৯০</a>
                </div>
              </div>
            </div>
            
            {/* Islamic quote */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start">
                <FaQuran className="text-islamic-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm italic">
                  "একে অপরকে সাহায্য করো সৎকাজে ও আল্লাহভীতিতে এবং একে অপরকে সাহায্য করো না পাপে ও সীমালংঘনে।"
                  <span className="block mt-1 text-islamic-green-700 font-medium">(সূরা আল-মায়িদাহ্: ২)</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border-t-4 border-islamic-blue-600"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 font-title">আমাদের লিখুন</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">নাম</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">ইমেইল</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">বার্তা</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-blue-500 focus:border-transparent transition"
                  required
                ></textarea>
              </div>
              
              {submitMessage && (
                <div className={`p-3 rounded-md ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-islamic-blue-600 hover:bg-islamic-blue-700 text-white py-2 px-6 rounded-md transition duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>পাঠানো হচ্ছে...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>পাঠিয়ে দিন</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 