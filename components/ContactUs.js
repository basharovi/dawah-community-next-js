import { useState } from 'react';
import { FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
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
    { icon: <FaMapMarkerAlt />, text: "গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ" },
    { icon: <FaEnvelope />, text: "dawah.gobi@gmail.com", link: "mailto:dawah.gobi@gmail.com" },
    { icon: <FaPhoneAlt />, text: "+৮৮০১৭৫০৮৪৪১০৪", link: "tel:+8801750844104" }
  ];

  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
            যোগাযোগ
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 mt-4">যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">আমাদের মেসেজ দিন</h3>
            {submitSuccess ? (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">মেসেজ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-70"
                >
                  {isSubmitting ? 'পাঠানো হচ্ছে...' : 'পাঠান'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">যোগাযোগের ঠিকানা</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    {item.link ? (
                      <a href={item.link} className="text-gray-700 hover:text-blue-600 transition">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200">
                <h4 className="text-lg font-medium mb-3">সোশ্যাল মিডিয়া</h4>
                <div className="flex space-x-6">
                  <a href="https://shorturl.at/RD1sL" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                    <FaFacebook size={25} className="mr-2" />
                    <span>ফেসবুক পেজ</span>
                  </a>
                  <a href="https://shorturl.at/h9W3i" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                    <FaFacebook size={25} className="mr-2" />
                    <span>ফেসবুক গ্রুপ</span>
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