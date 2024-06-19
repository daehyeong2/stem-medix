import BreadCrumb from "@/components/breadcrumb";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";
import { cn } from "@/components/utils/cn";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.company.organization_chart"),
  };
};

const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();
  const currentLocale = getCurrentLocale();
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
    <div className="min-h-screen h-fit pb-32">
      <div className="relative h-72 lg:h-[340px] w-full flex justify-center pt-10 lg:pt-16 items-center">
        <Image
          className="object-cover relative brightness-50 -z-10"
          src="/resources/image/about-background.png"
          alt="banner"
          placeholder="blur"
          fill
        />
        <h1 className="text-4xl lg:text-5xl font-light text-white">
          {t("nav.titles.company")}
        </h1>
      </div>
      <BreadCrumb
        title1={t("nav.titles.company")}
        title2={t("nav.contents.company.organization_chart")}
        list={companyList}
      />
      <div className="flex flex-col mt-7 mx-auto w-fit px-5">
        <div className="relative w-72 h-24 mx-auto flex justify-center items-center">
          <Image
            className="object-cover mx-auto rounded-full -z-10 brightness-75"
            src="/resources/image/organization-image.png"
            alt="collaboration-image"
            fill
          />
          <h1
            className={cn(
              "text-[1.7rem] font-semibold mx-auto text-white text-center",
              currentLocale === "ko" && "text-3xl lg:text-4xl"
            )}
          >
            {t("routes.organization.title")}
          </h1>
        </div>
        <h2 className="text-sm lg:text-base font-light mx-auto mt-4 text-center">
          {t("routes.organization.description")}
        </h2>
        <table className="max-w-[calc(100vw-40px)] lg:max-w-[80vw] *:text-white flex flex-col gap-5 overflow-auto *:w-max px-3 pb-5 mt-10">
          <tbody className="*:grid *:grid-cols-4 flex flex-col gap-5 *:min-h-10 *:text-center *:min-w-[700px]">
            <tr className="!flex items-center mb-11 flex-col">
              <td className="font-medium relative bg-orange-500 rounded-full px-3.5 py-2">
                <div className="absolute left-0 right-0 mx-auto bg-black w-[1px] h-16 -z-10 p-0" />
                {t("routes.organization.chart.ceo")}
              </td>
              <td className="relative -bottom-8 h-[1px] bg-black w-[76.9%] p-0" />
            </tr>
            <tr className="*:bg-neutral-600 *:rounded-full *:px-3.5 *:py-2 *:text -center grid grid-cols-4 gap-5 *:relative">
              <td>
                <div className="-top-8 absolute left-0 right-0 mx-auto bg-black w-[1px] h-56 -z-10" />
                {t("routes.organization.chart.contents.rnd_partner")}
              </td>
              <td>
                <div className="-top-8 absolute left-0 right-0 mx-auto bg-black w-[1px] h-56 -z-10" />
                {t("routes.organization.chart.contents.development_manager")}
              </td>
              <td>
                <div className="-top-8 absolute left-0 right-0 mx-auto bg-black w-[1px] h-56 -z-10" />
              </td>
              <td>
                <div className="-top-8 absolute left-0 right-0 mx-auto bg-black w-[1px] h-56 -z-10" />
              </td>
            </tr>
            <tr className="*:bg-neutral-400 *:rounded-full *:px-3.5 *:py-2 *:text-center gap-5">
              <td>{t("routes.organization.chart.contents.jina_pass")}</td>
              <td>{t("routes.organization.chart.contents.team_leader")}</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="*:bg-neutral-400 *:rounded-full *:px-3.5 *:py-2 *:text-center gap-5">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="*:bg-neutral-400 *:rounded-full *:px-3.5 *:py-2 *:text-center gap-5">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutPage;