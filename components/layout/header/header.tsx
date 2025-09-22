import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeToggle from "./theme-toggle";
import { ProgressLink } from "@/components/ui/page-progress";
import { memo, useMemo } from "react";

interface LogoProps {
  className?: string;
}

const ICON_SIZE = "70" ;

const NAVIGATION_COLORS = {
  home: {
    stroke: "#4285f4", // Google Blue
    fill: "rgba(66, 133, 244, 0.2)"
  },
  events: {
    stroke: "#ea4335", // Google Red
    fill: "rgba(234, 67, 53, 0.2)"
  },
  team: {
    stroke: "#fbbc04", // Google Yellow
    fill: "rgba(251, 188, 4, 0.2)"
  },
  contact: {
    stroke: "#0f9d58", // Google Green
    fill: "rgba(15, 157, 88, 0.2)"
  }
};

const navigationLinks = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
      >
        <g
          fill={NAVIGATION_COLORS.home.fill}
          stroke={NAVIGATION_COLORS.home.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M3 11.99v2.51c0 3.3 0 4.95 1.025 5.975S6.7 21.5 10 21.5h4c3.3 0 4.95 0 5.975-1.025S21 17.8 21 14.5v-2.51c0-1.682 0-2.522-.356-3.25s-1.02-1.244-2.346-2.276l-2-1.555C14.233 3.303 13.2 2.5 12 2.5s-2.233.803-4.298 2.409l-2 1.555C4.375 7.496 3.712 8.012 3.356 8.74S3 10.308 3 11.99" />
          <path d="M15 21.5v-5c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44s-2.121 0-2.56.44C9 14.378 9 15.085 9 16.5v5" />
        </g>
      </svg>
    ),
  },
  {
    href: "/event",
    label: "Events",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
      >
        <g
          fill={NAVIGATION_COLORS.events.fill}
          stroke={NAVIGATION_COLORS.events.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M8 4V2m8 2V2" />
          <path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22" />
          <path d="M14.5 13.5L12 11v-4" />
        </g>
      </svg>
    ),
  },
  {
    href: "/team",
    label: "Team",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
      >
        <g
          fill={NAVIGATION_COLORS.team.fill}
          stroke={NAVIGATION_COLORS.team.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M15.5 11a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0" />
          <path d="M15.483 11.35q.484.149 1.017.15a3.5 3.5 0 1 0-3.483-3.85m-2.034 0a3.5 3.5 0 1 0-2.466 3.7M22 16.5c0-2.761-2.462-5-5.5-5m1 8c0-2.761-2.462-5-5.5-5s-5.5 2.239-5.5 5" />
          <path d="M7.5 11.5c-3.038 0-5.5 2.239-5.5 5" />
        </g>
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
      >
        <g 
          fill={NAVIGATION_COLORS.contact.fill}
          stroke={NAVIGATION_COLORS.contact.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            strokeLinejoin="round"
            d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22"
          />
          <path d="M8 4V2m8 2V2" />
          <path
            strokeLinejoin="round"
            d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"
          />
        </g>
      </svg>
    ),
  },
];

export const Logo = memo(
  ({ className = "w-8 h-8 md:w-10 md:h-10" }: LogoProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 192 192"
        className={className}
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
  }
);

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
  const mobileMenuContent = useMemo(
    () => (
      <PopoverContent
        sideOffset={12}
        align="start"
        className="w-dvw border-0 border-y bg-background p-0 md:hidden rounded-none"
      >
        {navigationLinks.map((link, index) => (
          <ProgressLink
            key={index}
            href={link.href}
            className="flex relative w-full px-4 border-0 py-7 not-last:border-b overflow-hidden"
          >
            {link.label}
            <span className="absolute opacity-70 right-4 top-1/2 -translate-y-[20%] translate-x-[40%]  -rotate-10">
              {link.icon}
            </span>
          </ProgressLink>
        ))}
      </PopoverContent>
    ),
    []
  );

  const desktopMenuContent = useMemo(
    () => (
      <div className="md:flex hidden items-center gap-1">
        {navigationLinks.map((link, index) => (
          <ProgressLink
            href={link.href}
            key={index}
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
          >
            {link.label}
          </ProgressLink>
        ))}
      </div>
    ),
    []
  );

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
            <ProgressLink
              href="/"
              className="text-primary hover:text-primary/90 flex items-center gap-2 hover:bg-accent "
            >
              <Logo />
              <span className="font-semibold text-xl">GDG RCOEM</span>
            </ProgressLink>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {desktopMenuContent}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
