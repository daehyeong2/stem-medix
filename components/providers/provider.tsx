"use client";

import { useEffect, type ReactNode } from "react";
import { I18nProviderClient } from "@/locales/client";
import { RecoilRoot } from "recoil";
import Loading from "@/app/loading";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Provider({ locale, children }: ProviderProps) {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.lang = locale;
    }
  }, [locale]);
  return (
    <RecoilRoot>
      <I18nProviderClient locale={locale} fallback={<Loading />}>
        {children}
      </I18nProviderClient>
    </RecoilRoot>
  );
}
