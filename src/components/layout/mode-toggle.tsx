"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDarkMode = theme === "dark";

  return (
    <div className="flex h-full items-center justify-center space-x-2">
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </Label>
      <div className="h-full px-2">
        {isDarkMode ? (
          <Sun className={`h-[1.2rem] w-[1.2rem]`} />
        ) : (
          <Moon className={`h-[1.2rem] w-[1.2rem]`} />
        )}
      </div>
    </div>
  );
}
