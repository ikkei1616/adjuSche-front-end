"use client";
import * as React from "react";
import { Card, CardContent, CardHeader } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Checkbox } from "./checkbox"; // shadcn/ui の Checkbox
import Image from "next/image";

type EventNeedsTimeProps = {
  /** 分（整数） */
  durationMin: number;
  /** 分（整数）で受け取る */
  onDurationChange: (value: number) => void;
};

// 分 → HH:MM
function minutesToTimeString(min: number): string {
  const safe = Number.isFinite(min) && min >= 0 ? Math.floor(min) : 0;
  const hh = Math.floor(safe / 60);
  const mm = safe % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}`;
}

// HH:MM → 分
function timeStringToMinutes(v: string): number {
  if (!v) return 0;
  const [h, m] = v.split(":").map((x) => parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

export default function EventNeedsTime({ durationMin, onDurationChange }: EventNeedsTimeProps) {
  // 「全日」は 1440 分
  const ALL_DAY_MIN = 1440;
  const isAllDay = durationMin === ALL_DAY_MIN;

  // 全日を外したときに復元する用の直前値
  const lastNonAllDayRef = React.useRef<number>(durationMin === ALL_DAY_MIN ? 0 : durationMin);

  // 外から durationMin が変わった場合の同期
  React.useEffect(() => {
    if (durationMin !== ALL_DAY_MIN) {
      lastNonAllDayRef.current = durationMin;
    }
  }, [durationMin]);

  return (
    <Card>
      <CardHeader>
        <Image src="icon-required-time.svg" alt="requiredIcon" width={28} height={28} className="requiredIcon" />
        <h2>所要時間</h2>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {/* 時間入力（HH:MM） */}
        <div className="flex items-center gap-2">
          <Input
            className="w-24"
            type="time"
            step={60}                        // 1分刻み
            disabled={isAllDay}              // 全日のときは無効化
            value={minutesToTimeString(durationMin === ALL_DAY_MIN ? 0 : durationMin)}
            onChange={(e) => onDurationChange(timeStringToMinutes(e.target.value))}
            aria-label="所要時間（時:分）"
          />
          <span className="font-bold whitespace-nowrap">時間</span>
        </div>

        {/* 全日イベント チェックボックス */}
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={isAllDay}
            onCheckedChange={(checked) => {
              if (checked) {
                // 切り替え前の値を保存してから 24h に
                lastNonAllDayRef.current = durationMin === ALL_DAY_MIN ? lastNonAllDayRef.current : durationMin;
                onDurationChange(ALL_DAY_MIN);
              } else {
                // 直前の値に戻す（なければ 0）
                onDurationChange(lastNonAllDayRef.current ?? 0);
              }
            }}
            id="all-day"
          />
          <Label htmlFor="all-day" className="select-none">全日イベント</Label>
        </label>
      </CardContent>
    </Card>
  );
}
