"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbItem from "./breadcrumb-item";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "@/locales/client";
import { useState } from "react";

interface IPropsBreadCrumb {
  list: {
    title: string;
    href: string;
  }[];
  title1: string;
  title2: string;
}

const BreadCrumb = ({ list, title1, title2 }: IPropsBreadCrumb) => {
  const [index, setIndex] = useState(-1);
  const t = useI18n();
  const categoryList = [
    {
      title: t("nav.titles.company"),
      href: "/about",
    },
    {
      title: t("nav.titles.technology"),
      href: "/pipeline",
    },
    {
      title: t("nav.titles.product"),
      href: "/culture-medium",
    },
    {
      title: t("nav.titles.ir_pr"),
      href: "/news",
    },
  ];
  return (
    <div className="border-b-neutral-300 border-b">
      <ul className="flex items-center gap-1 max-w-[1200px] lg:px-8 mx-auto">
        <Link className="mr-9 hidden md:block" href="/">
          <FontAwesomeIcon className="text-xl text-blue-500" icon={faHome} />
        </Link>
        <BreadCrumbItem
          number={0}
          index={index}
          setIndex={setIndex}
          list={categoryList}
          title={title1}
        />
        <BreadCrumbItem
          number={1}
          index={index}
          setIndex={setIndex}
          list={list}
          title={title2}
        />
      </ul>
    </div>
  );
};

export default BreadCrumb;
