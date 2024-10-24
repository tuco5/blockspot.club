import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import LocaleSwitcher from "@/components/locale/LocaleSwitcher";
import { useTranslations } from "next-intl";
import PageTemplate from "@/components/common/PageTemplate";
import { VercelIcon } from "@/components/common/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <PageTemplate>
      <Header />
      <Hero />

      <Footer />
    </PageTemplate>
  );
}

function Hero() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <p>{t("hero")}</p>
    </main>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">
        <Link href="/">
          block<span className="text-orange-500">spot</span>
        </Link>
      </h1>
    </div>
  );
}

function Header() {
  return (
    <header className="flex w-full max-w-screen-lg items-center justify-between px-4 py-2">
      <Logo />
      <div className="flex items-center gap-2">
        <DarkModeToggle />
        <LocaleSwitcher />
      </div>
    </header>
  );
}

function Footer() {
  const linkStyle =
    "text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-all";
  return (
    <footer className="flex w-full justify-center border-t bg-slate-300/10">
      <div className="flex w-full max-w-screen-lg items-center justify-between px-4 py-6 text-sm">
        <Link href="https://www.linkedin.com/in/tuco5/" className={linkStyle}>
          Copyright © 2024 tuco5
        </Link>

        <Link
          href="https://vercel.com/"
          className={cn("flex items-baseline gap-1", linkStyle)}
        >
          <span> Hosted on</span> <VercelIcon /> <span>Vercel</span>
        </Link>
      </div>
    </footer>
  );
}
