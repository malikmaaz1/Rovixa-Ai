import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "full",
  className,
  imgClassName,
  priority = false,
}: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white",
          className,
        )}
      >
        <Image
          src="/brand/icon.png"
          alt="RovixaAI"
          width={80}
          height={80}
          priority={priority}
          className={cn("h-full w-full object-contain", imgClassName)}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-hidden rounded-xl bg-white px-2.5 py-1.5",
        className,
      )}
    >
      <Image
        src="/brand/logo.png"
        alt="RovixaAI"
        width={220}
        height={56}
        priority={priority}
        className={cn("h-7 w-auto object-contain sm:h-8", imgClassName)}
      />
    </span>
  );
}
