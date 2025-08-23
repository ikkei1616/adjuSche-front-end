"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GreenButtonFrameProps = React.ComponentProps<typeof Button> & {
  imageSrc?: string;
  imageAlt?: string;
  title?: string | React.ReactNode;
  className?: string;
};

export default function GreenButton({
  imageSrc,
  imageAlt = "",
  title,
  className,
  type = "button",
  ...props
}: GreenButtonFrameProps) {
  return (
    <Button
      type={type}
      aria-label={typeof title === "string" ? title : undefined}
      variant="green"
      {...props}
    >
      <span className="inline-flex flex-row items-center justify-center gap-2 text-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={20}
            height={20}
            className="object-cover rounded-md"
          />
        )}
        {title && (
          <span className="font-semibold text-[20px] leading-[20px] [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]">
            {title}
          </span>
        )}
      </span>
    </Button>
  );
}
