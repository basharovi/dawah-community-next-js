import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter, FaUserFriends, FaQuoteLeft } from "react-icons/fa";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const q = query(collection(db, "team"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        // If no data in Firebase yet, use default static data as backup
        if (querySnapshot.empty) {
          setTeamMembers(defaultTeamMembers);
        } else {
          const data = querySnapshot.docs.map(doc => {
            const memberData = doc.data();
            
            // Handle Firebase Storage URLs to prevent CORS issues
            if (memberData.img && memberData.img.includes('firebasestorage.googleapis.com')) {
              const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
              if (isLocalhost) {
                memberData.img = `/api/cors-proxy?url=${encodeURIComponent(memberData.img)}`;
              }
            }
            
            return {
              id: doc.id,
              ...memberData
            };
          });
          setTeamMembers(data);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
        // Fallback to static data if there's an error
        setTeamMembers(defaultTeamMembers);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  const getSocialIcon = (type) => {
    switch(type) {
      case 'facebook': return <FaFacebook />;
      case 'twitter': return <FaTwitter />;
      case 'linkedin': return <FaLinkedin />;
      default: return null;
    }
  };

  // Get leaders (first 4 members based on role)
  const leaders = teamMembers.filter(member => 
    member.role === "আহবায়ক" || member.role === "যুগ্ম আহবায়ক"
  ).slice(0, 4);
  
  // Get the rest of the members
  const otherMembers = teamMembers.filter(member => 
    member.role !== "আহবায়ক" && member.role !== "যুগ্ম আহবায়ক"
  );

  // Safe image URL handler
  const getSafeImageUrl = (url) => {
    if (!url) return "/images/team/no_image.jpg";
    
    // Already proxied or local image
    if (url.startsWith('/api/') || url.startsWith('/images/')) {
      return url;
    }
    
    // Firebase Storage URL that needs proxying
    if (url.includes('firebasestorage.googleapis.com')) {
      const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
      if (isLocalhost) {
        return `/api/cors-proxy?url=${encodeURIComponent(url)}`;
      }
    }
    
    return url;
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

        {/* Leaders Section - featured prominently */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-center mb-10 text-islamic-green-800 inline-block relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            কার্যনির্বাহী প্যানেল
          </motion.h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {loading ? (
              <div className="col-span-4 text-center py-10">Loading team members...</div>
            ) : (
              leaders.map((member, index) => (
                <motion.div 
                  key={member.id || index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-60 sm:h-52 md:h-60 overflow-hidden relative">
                    <Image 
                      src={getSafeImageUrl(member.img)} 
                      alt={member.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/team/no_image.jpg";
                      }}
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
              ))
            )}
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
            {loading ? (
              <div className="col-span-4 text-center py-10">Loading team members...</div>
            ) : (
              otherMembers.map((member, index) => (
                <motion.div 
                  key={member.id || index}
                  className="bg-gray-50 p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -3, backgroundColor: "white" }}
                >
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-islamic-green-400 to-islamic-blue-400 opacity-40 blur-sm transform -translate-x-1 -translate-y-1"></div>
                    <div className="relative h-20 w-20">
                      <Image 
                        src={getSafeImageUrl(member.img)}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-full border-2 border-white"
                        onError={(e) => {
                          e.target.src = "/images/team/no_image.jpg";
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="text-gray-800 font-medium">{member.name}</h5>
                  <p className="text-sm text-islamic-green-600 mt-1">{member.role}</p>
                  
                  {member.social && member.social.length > 0 && (
                    <div className="flex justify-center space-x-2 mt-3">
                      {member.social.map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-islamic-green-600 transition-colors duration-300"
                        >
                          {getSocialIcon(social.type)}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))
            )}
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

// Default static data for fallback
const defaultTeamMembers = [
  { 
    id: "1",
    name: "ইঞ্জিনিয়ার বাশার অভি", 
    role: "আহবায়ক", 
    img: "/images/team/ovi.jpg",
    bio: "Senior Software Engineer, Cantaloupe Inc.",
    social: [
      { type: "facebook", url: "https://facebook.com/profile.php?id=61572597789762" },
    ] 
  },
  { 
    id: "2",
    name: "আবু সাঈদ সজিব", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/sajib.jpg",
    bio: "B.A in Sociology , University of Rajshahi",
    social: [
      { type: "facebook", url: "https://www.facebook.com/profile.php?id=100083046170593" },
    ]
  },
  { 
    id: "3",
    name: "মাওলানা আবদুল্লাহ", 
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/abdullah.jpg",
    bio: "B.A in Islamic Studies, University of Dhaka",
    social: [
      { type: "facebook", url: "https://facebook.com/profile.php?id=100053769850584" },
    ]
  },
  { 
    id: "4",
    name: "আর এস রাশেদ",
    role: "যুগ্ম আহবায়ক", 
    img: "/images/team/rs_rashed.jpg",
    bio: "Vounteer | University Admission Candidate",
    social: [
      { type: "facebook", url: "https://facebook.com/rsrashed2021" },
    ]
  },
  { 
    id: "5",
    name: "মাওলানা নাজমুস সাকিব", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/sakib.jpg",
    bio: "",
    social: []
  },
  { 
    id: "6",
    name: "ইঞ্জিনিয়ার শাকিল", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/shakil.jpg",
    bio: "",
    social: []
  },
  { 
    id: "7",
    name: "মোহাম্মদ তালহা আমিন তামিম", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/tamim.jpg",
    bio: "",
    social: []
  },
  { 
    id: "8",
    name: "মোহাম্মদ জুবায়ের ইসলাম", 
    role: "কার্যকরী সদস্য", 
    img: "/images/team/jobair.jpg",
    bio: "",
    social: []
  },
  { id: "9", name: "মোহাম্মদ রশিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg", social: [] },
  { id: "10", name: "মোহাম্মদ শহিদুল ইসলাম", role: "কার্যকরী সদস্য", img: "/images/team/shahidullah.jpg", social: [] },
  { id: "11", name: "মোহাম্মদ শাহী", role: "কার্যকরী সদস্য", img: "/images/team/shahi.jpg", social: [] },
  { id: "12", name: "মোহাম্মদ জাহিদ সরকার", role: "কার্যকরী সদস্য", img: "/images/team/zs_jahid.jpg", social: [] },
  { id: "13", name: "মোহাম্মদ ফয়সাল", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg", social: [] },
  { id: "14", name: "মোহাম্মদ হালিম", role: "কার্যকরী সদস্য", img: "/images/team/no_image.jpg", social: [] },
  { id: "15", name: "মোহাম্মদ রাকিবুল হাসান", role: "কার্যকরী সদস্য", img: "/images/team/rakib.jpg", social: [] }
];
