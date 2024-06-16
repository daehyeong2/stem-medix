import BreadCrumb from "@/components/breadcrumb";
import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.titles.company"),
  };
};

const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();
  const companyList = [
    {
      title: t("nav.contents.company.about"),
      href: "/about",
    },
    {
      title: t("nav.contents.company.growth_goals"),
      href: "/goals",
    },
    {
      title: t("nav.contents.company.organization_chart"),
      href: "/organization",
    },
    {
      title: t("nav.contents.company.way_to_come"),
      href: "/way-to-come",
    },
  ];
  return (
    <div className="h-[200vh]">
      <div className="relative h-72 lg:h-[340px] w-full flex justify-center pt-10 lg:pt-16 items-center">
        <Image
          className="object-cover relative brightness-50 -z-10"
          src="/resources/image/about-background.png"
          alt="banner"
          fill
        />
        <h1 className="text-4xl lg:text-5xl font-light text-white">
          {t("nav.titles.company")}
        </h1>
      </div>
      <BreadCrumb
        title1={t("nav.titles.company")}
        title2={t("nav.contents.company.about")}
        list={companyList}
      />
    </div>
  );
};

export default AboutPage;
