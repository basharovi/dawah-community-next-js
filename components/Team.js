import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const teamMembers = [
  { 
    name: "ইঞ্জিনিয়ার বাশার অভি", 
    role: "আহবায়ক", 
    img: "/images/team/ovi.jpg",
    bio: "কম্পিউটার ইঞ্জিনিয়ারিং থেকে গ্রাজুয়েট। ইসলামী সমাজ গঠনে আগ্রহী।",
    social: [
      { type: "facebook", url: "https://facebook.com/" },
    ] 
  },
  { 
    name: "আবু সাঈদ সজিব", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/sajib.jpg",
    bio: "ইসলামী চিন্তাবিদ ও সমাজসেবক।",
    social: [
      { type: "facebook", url: "https://facebook.com/" },
    ]
  },
  { 
    name: "মাওলানা আবদুল্লাহ", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/abdullah.jpg",
    bio: "ইসলামী শিক্ষায় শিক্ষিত, কুরআন-হাদিসের গবেষক।",
    social: [
      { type: "facebook", url: "https://facebook.com/" },
    ]
  },
  { 
    name: "আর এস রাশেদ", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/rs_rashed.jpg",
    bio: "সমাজসেবায় অঙ্গীকারবদ্ধ।",
    social: [
      { type: "facebook", url: "https://facebook.com/" },
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
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 inline-block relative">
            আমাদের টিম
            <span className="block h-1 w-24 bg-green-500 mx-auto mt-2"></span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            আমাদের দক্ষ ও নিবেদিতপ্রাণ সদস্যরা সমাজের উন্নয়নে কাজ করে যাচ্ছেন
          </p>
        </motion.div>

        {/* Leaders Section - featured prominently */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-center mb-6 text-gray-700">আহবায়ক ও যুগ্ম আহবায়কবৃন্দ</h4>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  {member.bio && <p className="text-gray-600 text-sm mb-3">{member.bio}</p>}
                  
                  {member.social && member.social.length > 0 && (
                    <div className="flex justify-center space-x-3 mt-2">
                      {member.social.map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition"
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
          <h4 className="text-xl font-semibold text-center mb-6 text-gray-700">কার্যকরী সদস্যবৃন্দ</h4>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {teamMembers.slice(4).map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-white hover:shadow-md transition duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="h-24 w-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="text-base font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                {member.bio && <p className="text-gray-600 text-xs mt-1">{member.bio}</p>}
                
                {member.social && member.social.length > 0 && (
                  <div className="flex justify-center space-x-2 mt-2">
                    {member.social.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition text-sm"
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
    </section>
  );
}
