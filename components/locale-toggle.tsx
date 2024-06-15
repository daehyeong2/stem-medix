"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLocaleToggleHoverAtom, pageIndexAtom } from "./atoms";
import { cn } from "./utils/cn";

const LocaleToggle = ({ whiteSections }: { whiteSections: number[] }) => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const pageIndex = useRecoilValue(pageIndexAtom);
  const setIsLocaleToggleHover = useSetRecoilState(isLocaleToggleHoverAtom);
  const changeToKorean = () => {
    changeLocale("ko");
  };
  const changeToEnglish = () => {
    changeLocale("en");
  };
  const onMouseEnter = () => {
    setIsLocaleToggleHover(true);
  };
  const onMouseLeave = () => {
    setIsLocaleToggleHover(false);
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="lg:ml-10 xl:ml-16 rounded-sm border-neutral-400 group/localeToggle h-fit relative flex flex-col items-center w-[80px] lg:w-24 z-20"
    >
      <span
        className={cn(
          "flex justify-between items-center w-full group-hover/localeToggle:bg-accent cursor-pointer transition-colors px-3 py-1.5 text-center text-[16px] font-medium lg:group-hover/nav:text-black lg:group-hover/localeToggle:!text-white group-hover/localeToggle:text-white text-white",
          whiteSections.includes(pageIndex) || [2, 3].includes(pageIndex)
            ? "text-white"
            : "lg:text-black"
        )}
      >
        {currentLocale === "ko" ? "KOR" : "ENG"}
        <FontAwesomeIcon
          className="text-xs relative -bottom-[2px] group-hover/localeToggle:rotate-180 transition-transform duration-150"
          icon={faChevronDown}
        />
      </span>
      <ul className="w-full pointer-events-none opacity-0 group-hover/localeToggle:pointer-events-auto group-hover/localeToggle:opacity-100 transition-opacity flex flex-col gap-2 p-2 *:text-start *:transition-colors *:px-1.5 bg-white border-neutral-300 border absolute top-full *:text-[16px]">
        <button className="hover:text-accent" onClick={changeToKorean}>
          KOR
        </button>
        <button className="hover:text-accent" onClick={changeToEnglish}>
          ENG
        </button>
      </ul>
    </div>
  );
};

export default LocaleToggle;
