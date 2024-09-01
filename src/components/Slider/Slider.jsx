import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import the modules directly from 'swiper'
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      pagination={{ clickable: true }} // Add pagination with clickable bullets
      autoplay={{ delay: 3000 }} // Autoplay with 3 seconds delay
      loop={true}
      modules={[Pagination, Autoplay]} // Include the necessary modules
      className="mySwiper w-20" // Add a class for custom styling if needed
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
