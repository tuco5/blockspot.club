import { getUserLocale } from "@/server/i18n/service";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const messages = (await import(
    `../../../messages/${locale}.json`
  )) satisfies IntlMessages;

  return {
    locale,
    messages: messages.default,
  };
});
