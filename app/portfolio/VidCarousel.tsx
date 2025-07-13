"use client";

import React from "react";
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

interface VideoItem {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
}

interface VidCarouselProps {
  videos: VideoItem[];
  className?: string;
}

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

// Function to get YouTube embed URL
const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export default function VidCarousel({ videos, className = "" }: VidCarouselProps) {
  return (
    <div className={`w-full max-w-6xl px-4 mb-8 mx-auto ${className}`}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
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
        {videos.map((video) => {
          const videoId = getYouTubeVideoId(video.youtubeUrl);
          const embedUrl = getYouTubeEmbedUrl(videoId);
          const thumbnailUrl = video.thumbnail || getYouTubeThumbnail(videoId);

          return (
            <SwiperSlide key={video.id} className="w-full">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[12px] overflow-hidden">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  className="w-full h-full rounded-[12px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-sm md:text-base font-semibold truncate">
                    {video.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

// Example usage:
// const sampleVideos = [
//   {
//     id: "1",
//     title: "Sample Video 1",
//     youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: "2", 
//     title: "Sample Video 2",
//     youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
//   },
//   // Add more videos as needed
// ];
