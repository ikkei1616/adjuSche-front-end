import { ComponentPropsWithRef } from "react"
import { cn } from "@/lib/utils"

type Props = ComponentPropsWithRef<"div"> & {
  label: string;
  value: string;
};

const Info = ({label,value, className, ...props}: Props) => {
  return (
    <div className={cn("flex gap-4 items-center", className)} {...props}>
      <div className="font-semibold">{label}</div>
      <div className="font-semibold font-gray-text text-xs">{value}</div>
    </div>
  )
}

export default Info