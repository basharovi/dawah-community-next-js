import { motion } from "framer-motion";

const teamMembers = [
  { name: "ইঞ্জিনিয়ার বাশার অভি", role: "আহবায়ক", img: "/images/team/ovi.jpg" },
  { name: "আবু সাঈদ সজিব", role: "যুগ্ম আহবায়ক", img: "/images/team/sajib.jpg" },
  { name: "মাওলানা আবদুল্লাহ", role: "যুগ্ম আহবায়ক", img: "/images/team/abdullah.jpg" },
  { name: "আর এস রাশেদ", role: "যুগ্ম আহবায়ক", img: "/images/team/rs_rashed.jpg" },
  { name: "মাওলানা নাজমুস সাকিব", role: "কার্যকরী সদস্য", img: "/images/team/sakib.jpg" },
  { name: "ইঞ্জিনিয়ার শাকিল", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ তালহা আমিন তামিম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ জুবায়ের ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/jobair.jpg" },
  { name: "মোহাম্মদ রশিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ শহিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ শাহী", role: "কার্যকরী সদস্য", img: "/images/team/shahi.jpg" },
  { name: "মোহাম্মদ জাহিদ সরকার", role: "কার্যকরী সদস্য", img: "/images/team/zs_jahid.jpg" },
  { name: "মোহাম্মদ ফয়সাল", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ হালিম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ রাকিবুল হাসান", role: "কার্যকরী সদস্য", img: "/images/team/rakib.jpg" }
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
