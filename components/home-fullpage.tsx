"use client";

import ReactFullpage, { Item, fullpageApi } from "@fullpage/react-fullpage";
import { useRecoilState } from "recoil";
import { pageIndexAtom } from "./atoms";
import Image from "next/image";
import HomeSwiper from "./home-swiper";
import { cn } from "./utils/cn";

interface Credits {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
}

const CustomNavigation = ({
  pageIndex,
  fullpageApi,
  sections,
}: {
  pageIndex: number;
  fullpageApi: fullpageApi;
  sections: string[];
}) => {
  return (
    <div
      className={cn(
        "opacity-100 hidden lg:flex items-center fixed left-4 top-0 bottom-0 my-auto z-20 transition-opacity pointer-events-auto",
        sections.length - 1 < pageIndex && "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute top-0 left-[10px] h-full w-[1px] bg-neutral-700" />
      <ul className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <li
            className={cn(
              `relative cursor-pointer rounded-full size-5 border border-neutral-700 border-solid flex justify-center items-center group transition-margin duration-300`,
              pageIndex === index &&
                (pageIndex === 0
                  ? "mb-7"
                  : pageIndex === sections.length - 1
                  ? "mt-7"
                  : "my-7")
            )}
            key={index}
            onClick={() => {
              fullpageApi.moveTo(section);
            }}
          >
            <div className="size-2 rounded-full bg-neutral-700" />
            <span
              className={cn(
                "absolute left-7 -top-1 text-neutral-700 opacity-0 w-0 pointer-events-none group-hover:w-fit group-hover:opacity-100 transition-opacity duration-100",
                pageIndex === index && "w-fit opacity-100 pointer-events-auto"
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
  const sections = ["main", "red", "blue", "white"];
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexAtom);
  const credits: Credits = {
    enabled: true,
    position: "right",
  };
  const onLeave = (origin: Item, destination: Item) => {
    setPageIndex(destination.index);
  };
  return (
    <ReactFullpage
      licenseKey={"OPEN-SOURCE-GPLV3 -LICENSE"}
      credits={credits}
      onLeave={onLeave}
      scrollingSpeed={700}
      scrollOverflow={false}
      scrollBar
      render={({ fullpageApi }) => {
        return (
          <>
            <CustomNavigation
              sections={sections}
              pageIndex={pageIndex}
              fullpageApi={fullpageApi}
            />
            <ReactFullpage.Wrapper>
              <HomeSwiper />
              <div className="section bg-red-500" data-anchor="red" />
              <div className="section bg-blue-500" data-anchor="blue" />
              <div className="section bg-white" data-anchor="white" />
              <footer
                className="section !h-40 !min-h-40 bg-neutral-400"
                data-anchor="footer"
              />
              <Image
                className={cn(
                  "fixed right-7 bottom-7 bg-white rounded-xl cursor-pointer opacity-100 pointer-events-auto transition-opacity border border-solid border-neutral-300 z-10",
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
