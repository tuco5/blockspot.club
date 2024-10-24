import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/i18n/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  console.log(locale);

  return (
    <LocaleSwitcherSelect
      defaultValue={t(locale)}
      items={locales.map((l) => ({ value: l, label: t(l) }))}
      label={t("label")}
    />
  );
}
