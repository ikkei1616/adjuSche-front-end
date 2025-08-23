import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<typeof Link> & {
  href: string;
  text: string;
  color: "green" | "white";
}

const button =cva(
  "w-full text-center rounded-lg border-1 p-3",
  {
    variants:{
      color:{
        green:"text-white bg-mainGreen  border-white",
        white:"text-mainGreen bg-white border-mainGreen",
      }
    }
  }
)

const ConfirmButton = ({href,text,color,...props}: Props) => {
  return (
    <Link 
      href={href} 
      className={button({color})}
      {...props}
    >
      <span className="text-xl font-semibold">
        {text}
      </span>
    </Link>
  )
}

export default ConfirmButton