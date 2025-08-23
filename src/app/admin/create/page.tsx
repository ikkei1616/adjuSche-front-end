"use client";
import { memo, useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";
import EventTimeCard, { EventTimeValue } from "@/components/ui/EventTimeCard";
import EventNeedsTime from "@/components/ui/EventNeedsTime";
import EventMemoCard from "@/components/ui/EventMemoCard";
import PageContent from "@/components/ui/PageContent";
import { Header } from "@/components/ui/Header";
import GreenButton from "@/components/ui/GreenButton";
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
          <Header link="/" title="新規イベント作成"/>
          <PageContent bgColor="gradation">
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
              </EventTimeCard>
              {/* 所要時間 */}
              <EventNeedsTime durationMin={durationMin} onDurationChange={setDurationMin} />
                {/* メモらん */}
              <EventMemoCard Memo={memo} onMemoChange={setMemo} />
              <GreenButton title="条件入力完了" />
          </PageContent>
          
        </>

    );
}
