"use client";

import Image from "next/image";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSwiper = () => {
  return (
    <>
      <Swiper
        className="h-screen active:cursor-grabbing"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={300}
        loop
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="relative">
          <Image
            className="object-cover object-center"
            src="/resources/image/home-background.png"
            alt="home-background"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            className="object-cover object-center"
            src="/resources/image/home-background.png"
            alt="home-background"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            className="object-cover object-center"
            src="/resources/image/home-background.png"
            alt="home-background"
            fill
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSwiper;
