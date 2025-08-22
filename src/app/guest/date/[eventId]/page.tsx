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
  return (
    <div>page</div>
  )
}

export default page