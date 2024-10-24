"use client";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/server/services/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

type Item = { label: string; value: string };
interface LocaleSwitcherSelectProps {
  defaultValue: string;
  items: Item[];
  label: string;
}

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: LocaleSwitcherSelectProps) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  console.log({ isPending, defaultValue });
  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger aria-label={label}>
          <SelectValue>
            <Languages className="h-5 w-5" />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
