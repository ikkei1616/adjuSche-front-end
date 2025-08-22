import { ComponentPropsWithRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = ComponentPropsWithRef<"div"> & {
  link : string;
  title: string;
}

export const Header = ({className,link,title, ...props}:Props) => {
  return (
    <div 
      className="fixed top-0 flex justify-between items-center w-full px-6 py-4 bg-white border-b-1 border-light-gray z-50"
      {...props}
    >
      <Link href={link} className="flex gap-1 text-gray-text font-semibold">
        <ArrowLeft color="#6F7175"/>
        戻る
      </Link>
      <p className="font-semibold text-2xl">{title}</p>
      <div className="w-15"></div>
    </div>
  )
}
