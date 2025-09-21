// Lazy loaded components for better code splitting
import { lazy } from "react";

// Lazy load heavy components
export const LazyHeroSection = lazy(() => 
  import("@/components/layout/main/hero").then(module => ({ 
    default: module.HeroSection 
  }))
);

export const LazyThemeToggle = lazy(() => 
  import("@/components/layout/header/theme-toggle")
);

// Dynamic import utility for conditional loading
export const dynamicImport = {
  heroSection: () => import("@/components/layout/main/hero"),
  themeToggle: () => import("@/components/layout/header/theme-toggle"),
  progressBar: () => import("@/components/ui/page-progress"),
} as const;