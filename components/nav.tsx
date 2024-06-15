"use client";

import Image from "next/image";
import Link from "next/link";
import LocaleToggle from "./locale-toggle";
import { useEffect, useState } from "react";
import { useI18n } from "@/locales/client";
import { useRecoilValue } from "recoil";
import { isLocaleToggleHoverAtom, pageIndexAtom } from "./atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { cn } from "./utils/cn";
import MenuListItem from "./menu-list-item";

const Nav = () => {
  const t = useI18n();
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageIndex = useRecoilValue(pageIndexAtom);
  const isLocaleToggleHover = useRecoilValue(isLocaleToggleHoverAtom);
  const whiteSections = [0, 1];

  const companyList = [
    {
      title: t("nav.contents.company.about"),
      href: "/about",
    },
    {
      title: t("nav.contents.company.growth_goals"),
      href: "/goals",
    },
    {
      title: t("nav.contents.company.organization_chart"),
      href: "/organization",
    },
    {
      title: t("nav.contents.company.way_to_come"),
      href: "/way-to-come",
    },
  ];

  const technologyList = [
    {
      title: t("nav.contents.technology.pipeline"),
      href: "/pipeline",
    },
    {
      title: t("nav.contents.technology.sm101"),
      href: "/sm-101",
    },
  ];

  const productList = [
    {
      title: t("nav.contents.product.culture_medium"),
      href: "/culture-medium",
    },
    {
      title: t("nav.contents.product.validation_service"),
      href: "/validation-service",
    },
  ];

  const ir_prList = [
    {
      title: t("nav.contents.ir_pr.news"),
      href: "/news",
    },
    {
      title: t("nav.contents.ir_pr.notice"),
      href: "/notice",
    },
    {
      title: t("nav.contents.ir_pr.research_achievement"),
      href: "/research-achievement",
    },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
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
  const isWhiteSection = whiteSections.includes(pageIndex);
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
          "absolute left-0 top-0 flex-col gap-8 flex pointer-events-none bg-white w-full h-screen py-3 z-40 transition-all opacity-0 duration-[350ms] max-w-0 overflow-auto",
          isMenuOpen &&
            "pointer-events-auto lg:pointer-events-none max-w-[320px] lg:w-0 opacity-100 lg:opacity-0"
        )}
      >
        <button onClick={closeMenu} className="ml-auto mr-5 text-2xl lg:hidden">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="flex flex-col">
          <MenuListItem
            open
            title={t("nav.titles.company")}
            list={companyList}
          />
          <MenuListItem
            title={t("nav.titles.technology")}
            list={technologyList}
          />
          <MenuListItem title={t("nav.titles.product")} list={productList} />
          <MenuListItem title={t("nav.titles.ir_pr")} list={ir_prList} />
        </ul>
      </div>
      <div
        onClick={closeMenu}
        className={cn(
          "fixed left-0 top-0 w-screen h-screen pointer-events-none bg-[rgba(0,0,0,0.6)] opacity-0 transition-opacity z-30 duration-[350ms]",
          isMenuOpen &&
            "opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none"
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
          "ml-auto hidden lg:flex items-center gap-10 xl:gap-16 h-fit *:z-20 *:flex *:justify-center *:min-w-28 group-hover/nav:text-black",
          isWhiteSection && "text-white",
          isWhiteSection && isLocaleToggleHover && "!text-white"
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
            {companyList.map((item, idx) => (
              <Link className="hover:text-accent" href={item.href} key={idx}>
                {item.title}
              </Link>
            ))}
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
            {technologyList.map((item, idx) => (
              <Link className="hover:text-accent" href={item.href} key={idx}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="group/nav-item">
          <Link
            className={cn(
              "hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:text-accent",
              [2, 3].includes(pageIndex) &&
                "2xl:text-white 2xl:group-hover/nav:text-black",
              [2, 3].includes(pageIndex) &&
                isLocaleToggleHover &&
                "2xl:!text-white"
            )}
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
            {productList.map((item, idx) => (
              <Link className="hover:text-accent" href={item.href} key={idx}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="group/nav-item">
          <Link
            className={cn(
              "hover:text-accent text-lg transition-colors duration-150 text-center z-20 font-[500] group-hover/nav-item:!text-accent",
              [2, 3].includes(pageIndex) &&
                "text-white group-hover/nav:text-black",
              [2, 3].includes(pageIndex) && isLocaleToggleHover && "!text-white"
            )}
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
            {ir_prList.map((item, idx) => (
              <Link className="hover:text-accent" href={item.href} key={idx}>
                {item.title}
              </Link>
            ))}
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
      <LocaleToggle whiteSections={whiteSections} />
    </header>
  );
};

export default Nav;
