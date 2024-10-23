import { DarkModeToggle } from "./_components/DarkModeToggle";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-stone-900 dark:text-white">
      <h1 className="text-5xl">
        block<span className="text-orange-500">spot</span>
      </h1>
      <p>{t("hero")}</p>
      <DarkModeToggle />
    </main>
  );
}
