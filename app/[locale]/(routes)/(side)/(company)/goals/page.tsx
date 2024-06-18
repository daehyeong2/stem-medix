import BreadCrumb from "@/components/breadcrumb";
import { getI18n } from "@/locales/server";
import { faAnglesRight, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.company.growth_goals"),
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
        title2={t("nav.contents.company.growth_goals")}
        list={companyList}
      />
      <div className="flex flex-col mt-7 mx-auto w-fit px-5 items-center">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          {t("routes.goals.title")}
        </h1>
        <h2 className="text-sm lg:text-base font-light mt-3">
          {t("routes.goals.description")}
        </h2>
        <ul className="flex flex-wrap flex-col lg:flex-row *:flex *:flex-col *:gap-5 mt-14 *:relative max-w-[80vw] lg:gap-y-12 justify-center *:border-neutral-200 *:border-b *:lg:border-transparent *:py-8 *:lg:py-0 *:min-w-80 *:max-w-96">
          <li className="!pt-0">
            <div className="absolute lg:w-full bg-neutral-200 h-6 mt-3 flex items-center">
              <FontAwesomeIcon
                className="relative ml-auto text-[2.1rem] text-sky-400 z-10 !hidden lg:!block"
                icon={faAnglesRight}
              />
            </div>
            <span className="px-5 py-3 bg-sky-500 text-white mx-auto rounded-3xl flex items-center z-10">
              {t("routes.goals.contents.2024_the_first_half.title")}
            </span>
            <ul className="flex flex-col px-8 mt-3 list-disc gap-1">
              <li>{t("routes.goals.contents.2024_the_first_half.list.0")}</li>
              <li>{t("routes.goals.contents.2024_the_first_half.list.1")}</li>
              <h3 className="text-violet-400 underline">
                - {t("routes.goals.contents.2024_the_first_half.target")}
              </h3>
            </ul>
            <FontAwesomeIcon
              className="absolute right-0 top-0 bottom-0 my-auto text-[2.1rem] text-sky-400 lg:!hidden"
              icon={faDownLong}
            />
          </li>
          <li>
            <div className="absolute lg:w-full bg-neutral-200 h-6 mt-3 flex items-center">
              <FontAwesomeIcon
                className="relative ml-auto text-[2.1rem] text-sky-400 z-10 !hidden lg:!block"
                icon={faAnglesRight}
              />
            </div>
            <span className="px-5 py-3 bg-sky-500 text-white mx-auto rounded-3xl flex items-center z-10">
              {t("routes.goals.contents.2024_second_half.title")}
            </span>
            <ul className="flex flex-col px-8 mt-3 list-disc gap-1">
              <li>{t("routes.goals.contents.2024_second_half.list.0")}</li>
              <li>{t("routes.goals.contents.2024_second_half.list.1")}</li>
              <li>{t("routes.goals.contents.2024_second_half.list.2")}</li>
              <h3 className="text-violet-400 underline">
                - {t("routes.goals.contents.2024_second_half.target")}
              </h3>
            </ul>
            <FontAwesomeIcon
              className="absolute right-0 top-0 bottom-0 my-auto text-[2.1rem] text-sky-400 lg:!hidden"
              icon={faDownLong}
            />
          </li>
          <li>
            <div className="absolute lg:w-full bg-neutral-200 h-6 mt-3 flex items-center">
              <FontAwesomeIcon
                className="relative ml-auto text-[2.1rem] text-sky-400 z-10 !hidden lg:!block"
                icon={faAnglesRight}
              />
            </div>
            <span className="px-5 py-3 bg-sky-500 text-white mx-auto rounded-3xl flex items-center z-10">
              {t("routes.goals.contents.2025.title")}
            </span>
            <ul className="flex flex-col px-8 mt-3 list-disc gap-1">
              <li>{t("routes.goals.contents.2025.list.0")}</li>
              <h3 className="text-violet-400 underline">
                - {t("routes.goals.contents.2025.target")}
              </h3>
            </ul>
            <FontAwesomeIcon
              className="absolute right-0 top-0 bottom-0 my-auto text-[2.1rem] text-sky-400 lg:!hidden"
              icon={faDownLong}
            />
          </li>
          <li>
            <div className="absolute lg:w-full bg-neutral-200 h-6 mt-3 flex items-center">
              <FontAwesomeIcon
                className="relative ml-auto text-[2.1rem] text-sky-400 z-10 !hidden lg:!block"
                icon={faAnglesRight}
              />
            </div>
            <span className="px-5 py-3 bg-sky-500 text-white mx-auto rounded-3xl flex items-center z-10">
              {t("routes.goals.contents.2026.title")}
            </span>
            <ul className="flex flex-col px-8 mt-3 list-disc gap-1">
              <li>{t("routes.goals.contents.2026.list.0")}</li>
              <li>{t("routes.goals.contents.2026.list.1")}</li>
              <h3 className="text-violet-400 underline">
                - {t("routes.goals.contents.2026.target")}
              </h3>
            </ul>
            <FontAwesomeIcon
              className="absolute right-0 top-0 bottom-0 my-auto text-[2.1rem] text-sky-400 lg:!hidden"
              icon={faDownLong}
            />
          </li>
          <li className="border-none">
            <div className="absolute lg:w-full bg-neutral-200 h-6 mt-3 flex items-center">
              <FontAwesomeIcon
                className="relative ml-auto text-[2.1rem] text-sky-400 z-10 !hidden lg:!block"
                icon={faAnglesRight}
              />
            </div>
            <span className="px-5 py-3 bg-sky-500 text-white mx-auto rounded-3xl flex items-center z-10">
              {t("routes.goals.contents.2030.title")}
            </span>
            <ul className="flex flex-col px-8 mt-3 list-disc gap-1">
              <li>{t("routes.goals.contents.2030.list.0")}</li>
              <h3 className="text-violet-400 underline">
                - {t("routes.goals.contents.2030.target")}
              </h3>
            </ul>
            <FontAwesomeIcon
              className="absolute right-0 top-0 bottom-0 my-auto text-[2.1rem] text-sky-400 lg:!hidden"
              icon={faDownLong}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;