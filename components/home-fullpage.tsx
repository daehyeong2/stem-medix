"use client";

import ReactFullpage, { Item, fullpageApi } from "@fullpage/react-fullpage";
import { useRecoilState } from "recoil";
import { pageIndexAtom } from "./atoms";
import Image from "next/image";
import HomeSwiper from "./home-swiper";
import { cn } from "./utils/cn";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { motion } from "framer-motion";

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
        "opacity-100 hidden lg:tall:flex items-center fixed left-4 top-0 bottom-0 my-auto z-20 transition-opacity pointer-events-auto",
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
              fullpageApi.moveTo(index === 2 ? "technology" : section);
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
                "absolute left-7 -top-1 opacity-0 w-max pointer-events-none group-hover:opacity-100 transition-all duration-200 max-w-24 text-white/[85%]",
                pageIndex === index &&
                  "text-neutral-800 group-hover:text-white/80 opacity-100 pointer-events-auto",
                pageIndex === 2 && "group-hover:text-neutral-700/80",
                isWhiteSection && "text-white group-hover:!text-white/[85%]"
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

const technologyBackgroundVariants = {
  initial: {
    transform: "rotate(0deg) translateX(-50px)",
  },
  animate: {
    transform: "rotate(6deg) translateX(0)",
    transition: {
      delay: 0.4,
    },
  },
};

