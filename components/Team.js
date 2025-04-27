import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter, FaUserFriends, FaQuoteLeft } from "react-icons/fa";

const teamMembers = [
  { 
    name: "ইঞ্জিনিয়ার বাশার অভি", 
    role: "আহবায়ক", 
    img: "/images/team/ovi.jpg",
    bio: "Senior Software Engineer, Cantaloupe Inc.",
    social: [
      { type: "facebook", url: "https://facebook.com/profile.php?id=61572597789762" },
    ] 
  },
  { 
    name: "আবু সাঈদ সজিব", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/sajib.jpg",
    bio: "B.A in Sociology , University of Rajshahi",
    social: [
      { type: "facebook", url: "https://www.facebook.com/profile.php?id=100083046170593" },
    ]
  },
  { 
    name: "মাওলানা আবদুল্লাহ", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/abdullah.jpg",
    bio: "B.A in Islamic Studies, University of Dhaka",
    social: [
      { type: "facebook", url: "https://facebook.com/profile.php?id=100053769850584" },
    ]
  },
  { 
    name: "আর এস রাশেদ",
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/rs_rashed.jpg",
    bio: "Vounteer | University Admission Candidate",
    social: [
      { type: "facebook", url: "https://facebook.com/rsrashed2021" },
    ]
  },
  { 
    name: "মাওলানা নাজমুস সাকিব", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/sakib.jpg",
    bio: "ইসলামী শিক্ষায় শিক্ষিত।",
    social: [
      { type: "facebook", url: "https://facebook.com/" },
    ]
  },
  { 
    name: "ইঞ্জিনিয়ার শাকিল", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/no_image.jpg",
    bio: "ইঞ্জিনিয়ারিং গ্রাজুয়েট, সক্রিয় সমাজসেবক।",
    social: []
  },
  { 
    name: "মোহাম্মদ তালহা আমিন তামিম", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/no_image.jpg",
    bio: "উদ্যোক্তা ও সমাজসেবক।",
    social: []
  },
  { 
    name: "মোহাম্মদ জুবায়ের ইসলাম", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/jobair.jpg",
    bio: "ইসলামী কার্যক্রমে আগ্রহী ও সক্রিয়।",
    social: []
  },
  // Additional members can remain abbreviated
  { name: "মোহাম্মদ রশিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ শহিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ শাহী", role: "কার্যকরী সদস্য", img: "/images/team/shahi.jpg" },
  { name: "মোহাম্মদ জাহিদ সরকার", role: "কার্যকরী সদস্য", img: "/images/team/zs_jahid.jpg" },
  { name: "মোহাম্মদ ফয়সাল", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ হালিম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg" },
  { name: "মোহাম্মদ রাকিবুল হাসান", role: "কার্যকরী সদস্য", img: "/images/team/rakib.jpg" }
];

export default function Team() {
  const getSocialIcon = (type) => {
    switch(type) {
      case 'facebook': return <FaFacebook />;
      case 'twitter': return <FaTwitter />;
      case 'linkedin': return <FaLinkedin />;
      default: return null;
    }
  };

  return (
    <section id="team" className="py-20 bg-white relative arabesque-overlay">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-islamic-green-100 filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-islamic-blue-100 filter blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1 bg-islamic-green-100 rounded-full">
            <FaUserFriends className="text-islamic-green-600 mr-2" size={16} />
            <span className="text-sm font-medium text-islamic-green-700">আমাদের সদস্যবৃন্দ</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 font-title text-islamic-green-800">আমাদের টিম</h2>
          
          <div className="h-1 w-20 bg-islamic-gold-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            আমাদের দক্ষ ও নিবেদিতপ্রাণ সদস্যরা সমাজের উন্নয়নে কাজ করে যাচ্ছেন
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center bg-islamic-green-50 rounded-lg p-8 shadow-sm relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-islamic-green-100 rounded-full w-10 h-10 flex items-center justify-center">
              <FaQuoteLeft className="text-islamic-green-600" />
            </div>
            <p className="text-lg italic text-gray-700 mb-4">
              "সবচেয়ে উত্তম ব্যক্তি সেই, যে মানুষের জন্য সবচেয়ে উপকারী।"
            </p>
            <p className="text-right text-islamic-green-700 font-medium">- হাদিস শরীফ</p>
          </div>
        </motion.div>

        {/* Leaders Section - featured prominently */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-center mb-10 text-islamic-green-800 inline-block relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            আহবায়ক ও যুগ্ম আহবায়কবৃন্দ
          </motion.h3>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 text-center relative">
                  {/* Role badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-islamic-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mt-3">{member.name}</h4>
                  {member.bio && <p className="text-gray-600 text-sm mt-2">{member.bio}</p>}
                  
                  {member.social && member.social.length > 0 && (
                    <div className="flex justify-center space-x-3 mt-4">
                      {member.social.map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-islamic-green-600 hover:bg-islamic-green-100 hover:text-islamic-green-700 transition-all duration-300"
                        >
                          {getSocialIcon(social.type)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Members Section */}
        <div>
          <motion.h3 
            className="text-2xl font-semibold text-center mb-10 text-islamic-green-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            কার্যকরী সদস্যবৃন্দ
          </motion.h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {teamMembers.slice(4).map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3, backgroundColor: "white" }}
              >
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-islamic-green-400 to-islamic-blue-400 opacity-40 blur-sm transform -translate-x-1 -translate-y-1"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="h-24 w-24 rounded-full object-cover relative border-2 border-white shadow-md"
                  />
                </div>
                <h4 className="text-base font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-islamic-green-600 font-medium mt-1">{member.role}</p>
                {member.bio && <p className="text-gray-600 text-xs mt-2">{member.bio}</p>}
                
                {member.social && member.social.length > 0 && (
                  <div className="flex justify-center space-x-2 mt-3">
                    {member.social.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-islamic-green-600 hover:bg-islamic-green-100 hover:text-islamic-green-700 transition-all duration-300 text-sm"
                      >
                        {getSocialIcon(social.type)}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Islamic Divider */}
      <div className="container mx-auto px-4 mt-16">
        <div className="islamic-divider"></div>
      </div>
    </section>
  );
}
