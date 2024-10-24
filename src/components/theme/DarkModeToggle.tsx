"use client";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggleDarkMode(isDark: boolean) {
    setTheme(isDark ? "dark" : "ligth");
  }

  return (
    <Toggle
      onPressedChange={toggleDarkMode}
      variant="outline"
      className="flex w-16 justify-start rounded-full p-1.5 transition-all duration-300 dark:justify-end"
      pressed={theme ? theme === "dark" : false}
      size={"sm"}
    >
      <div className="relative flex rounded-full bg-slate-300 p-1.5 dark:bg-slate-200/30">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:absolute dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:static dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Toggle>
  );
}
