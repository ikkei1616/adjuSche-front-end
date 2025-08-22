import React from 'react'
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
    <div>page</div>
  )
}

export default page