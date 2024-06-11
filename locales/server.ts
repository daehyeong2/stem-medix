import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(
    {
      ko: () => import("./ko"),
      en: () => import("./en"),
    },
    {
      // Uncomment to use custom segment name
      // segmentName: 'locale',
      // Uncomment to set fallback locale
      // fallbackLocale: en,
    }
  );
