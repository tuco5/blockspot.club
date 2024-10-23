"use client";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleDarkMode(isDark: boolean) {
    setTheme(isDark ? "dark" : "ligth");
    console.log({ isDark, theme });
  }

  return (
    <Toggle
      onPressedChange={toggleDarkMode}
      variant="outline"
      className="flex w-16 justify-start rounded-full p-1.5 transition-all duration-300 dark:justify-end"
      defaultPressed={theme === "dark"}
    >
      <div className="relative flex rounded-full bg-slate-200/30 p-1.5">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:absolute dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:static dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Toggle>
  );
}
