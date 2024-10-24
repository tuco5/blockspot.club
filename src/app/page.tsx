import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import LocaleSwitcher from "@/components/locale/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 dark:bg-stone-900 dark:text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl">
          block<span className="text-orange-500">spot</span>
        </h1>
        <p>{t("hero")}</p>
      </div>
      <DarkModeToggle />

      <LocaleSwitcher />
    </main>
  );
}
