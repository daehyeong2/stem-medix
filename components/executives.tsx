"use client";

import { useI18n } from "@/locales/client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { cn } from "./utils/cn";

const Executives = () => {
  const t = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <>
      <h1
        onClick={toggleOpen}
        className="text-4xl flex gap-5 items-center cursor-pointer select-none transition-colors hover:border-neutral-600 hover:text-neutral-600 px-5 lg:px-0"
      >
        {t("routes.about.ceo_introduction.title")}
        <div>
          <FontAwesomeIcon
            className="border-black border p-1 py-0.5 text-3xl relative"
            icon={isOpen ? faMinus : faPlus}
          />
        </div>
      </h1>
      <ul
        className={cn(
          "flex flex-col items-center gap-3 w-full *:grid lg:*:grid-cols-4 *:w-full bg-neutral-100 *:max-w-[900px] overflow-hidden px-10 lg:px-0 py-0 transition-all max-h-0 h-0 opacity-0 duration-300 ease-in-out",
          isOpen && "py-10 max-h-[600px] lg:max-h-[336px] opacity-100 h-full"
        )}
      >
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
                (전/Former) 표시는 제가 임의로 해둔거라 잘못 표기됐을 수 있으니
                확인해 주시고 제대로 수정해 주세요. (추가/수정이 필요하신
                경우에는 말씀해 주세요.) 그리고 영어 버전은 대충 작성하고,
                번역기 돌린거라서 더 자연스러운 표현이 있다면 알려주세요.
              </h2>
              <li>
                <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                <p>
                  {t("routes.about.ceo_introduction.career.stem_medix_ceo")}
                </p>
              </li>
              <li>
                <div className="absolute top-[0.65rem] left-0 w-1 h-1 rounded-full bg-neutral-600" />
                <p>{t("routes.about.ceo_introduction.career.kovas_member")}</p>
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
                <p>{t("routes.about.ceo_introduction.career.pnu_professor")}</p>
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
                <p>{t("routes.about.ceo_introduction.career.cha_professor")}</p>
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
    </>
  );
};

export default Executives;
