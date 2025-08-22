"use client";

import { useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";
import EventTimeCard, { EventTimeValue } from "@/components/ui/EventTimeCard";

export default function Home() {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [time, setTime] = useState<EventTimeValue>({ option: "" });

  return (
    <div className="flex flex-col gap-4 p-6">
      {/* イベント名 */}
      <EventNameCard title={title} onTitleChange={setTitle} />

      {/* 期間（開始/終了日） */}
      <EventDurationCard
        periodStart={period.start}
        periodEnd={period.end}
        onChange={setPeriod}
      />

      {/* 募集時間（朝/昼/夜/全日/カスタム） */}
      <EventTimeCard value={time} onChange={setTime}>
        <h2 className="text-lg font-semibold">募集時間</h2>
      </EventTimeCard>

      {/* デバッグ表示（不要なら削除OK） */}
      <pre className="text-xs opacity-70">{JSON.stringify({ title, period, time }, null, 2)}</pre>
    </div>
  );
}
