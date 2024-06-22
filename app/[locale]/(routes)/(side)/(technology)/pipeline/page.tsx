import BreadCrumb from "@/components/breadcrumb";
import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.technology.pipeline"),
  };
};

const AboutPage = async ({
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
    <div className="min-h-screen h-fit pb-32">
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
      </div>
      <BreadCrumb
        title1={t("nav.titles.technology")}
        title2={t("nav.contents.technology.pipeline")}
        list={technologyList}
      />
      <div className="flex flex-col px-5">
        <h1 className="mt-7 mx-auto text-3xl lg:text-4xl">파이프라인</h1>
        <h2 className="mt-3 mx-auto text-sm lg:text-base text-center">
          더 나은 세상을 위한, 만성 난치성 혈관질환 중심의 신약 개발 파이프라인
        </h2>
        <div className="flex w-full overflow-auto pb-3">
          <table className="text-center w-full min-w-0 max-w-[calc(100vw-40px)] lg:min-w-[900px] lg:max-w-[1200px] mt-14 *:*:*:whitespace-nowrap mx-auto">
            <thead>
              <tr className="text-white *:!bg-black *:px-5 *:py-2 *:border-l *:border-white">
                <th className="border-none">파이프라인</th>
                <th>적응증</th>
                <th>Discovery</th>
                <th>Preclinical</th>
                <th>Phase I</th>
                <th>Phase II</th>
                <th>Phase III</th>
              </tr>
            </thead>
            <tbody className="*:even:*:bg-[#ececec] *:odd:*:bg-[#f7f7f7] *:*:border-l *:*:border-white *:*:border-t *:*:py-2 *:*:px-2">
              <tr className="group">
                <td
                  id="no-group"
                  className="h-32 !bg-[#ececec] border-none font-medium text-neutral-800"
                  rowSpan={2}
                >
                  SM-101 (SR-1)
                </td>
                <td>당뇨병성 족부질환</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-600 group-[:hover:not(:has(#no-group:hover))]:!bg-green-500 transition-all duration-100 group-[:hover:not(:has(#no-group:hover))]:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-600 group-[:hover:not(:has(#no-group:hover))]:border-l-green-500 transition-all duration-100 group-[:hover:not(:has(#no-group:hover))]:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group">
                <td>심혈관 질환</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-500 group-hover:bg-green-400 transition-all duration-100 group-hover:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-500 group-hover:border-l-green-400 transition-all duration-100 group-hover:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group">
                <td className="font-medium text-neutral-800">
                  SM-102
                  <br />
                  (SR-1 NP)
                </td>
                <td>골재생</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-400 group-hover:bg-green-300 transition-all duration-100 group-hover:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-400 group-hover:border-l-green-300 transition-all duration-100 group-hover:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group">
                <td className="font-medium text-neutral-800">
                  SM-103
                  <br />
                  (MHY-1684)
                </td>
                <td>당뇨병성 심근경색</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-300 group-hover:bg-green-200 transition-all duration-100 group-hover:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-300 group-hover:border-l-green-200 transition-all duration-100 group-hover:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group">
                <td className="font-medium text-neutral-800">
                  SM-104
                  <br />
                  (심근경색)
                </td>
                <td>당뇨병성 심근경색</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-200 group-hover:bg-green-100 transition-all duration-100 group-hover:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-200 group-hover:border-l-green-100 transition-all duration-100 group-hover:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group">
                <td className="font-medium text-neutral-800">
                  SM-01
                  <br />
                  (Oleuropein)
                </td>
                <td>Cancer (항암제)</td>
                <td>
                  <div className="flex relative items-center">
                    <div className="h-[26px] bg-blue-100 group-hover:bg-green-50 transition-all duration-100 group-hover:-translate-y-1 w-[75%]" />
                    <div className="size-0 border-t-transparent border-b-transparent border-l-blue-100 group-hover:border-l-green-50 transition-all duration-100 group-hover:-translate-y-1 border-[13px] border-r-0 relative -left-[1px]" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
