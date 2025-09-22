"use client";
import React from "react";

interface SectionProps {
  title: string;
  description: string;
  image: string;
  imageLeft?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  image,
  imageLeft = false,
  className,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-32 sm:pb-44  ${
        imageLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Text */}
      <div
        className={`w-full lg:w-1/2 space-y-6 ${
          imageLeft ? "pl-6 lg:pl-10 border-l-6" : "pr-6 lg:pr-10 border-r-6"
        } relative ${className} `}
      >
        {/* Hand-drawn line */}

          <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
            {title}
          </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-20">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 relative">
          Get To Know Us
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-2"
            width="200"
            height="12"
            viewBox="0 0 200 12"
            fill="none"
          >
            <path
              d="M2 8c20-3 40-6 60-4s40 8 60 6 40-6 60-4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-blue-500"
            />
          </svg>
        </h1>
        <div className="w-24 h-1 mx-auto rounded-full"></div>
      </div>

      <Section
        title="Our Mission"
        description="Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society."
        image="/about-us-1.svg"
        className="border-blue-500"
      />

      <Section
        title="Our Perspective"
        description="We're a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas and working for a solution-driven team."
        image="/about-us-2.svg"
        imageLeft
        className="border-green-500"
      />

      <Section
        title="What Keeps Us Going?"
        description="Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge."
        image="/about-us-3.svg"
        className="border-yellow-500"
      />
    </div>
  );
};

export default AboutUs;
