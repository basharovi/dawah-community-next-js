import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
  const images = [
    "/images/carousel/slide1.jpg",
    "/images/carousel/slide2.jpg",
    "/images/carousel/slide3.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">গ্যালারি</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`ছবি ${index + 1}`} className="w-full h-100 rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
