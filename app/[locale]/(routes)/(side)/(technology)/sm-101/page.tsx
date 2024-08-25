import BreadCrumb from "@/components/breadcrumb";
import HistorySwiper from "@/components/history-swiper";
import SM101Swiper from "@/components/sm101-swiper";
import { getI18n } from "@/locales/server";
import {
  faCheck,
  faCrown,
  faPlus,
  faSeedling,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.technology.sm101"),
  };
};

const SM101Page = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();
  const technologyList = [
    {
      title: t("nav.contents.technology.pipeline"),
      href: "/pipeline",
    },
    {
      title: t("nav.contents.technology.sm101"),
      href: "/sm-101",
    },
  ];
  return (
    <div className="min-h-screen h-fit pb-32 overflow-hidden">
      <div className="relative h-72 lg:h-[340px] w-full flex justify-center pt-10 lg:pt-16 items-center">
        <Image
          className="object-cover relative brightness-50 -z-10"
          src="/resources/image/technology-background.png"
          alt="banner"
          fill
        />
        <h1 className="text-4xl lg:text-5xl font-light text-white">
          {t("nav.titles.technology")}
        </h1>
        <span className="absolute right-3 bottom-3 text-sm text-white">
          Image - Designed by{" "}
          <a
            className="text-sky-300"
            href="https://freepik.com"
            target="blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </span>
      </div>
      <BreadCrumb
        title1={t("nav.titles.technology")}
        title2={t("nav.contents.technology.sm101")}
        list={technologyList}
      />
      <div className="flex flex-col px-5">
        <h1 className="text-3xl lg:text-4xl mx-auto mt-7">SM-101 (SR-1)</h1>
        <h2 className="text-sm lg:text-base mx-auto mt-3">
          {t("routes.sm101.subtitle")}
        </h2>
        <div className="mt-10 lg:mx-auto">
          <div className="rounded-3xl border-4 border-sky-500 py-5 px-7 lg:px-12 flex gap-8 lg:gap-12 group">
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl my-auto lg:-rotate-45 group-hover:lg:rotate-0 group-hover:lg:text-6xl group-hover:lg:text-indigo-500 transition-all lg:w-16 duration-[250ms]"
              icon={faVial}
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl">SM-101 (SR-1)</h2>
              <ul className="text-sm grid grid-rows-3 grid-flow-col w-fit gap-y-2 gap-x-5 *:flex *:items-center *:gap-2">
                <li>
                  <FontAwesomeIcon
                    className="text-base text-green-500"
                    icon={faCheck}
                  />
                  장점/기능 1
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-base text-green-500"
                    icon={faCheck}
                  />
                  장점/기능 2
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-base text-green-500"
                    icon={faCheck}
                  />
                  장점/기능 3
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-base text-green-500"
                    icon={faCheck}
                  />
                  장점/기능 4
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-16" />
          <h1 className="text-2xl lg:text-3xl mt-5">
            {t("routes.sm101.related_materials")}
          </h1>
          <div className="flex flex-col lg:flex-row gap-7 mt-12 items-center">
            <div className="w-full lg:w-[450px] h-52  md:h-72 lg:h-52 relative">
              <Image
                className="rounded-lg border-neutral-200 border"
                src="/resources/image/sm101/0.png"
                alt="SM-101 처리 그룹에서 보다 많은 수의 줄기세포 확보 가능"
                sizes="(max-width: 768px) 100vw, (max-width: 1920px) 450px"
                fill
              />
            </div>
            <div className="flex flex-col gap-5 -order-1 lg:order-1">
              <div className="mx-auto flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-4xl border-blue-500 border-2 rounded-full  py-5 px-[1.35rem] size-fit text-blue-500 hover:text-white hover:bg-blue-500 transition-colors z-10 bg-white"
                  icon={faPlus}
                />
                <div className="absolute size-14 bg-blue-500 animate-ping rounded-full" />
              </div>
              <h2 className="font-medium lg:font-normal max-w-[400px] text-center">
                {t("routes.sm101.titles.1")}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-16">
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-medium">
                {t("routes.sm101.titles.2")}
              </h2>
            </div>
            <div className="w-full h-80 md:h-[450px] lg:h-[500px] relative flex justify-center items-center group">
              <Image
                className="rounded-lg border-neutral-200 border group-hover:brightness-[55%] transition-[filter] duration-300"
                src="/resources/image/sm101/1.png"
                alt="SM-101 처리 그룹에서 노화 억제 효능을 검증​"
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 450px"
                fill
              />
              <div className="absolute flex flex-col justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-4xl bg-green-500 rounded-full py-5 px-[1.35rem] size-fit text-white mx-auto z-10"
                    icon={faCheck}
                  />
                  <div className="absolute animate-ping size-14 bg-green-500 rounded-full" />
                </div>
                <span className="text-white text-center text-lg">
                  {t("routes.sm101.verified")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 mt-20">
            <div className="flex flex-col justify-center items-center gap-5 rounded-full border-black border h-fit my-auto lg:aspect-square py-5 lg:p-2 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon
                className="text-5xl lg:text-6xl text-green-500"
                icon={faSeedling}
              />
              <h2 className="text-center">{t("routes.sm101.titles.3")}</h2>
            </div>
            <div className="h-80 md:h-[500px] w-full relative">
              <Image
                className="border-neutral-200 border rounded-xl"
                src="/resources/image/sm101/2.png"
                alt="SM-101 처리를 통한 혈관 신생 촉진 검증"
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 900px"
                fill
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl mt-20">{t("routes.sm101.titles.4")}</h1>
            <div className="mt-10">
              <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-5">
                <span className="lg:[writing-mode:tb-rl] lg:rotate-180 bg-blue-700 rounded-full text-white h-12 lg:w-12 w-40 lg:h-40 flex justify-center items-center text-center text-sm">
                  Representative
                  <br />
                  images​
                </span>
                <div className="relative w-64 h-40 lg:h-auto border-black border-[3px] flex justify-center mt-6 lg:mt-0">
                  <h3 className="relative -top-8 font-semibold">Control​</h3>
                  <Image
                    src="/resources/image/sm101/control.tiff"
                    alt="image"
                    fill
                    sizes="256px"
                  />
                </div>
                <div className="relative w-64 h-40 lg:h-auto border-black border-[3px] flex justify-center mt-5 lg:mt-0">
                  <h3 className="relative -top-8 font-semibold">SDF-1 alpha</h3>
                  <Image
                    src="/resources/image/sm101/sdf.tiff"
                    alt="image"
                    fill
                    sizes="256px"
                  />
                </div>
                <div className="relative w-64 h-40 lg:h-auto border-black border-[3px] flex justify-center mt-5 lg:mt-0">
                  <h3 className="relative -top-8 font-semibold">SR-1</h3>
                  <Image
                    src="/resources/image/sm101/sm101.tiff"
                    alt="image"
                    fill
                    sizes="256px"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-5 mt-12 lg:mt-5">
                <span className="lg:[writing-mode:tb-rl] lg:rotate-180 bg-blue-700 rounded-full text-white h-12 lg:w-12 w-40 lg:h-40 flex justify-center items-center text-center text-sm">
                  Migrated cells​
                </span>
                <div className="relative w-[380px] md:w-96 h-52 -top-6 -left-3 mt-3 lg:mt-0 mx-auto">
                  <Image
                    src="/resources/image/sm101/4.png"
                    alt="image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1920px) 24rem"
                  />
                </div>
                <div className="h-[160px] max-w-[405px] p-3 border-neutral-300 border-4 hover:shadow-md transition-shadow">
                  <span className="font-medium">
                    ♦ SDF-1 (stromal cell-derived factor 1) Chemokine protein
                    Important role in angiogenesis by recruiting EPCs.
                  </span>
                </div>
              </div>
              <h3 className="bg-neutral-100 py-2 flex items-center gap-3 justify-between px-5 rounded-full font-medium hover:shadow-md transition-shadow mt-5 lg:mt-0 text-center text-sm lg:text-base">
                <FontAwesomeIcon
                  className="text-xl text-yellow-400"
                  icon={faCrown}
                />
                <span className="max-w-[700px] text-center">
                  {t("routes.sm101.verification_of_increased_mobility")}
                </span>
                <FontAwesomeIcon
                  className="text-xl text-yellow-400"
                  icon={faCrown}
                />
              </h3>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl max-w-[870px]">
              {t("routes.sm101.titles.5")}
            </h2>
            <div className="w-full max-w-[850px] h-[600px] mx-auto mt-10">
              <SM101Swiper />
            </div>
          </div>
          <div className="mt-10 max-w-[870px] mx-auto">
            <hr />
            <h2 className="text-3xl text-center mt-7">
              {t("routes.sm101.history.title")}
            </h2>
            <div className="mt-10 h-[700px]">
              <HistorySwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SM101Page;
