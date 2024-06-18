import BreadCrumb from "@/components/breadcrumb";
import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.company.about"),
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
        title2={t("nav.contents.company.about")}
        list={companyList}
      />
      <div className="flex flex-col px-5">
        <Image
          className="mx-auto"
          src="/logo.png"
          alt="stem-medix"
          width={150}
          height={150}
        />
        <p className="mx-auto max-w-[680px] text-lg lg:text-xl text-center">
          <span className="font-semibold underline">Stem Medix</span>
          {t("routes.about.description")}
        </p>
        <div className="flex mt-24 w-full lg:w-fit md:px-16 flex-col lg:mx-auto">
          <h2 className="text-[1.75rem] font-bold mb-8">
            {t("routes.about.core_technology")}
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="relative w-full h-[300px] md:h-[350px] lg:w-[500px] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem]">
              <Image
                className="object-cover object-right lg:object-center"
                src="/resources/image/home-background3.png"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 500px, 33vw"
                alt="sm-101"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl">SM-101(SR-1)</h3>
              <p className="max-w-96 break-words">
                SM-101(SR-1)의 설명 혹은 이 위치에 현재 연구중인 모든 기술들의
                요약 표시(+위 제목 변경)
              </p>
              <Link
                className="w-fit ml-auto mt-auto mb-3 text-sky-500 hover:underline"
                href="/sm-101"
              >
                {t("routes.about.learn_more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 flex flex-col py-10 px-8 lg:py-14 lg:px-10 text-white relative h-52 lg:h-96 w-full text-center lg:text-start">
        <Image
          className="object-cover brightness-50 -z-10"
          src="/resources/image/mission-background.png"
          alt="mission-background"
          fill
        ></Image>
        <h3 className="text-sky-400 font-medium lg:text-lg">
          {t("routes.about.mission")}
        </h3>
        <h2 className="text-xl lg:text-3xl font-light mt-4">
          여기에 들어갈 <span className="font-semibold">메시지</span>를
          알려주세요. (한/영)
        </h2>
        <p className="text-sm lg:text-base font-light mt-2">
          Please also tell me the second message.
        </p>
      </div>
      <div className="flex flex-col gap-5 py-14 lg:py-16 bg-sky-50">
        <h1 className="text-3xl lg:text-4xl font-medium mx-auto">
          {t("routes.about.core_values.title")}
          <br />
          <span className="text-xl">(내용 변경이 필요합니다.)</span>
        </h1>
        <ul className="flex justify-center flex-wrap gap-y-10 lg:flex-row mt-5 lg:mt-16 *:flex *:flex-col *:gap-5 *:text-center *:w-96 *:px-10 *:bg-sky-50 *:py-5 lg:*:py-0 *:border-neutral-300 w-fit mx-auto">
          <li className="border-b md:border-b-0 md:border-r">
            <Image
              className="mx-auto"
              src="/resources/image/company-section/goals.png"
              alt="goals"
              height={100}
              width={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">
                {t("routes.about.core_values.values.one")}
              </h2>
              <h3 className="text-neutral-500">
                Ensure personal and
                <br />
                product integrity
              </h3>
            </div>
          </li>
          <li className="border-b md:border-b-0 lg:border-r">
            <Image
              className="mx-auto"
              src="/resources/image/company-section/goals.png"
              alt="goals"
              height={100}
              width={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">
                {t("routes.about.core_values.values.two")}
              </h2>
              <h3 className="text-neutral-500">
                Communicate and
                <br />
                collaborate with respect
              </h3>
            </div>
          </li>
          <li>
            <Image
              className="mx-auto"
              src="/resources/image/company-section/goals.png"
              alt="goals"
              height={100}
              width={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">
                {t("routes.about.core_values.values.three")}
              </h2>
              <h3 className="text-neutral-500">
                Promote personal and
                <br />
                organizational improvement
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:items-center px-10 lg:px-0 py-12 gap-16">
        <h1 className="text-4xl">{t("routes.about.ceo_introduction.title")}</h1>
        <ul className="flex flex-col gap-3 lg:max-w-[900px] w-full *:grid lg:*:grid-cols-4 *:w-full">
          <li>
            <div className="size-56 relative mx-auto lg:mx-0">
              <Image
                className="rounded-[3rem] object-cover"
                src="/resources/image/kwon-sangmo.png"
                alt="ceo"
                sizes="224px"
                fill
              />
            </div>
            <div className="flex flex-col w-full gap-3 lg:col-span-3 lg:pl-12 max-h-64 mt-10 lg:mt-0">
              <h2 className="text-2xl flex gap-2">
                <span className="text-sm text-blue-500 align-top">CEO</span>
                {t("routes.about.ceo_introduction.name")}
              </h2>
              <hr />
              <ul className="*:flex *:gap-2 *:items-center *:pl-3 *:relative lg:max-w-none break-all overflow-auto pb-2 flex flex-col gap-2">
                <h2 className="text-sm">
                  아래 경력들은 제공해주신 ppt에 있던 것들을 그대로 옮겼고,
                  (전/Former) 표시는 제가 임의로 해둔거라 잘못 표기됐을 수
                  있으니 확인해 주시고 제대로 수정해 주세요. (추가/수정이
                  필요하신 경우에는 말씀해 주세요.) 그리고 영어 버전은 대충
                  작성하고, 번역기 돌린거라서 더 자연스러운 표현이 있다면
                  알려주세요.
                </h2>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t("routes.about.ceo_introduction.career.stem_medix_ceo")}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t("routes.about.ceo_introduction.career.kovas_member")}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t(
                      "routes.about.ceo_introduction.career.bk21_business_leader"
                    )}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t(
                      "routes.about.ceo_introduction.career.director_of_laboratory_animal_management_center"
                    )}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t("routes.about.ceo_introduction.career.pnu_professor")}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>{t("routes.about.ceo_introduction.career.tokyo_phd")}</p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t("routes.about.ceo_introduction.career.tokyo_professor")}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t("routes.about.ceo_introduction.career.cha_professor")}
                  </p>
                </li>
                <li>
                  <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                  <p>
                    {t(
                      "routes.about.ceo_introduction.career.tokyo_regenerative_medicine_center"
                    )}
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;