"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const pathname = usePathname();
  let locale = "ko";
  useEffect(() => {
    locale = pathname.split("/")[1];
  }, []);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <h1 className="text-[5rem] font-bold text-neutral-700">404</h1>
      <h2 className="text-3xl font-semibold">
        {locale === "ko"
          ? "요청하신 페이지를 찾을 수 없습니다."
          : "The page you requested cannot be found."}
      </h2>
      <h3 className="text-neutral-600">
        {locale === "ko"
          ? "페이지가 삭제되었거나 주소가 변경되었을 수 있습니다."
          : "The page may have been deleted or the address may have changed."}
      </h3>
      <Link
        href="/"
        className="py-2.5 px-3.5 bg-sky-500 hover:bg-[#129bdb] transition-colors duration-100 rounded-lg text-white mt-2"
      >
        {locale === "ko" ? "홈으로 돌아가기" : "Return to home"}
      </Link>
    </div>
  );
};

export default NotFound;
