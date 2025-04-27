import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    {
      src: "/images/carousel/slide1.jpg",
      alt: "ইসরায়েলি পণ্য বয়কট সচেতনতামূলক ক্যাম্পেইন",
      caption: "প্রোজেক্ট-০০১: ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারে সচেতনতা কর্মসূচি"
    },
    {
      src: "/images/carousel/slide2.jpg",
      alt: "সদস্যদের সভা",
      caption: "দাওয়াহ কমিউনিটি গোবিন্দগঞ্জের সভা"
    },
    {
      src: "/images/carousel/slide3.jpg",
      alt: "কমিউনিটি কার্যক্রম",
      caption: "গোবিন্দগঞ্জ এলাকায় কমিউনিটি কার্যক্রম"
    }
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 inline-block relative">
            গ্যালারি
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2"></span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            আমাদের কার্যক্রমের কিছু মুহূর্ত
          </p>
        </motion.div>
        
        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            className="rounded-xl shadow-xl overflow-hidden"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-[400px] object-cover cursor-pointer" 
                  onClick={() => openLightbox(img.src)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <p className="text-center">{img.caption}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        {/* Thumbnail Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-40 object-cover" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-xl focus:outline-none"
            onClick={closeLightbox}
          >
            <FaTimes size={24} />
          </button>
          <img 
            src={currentImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain" 
          />
        </div>
      )}
    </section>
  );
}
