import { useState } from 'react';
import { FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-islamic-green-600" />, 
      text: "গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ",
      bgColor: "bg-islamic-green-100" 
    },
    { 
      icon: <FaEnvelope className="text-islamic-blue-600" />, 
      text: "dawah.gobi@gmail.com", 
      link: "mailto:dawah.gobi@gmail.com",
      bgColor: "bg-islamic-blue-100"
    },
    { 
      icon: <FaPhoneAlt className="text-islamic-gold-600" />, 
      text: "+৮৮ ০১৭৫০৮৪৪১০৪", 
      link: "tel:+8801750844104",
      bgColor: "bg-islamic-gold-100"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="bg-white py-20 relative arabesque-overlay">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-islamic-green-100 filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-islamic-blue-100 filter blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1 bg-islamic-green-100 rounded-full">
            <FaHeadset className="text-islamic-green-600 mr-2" size={16} />
            <span className="text-sm font-medium text-islamic-green-700">আমাদের সাথে যোগাযোগ করুন</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 font-title text-islamic-green-800">যোগাযোগ</h2>
          
          <div className="h-1 w-20 bg-islamic-gold-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার পাশে আছি।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-islamic-green-800 flex items-center">
              <span className="w-8 h-8 rounded-full bg-islamic-green-100 flex items-center justify-center mr-3">
                <FaEnvelope className="text-islamic-green-600 text-sm" />
              </span>
              আমাদের মেসেজ দিন
            </h3>
            {submitSuccess ? (
              <div className="p-4 bg-islamic-green-50 text-islamic-green-700 rounded-md border border-islamic-green-200">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-islamic-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500 transition-all duration-300"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500 transition-all duration-300"
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">মেসেজ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500 transition-all duration-300"
                    placeholder="আপনার মেসেজ লিখুন"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="islamic-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      পাঠানো হচ্ছে...
                    </>
                  ) : 'মেসেজ পাঠান'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-islamic-green-800 flex items-center">
              <span className="w-8 h-8 rounded-full bg-islamic-green-100 flex items-center justify-center mr-3">
                <FaMapMarkerAlt className="text-islamic-green-600 text-sm" />
              </span>
              যোগাযোগের ঠিকানা
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    {item.link ? (
                      <a href={item.link} className="text-gray-700 hover:text-islamic-green-600 transition-all duration-300">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium mb-4 text-islamic-green-800">সোশ্যাল মিডিয়া</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://shorturl.at/RD1sL" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-islamic-blue-50 hover:bg-islamic-blue-100 transition-all duration-300 flex items-center text-islamic-blue-600 p-3 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
                      <FaFacebook size={20} className="text-islamic-blue-600" />
                    </div>
                    <span className="font-medium">ফেসবুক পেজ</span>
                  </a>
                  
                  <a 
                    href="https://shorturl.at/h9W3i" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-islamic-green-50 hover:bg-islamic-green-100 transition-all duration-300 flex items-center text-islamic-green-600 p-3 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
                      <FaFacebook size={20} className="text-islamic-green-600" />
                    </div>
                    <span className="font-medium">ফেসবুক গ্রুপ</span>
                  </a>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}