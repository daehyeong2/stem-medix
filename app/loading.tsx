"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const Loading = () => {
  const params = useParams();
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen animate-pulse">
      <Image
        src="/logo.png"
        alt="loading-logo"
        width={200}
        height={200}
        priority
      />
      <h1 className="text-center text-xl">
        {params.locale === "ko" ? "로딩 중.." : "Loading.."}
      </h1>
    </div>
  );
};

export default Loading;
