"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import "./css/history-custom-pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { cn } from "./utils/cn";
import { useI18n } from "@/locales/client";

const HistorySwiper = () => {
  const t = useI18n();
  const sliderRef = useRef<any>(null);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  const onSlideChange = (e: any) => {
    setCurrentHistoryIndex(e.snapIndex);
  };
  return (
    <Swiper
      className="size-full active:cursor-grabbing *:relative rounded-xl relative *:-z-10 group"
      modules={[Pagination]}
      speed={300}
      ref={sliderRef}
      onSlideChange={onSlideChange}
      pagination={{
        el: "#history_containerForBullets",
        type: "bullets",
        bulletClass: "history_swiper-custom-bullet",
        bulletActiveClass: "history_swiper-custom-bullet-active",
        clickable: true,
      }}
    >
      <SwiperSlide>
        <div className="flex flex-col lg:grid grid-cols-3 size-full">
          <h3 className="size-full bg-neutral-100 text-center pt-16 pb-5 px-3 leading-[2] relative h-fit lg:h-full">
            <span className="absolute top-0 left-0 text-center w-full py-2 bg-black text-white">
              {t("routes.sm101.history.contents.title")}
            </span>
            {t("routes.sm101.history.contents.0")}
          </h3>
          <div className="flex flex-col overflow-auto row-span-4 lg:row-span-1 lg:col-span-2 max-h-[700px] *:lg:ml-3 pb-16 lg:pb-10">
            <div className="py-3 bg-neutral-200 px-3 text-center sticky w-full z-10 -top-[1px] !ml-0">
              {t("routes.sm101.history.related_materials")}
            </div>
            <div className="relative min-h-[500px] md:min-h-[700px] mt-1">
              <Image
                src="/resources/image/sm101/8.png"
                alt="2010년 노바티스와 스크립트 연구소에 의하여 StemRegenin-1 약물에 대한 연구개발 결과가 Science에 보고됨​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
            <hr className="my-10" />
            <div className="relative flex justify-center items-center pt-5 pb-16">
              <Image
                className="size-[300px] sm:w-[500px]"
                src="/resources/image/sm101/9.png"
                alt="2010년 노바티스와 스크립트 연구소에 의하여 StemRegenin-1 약물에 대한 연구개발 결과가 Science에 보고됨​"
                height={300}
                width={500}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:grid grid-cols-3 size-full">
          <h3 className="size-full bg-neutral-100 text-center pt-16 pb-5 px-3 leading-[2] relative h-fit lg:h-full">
            <span className="absolute top-0 left-0 text-center w-full py-2 bg-black text-white">
              {t("routes.sm101.history.contents.title")}
            </span>
            {t("routes.sm101.history.contents.1")}
          </h3>
          <div className="flex flex-col overflow-auto row-span-4 lg:row-span-1 lg:col-span-2 max-h-[700px] *:lg:ml-3 pb-16 lg:pb-10">
            <div className="py-3 bg-neutral-200 px-3 text-center sticky w-full z-10 -top-[1px] !ml-0">
              {t("routes.sm101.history.related_materials")}
            </div>
            <div className="relative min-h-[400px] md:min-h-[700px] mt-1">
              <Image
                src="/resources/image/sm101/10.png"
                alt="이후 2013~2016년 유의미한 결과들을 바탕으로 임상결과를 보고. 이후 결과가 없어 해당 내용 상세 검색결과​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
            <hr className="my-10" />
            <div className="relative min-h-[500px] lg:min-h-[700px]">
              <Image
                src="/resources/image/sm101/11.png"
                alt="이후 2013~2016년 유의미한 결과들을 바탕으로 임상결과를 보고. 이후 결과가 없어 해당 내용 상세 검색결과​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:grid grid-cols-3 size-full">
          <h3 className="size-full bg-neutral-100 text-center pt-16 pb-5 px-3 leading-[2] relative h-fit lg:h-full">
            <span className="absolute top-0 left-0 text-center w-full py-2 bg-black text-white">
              {t("routes.sm101.history.contents.title")}
            </span>
            {t("routes.sm101.history.contents.2")}
          </h3>
          <div className="flex flex-col overflow-auto row-span-4 lg:row-span-1 lg:col-span-2 max-h-[700px] *:lg:ml-3 pb-16 lg:pb-10">
            <div className="py-3 bg-neutral-200 px-3 text-center sticky w-full z-10 -top-[1px] !ml-0">
              {t("routes.sm101.history.related_materials")}
            </div>
            <div className="relative min-h-[500px] md:min-h-[700px] mt-1">
              <Image
                src="/resources/image/sm101/12.png"
                alt="이후 노바티스에서 Megenta Therapeutics에 License-out을 통하여 MGTA-456 이름으로 연구를 지속함​​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
            <hr className="my-10" />
            <div className="relative min-h-[250px] lg:min-h-[500px]">
              <Image
                src="/resources/image/sm101/13.png"
                alt="이후 노바티스에서 Megenta Therapeutics에 License-out을 통하여 MGTA-456 이름으로 연구를 지속함​​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
            <hr className="my-10" />
            <div className="relative min-h-[500px] md:min-h-[700px]">
              <Image
                src="/resources/image/sm101/14.png"
                alt="이후 노바티스에서 Megenta Therapeutics에 License-out을 통하여 MGTA-456 이름으로 연구를 지속함​​"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 600px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div id="history_containerForBullets"></div>
      <div className="!absolute lg:top-0 bottom-0 lg:my-auto flex justify-between !z-10 w-full h-fit lg:opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none *:py-3 *:px-4 *:lg:py-4 *:lg:px-5 *:cursor-pointer *:rounded-full *:border-transparent *:border *:bg-blue-500 *:text-white *:pointer-events-auto *:transition-colors">
        <div
          className={cn(
            "relative left-1",
            currentHistoryIndex === 0 &&
              "!bg-white !text-black !border-neutral-200"
          )}
          onClick={handlePrev}
        >
          <FontAwesomeIcon className="text-lg" icon={faArrowLeft} />
        </div>
        <div
          className={cn(
            "relative right-1",
            currentHistoryIndex === 2 &&
              "!bg-white !text-black !border-neutral-200"
          )}
          onClick={handleNext}
        >
          <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
        </div>
      </div>
    </Swiper>
  );
};

export default HistorySwiper;
