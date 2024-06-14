"use client";

import Image from "next/image";
import Link from "next/link";
import LocaleToggle from "./locale-toggle";
import { useEffect, useState } from "react";
import { useI18n } from "@/locales/client";
import { useRecoilValue } from "recoil";
import { isLocaleToggleHoverAtom } from "./atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { cn } from "./utils/cn";

const Nav = () => {
  const t = useI18n();
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLocaleToggleHover = useRecoilValue(isLocaleToggleHoverAtom);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      className={cn(
        "flex justify-between lg:justify-start fixed top-0 py-2 px-5 md:px-10 lg:py-5 xl:px-32 w-full items-center z-20 border border-transparent border-none lg:border-solid transition-colors group/nav peer/nav bg-[#209ce4] lg:bg-transparent h-16 lg:h-fit hover:border-transparent",
        scrollY > 80 && "border-b-neutral-700 backdrop-blur-sm",
        scrollY > 80 && isLocaleToggleHover && "!border-b-neutral-700"
      )}
    >
      <button onClick={openMenu} className="text-white text-2xl lg:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={cn(
          "absolute left-0 top-0 flex-col gap-3 flex pointer-events-none bg-white w-0 h-screen py-3 px-5 z-40 transition-all opacity-0 duration-[350ms]",
          isMenuOpen && "pointer-events-auto w-[240px] opacity-100"
        )}
      >
        <button onClick={closeMenu} className="ml-auto text-2xl lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        onClick={closeMenu}
        className={cn(
          "fixed left-0 top-0 w-screen h-screen pointer-events-none bg-[rgba(0,0,0,0.6)] opacity-0 transition-opacity z-30 duration-[350ms]",
          isMenuOpen && "opacity-100 pointer-events-auto"
        )}
      />
      <Link
        className="absolute left-0 right-0 mx-auto lg:relative lg:mx-0 w-24 lg:w-40 h-10 lg:h-16 z-20"
        href="/"
      >
        <Image
          className="object-cover object-center"
          fill
          src="/logo.png"
          alt="logo"
          sizes="200px"
          priority
        />
      </Link>
      <nav
        className={cn(
          "ml-auto hidden lg:flex items-center gap-10 xl:gap-16 h-fit *:z-20 *:flex *:justify-center *:min-w-28 text-white group-hover/nav:text-black",
          isLocaleToggleHover && "!text-white"
        )}
      >
        <div className="group/nav-item">
          <Link
            className="hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent"
            href="/about"
          >
            {t("nav.titles.company")}
          </Link>
          <ul
            className={cn(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none !delay-0"
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
            href="/pipeline"
          >
            {t("nav.titles.technology")}
          </Link>
          <ul
            className={cn(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none !delay-0"
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
            href="/culture-medium"
          >
            {t("nav.titles.product")}
          </Link>
          <ul
            className={cn(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none !delay-0"
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
            href="/news"
          >
            {t("nav.titles.ir_pr")}
          </Link>
          <ul
            className={cn(
              "absolute top-full flex flex-col items-center *:transition-colors *:text-[15px] opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:delay-100 transition-opacity delay-0 duration-300 ease-in-out *:h-9",
              isLocaleToggleHover && "!opacity-0 !pointer-events-none !delay-0"
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
        <div
          className={cn(
            "absolute left-0 top-0 pt-full border-b-neutral-200 border pointer-events-none opacity-0 max-h-[90px] overflow-hidden group-hover/nav:opacity-100 group-hover/nav:max-h-[270px] group-hover/nav:pointer-events-auto w-screen !transition-all !z-10 !duration-[400ms] bg-white ease-in-out h-[270px]",
            isLocaleToggleHover &&
              "!opacity-0 !max-h-[90px] !pointer-events-none"
          )}
        />
        <div
          className={cn(
            "fixed left-0 top-0 w-screen h-screen pointer-events-none bg-[rgba(0,0,0,0.6)] opacity-0 group-hover/nav:opacity-100 transition-opacity !z-0",
            isLocaleToggleHover && "!opacity-0"
          )}
        />
      </nav>
      <LocaleToggle />
    </header>
  );
};

export default Nav;
