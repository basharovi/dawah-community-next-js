import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBullhorn, FaBookOpen, FaHandsHelping, FaMosque, FaProjectDiagram } from 'react-icons/fa';

const projects = [
  { 
    title: "প্রোজেক্ট-০০১: ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারে সচেতনা",
    description: "প্রোজেক্ট-০০১ ছিল আমাদের কমিউনিটির প্রথম উদ্যোগ, যেখানে ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারের বার্তা ছড়িয়ে দিতে গোবিন্দগঞ্জ উপজেলার ব্যস্ত মসজিদগুলোতে সচেতনতামূলক ব্যানার ও প্যানা স্থাপন করা হয়েছে।",
    link: "https://photos.google.com/share/AF1QipM2LLB3zLxCsRaS-EwgpViqaCTRf5DvS0lzhW8enfUI4FUBDtTIg38R1eM0rFle7A?key=TDZyMUp3TWgxcFBHWWtxNlAyZFQ2QV96VzFBVFRR",
    icon: <FaBullhorn className="text-3xl text-islamic-green-600" />,
    date: "এপ্রিল ২০২৫",
    image: "/images/carousel/slide2.jpg",
    color: "from-islamic-green-500 to-islamic-green-600",
    textColor: "text-islamic-green-600",
    bgColor: "bg-islamic-green-50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden arabesque-overlay">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-islamic-green-100 filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-islamic-blue-100 filter blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1 bg-islamic-green-100 rounded-full">
            <FaProjectDiagram className="text-islamic-green-600 mr-2" size={16} />
            <span className="text-sm font-medium text-islamic-green-700">আমাদের উদ্যোগ</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 font-title text-islamic-green-800">আমাদের কার্যক্রম</h2>
          
          <div className="h-1 w-20 bg-islamic-gold-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ সমাজের উন্নয়নে নিম্নলিখিত প্রকল্পগুলি পরিচালনা করে
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Top color band */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
              
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-3 right-3 px-3 py-1 glass-effect rounded-full">
                  <span className="text-sm font-medium text-gray-700">{project.date}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Project number badge */}
                <div className="absolute bottom-3 left-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${project.bgColor} ${project.textColor}`}>
                    {project.title.split(':')[0]}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className={`text-xl font-semibold mb-3 font-title ${project.textColor}`}>
                  {project.title.includes(':') ? project.title.split(':')[1].trim() : ''}
                </h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${project.bgColor}`}>
                    {project.icon}
                  </div>
                  
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center ${project.textColor} hover:underline transition-all duration-300 font-medium`}
                    >
                      ছবি দেখুন <FaExternalLinkAlt className="ml-2" />
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm italic">শীঘ্রই আসছে</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Future project teaser */}
        <motion.div
          className="mt-16 bg-islamic-green-50 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-islamic-green-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-islamic-green-800 mb-4">আপনি আমাদের অন্যান্য প্রকল্পে অংশগ্রহণ করতে পারেন</h3>
          <p className="text-gray-600 mb-6">আমরা সমাজের উন্নয়নে আরো অনেক কার্যক্রম গ্রহণ করতে চাই। আপনার সাহায্য ও সহযোগিতা আমাদের জন্য মূল্যবান।</p>
          <a href="#contact" className="islamic-button inline-flex items-center">
            যোগাযোগ করুন 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Islamic Divider */}
      <div className="container mx-auto px-4 mt-16">
        <div className="islamic-divider"></div>
      </div>
    </section>
  );
}
