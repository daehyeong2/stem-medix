import NotFound from "@/components/not-found";
import { getI18n } from "@/locales/server";

export const generateMetadata = async () => {
  const t = await getI18n();
  return {
    title: t("notFound"),
  };
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
