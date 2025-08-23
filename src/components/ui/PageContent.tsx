import { ComponentPropsWithRef } from "react";
import { cva } from "class-variance-authority";

const pageContainer = cva(
  "flex flex-col gap-4 h-screen p-6 mt-16",
  {
    variants: {
      bgColor: {
        gradation: "bg-[linear-gradient(180deg,rgba(255,255,255,0)_34%,rgba(255,255,255,1)_50%,#22C55E6B_100%)]",
      },
    },
  });
type Props = ComponentPropsWithRef<"div"> & {
  bgColor?: "gradation";
};

const PageContent = ({ className, children, bgColor, ...props }: Props) => {
  return (
    <div
      className={pageContainer({
        bgColor,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageContent;
