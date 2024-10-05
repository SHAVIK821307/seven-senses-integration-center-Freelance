// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { slides } from "../assets/assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/scrollbar";

import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="w-full md:rounded-lg" src={image} alt="" />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
