"use client";
import { memo, useEffect, useState } from "react";
import EventNameCard from "@/components/ui/EventNameCard";
import EventDurationCard from "@/components/ui/EventDurationCard";
import EventTimeCard from "@/components/ui/EventTimeCard";
import EventNeedsTime from "@/components/ui/EventNeedsTime";
import EventMemoCard from "@/components/ui/EventMemoCard";
import PageContent from "@/components/ui/PageContent";
import { Header } from "@/components/ui/Header";
import GreenButton from "@/components/ui/GreenButton";
import { useAuth } from "@/lib/auth-context";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });
  // const [time, setTime] = useState<EventTimeValue>({ option: "" });
  const [timeRange, setTimeRange] = useState<string>("");
  const [durationMin, setDurationMin] = useState(0);
  const [memo, setMemo] = useState("");
  const [accessToken, setAccessToken] = useState<string>("");
  const [result,setResult] = useState(null);

  const { user, session, loading, signIn, signOut } = useAuth();

  useEffect(() => {
    if (session) {
      // useAuth()から取得したsessionを直接使用
      const googleAccessToken = session.provider_token ?? null;
      if (googleAccessToken) {
        setAccessToken(googleAccessToken);
      }
      console.log("Session from useAuth:", session);
      console.log("User from useAuth:", user);
    }
  }, [session, user]);

  console.log("開始", period.start?.toISOString());
  console.log("終了", period.end);

  function getISO8601Times(range: string): { start: string; end: string } {
    if (range === "") return {start: "",end:""};
    // 現在の日付を取得
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    // "00:00-12:00" → ["00:00", "12:00"]
    const [startTime, endTime] = range.split("-");

    // 各時間をDateオブジェクトに変換
    const start = new Date(`${year}-${month}-${day}T${startTime}:00`);
    const end = new Date(`${year}-${month}-${day}T${endTime}:00`);

    return {
      start: start.toISOString(),
      end: end.toISOString(),
    };
  }

  // 使用例
  const {start,end } = getISO8601Times(timeRange);
  // => { start: "2025-08-24T00:00:00.000Z", end: "2025-08-24T12:00:00.000Z" }

    console.log("タイムれんじ",timeRange)
    const requestBody = {
      hostUserID: user?.id,
      title,
      memo,
      participantCount: 0,
      conditions: {
        periodStart: period.start?.toISOString(),
        periodEnd: period.end?.toISOString(),
        timeStart: start, 
        timeEnd: end, 
        durationMin,
      }
  }

    const handleClick = async ()=>{
      const res = await fetch(`${baseUrl}/event`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "X-Token":accessToken,
        },
          body: JSON.stringify(requestBody)
      });
      const data = await res.json();
      setResult(data);
    };

  console.log("timeRange", timeRange);

  return (
    <>
      <Header link="/" title="新規イベント作成" />
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
        <EventTimeCard
          value={timeRange}
          onChangeAction={setTimeRange}
        ></EventTimeCard>
        {/* 所要時間 */}
        <EventNeedsTime
          durationMin={durationMin}
          onDurationChange={setDurationMin}
        />
        {/* メモらん */}
        <EventMemoCard Memo={memo} onMemoChange={setMemo} />
        <GreenButton title="条件入力完了" onClick={handleClick} href="/admin/url/1"/>
      </PageContent>
      <div>テスト</div>
    </>
  );
}
