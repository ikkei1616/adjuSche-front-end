"use client";

import { useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";
import EventTimeCard, { EventTimeValue } from "@/components/ui/EventTimeCard";
import EventNeedsTime from "@/components/ui/EventNeedsTime";

export default function Home() {
    const [title, setTitle] = useState("");
    const [period, setPeriod] = useState<{ start: Date | null; end: Date | null }>({
        start: null,
        end: null,
    });

    const [time, setTime] = useState<EventTimeValue>({ option: "" });
    const [durationMin, setDurationMin] = useState(0);
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
                <h2 className="font-bold">募集時間</h2>
            </EventTimeCard>
            {/* 所要時間 */}
            <EventNeedsTime durationMin={durationMin} onDurationChange={setDurationMin} />
        </div>
    );
}
