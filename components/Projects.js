import { motion } from "framer-motion";

const projects = [
  { title: "প্রকল্প-০০১: মসজিদে কুরআন বিতরণ", description: "গোবিন্দগঞ্জ অঞ্চলের বিভিন্ন মসজিদে কুরআন শরীফ বিতরণ।" },
  { title: "প্রকল্প-০০২: দরিদ্র সহায়তা কর্মসূচি", description: "অসহায় মানুষের পাশে দাঁড়ানোর প্রচেষ্টা।" },
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
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">প্রকল্পসমূহ</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h4>
              <p className="text-gray-500">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
