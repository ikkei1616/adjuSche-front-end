"use client";
import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
/**
 * EventTimeCard.tsx
 *
 * 現状の仕様:
 * - ラベル（朝/昼/夜/全日/カスタム）は太字
 * - カスタム時間は年月日なし → 時刻のみ (type="time")
 * - ラジオの見た目・配色はすべて環境（shadcn / Tailwind / テーマ）のデフォルトに依存
 */

export type EventTimeOption = "morning" | "noon" | "evening" | "allday" | "custom" | "";

export interface EventTimeValue {
    option: EventTimeOption;
    customStart?: number | null;
    customEnd?: number | null;
}

export interface EventTimeCardProps {
    value: EventTimeValue;
    onChange: (next: EventTimeValue) => void;
    children?: React.ReactNode; // CardHeader に親が書き込む
    customLabels?: { start?: string; end?: string };
    className?: string;
}

function toTimestampTimeOnly(value: string): number | null {
    if (!value) return null;
    const [hh, mm] = value.split(":");
    if (hh === undefined || mm === undefined) return null;
    const now = new Date();
    now.setHours(Number(hh), Number(mm), 0, 0);
    return now.getTime();
}

function fromTimestampTimeOnly(ts?: number | null): string {
    if (!ts && ts !== 0) return "";
    const d = new Date(ts);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function EventTimeCard({
    value,
    onChange,
    children,
    customLabels,
    className,
}: EventTimeCardProps) {
    const isCustom = value.option === "custom";

    const setOption = (option: EventTimeOption) => {
        if (option !== "custom") {
            onChange({ option, customStart: null, customEnd: null });
        } else {
            onChange({ option, customStart: value.customStart ?? null, customEnd: value.customEnd ?? null });
        }
    };

    return (
        <Card className={className}>
            <CardHeader>
                  <Image
                          src="Frame.svg"
                          alt="Time Icon"
                          width={28}
                          height={28}
                          className="Icon"
                        />
                        <h2>時間</h2>
            </CardHeader>

            <CardContent className="space-y-4">
                <RadioGroup
                    value={value.option}
                    onValueChange={(v) => setOption(v as EventTimeOption)}
                    className="grid gap-2"
                >
                    <Label htmlFor="opt-morning" className="flex items-center gap-3 cursor-pointer font-bold">
                        <RadioGroupItem id="opt-morning" value="morning" />
                        <span>朝(7:00〜12:00)</span>
                    </Label>

                    <Label htmlFor="opt-noon" className="flex items-center gap-3 cursor-pointer font-bold">
                        <RadioGroupItem id="opt-noon" value="noon" />
                        <span>昼(12:00〜18:00)</span>
                    </Label>

                    <Label htmlFor="opt-evening" className="flex items-center gap-3 cursor-pointer font-bold">
                        <RadioGroupItem id="opt-evening" value="evening" />
                        <span>夜(18:00〜24:00)</span>
                    </Label>

                    <Label htmlFor="opt-allday" className="flex items-center gap-3 cursor-pointer font-bold">
                        <RadioGroupItem id="opt-allday" value="allday" />
                        <span>全日</span>
                    </Label>

                    <div className="space-y-3">
                        <Label htmlFor="opt-custom" className="flex items-center gap-3 cursor-pointer font-bold">
                            <RadioGroupItem id="opt-custom" value="custom" />
                            <span>カスタム時間</span>
                        </Label>

                        {isCustom && (
                            <div className="flex items-end gap-2">
                                <div className="grid gap-1">
                                    
                                    <Input
                                        id="custom-start"
                                        type="time"
                                        value={fromTimestampTimeOnly(value.customStart ?? null)}
                                        onChange={(e) =>
                                            onChange({ ...value, customStart: toTimestampTimeOnly(e.target.value) })
                                        }
                                    />
                                </div>

                                {/* 区切り */}
                                <span className="pb-2">〜</span>

                                <div className="grid gap-1">
                                   
                                    <Input
                                        id="custom-end"
                                        type="time"
                                        value={fromTimestampTimeOnly(value.customEnd ?? null)}
                                        onChange={(e) =>
                                            onChange({ ...value, customEnd: toTimestampTimeOnly(e.target.value) })
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
}

