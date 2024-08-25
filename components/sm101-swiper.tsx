"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import "./css/sm101-custom-pagination.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SM101Swiper = () => {
  const sliderRef = useRef<any>(null);
  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  return (
    <Swiper
      ref={sliderRef}
      className="size-full active:cursor-grabbing *:relative rounded-xl border-neutral-200 border relative *:-z-10 group"
      modules={[Pagination, Autoplay]}
      speed={300}
      loop
      autoplay={{
        delay: 5000,
      }}
      pagination={{
        el: "#sm101_containerForBullets",
        type: "bullets",
        bulletClass: "sm101_swiper-custom-bullet",
        bulletActiveClass: "sm101_swiper-custom-bullet-active",
        clickable: true,
      }}
    >
      <SwiperSlide>
        <Image
          src="/resources/image/sm101/5.png"
          alt="SM-102(SR-1 NP) 그룹에서 혈관신생 / 골재생의 효능 검증"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1920px) 850px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center h-full pb-16">
          <div className="h-80 md:h-full w-full relative">
            <Image
              src="/resources/image/sm101/6.png"
              alt="SM-102(SR-1 NP) 그룹에서 혈관신생 / 골재생의 효능 검증"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1920px) 850px"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center h-full pb-16">
          <div className="h-56 md:h-80 lg:h-full w-full relative">
            <Image
              src="/resources/image/sm101/7.tiff"
              alt="SM-102(SR-1 NP) 그룹에서 혈관신생 / 골재생의 효능 검증"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1920px) 850px"
            />
          </div>
        </div>
      </SwiperSlide>
      <div
        id="sm101_containerForBullets"
        className="lg:opacity-0 transition-opacity group-hover:opacity-100 duration-300"
      ></div>
      <div className="!absolute lg:top-0 bottom-8 lg:my-auto flex justify-between !z-10 w-full h-fit lg:opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none *:py-3 *:px-4 *:lg:py-4 *:lg:px-5 *:cursor-pointer *:rounded-full *:border-transparent *:border *:bg-blue-500 *:text-white *:pointer-events-auto *:transition-colors">
        <div className="relative left-1" onClick={handlePrev}>
          <FontAwesomeIcon className="text-lg" icon={faArrowLeft} />
        </div>
        <div className="relative right-1" onClick={handleNext}>
          <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
        </div>
      </div>
    </Swiper>
  );
};

export default SM101Swiper;
