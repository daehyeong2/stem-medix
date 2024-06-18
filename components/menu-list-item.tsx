"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "./utils/cn";
import { motion } from "framer-motion";

interface IPropsMenuListItem {
  title: string;
  list: {
    title: string;
    href: string;
  }[];
  open?: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuListItem = ({
  title,
  list,
  open = false,
  setIsMenuOpen,
}: IPropsMenuListItem) => {
  const [isOpen, setIsOpen] = useState(open);

  const openList = () => {
    setIsOpen(true);
  };
  const closeList = () => {
    setIsOpen(false);
  };

  const listVariants = {
    initial: {
      height: 0,
      paddingTop: "0",
      paddingBottom: "0",
    },
    animate: {
      height: `${28 + list.length * 34.5}px`,
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  };
  const onMove = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <li className="flex flex-col">
      {" "}
      <h2
        className="text-lg flex justify-between items-center px-5 py-3 cursor-pointer border-b-neutral-200 border-solid border-b"
        onClick={isOpen ? closeList : openList}
      >
        {title}
        <FontAwesomeIcon
          className={cn(
            "text-base transition-transform duration-[250ms]",
            isOpen && "rotate-180"
          )}
          icon={faChevronDown}
        />
      </h2>
      <motion.ul
        className={cn(
          "flex pointer-events-none flex-col gap-3 box-border px-5 bg-neutral-100 opacity-0 transition-opacity duration-100 overflow-hidden",
          isOpen && "opacity-100 pointer-events-auto"
        )}
        variants={listVariants}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        {list.map((item, idx) => (
          <Link
            onClick={onMove}
            className="text-[15px] w-fit"
            href={item.href}
            key={idx}
          >
            -{item.title}
          </Link>
        ))}
      </motion.ul>
    </li>
  );
};

export default MenuListItem;
