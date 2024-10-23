import { DarkModeToggle } from "./_components/DarkModeToggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-stone-900 dark:text-white">
      <h1 className="text-5xl">
        block<span className="text-orange-500">spot</span>
      </h1>
      <p>Under construction</p>
      <DarkModeToggle />
    </main>
  );
}
