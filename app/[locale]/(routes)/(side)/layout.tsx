import Footer from "@/components/footer";
import React from "react";

const SideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default SideLayout;
