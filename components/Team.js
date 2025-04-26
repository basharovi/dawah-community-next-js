import { motion } from "framer-motion";

const teamMembers = [
  { name: "মোঃ ফয়সাল আহমেদ", role: "সভাপতি", img: "/images/team/no_image.jpg" },
  { name: "ইঞ্জিনিয়ার শাকিল", role: "সহ-সভাপতি", img: "/images/team/no_image.jpg" },
  { name: "মোঃ জুবায়ের ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">আমাদের টিম</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.img} alt={member.name} className="h-32 w-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-xl font-semibold text-gray-700">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
