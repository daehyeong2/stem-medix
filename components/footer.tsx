"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [locale, setLocale] = useState("ko");
  const isKo = locale === "ko";
  useEffect(() => {
    setLocale(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <footer
      className="section !h-fit !min-h-fit bg-neutral-50 pt-5 py-10 lg:pt-5 lg:pb-3"
      data-anchor="footer"
    >
      <div className="flex flex-col w-full mx-auto gap-3 px-5 md:px-12 lg:px-0 lg:max-w-[700px]">
        <div>
          <Link
            className="font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
            href="/privacy-policy"
          >
            {isKo ? "개인정보처리방침" : "Privacy Policy"}
          </Link>
        </div>
        <hr />
        <div className="flex gap-10">
          <Image
            className="my-auto size-24"
            src="/logo.png"
            alt="footer-logo"
            width={100}
            height={100}
          />
          <ul className="flex flex-wrap gap-x-7 gap-y-2 *:font-bold *:text-neutral-500 *:text-sm h-fit">
            <li>
              {isKo ? "상호명" : "Company"}{" "}
              <span className="font-normal text-nuetral-300">Stem Medix</span>
            </li>
            <li>
              {isKo ? "이메일" : "Email"}{" "}
              <span className="font-normal text-nuetral-300">
                0000@0000.com
              </span>
            </li>
            <li>
              {isKo ? "주소" : "Address"}{" "}
              <span className="font-normal text-nuetral-300">
                {isKo
                  ? "경상남도 양산시 물금읍 범어리 부산대학로49, (부산대학교 양산캠퍼스 --) ---호"
                  : "영어 버전 주소"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
