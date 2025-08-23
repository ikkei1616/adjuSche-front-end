import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react"

type Props = ComponentPropsWithRef<"div"> & {
  eventName: string;
}

const ConfirmTitle = ({eventName,className,...props}:Props) => {
  return (
    <div 
      className={cn(
        "text-center font-semibold w-full",
        className
      )}
    >
      <div className="text-4xl">{eventName}</div>
      <div className="font-semibold text-5">上記の日程調整に参加しますか？</div>
    </div>
  )
}

export default ConfirmTitle