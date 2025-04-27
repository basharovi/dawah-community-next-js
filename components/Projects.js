import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBullhorn, FaBookOpen, FaHandsHelping } from 'react-icons/fa';

const projects = [
  { 
    title: "প্রোজেক্ট-০০১: ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারে সচেতনা",
    description: "প্রোজেক্ট-০০১ ছিল আমাদের কমিউনিটির প্রথম উদ্যোগ, যেখানে ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারের বার্তা ছড়িয়ে দিতে গোবিন্দগঞ্জ উপজেলার ব্যস্ত মসজিদগুলোতে সচেতনতামূলক ব্যানার ও প্যানা স্থাপন করা হয়েছে।",
    link: "https://photos.google.com/share/AF1QipM2LLB3zLxCsRaS-EwgpViqaCTRf5DvS0lzhW8enfUI4FUBDtTIg38R1eM0rFle7A?key=TDZyMUp3TWgxcFBHWWtxNlAyZFQ2QV96VzFBVFRR",
    icon: <FaBullhorn className="text-3xl text-red-600" />,
    date: "জুন ২০২৪",
    image: "/images/carousel/slide1.jpg" 
  },
  { 
    title: "প্রোজেক্ট-০০২: ইসলামী বই বিতরণ",
    description: "মসজিদ ও স্থানীয় শিক্ষা প্রতিষ্ঠানে ইসলামি বই বিতরণ করার মাধ্যমে দীনি শিক্ষার প্রসার (আগামী প্রকল্প)।",
    link: "#",
    icon: <FaBookOpen className="text-3xl text-green-600" />,
    date: "জুলাই ২০২৪ (আসন্ন)",
    image: "/images/carousel/slide2.jpg" 
  },
  { 
    title: "প্রোজেক্ট-০০৩: দরিদ্র পরিবারকে সহায়তা",
    description: "রমাদান মাসে দরিদ্র পরিবারদের মাঝে খাদ্য সামগ্রী বিতরণ (আগামী প্রকল্প)।",
    link: "#",
    icon: <FaHandsHelping className="text-3xl text-blue-600" />,
    date: "রমাদান ১৪৪৬ হিজরি (আসন্ন)",
    image: "/images/carousel/slide3.jpg" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 inline-block relative">
            আমাদের কার্যক্রম
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2"></span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ সমাজের উন্নয়নে নিম্নলিখিত প্রকল্পগুলি পরিচালনা করে
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-0 right-0 p-2 bg-white bg-opacity-90 rounded-bl-lg">
                  <span className="text-sm font-medium text-gray-700">{project.date}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {project.icon}
                  <h4 className="text-xl font-semibold text-gray-800 ml-2">{project.title.split(':')[0]}</h4>
                </div>
                <h5 className="text-lg font-medium text-gray-700 mb-2">{project.title.includes(':') ? project.title.split(':')[1] : ''}</h5>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                  >
                    ছবি দেখুন <FaExternalLinkAlt className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
