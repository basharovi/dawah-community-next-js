import { motion } from "framer-motion";

const projects = [
  { 
    title: "প্রোজেক্ট-০০১: ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারে সচেতনা",
    description: "প্রোজেক্ট-০০১ ছিল আমাদের কমিউনিটির প্রথম উদ্যোগ, যেখানে ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারের বার্তা ছড়িয়ে দিতে গোবিন্দগঞ্জ উপজেলার ব্যস্ত মসজিদগুলোতে সচেতনতামূলক ব্যানার ও প্যানা স্থাপন করা হয়েছে।",
    link: "https://photos.google.com/share/AF1QipM2LLB3zLxCsRaS-EwgpViqaCTRf5DvS0lzhW8enfUI4FUBDtTIg38R1eM0rFle7A?key=TDZyMUp3TWgxcFBHWWtxNlAyZFQ2QV96VzFBVFRR" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">আমাদের কার্যক্রম</h3>
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition col-12" // Added col-12 class
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h4>
              <p className="text-gray-500">{project.description}</p>
              <a href={project.link} target="_black" className="text-blue-500 hover:underline">Photos</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
