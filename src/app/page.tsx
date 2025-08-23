
"use client";

import GreenCardFrame from "@/components/ui/GreenFrameCard";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* 画像ありパターン */}
      <GreenCardFrame
        imageSrc="Icon-duration.svg"
        imageAlt="イベント画像"
        title="合宿のお知らせ"
      >
      </GreenCardFrame>


      {/* 画像なしパターン */}
      <GreenCardFrame
        title="会議のお知らせ"
      >
      </GreenCardFrame>
    </div>
  );
}
