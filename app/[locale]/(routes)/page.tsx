import HomeFullpage from "@/components/home-fullpage";
import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("titles.home"),
  };
};

export default async function Home({
  params,
}: {
  params: { locale: "ko" | "en" };
}) {
  setStaticParamsLocale(params.locale);
  return (
    <div>
      <HomeFullpage />
    </div>
  );
}
