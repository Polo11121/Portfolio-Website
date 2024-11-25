"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
