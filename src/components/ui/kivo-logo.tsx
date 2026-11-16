"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface KivoLogoProps {
  className?: string;
  variant?: "full" | "icon";
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "dark" | "light";
  priority?: boolean;
}

/**
 * Official Kivo Brand Logo component.
 * Uses the supplied official Kivo logo assets while preserving exact proportions.
 */
export function KivoLogo({
  className,
  variant = "full",
  showText = true,
  size = "md",
  theme = "dark",
  priority = false,
}: KivoLogoProps) {
  // Height map in pixels
  const heightMap = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 52,
  };
  const h = heightMap[size] || 32;

  // Icon only
  if (variant === "icon" || !showText) {
    return (
      <div
        className={cn("relative flex items-center justify-center shrink-0 select-none", className)}
        style={{ width: h, height: h }}
      >
        <Image
          src="/images/kivo-icon.png"
          alt="Kivo Logo"
          width={h * 2}
          height={h * 2}
          priority={priority}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  // Full lockup (Icon + Wordmark)
  // Aspect ratio is 896 / 261 = ~3.43
  const w = Math.round(h * 3.43);
  const logoSrc =
    theme === "light"
      ? "/images/kivo-logo-light.png"
      : "/images/kivo-logo-dark.png";

  return (
    <div
      className={cn(
        "relative flex items-center shrink-0 select-none",
        className
      )}
      style={{ height: h, width: w }}
    >
      <Image
        src={logoSrc}
        alt="Kivo — Build. Connect. Automate."
        width={w * 2}
        height={h * 2}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

export function KivoIcon({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("relative flex items-center justify-center shrink-0 select-none", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/kivo-icon.png"
        alt="Kivo"
        width={size * 2}
        height={size * 2}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

// Backward compatibility aliases
export const FlowMindLogo = KivoLogo;
export const FlowMindIcon = KivoIcon;

export default KivoLogo;
