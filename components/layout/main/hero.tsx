import React, { memo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProgressLink } from "@/components/ui/page-progress";

interface HeroButton {
  text: string;
  url: string;
}

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  button?: HeroButton;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const DEFAULT_SUBHEADING = "RBU Chapter";
const DEFAULT_DESCRIPTION =
  "Google Developer Groups are community groups for college and university students interested in Google developer technologies.";
const DEFAULT_BUTTON: HeroButton = {
  text: "Discover all components",
  url: "",
};
const GOOGLE_LETTERS: { char: string; color: string }[] = [
  { char: "G", color: "#4285F4" },
  { char: "o", color: "#EA4335" },
  { char: "o", color: "#FBBC05" },
  { char: "g", color: "#0F9D58" },
  { char: "l", color: "#4285F4" },
  { char: "e", color: "#EA4335" },
];

const HeroComponent: React.FC<HeroProps> = ({
  subheading = DEFAULT_SUBHEADING,
  description = DEFAULT_DESCRIPTION,
  button = DEFAULT_BUTTON,
  imageSrc = "/hero-img.png",
  imageAlt = "Hero illustration",
  className = "",
}) => {
  return (
    <section className={`py-10 sm:py-24 w-full  ${className}`}>
      <div className="container text-center mx-auto px-3">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:gap-6">
          <h1 className=" text-3xl sm:text-4xl font-bold lg:text-6xl flex flex-wrap sm:flex-nowrap items-center justify-center lg:gap-4 md:gap-3 gap-2">
            <span
              className="flex items-center text-3xl sm:text-4xl lg:text-6xl"
              aria-label="Google"
            >
              {GOOGLE_LETTERS.map((l) => (
                <span
                  key={l.char + l.color}
                  className="leading-none"
                  style={{ color: l.color }}
                >
                  {l.char}
                </span>
              ))}
            </span>
            Developer Groups
          </h1>
          <h3 className=" text-2xl sm:text-3xl md:text-4xl text-primary/80 font-extrabold">
             <u className="underline-animation">
              <svg
                width="310"
                height="40"
                viewBox="0 0 310 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke"
                  d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892"
                  stroke="var(--destructive)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <span className="relative z-1">{subheading}</span>
            </u>
          </h3>
          <div className="w-full flex justify-center max-w-xl mx-auto mt-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full max-w-3xl h-auto object-contain px-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
          <p className="text-muted-foreground text-balance md::text-2xl sm:text-xl text-base">
            {description}
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="mt-10 shadow-lg bg-blue-500 min-w-12 font-bold"
        >
          <ProgressLink href={"/"}>JOIN US</ProgressLink>
        </Button>
      </div>
    </section>
  );
};

export const HeroSection = memo(HeroComponent);
