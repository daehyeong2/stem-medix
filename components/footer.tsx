import Image from "next/image";
import Link from "next/link";
import { getI18n } from "@/locales/server";

const Footer = async () => {
  const t = await getI18n();
  return (
    <footer
      className="section !h-fit !min-h-fit bg-neutral-50 pt-5 py-10 lg:pt-5 lg:pb-3"
      data-anchor="footer"
    >
      <div className="flex flex-col w-full mx-auto gap-3 px-5 md:px-12 lg:px-0 lg:max-w-[700px]">
        <div>
          <Link
            className="font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
            href="/privacy-policy"
          >
            {t("footer.privacy_policy")}
          </Link>
        </div>
        <hr />
        <div className="flex gap-10">
          <Image
            className="my-auto size-24"
            src="/logo.png"
            alt="footer-logo"
            width={100}
            height={100}
          />
          <ul className="flex flex-wrap gap-x-7 gap-y-2 *:font-bold *:text-neutral-500 *:text-sm h-fit">
            <li>
              {t("footer.titles.company")}{" "}
              <span className="font-normal text-nuetral-300">
                {t("footer.contents.company")}
              </span>
            </li>
            <li>
              {t("footer.titles.email")}{" "}
              <span className="font-normal text-nuetral-300">
                {t("footer.contents.email")}
              </span>
            </li>
            <li>
              {t("footer.titles.address")}{" "}
              <span className="font-normal text-nuetral-300">
                {t("footer.contents.address")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
