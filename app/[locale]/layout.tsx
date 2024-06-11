import { setStaticParamsLocale } from "next-international/server";
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
  const locale = params.locale ?? "ko";
  setStaticParamsLocale(locale);
  return (
    <Provider locale={locale}>
      {children}
      <Nav />
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
