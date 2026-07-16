"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-full border-cyan-500/30 bg-background/60 backdrop-blur-md transition-all"
      >
        <Sun className="size-[1.1rem]" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full border-cyan-500/30 bg-background/60 backdrop-blur-md transition-all hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="size-[1.1rem] text-cyan-400" />
      ) : (
        <Moon className="size-[1.1rem] text-blue-600" />
      )}
    </Button>
  );
}
