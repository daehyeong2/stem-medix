"use client";

import Image from "next/image";
import Link from "next/link";
import LocaleToggle from "./locale-toggle";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useI18n } from "@/locales/client";
import { useRecoilValue } from "recoil";
import { isLocaleToggleHoverAtom } from "./atoms";

const Nav = () => {
  const t = useI18n();
  const [scrollY, setScrollY] = useState(0);
  const isLocaleToggleHover = useRecoilValue(isLocaleToggleHoverAtom);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={twMerge(
        "flex justify-between fixed top-0 py-5 px-10 md:px-32 w-full items-center z-20 border border-transparent transition-colors group/nav peer/nav",
        scrollY > 80 && "border-b-neutral-200 hover:border-transparent"
      )}
    >
      <Link className="relative w-20 md:w-40 h-10 md:h-16 z-20" href="/">
        <Image
          className="object-cover object-center"
          fill
          src="/logo.png"
          alt="logo"
          sizes="200px"
          priority
        />
      </Link>
      <nav className="flex items-center gap-16 h-fit *:z-20 *:flex *:justify-center *:min-w-28">
        <div className="group/nav-item">
          <Link
            className="hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent"
            href="/about"
          >
            {t("nav.titles.company")}
          </Link>
          <ul
            className={twMerge(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none"
            )}
          >
            <Link className="hover:text-accent" href="/about">
              {t("nav.contents.company.about")}
            </Link>
            <Link className="hover:text-accent" href="/goals">
              {t("nav.contents.company.growth_goals")}
            </Link>
            <Link className="hover:text-accent" href="/organization">
              {t("nav.contents.company.organization_chart")}
            </Link>
            <Link className="hover:text-accent" href="/way-to-come">
              {t("nav.contents.company.way_to_come")}
            </Link>
          </ul>
        </div>
        <div className="group/nav-item">
          <Link
            className="hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent"
            href="/tech"
          >
            {t("nav.titles.technology")}
          </Link>
          <ul
            className={twMerge(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none"
            )}
          >
            <Link className="hover:text-accent" href="/pipeline">
              {t("nav.contents.technology.pipeline")}
            </Link>
            <Link className="hover:text-accent" href="/sm-101">
              {t("nav.contents.technology.sm101")}
            </Link>
          </ul>
        </div>
        <div className="group/nav-item">
          <Link
            className="hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent"
            href="/tech"
          >
            {t("nav.titles.product")}
          </Link>
          <ul
            className={twMerge(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none"
            )}
          >
            <Link className="hover:text-accent" href="/culture-medium">
              {t("nav.contents.product.culture_medium")}
            </Link>
            <Link className="hover:text-accent" href="/validation-service">
              {t("nav.contents.product.validation_service")}
            </Link>
          </ul>
        </div>
        <div className="group/nav-item">
          <Link
            className="hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent"
            href="/tech"
          >
            {t("nav.titles.ir_pr")}
          </Link>
          <ul
            className={twMerge(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none"
            )}
          >
            <Link className="hover:text-accent" href="/news">
              {t("nav.contents.ir_pr.news")}
            </Link>
            <Link className="hover:text-accent" href="/notice">
              {t("nav.contents.ir_pr.notice")}
            </Link>
            <Link className="hover:text-accent" href="/research-achievement">
              {t("nav.contents.ir_pr.research_achievement")}
            </Link>
          </ul>
        </div>
        <LocaleToggle />
        <div
          className={twMerge(
            "absolute left-0 top-0 pt-full border-b-neutral-200 border pointer-events-none opacity-0 max-h-[90px] overflow-hidden group-hover/nav:opacity-100 group-hover/nav:max-h-[270px] group-hover/nav:pointer-events-auto w-screen !transition-all !z-10 !duration-[400ms] bg-white ease-in-out h-[270px]",
            isLocaleToggleHover &&
              "!opacity-0 !max-h-[90px] !pointer-events-none"
          )}
        />
        <div
          className={twMerge(
            "fixed left-0 top-0 w-screen h-screen pointer-events-none bg-[rgba(0,0,0,0.6)] opacity-0 group-hover/nav:opacity-100 transition-opacity !z-0",
            isLocaleToggleHover && "!opacity-0"
          )}
        />
      </nav>
    </header>
  );
};

export default Nav;
