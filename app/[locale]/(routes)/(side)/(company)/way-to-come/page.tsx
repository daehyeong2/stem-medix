import BreadCrumb from "@/components/breadcrumb";
import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("nav.contents.company.way_to_come"),
  };
};

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=6178bbad987e0e582ae88ed3a2ef1794&autoload=false`;

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
  const location = { lat: 35.326502387417825, lng: 129.0028481291385 };
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
        title2={t("nav.contents.company.way_to_come")}
        list={companyList}
      />
      <div className="flex flex-col px-5 lg:px-52 2xl:px-96 overflow-hidden">
        <h1 className="text-3xl lg:text-[2.6rem] mt-10"><span className="text-sky-500 font-semibold">Stem Medix</span>의</h1>
        <h2 className="text-2xl lg:text-3xl mt-5 relative"><div className="absolute left-2 lg:left-[0.65rem] flex gap-4 lg:gap-[1.3rem] -top-1 *:size-[0.3rem] *:bg-black *:rounded-full"><div/><div/></div>위치를 안내드립니다.</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.2281471464935!2d129.00426197624637!3d35.32515564945135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356897bf5f168a3d%3A0xe9e559cccd42c0ea!2z67aA7IKw64yA7ZWZ6rWQIOydmOqzvOuMgO2VmQ!5e0!3m2!1sko!2skr!4v1718950212906!5m2!1sko!2skr" width="1200" height="500" className="border-none !w-full mt-14 shadow-md" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <Link className="text-sky-500 mt-3 w-fit" href="https://www.google.com/maps?ll=35.325151,129.006837&z=16&t=m&hl=ko&gl=KR&mapclient=embed&cid=16853975916655853802" target="_blank">구글 지도 바로가기</Link>
        <div className="mt-10 flex flex-col gap-4">
          <h1 className="text-2xl font-medium">상세 정보</h1>
          <hr/>
          <ul className="*:text-neutral-500 text-lg flex flex-col gap-2">
            <li><span className="text-neutral-600 font-medium">주소:</span> 경상남도 양산시 물금읍 범어리 부산대학로49, (부산대학교 양산캠퍼스 --) ---호</li>
            <li><span className="text-neutral-600 font-medium">대표 번호:</span> 000-0000-0000</li>
            <li><span className="text-neutral-600 font-medium">이메일:</span> 0000@0000.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;