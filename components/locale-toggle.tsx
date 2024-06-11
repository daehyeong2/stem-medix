"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { isLocaleToggleHoverAtom } from "./atoms";
import { useParams } from "next/navigation";

const LocaleToggle = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
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
      className="ml-auto rounded-sm border-neutral-400 group/localeToggle h-fit relative flex flex-col items-center w-20 z-20"
    >
      <span className="flex justify-between items-center w-full group-hover/localeToggle:bg-accent cursor-pointer transition-colors group-hover/localeToggle:text-white px-3 py-1.5 text-center text-[16px]">
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
