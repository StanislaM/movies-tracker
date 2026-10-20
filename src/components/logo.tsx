"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

const logoVariants = cva("", {
  variants: {
    size: {
      default:
        "[img]:w-5 [img]:h-5 [span]:text-sm [img]:group-hover/logo:translate-x-12 [span]:group-hover/logo:-translate-x-8",
      lg: "[img]:w-10 [img]:h-10 [span]:text-xl [img]:group-hover/logo:translate-x-17 [span]:group-hover/logo:-translate-x-12",
      xl: "[img]:w-15 [img]:h-15 [span]:text-3xl [img]:group-hover/logo:translate-x-24 [span]:group-hover/logo:-translate-x-17",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LogoProps = {
  className?: string;
};

export default function Logo({
  className,
  size,
}: LogoProps & VariantProps<typeof logoVariants>) {
  return (
    <Link
      href="/"
      className={`group/logo flex items-center gap-x-2 ${className}`}
    >
      <Image
        className={`${cn(logoVariants({ size }))} transition duration-700`}
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        aria-label="logo"
      />
      <span
        className={`${cn(logoVariants({ size }))} mix-blend-difference transition duration-700`}
      >
        Frame.
      </span>
    </Link>
  );
}
