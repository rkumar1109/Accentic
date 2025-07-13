import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const adsImages = [
  {
    id: 1,
    label: "B21-1",
    imgURL: "/logos/b21-1.jpeg",
  },
  {
    id: 2,
    label: "Amedore",
    imgURL: "/logos/Amedore.jpg",
  },
  {
    id: 3,
    label: "B21-2",
    imgURL: "/logos/b21-2.jpeg",
  },
  {
    id: 4,
    label: "B21",
    imgURL: "/logos/B21.png",
  },
  {
    id: 5,
    label: "CLSSYDINE",
    imgURL: "/logos/CLSSYDINE.jpg",
  },
];

export default function SwiperCarousel({}) {
  return (
    <div className="w-full h-full max-w-4xl px-4 mb-8 mx-auto">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="rounded-[12px] shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
      >
        {adsImages.map((img) => (
          <SwiperSlide key={img.id} className="w-72">
            <img
              src={img.imgURL}
              alt={`slide-${img.label}`}
              className="w-[380px] h-[400px] rounded-[12px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { imgArray } from "./page";

// export default function SwiperCarousel({}) {
//   return (
//     <div className="w-96 h-full ml-[30%] px-8 mb-8">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="rounded-[12px] shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
//       >
//         {imgArray.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={img}
//               className="w-full h-[400px] object-cover rounded-[12px]"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
