import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand-500 text-white shadow-glow hover:bg-brand-400 focus-visible:ring-brand-300",
  secondary:
    "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10 focus-visible:ring-white/40",
  ghost:
    "bg-transparent text-slate-200 hover:bg-white/5 focus-visible:ring-white/30",
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
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
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
