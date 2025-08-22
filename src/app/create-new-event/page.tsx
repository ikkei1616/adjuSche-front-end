"use client";

import { useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";

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
     

      {/* 募集時間（朝/昼/夜/全日/カスタム） */}
      <EventTimeCard value={time} onChange={setTime}>
        <h2 className="font-bold">募集時間</h2>
      </EventTimeCard>
    </div>
  );
}
