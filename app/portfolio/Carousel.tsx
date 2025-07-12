import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgArray } from "./page";


export default function SwiperCarousel({}) {
  return (
    <div style={{ width: "100%", padding: "0 2rem", marginBottom: "2rem" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={img}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
