import { cn } from "@/lib/utils";

export default function PageTemplate({
  children,
  className,
}: PropsWithChildren) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center dark:bg-stone-900 dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
