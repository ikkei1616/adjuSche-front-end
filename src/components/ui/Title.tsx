import Image from "next/image";
import { cn } from "@/lib/utils";
import { M_PLUS_Rounded_1c } from "next/font/google";
import * as React from "react";

// ✅ 日本語グリフを含めるために subsets は "japanese" を指定
// ✅ 太さ 800 を使うなら weights に含める
const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function Title({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        mplusRounded.className, // ← セクション全体にフォント適用
        "relative mx-auto max-w-5xl",
        "p-6 sm:p-8 md:p-10",
        className
      )}
    >
      {/* モバイルは、PCは中央揃え */}
      <div className="mb-1 flex items-center md:items-center justify-center gap-1">
        <Image
          src="/title-icon.svg"
          alt="titleIcon"
          width={50}
          height={50}
          className="w-10 h-10 md:w-16 md:h-16"
          priority
        />
        <h1
          className={cn(
            "text-[50px] md:text-6xl font-extrabold tracking-normal",
            "text-mainGreen leading-tight"
          )}
        >
          アジャスケ
        </h1>
      </div>

      {/* サブタイトル */}
      <p
        className={cn(
         "text-center text-[16px] md:text-lg",
          "text-mainGreen font-semibold"
        )}
      >
        〜サクッと簡単日程調整〜
      </p>
    </section>
  );
}
