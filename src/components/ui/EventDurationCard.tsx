"use client";
import { Card, CardHeader, CardContent } from "./card";
import { Input } from "./input";
import Image from "next/image";

type Props = {
  periodStart: Date | null;
  periodEnd: Date | null;
  onChange: (next: { start: Date | null; end: Date | null }) => void;
};

// util: Date → "YYYY-MM-DD"
function formatDate(date: Date | null): string {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// util: "YYYY-MM-DD" → Date
function parseDate(value: string): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export default function EventDurationCard({ periodStart, periodEnd, onChange }: Props) {
  return (
    <Card>
      <CardHeader>
        <Image
          src="icon-duration.svg"
          alt="EventDurationIcon"
          width={28}
          height={28}
          className="EventDurationIcon"
        />
        <h2>期間</h2>
      </CardHeader>

      <CardContent >
        <label className="font-bold">開始日</label>
        <Input
          type="date"
          value={formatDate(periodStart)}
          onChange={(e) => onChange({ start: parseDate(e.target.value), end: periodEnd })}
        />

        <label className="font-bold">終了日</label>
        <Input
          type="date"
          value={formatDate(periodEnd)}
          onChange={(e) => onChange({ start: periodStart, end: parseDate(e.target.value) })}
        />
      </CardContent>
    </Card>
  );
}
