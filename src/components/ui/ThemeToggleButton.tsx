import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="rounded-full relative overflow-hidden"
      aria-label="Переключить тему"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Icon name="Sun" size={20} className="text-amber-500" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      >
        <Icon name="Moon" size={20} className="text-indigo-400" />
      </span>
    </Button>
  );
}
