import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeToggle from "./theme-toggle";
import { ProgressLink } from "@/components/ui/page-progress";
import { memo, useMemo } from "react";

const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Events", active: false },
  { href: "#", label: "Team", active: false },
  { href: "#", label: "Alumni", active: false },
  { href: "#", label: "Contact", active: false },
] as const;

const Logo = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 192 192"
      className="w-8 h-8 md:w-10 md:h-10"
    >
      <defs>
        <style>{`.cls-1{fill:#ea4335;}.cls-2{fill:#4285f4;}.cls-3{fill:#fbbc04;}.cls-4{fill:#0f9d58;}`}</style>
      </defs>
      <title>dsc_icon</title>
      <path
        className="cls-1"
        d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
      />
      <path
        className="cls-2"
        d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
      />
      <path
        className="cls-3"
        d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
      />
      <path
        className="cls-4"
        d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
      />
    </svg>
  );
});

Logo.displayName = "Logo";

const MobileMenuIcon = memo(() => (
  <svg
    className="pointer-events-none"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
));

MobileMenuIcon.displayName = "MobileMenuIcon";

const Header = memo(() => {
  const mobileMenuContent = useMemo(() => (
    <PopoverContent align="start" className="w-36 p-1 md:hidden">
      <NavigationMenu className="max-w-none *:w-full">
        <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index} className="w-full">
              <NavigationMenuLink
                href={link.href}
                className="py-1.5"
                active={link.active}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </PopoverContent>
  ), []);

  const desktopMenuContent = useMemo(() => (
    <NavigationMenu className="max-md:hidden">
      <NavigationMenuList className="gap-2">
        {navigationLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              active={link.active}
              href={link.href}
              className="text-muted-foreground hover:text-primary py-1.5 font-medium text-md"
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ), []);

  return (
    <header className="sticky top-0 z-50 bg-background px-3 md:px-6 border-b shadow-sm">
      <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <MobileMenuIcon />
              </Button>
            </PopoverTrigger>
            {mobileMenuContent}
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <ProgressLink href="/" className="text-primary hover:text-primary/90 flex items-center gap-2">
              <Logo />
              <span className="font-semibold text-xl">GDG RCOEM</span>
            </ProgressLink>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {desktopMenuContent}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
