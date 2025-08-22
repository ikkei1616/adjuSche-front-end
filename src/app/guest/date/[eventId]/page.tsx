import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import PageContainer from "@/components/ui/PageContainer";
import InfoRow from "@/components/ui/InfoRow";

type PossibleDate = {
  id: number;
  periodStart: string; // RFC3339準拠の日時文字列 (例: "2025-09-01T10:00:00Z")
  periodEnd: string;
  participateMemberNum: number;
};

type DateResult = {
  eventName: string;
  votedCount: number;
  memo: string;
  durationMin: number;
  possibleDate: PossibleDate[];
};

const mockEvents: DateResult = {
  eventName: "サークル BBQ",
  votedCount: 20,
  memo: "参加費は1人500円です。",
  durationMin: 120,
  possibleDate: [
    {
      id: 1,
      periodStart: "2025-09-01T10:00:00Z",
      periodEnd: "2025-09-01T12:00:00Z",
      participateMemberNum: 10,
    },
    {
      id: 2,
      periodStart: "2025-09-05T14:00:00Z",
      periodEnd: "2025-09-05T16:00:00Z",
      participateMemberNum: 7,
    },
  ],
};

const page = () => {
  // 分を時間形式に変換する関数
  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0 && mins > 0) {
      return `${hours}時間${mins}分`;
    } else if (hours > 0) {
      return `${hours}時間`;
    } else {
      return `${mins}分`;
    }
  };

  // RFC3339文字列から日時範囲を「8/14(水) 13:00~14:00」形式に変換する関数
  const formatDateTimeRange = (
    startTimeString: string,
    endTimeString: string
  ): string => {
    const startDate = new Date(startTimeString);
    const endDate = new Date(endTimeString);

    // 月/日の取得
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();

    // 曜日の取得
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const weekday = weekdays[startDate.getDay()];

    // 時刻の取得（HH:MM形式）
    const startTime = `${startDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${startDate.getMinutes().toString().padStart(2, "0")}`;
    const endTime = `${endDate.getHours().toString().padStart(2, "0")}:${endDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return `${month}/${day}(${weekday}) ${startTime}~${endTime}`;
  };

  return (
    <PageContainer bgColor="gradation">
      <Card>
        <CardHeader>
          <Image
            src="/Icon-Carender.svg"
            alt="カレンダーアイコン"
            width={28}
            height={28}
          ></Image>
          <CardTitle>{mockEvents.eventName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <InfoRow
              label="所要時間"
              value={formatDuration(mockEvents.durationMin)}
            ></InfoRow>
            <InfoRow
              label="投票済み"
              value={`${mockEvents.votedCount}人`}
            ></InfoRow>
            <InfoRow label="メモ" value={mockEvents.memo}></InfoRow>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold">日程調整</h2>
        <div className="flex flex-col gap-2">
          {mockEvents.possibleDate.map((date) => {
            return (
              <Card key={date.id}>
                <CardHeader>
                  <CardTitle>
                    {formatDateTimeRange(date.periodStart, date.periodEnd)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-xs text-gray-text">
                    {date.participateMemberNum}人参加可能
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default page;
