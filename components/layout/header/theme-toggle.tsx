"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useRef, useCallback, memo } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

type ThemeToggleProps = {
  className?: string;
};

const AnimatedThemeToggler = memo(({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  
  const changeTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      ref={buttonRef}
      onClick={changeTheme}
      className={cn("relative", className)}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <MoonIcon
        size={16}
        data-state={theme !== "dark"}
        aria-hidden="true"
        className="shrink-0 scale-0 opacity-0 transition-all duration-300 data-[state=true]:scale-100 data-[state=true]:opacity-100"
      />
      <SunIcon
        size={16}
        data-state={theme === "dark"}
        aria-hidden="true"
        className="absolute inset-0 m-auto scale-0 opacity-0 transition-all duration-300 data-[state=true]:scale-100 data-[state=true]:opacity-100"
      />
    </Button>
  );
});

AnimatedThemeToggler.displayName = "AnimatedThemeToggler";

export default AnimatedThemeToggler;
