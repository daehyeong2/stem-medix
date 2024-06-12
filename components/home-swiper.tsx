"use client";

import Image from "next/image";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useI18n } from "@/locales/client";

import "./custom-pagination.css";

const HomeSwiper = () => {
  const t = useI18n();
  return (
    <div className="section h-screen" data-anchor="main">
      <Swiper
        className="size-full active:cursor-grabbing"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        speed={300}
        loop
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
      >
        <SwiperSlide className="!flex items-center gap-3 px-5 lg:px-[88px]">
          <Image
            className="object-cover object-[35%] -z-10 blur-[2px]"
            src="/resources/image/home-background1.png"
            alt="home-background"
            fill
          />
          <div className="flex flex-col gap-3 lg:backdrop-blur-sm rounded-md p-2">
            <h1 className="text-4xl leading-[1.5] md:text-[3.2rem] font-bold bg-gradient-to-r from-[#096272] to-[#1b9ed6] bg-clip-text text-transparent w-fit pointer-events-none">
              {t("routes.home.sliders.main.title")}
            </h1>
            <p className="md:text-[22px] md:leading-[1.2] pointer-events-none max-w-[1000px]">
              {t("routes.home.sliders.main.description")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex items-center gap-3 px-5 lg:px-[88px]">
          <Image
            className="object-cover object-[35%] -z-10 blur-[2px]"
            src="/resources/image/home-background2.png"
            alt="home-background"
            fill
          />
          <div className="flex flex-col gap-3 lg:backdrop-blur-sm rounded-lg p-2">
            <h1 className="text-4xl leading-[1.5] md:text-[3.2rem] font-bold bg-gradient-to-r from-[#096272] to-[#1b9ed6] bg-clip-text text-transparent w-fit pointer-events-none">
              {t("routes.home.sliders.main_field.title")}
            </h1>
            <p className="md:text-[22px] md:leading-[1.2] pointer-events-none max-w-[1000px]">
              {t("routes.home.sliders.main_field.description")}
            </p>
          </div>
        </SwiperSlide>
        <div id="containerForBullets"></div>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
