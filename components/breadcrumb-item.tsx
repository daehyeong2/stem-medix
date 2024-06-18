"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "./utils/cn";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

interface IPropsBreadCrumbItem {
  list: {
    title: string;
    href: string;
  }[];
  title: string;
  setIndex: Dispatch<SetStateAction<number>>;
  index: number;
  number: number;
}

const listVariants = {
  initial: {
    height: "0",
  },
  animate: (length: number) => ({
    height: `${46 * length + length - 1}px`,
  }),
};

const BreadCrumbItem = ({
  list,
  title,
  index,
  number,
  setIndex,
}: IPropsBreadCrumbItem) => {
  const isOpen = index === number;
  const onClick = () => {
    if (isOpen) {
      return setIndex(-1);
    }
    setIndex(number);
  };
  const pathnameFull = usePathname();
  const pathname = pathnameFull.slice(3);
  return (
    <li className="relative flex cursor-pointer w-[50%] lg:w-52">
      <span
        onClick={onClick}
        className={cn(
          "px-5 py-[0.9rem] box-content text-lg w-full flex justify-between items-center hover:text-sky-500",
          number === 1 && "text-sky-500"
        )}
      >
        {title}
        <FontAwesomeIcon
          className={cn(
            "text-lg transition-all duration-200 text-black",
            isOpen && "rotate-180"
          )}
          icon={faChevronDown}
        />
      </span>
      <motion.ul
        className={cn(
          "absolute top-[calc(100%_+_1px)] flex flex-col opacity-0 pointer-events-none transition-opacity overflow-hidden duration-200 w-full bg-neutral-50 z-20",
          isOpen && "opacity-100 pointer-events-auto"
        )}
        variants={listVariants}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
        custom={list.length}
        transition={{
          duration: 0.2,
        }}
      >
        {list.map((item, idx) => (
          <Link
            className={cn(
              "px-5 py-[0.65rem] w-full border-neutral-300 border border-t-transparent text-neutral-700  hover:text-sky-500 transition-colors",
              number === 1 && pathname === item.href && "text-sky-500"
            )}
            href={item.href}
            key={idx}
          >
            {item.title}
          </Link>
        ))}
      </motion.ul>
    </li>
  );
};

export default BreadCrumbItem;
