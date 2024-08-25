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

const PipelinePage = async ({
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
        title2={t("nav.contents.technology.pipeline")}
        list={technologyList}
      />
      <div className="flex flex-col px-5">
        <h1 className="mt-7 mx-auto text-3xl lg:text-4xl">
          {t("routes.pipeline.title")}
        </h1>
        <h2 className="mt-3 mx-auto text-sm lg:text-base text-center">
          {t("routes.pipeline.description")}
        </h2>
        <div className="flex w-full overflow-auto pb-3">
          <table className="text-center w-full min-w-0 max-w-[calc(100vw-40px)] lg:min-w-[900px] lg:max-w-[1200px] mt-14 *:*:*:whitespace-nowrap mx-auto">
            <thead>
              <tr className="text-white *:!bg-black *:px-5 *:py-2 *:border-l *:border-white">
                <th className="border-none">
                  {t("routes.pipeline.table.header.pipeline")}
                </th>
                <th>{t("routes.pipeline.table.header.indications")}</th>
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
                  {t("routes.pipeline.table.content.sm_101.title")
                    .split("<br/>")
                    .map((word, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          <br />
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word}</span>
                      )
                    )}
                </td>
                <td>
                  {t("routes.pipeline.table.content.sm_101.0.indications")}
                </td>
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
                <td>
                  {t("routes.pipeline.table.content.sm_101.1.indications")}
                </td>
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
                  {t("routes.pipeline.table.content.sm_102.title")
                    .split("<br/>")
                    .map((word, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          <br />
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word}</span>
                      )
                    )}
                </td>
                <td>{t("routes.pipeline.table.content.sm_102.indications")}</td>
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
                  {t("routes.pipeline.table.content.sm_103.title")
                    .split("<br/>")
                    .map((word, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          <br />
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word}</span>
                      )
                    )}
                </td>
                <td>{t("routes.pipeline.table.content.sm_103.indications")}</td>
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
                  {t("routes.pipeline.table.content.sm_104.title")
                    .split("<br/>")
                    .map((word, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          <br />
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word}</span>
                      )
                    )}
                </td>
                <td>{t("routes.pipeline.table.content.sm_104.indications")}</td>
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
                  {t("routes.pipeline.table.content.sm_01.title")
                    .split("<br/>")
                    .map((word, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          <br />
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word}</span>
                      )
                    )}
                </td>
                <td>{t("routes.pipeline.table.content.sm_01.indications")}</td>
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

export default PipelinePage;
