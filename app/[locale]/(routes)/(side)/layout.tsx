import Footer from "@/components/footer";
import { setStaticParamsLocale } from "next-international/server";
import React from "react";

const SideLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  setStaticParamsLocale(params.locale);
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default SideLayout;
