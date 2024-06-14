"use client";

import ReactFullpage, { Item, fullpageApi } from "@fullpage/react-fullpage";
import { useRecoilState } from "recoil";
import { pageIndexAtom } from "./atoms";
import Image from "next/image";
import HomeSwiper from "./home-swiper";
import { cn } from "./utils/cn";
import Link from "next/link";

interface Credits {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
}

const CustomNavigation = ({
  pageIndex,
  fullpageApi,
  sections,
  isWhiteSection,
}: {
  pageIndex: number;
  fullpageApi: fullpageApi;
  sections: string[];
  isWhiteSection: boolean;
}) => {
  return (
    <div
      className={cn(
        "opacity-100 hidden lg:flex items-center fixed left-4 top-0 bottom-0 my-auto z-20 transition-opacity pointer-events-auto",
        sections.length - 1 < pageIndex && "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-[10px] h-full w-[1px] bg-neutral-700/80",
          isWhiteSection && "bg-white"
        )}
      />
      <ul className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <li
            className={cn(
              `relative cursor-pointer rounded-full size-5 border border-neutral-700/80 border-solid flex justify-center items-center group transition-margin duration-300`,
              pageIndex === index &&
                (pageIndex === 0
                  ? "mb-7"
                  : pageIndex === sections.length - 1
                  ? "mt-7"
                  : "my-7"),
              isWhiteSection && "border-white"
            )}
            key={index}
            onClick={() => {
              fullpageApi.moveTo(section);
            }}
          >
            <div
              className={cn(
                "size-2 rounded-full bg-neutral-700/80",
                isWhiteSection && "bg-white"
              )}
            />
            <span
              className={cn(
                "absolute left-7 -top-1 text-neutral-700/80 opacity-0 w-0 pointer-events-none group-hover:w-max group-hover:opacity-100 transition-opacity duration-100",
                pageIndex === index && "w-max opacity-100 pointer-events-auto",
                isWhiteSection && "text-white"
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HomeFullpage = () => {
  const sections = ["main", "company", "technology"];
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexAtom);
  const credits: Credits = {
    enabled: true,
    position: "right",
  };
  const onLeave = (origin: Item, destination: Item) => {
    setPageIndex(destination.index);
  };
  const whiteSections = [1];
  const isWhiteSection = whiteSections.includes(pageIndex);
  return (
    <ReactFullpage
      licenseKey={"OPEN-SOURCE-GPLV3 -LICENSE"}
      credits={credits}
      onLeave={onLeave}
      scrollingSpeed={700}
      scrollOverflow={false}
      scrollBar
      responsiveWidth={1024}
      render={({ fullpageApi }) => {
        return (
          <>
            <CustomNavigation
              sections={sections}
              pageIndex={pageIndex}
              fullpageApi={fullpageApi}
              isWhiteSection={isWhiteSection}
            />
            <ReactFullpage.Wrapper>
              <HomeSwiper />
              <div
                className="section flex flex-col gap-14 py-16 box-border justify-center items-center !min-h-80 h-fit lg:h-screen relative text-white"
                data-anchor="company"
              >
                <Image
                  className="-z-10 blur-sm brightness-75 object-cover object-center"
                  src="/resources/image/building.png"
                  fill
                  alt="building"
                />
                <div className="flex flex-col gap-5 px-5">
                  <span className="font-bold lg:text-xl text-center">
                    C O M P A N Y
                  </span>
                  <h1 className="text-xl leading-[1.5] lg:text-[1.65rem] text-center font-extralight max-w-[690px]">
                    <span className="font-semibold text-sky-200">
                      Stem Medix
                    </span>
                    는 <span className="font-medium">줄기세포 치료제 개발</span>
                    ,{" "}
                    <span className="font-medium">
                      줄기세포 맞춤형 ​배양배지 산업
                    </span>
                    , <span className="font-medium">플랫폼 기술 제공</span>을
                    기반으로 하는 회사입니다.​
                  </h1>
                </div>
                <ul className="grid lg:grid-cols-2 gap-5 *:max-w-96 *:flex *:flex-col *:gap-3 *:p-5 *:rounded-lg *:border-neutral-700 *:border *:backdrop-blur-sm max-h-[420px] overflow-auto lg:max-h-none *:bg-gradient-to-r *:from-transparent *:via-[#5b9bfc7c] *:to-transparent *:transition-all *:bg-pos-0 *:bg-size-200 *:duration-300">
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">
                      성장 목표 (사업화 추진 전략)
                    </h2>
                    <Link
                      href="/goals"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      바로가기
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">연구 성과</h2>
                    <Link
                      href="/research-achievement"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      바로가기
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">파이프라인</h2>
                    <Link
                      href="/pipeline"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      바로가기
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">유효성 평가 서비스</h2>
                    <Link
                      href="/validation-service"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      바로가기
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">배양배지</h2>
                    <Link
                      href="/culture-medium"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      바로가기
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="section" data-anchor="technology" />
              <footer
                className="section !h-40 !min-h-40 bg-neutral-400"
                data-anchor="footer"
              />
              <Image
                className={cn(
                  "fixed right-7 bottom-7 bg-white rounded-xl cursor-pointer opacity-100 pointer-events-auto transition-opacity border border-solid border-neutral-300 z-10 animate-pulse duration-[80ms] hidden lg:block",
                  pageIndex > sections.length - 1 &&
                    "opacity-0 pointer-events-none"
                )}
                width={60}
                height={60}
                src="/resources/image/scroll-down.png"
                alt="scroll-down"
                onClick={fullpageApi?.moveSectionDown}
              />
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

export default HomeFullpage;
