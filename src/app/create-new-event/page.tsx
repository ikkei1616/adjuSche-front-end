"use client";

import { useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";

export default function Home() {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  return (
    <div className="flex flex-col gap-4 p-6">
      <EventNameCard title={title} onTitleChange={setTitle} />

      <EventDurationCard
        periodStart={period.start}
        periodEnd={period.end}
        onChange={setPeriod}
      />
      
    </div>
  );
}
