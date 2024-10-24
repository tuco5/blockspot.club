import { getUserLocale } from "@/server/services/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await getUserLocale();

  const messages = await import(`../../messages/${locale}.json`);

  return {
    locale,
    messages: messages.default,
  };
});