const HomeFullpage = () => {
  const sections = ["main", "company", "technology & Product"];
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexAtom);
  const t = useI18n();
  const currentLocale = useCurrentLocale();
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
      responsiveHeight={700}
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
                className="section !flex flex-col gap-14 py-16 box-border justify-center items-center !min-h-20 lg:!min-h-[600px] h-fit lg:h-screen relative text-white"
                data-anchor="company"
              >
                <Image
                  className="-z-10 blur-sm brightness-75 object-cover"
                  src="/resources/image/building.png"
                  fill
                  alt="building"
                />
                <div className="flex flex-col gap-5 px-5">
                  <span className="font-bold lg:text-xl text-center">
                    C O M P A N Y
                  </span>
                  <h1
                    className={cn(
                      "text-xl leading-[1.5] lg:text-[1.65rem] text-center font-extralight max-w-[690px]",
                      currentLocale === "en" &&
                        "text-[1.15rem] lg:text-[1.25rem]"
                    )}
                  >
                    {currentLocale === "ko" ? (
                      <>
                        <span className="font-semibold text-sky-200">
                          Stem Medix
                        </span>
                        는{" "}
                        <span className="font-medium">
                          줄기세포 치료제 개발
                        </span>
                        ,{" "}
                        <span className="font-medium">
                          줄기세포 맞춤형 ​배양배지 산업
                        </span>
                        , <span className="font-medium">플랫폼 기술 제공</span>
                        을 기반으로 하는 회사입니다.​
                      </>
                    ) : (
                      <>
                        <span className="font-semibold text-sky-200">
                          Stem Medix
                        </span>{" "}
                        is ​​a company based on{" "}
                        <span className="font-medium">
                          the development of stem cell treatments
                        </span>
                        ,{" "}
                        <span className="font-medium">
                          the customized stem cell culture medium industry
                        </span>
                        , and{" "}
                        <span className="font-medium">
                          the provision of platform technology
                        </span>
                        .​
                      </>
                    )}
                  </h1>
                </div>
                <ul className="grid w-fit lg:grid-cols-2 gap-5 *:max-w-96 *:flex *:flex-col *:gap-3 *:p-5 *:rounded-lg *:border-neutral-700 *:border *:backdrop-blur-sm max-h-[450px] pb-3 overflow-auto lg:max-h-fit *:bg-gradient-to-r *:from-transparent *:via-[#5b9bfc7c] *:to-transparent *:transition-all *:bg-pos-0 *:bg-size-200 *:duration-300 *:w-72 px-3 bg-gradient-to-b from-transparent to-[#5b9bfc33] to-[99%] rounded-md lg:bg-none">
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">{t("cards.goals")}</h2>
                    <Link
                      href="/goals"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      {t("shortcut")}
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">
                      {t("cards.research_achievement")}
                    </h2>
                    <Link
                      href="/research-achievement"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      {t("shortcut")}
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">
                      {t("cards.pipeline")}
                    </h2>
                    <Link
                      href="/pipeline"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      {t("shortcut")}
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">
                      {t("cards.validation_service")}
                    </h2>
                    <Link
                      href="/validation-servi ce"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      {t("shortcut")}
                    </Link>
                  </li>
                  <li className="hover:bg-pos-60">
                    <h2 className="text-xl text-white">
                      {t("cards.culture_medium")}
                    </h2>
                    <Link
                      href="/culture-medium"
                      className="text-sm lg:text-base p-2 rounded-md bg-[#0984e3] w-fit"
                    >
                      {t("shortcut")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="section !grid lg:grid-cols-5 py-10 px-5 md:px-12 lg:p-0 !h-fit !min-h-fit lg:!h-screen"
                data-anchor="technology"
              >
                <div
                  className={cn(
                    "col-span-3 lg:pl-44 lg:pt-32 lg:opacity-0 transition-opacity duration-500 delay-500",
                    [2, 3].includes(pageIndex) && "!opacity-100"
                  )}
                >
                  <h1 className="text-base lg:text-[1.1rem] font-medium text-neutral-400 tracking-[0.25rem] mt-7">
                    T E C H N O L O G Y
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-light mt-3">
                    보다 전문적인 기술을
                    <br />
                    자랑하는 <span className="font-semibold">Stem Medix</span>
                  </h2>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-7 lg:gap-[2.1rem] mt-8 lg:mt-10 *:flex *:flex-col *:size-64 *:lg:w-48 *:lg:max-h-64 *:lgxl:size-56 *:xl:!size-64 *:rounded-3xl *:bg-[#eff3f7] *:px-7 *:pt-3 *:pb-7 *:relative overflow-auto lg:overflow-visible max-h-[600px] py-7 px-5 lg:p-0 lg:max-h-none">
                    <div className="group/techItem">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 group-hover/techItem:blur-md absolute top-0 left-0 size-full -z-10 rounded-3xl transition-[filter] duration-200" />
                      <span className="absolute left-4 top-1.5 text-[0.65rem] lg:text-[0.6rem] xl:text-[0.65rem]">
                        Image - Designed by{" "}
                        <a
                          target="_blank"
                          className="text-blue-500"
                          href="https://freepik.com"
                          rel="noopener noreferrer"
                        >
                          Freepik
                        </a>
                      </span>
                      <Image
                        className="lg:size-24 xl:size-[120px] relative -left-3 z-0 brightness-95"
                        src="/resources/image/plan.png"
                        height={120}
                        width={120}
                        alt="plan-image"
                      />
                      <h1 className="font-medium text-[1.33rem] lg:text-[1.1rem] xl:[1.33rem]">
                        파이프라인
                      </h1>
                      <p className="text-neutral-600 text-[15px] mt-1 z-10 lg:text-[12px] xl:text-[15px]">
                        기반 핵심 파이프라인
                      </p>
                      <Link
                        className="mt-auto relative -left-1 -bottom-2 w-fit px-2.5 py-1.5 lg:px-2 lg:py-1 lg:text-sm xl:px-2.5 xl:py-1.5 xl:text-base  bg-[#0984e3] text-white rounded-lg"
                        href="/pipeline"
                      >
                        바로가기
                      </Link>
                    </div>
                    <div className="group/techItem">
                      <div className="bg-gradient-to-r from-indigo-400 to-blue-400 group-hover/techItem:blur-md absolute top-0 left-0 size-full -z-10 rounded-3xl transition-[filter]" />
                      <span className="absolute left-4 top-1.5 text-[0.65rem] lg:text-[0.6rem] xl:text-[0.65rem]">
                        Image - Designed by{" "}
                        <a
                          target="_blank"
                          className="text-blue-500"
                          href="https://freepik.com"
                          rel="noopener noreferrer"
                        >
                          Freepik
                        </a>
                      </span>
                      <Image
                        className="lg:size-24 xl:size-[120px] relative -left-3 z-0 brightness-95"
                        src="/resources/image/cell.png"
                        height={120}
                        width={120}
                        alt="cell-image"
                      />
                      <h1 className="font-medium text-[1.33rem] lg:text-[1.1rem] xl:[1.33rem]">
                        SM-101(SR-1)
                      </h1>
                      <p className="text-neutral-600 text-[15px] mt-1 lg:text-[12px] xl:text-[15px]">
                        Stem Medix의 주요 기술
                      </p>
                      <Link
                        className="mt-auto relative -left-1 -bottom-2 w-fit px-2.5 py-1.5 lg:px-2 lg:py-1 lg:text-sm xl:px-2.5 xl:py-1.5 xl:text-base  bg-[#0984e3] text-white rounded-lg"
                        href="/sm-101"
                      >
                        바로가기
                      </Link>
                    </div>
                    <div className="group/techItem">
                      <div className="bg-gradient-to-r from-indigo-400 to-blue-400 group-hover/techItem:blur-md absolute top-0 left-0 size-full -z-10 rounded-3xl transition-[filter]" />
                      <span className="absolute left-4 top-1.5 text-[0.65rem] lg:text-[0.6rem] xl:text-[0.65rem]">
                        Image - Designed by{" "}
                        <a
                          target="_blank"
                          className="text-blue-500"
                          href="https://freepik.com"
                          rel="noopener noreferrer"
                        >
                          Freepik
                        </a>
                      </span>
                      <Image
                        className="lg:size-24 xl:size-[120px] relative -left-3 z-0 brightness-95"
                        src="/resources/image/validation.png"
                        height={120}
                        width={120}
                        alt="validation-image"
                      />
                      <h1 className="font-medium text-[1.33rem] lg:text-[1.1rem] xl:[1.33rem]">
                        유효성 평가 서비스
                      </h1>
                      <p className="text-neutral-600 text-[15px] mt-1 lg:text-[12px] xl:text-[15px]">
                        신속하고 전문적인 평가 서비스
                      </p>
                      <Link
                        className="mt-auto relative -left-1 -bottom-2 w-fit px-2.5 py-1.5 lg:px-2 lg:py-1 lg:text-sm xl:px-2.5 xl:py-1.5 xl:text-base  bg-[#0984e3] text-white rounded-lg"
                        href="/sm-101"
                      >
                        바로가기
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block bg-black relative h-full overflow-hidden col-span-2">
                  <motion.div
                    className="absolute -top-32 -left-32 rotate-6 bg-white w-40 h-[200vh] z-10"
                    variants={technologyBackgroundVariants}
                    initial="initial"
                    animate={[2, 3].includes(pageIndex) ? "animate" : "initial"}
                    transition={{ delay: 0.7 }}
                  />
                  <Image
                    className={cn(
                      "object-cover object-[15%] transition-[filter] duration-500 delay-300",
                      [2, 3].includes(pageIndex) && "brightness-[60%]"
                    )}
                    src="/resources/image/home-background3.png"
                    alt="technology-background"
                    fill
                  />
                </div>
              </div>
              <footer
                className="section !h-40 !min-h-40 bg-neutral-400"
                data-anchor="footer"
              />
              <Image
                className={cn(
                  "fixed right-7 bottom-7 bg-white rounded-xl cursor-pointer opacity-100 pointer-events-auto transition-opacity border border-solid border-neutral-300 z-10 animate-pulse duration-[80ms] hidden lg:tall:block",
                  pageIndex > sections.length - 1 &&
                    "!opacity-0 !pointer-events-none"
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
