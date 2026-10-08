import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-black text-white shadow-glow hover:bg-neutral-800 focus-visible:ring-black",
  secondary:
    "bg-black/[0.03] text-neutral-900 ring-1 ring-black/15 hover:bg-black/[0.06] focus-visible:ring-black/30",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-black/[0.03] focus-visible:ring-black/20",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
