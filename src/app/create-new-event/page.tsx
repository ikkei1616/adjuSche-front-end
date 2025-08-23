"use client";

import { useState, useEffect } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";
import EventTimeCard, { EventTimeValue } from "@/components/ui/EventTimeCard";
import EventNeedsTime from "@/components/ui/EventNeedsTime";
import EventMemoCard from "@/components/ui/EventMemoCard";
import { Header } from "@/components//ui/Header"; // ← 修正！
import PageContainer from "@/components/ui/PageContent";
import GreenButtonFrame from "@/components/ui/GreenFrameCard";

export default function Home() {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [time, setTime] = useState<EventTimeValue>({ option: "" });
  const [durationMin, setDurationMin] = useState(0);
  const [memo, setMemo] = useState("");


  return (
    <>
      <Header link="/" title="新しいイベントを作成" />
      {/* Header は fixed なので本体に上余白を足す */}
      <PageContainer bgColor="gradation" className="pt-[64px] flex flex-col gap-4 p-6">
        <EventNameCard title={title} onTitleChange={setTitle} />
        <EventDurationCard
          periodStart={period.start}
          periodEnd={period.end}
          onChange={setPeriod}
        />
        <EventTimeCard value={time} onChange={setTime} />
        <EventNeedsTime
          durationMin={durationMin}
          onDurationChange={setDurationMin}
        />
        <EventMemoCard Memo={memo} onMemoChange={setMemo} />
        <GreenButtonFrame title="候補日条件入力を完了" className="mt-auto" />
      </PageContainer>
    </>
  );
}
