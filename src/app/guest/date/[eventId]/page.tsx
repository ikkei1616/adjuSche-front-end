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

const page = () => {
  return (
    <div>page</div>
  )
}

export default page