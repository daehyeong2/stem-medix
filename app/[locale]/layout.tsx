import React from "react";
import { Provider } from "@/components/providers/provider";
import Nav from "@/components/nav";

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <Provider locale={params.locale}>
      <Nav />
      {children}
    </Provider>
  );
};

export const generateStaticParams = () => {
  const locales = ["en", "ko"];
  return locales.map((locale) => ({
    locale,
  }));
};

export default LocaleLayout;
