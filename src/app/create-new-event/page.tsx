"use client";

import { useState } from "react";
import EventTimeCard, { EventTimeValue } from "@/components/ui/EventTimeCard";
import EventNameCard from "@/components/ui/EventNameCard";

export default function Home() {
  const [time, setTime] = useState<EventTimeValue>({ option: "" });

  return (
    <div className="p-6 space-y-6">
      <EventNameCard />

      <EventTimeCard
        value={time}
        onChange={setTime}
       
      />

      {/* デバッグ用（不要なら削除OK） */}
      <pre className="text-xs opacity-70">{JSON.stringify(time, null, 2)}</pre>
    </div>
  );
}
