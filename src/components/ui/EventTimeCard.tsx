// // "use client";
// // import * as React from "react";
// // import { Card, CardHeader, CardContent } from "@/components/ui/card";
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // import { Label } from "@/components/ui/label";
// // import { Input } from "@/components/ui/input";
// // import Image from "next/image";


// // export type EventTimeOption = "morning" | "noon" | "evening" | "allday" | "custom" | "";

// // export interface EventTimeValue {
// //   option: EventTimeOption;
// //   customStart?: number | null;
// //   customEnd?: number | null;
// // }

// // export interface EventTimeCardProps {
// //   value: EventTimeValue;
// //   onChange: (next: EventTimeValue) => void;
// //   children?: React.ReactNode; 
// //   customLabels?: { start?: string; end?: string };
// //   className?: string;
// // }

// // function toTimestampTimeOnly(value: string): number | null {
// //   if (!value) return null;
// //   const [hh, mm] = value.split(":");
// //   if (hh === undefined || mm === undefined) return null;
// //   const now = new Date();
// //   now.setHours(Number(hh), Number(mm), 0, 0);
// //   return now.getTime();
// // }

// // function fromTimestampTimeOnly(ts?: number | null): string {
// //   if (!ts && ts !== 0) return "";
// //   const d = new Date(ts);
// //   const pad = (n: number) => String(n).padStart(2, "0");
// //   return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
// // }

// // export default function EventTimeCard({
// //   value,
// //   onChange,
// //   children,
// //   customLabels,
// //   className,
// // }: EventTimeCardProps) {
// //   const isCustom = value.option === "custom";

// //   const setOption = (option: EventTimeOption) => {
// //     if (option !== "custom") {
// //       onChange({ option, customStart: null, customEnd: null });
// //     } else {
// //       onChange({ option, customStart: value.customStart ?? null, customEnd: value.customEnd ?? null });
// //     }
// //   };

// //   return (
// //     <Card className={className}>
// //       <CardHeader>
// //         <Image
// //           src="/Frame.svg"
// //           alt="Time Icon"
// //           width={28}
// //           height={28}
// //           className="Icon"
// //         />
// //         <h2>時間</h2>
// //       </CardHeader>

// //       <CardContent className="space-y-4">
// //         <RadioGroup
// //           value={value.option}
// //           onValueChange={(v) => setOption(v as EventTimeOption)}
// //           className="grid gap-2"
// //         >
// //           <Label htmlFor="opt-morning" className="flex items-center gap-3 cursor-pointer font-bold">
// //             <RadioGroupItem id="opt-morning" value="" />
// //             <span>朝(7:00〜12:00)</span>
// //           </Label>

// //           <Label htmlFor="opt-noon" className="flex items-center gap-3 cursor-pointer font-bold">
// //             <RadioGroupItem id="opt-noon" value="noon" />
// //             <span>昼(12:00〜18:00)</span>
// //           </Label>

// //           <Label htmlFor="opt-evening" className="flex items-center gap-3 cursor-pointer font-bold">
// //             <RadioGroupItem id="opt-evening" value="evening" />
// //             <span>夜(18:00〜24:00)</span>
// //           </Label>

// //           <Label htmlFor="opt-allday" className="flex items-center gap-3 cursor-pointer font-bold">
// //             <RadioGroupItem id="opt-allday" value="allday" />
// //             <span>全日</span>
// //           </Label>

// //           <div className="space-y-3">
// //             <Label htmlFor="opt-custom" className="flex items-center gap-3 cursor-pointer font-bold">
// //               <RadioGroupItem id="opt-custom" value="custom" />
// //               <span>カスタム時間</span>
// //             </Label>

// //             {isCustom && (
// //               // <div className="flex items-end gap-2">
// //               //   <div className="grid gap-1">

// //               //     <Input
// //               //       id="custom-start"
// //               //       type="time"
// //               //       value={fromTimestampTimeOnly(value.customStart ?? null)}
// //               //       onChange={(e) =>
// //               //         onChange({ ...value, customStart: toTimestampTimeOnly(e.target.value) })
// //               //       }
// //               //     />
// //               //   </div>

// //               //   {/* 区切り */}
// //               //   <span className="pb-2">〜</span>

// //               //   <div className="grid gap-1">

// //               //     <Input
// //               //       id="custom-end"
// //               //       type="time"
// //               //       value={fromTimestampTimeOnly(value.customEnd ?? null)}
// //               //       onChange={(e) =>
// //               //         onChange({ ...value, customEnd: toTimestampTimeOnly(e.target.value) })
// //               //       }
// //               //     />
// //               //   </div>
// //               // </div>
// //               <div className="flex items-end gap-2">
// //   <div className="grid gap-1">
// //     <Input
// //       id="custom-start"
// //       type="time"
// //       value={fromTimestampTimeOnly(value.customStart ?? null)}
// //       onChange={(e) => {
// //         const startTime = toTimestampTimeOnly(e.target.value);
// //         onChange({
// //           ...value,
// //           customStart: startTime,
// //           // 両方の時間が設定されていれば、"00:00-00:00"形式で保存
// //           customTimeRange: startTime && value.customEnd ? `${fromTimestampTimeOnly(startTime)}-${fromTimestampTimeOnly(value.customEnd)}` : value.customTimeRange,
// //         });
// //       }}
// //     />
// //   </div>

// //   {/* 区切り */}
// //   <span className="pb-2">〜</span>

// //   <div className="grid gap-1">
// //     <Input
// //       id="custom-end"
// //       type="time"
// //       value={fromTimestampTimeOnly(value.customEnd ?? null)}
// //       onChange={(e) => {
// //         const endTime = toTimestampTimeOnly(e.target.value);
// //         onChange({
// //           ...value,
// //           customEnd: endTime,
// //           // 両方の時間が設定されていれば、"00:00-00:00"形式で保存
// //           customTimeRange: value.customStart && endTime ? `${fromTimestampTimeOnly(value.customStart)}-${fromTimestampTimeOnly(endTime)}` : value.customTimeRange,
// //         });
// //       }}
// //     />
// //   </div>
// // </div>

// //             )}
// //           </div>
// //         </RadioGroup>
// //       </CardContent>
// //     </Card>
// //   );
// // }


// "use client";
// import * as React from "react";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";

// export type EventTimeOption = "morning" | "noon" | "evening" | "allday" | "custom" | "";

// export interface EventTimeCardProps {
//   /** 常に "HH:MM-HH:MM" か、未選択は "" */
//   value: string;
//   onChange: (next: string) => void;
//   children?: React.ReactNode;
//   customLabels?: { start?: string; end?: string };
//   className?: string;
// }

// const RANGES = {
//   morning: "07:00-12:00",
//   noon: "12:00-18:00",
//   evening: "18:00-24:00", // 表示上は 24:00 を許容（input time では不可）
//   allday: "00:00-24:00",
// } as const;

// function isHHMM(s: string) {
//   return /^\d{2}:\d{2}$/.test(s) && Number(s.slice(0,2)) <= 23 && Number(s.slice(3,5)) <= 59;
// }

// function parseRange(range: string): { start: string; end: string } | null {
//   const m = /^(\d{2}:\d{2})-(\d{2}:\d{2})$/.exec(range);
//   if (!m) return null;
//   return { start: m[1], end: m[2] };
// }

// function detectOption(range: string): EventTimeOption {
//   if (range === "") return "";
//   if (range === RANGES.morning) return "morning";
//   if (range === RANGES.noon) return "noon";
//   if (range === RANGES.evening) return "evening";
//   if (range === RANGES.allday) return "allday";
//   return "custom";
// }

// export default function EventTimeCard({
//   value,
//   onChange,
//   children,
//   customLabels,
//   className,
// }: EventTimeCardProps) {
//   const currentOption = detectOption(value);
//   const isCustom = currentOption === "custom";

//   // カスタム用のローカル入力を保持（両方埋まったら value を "HH:MM-HH:MM" で更新）
//   const [customStart, setCustomStart] = React.useState("");
//   const [customEnd, setCustomEnd] = React.useState("");

//   // option 変化や value 変化に応じてローカル値を同期
//   React.useEffect(() => {
//     if (isCustom) {
//       const p = parseRange(value);
//       setCustomStart(p?.start ?? "");
//       setCustomEnd(p?.end ?? "");
//     } else {
//       setCustomStart("");
//       setCustomEnd("");
//     }
//   }, [isCustom, value]);

//   const setOption = (option: EventTimeOption) => {
//     if (option === "") {
//       onChange("");
//       return;
//     }
//     if (option === "custom") {
//       // 既に custom でなければ初期化（空にしてユーザーに入力してもらう）
//       if (currentOption !== "custom") {
//         setCustomStart("");
//         setCustomEnd("");
//         onChange(""); // 両方入ったら後で確定
//       }
//       return;
//     }
//     // プリセットは即 "HH:MM-HH:MM" を反映
//     onChange(RANGES[option]);
//   };

//   // カスタム入力変更時：両方が妥当な HH:MM のときだけ value を確定
//   const onChangeCustomStart = (hhmm: string) => {
//     setCustomStart(hhmm);
//     if (isHHMM(hhmm) && isHHMM(customEnd)) onChange(`${hhmm}-${customEnd}`);
//   };
//   const onChangeCustomEnd = (hhmm: string) => {
//     setCustomEnd(hhmm);
//     if (isHHMM(customStart) && isHHMM(hhmm)) onChange(`${customStart}-${hhmm}`);
//   };

//   return (
//     <Card className={className}>
//       <CardHeader>
//         <Image src="/Frame.svg" alt="Time Icon" width={28} height={28} className="Icon" />
//         <h2>時間</h2>
//       </CardHeader>

//       <CardContent className="space-y-4">
//         <RadioGroup
//           value={currentOption}
//           onValueChange={(v) => setOption(v as EventTimeOption)}
//           className="grid gap-2"
//         >
//           <Label htmlFor="opt-morning" className="flex items-center gap-3 cursor-pointer font-bold">
//             {/* ★ 修正: value="" → "morning" */}
//             <RadioGroupItem id="opt-morning" value="morning" />
//             <span>朝(7:00〜12:00)</span>
//           </Label>

//           <Label htmlFor="opt-noon" className="flex items-center gap-3 cursor-pointer font-bold">
//             <RadioGroupItem id="opt-noon" value="noon" />
//             <span>昼(12:00〜18:00)</span>
//           </Label>

//           <Label htmlFor="opt-evening" className="flex items-center gap-3 cursor-pointer font-bold">
//             <RadioGroupItem id="opt-evening" value="evening" />
//             <span>夜(18:00〜24:00)</span>
//           </Label>

//           <Label htmlFor="opt-allday" className="flex items-center gap-3 cursor-pointer font-bold">
//             <RadioGroupItem id="opt-allday" value="allday" />
//             <span>全日</span>
//           </Label>

//           <div className="space-y-3">
//             <Label htmlFor="opt-custom" className="flex items-center gap-3 cursor-pointer font-bold">
//               <RadioGroupItem id="opt-custom" value="custom" />
//               <span>カスタム時間</span>
//             </Label>

//             {isCustom && (
//               <div className="flex items-end gap-2">
//                 <div className="grid gap-1">
//                   <Input
//                     id="custom-start"
//                     type="time"
//                     value={customStart}
//                     onChange={(e) => onChangeCustomStart(e.target.value)}
//                   />
//                 </div>

//                 <span className="pb-2">〜</span>

//                 <div className="grid gap-1">
//                   <Input
//                     id="custom-end"
//                     type="time"
//                     value={customEnd}
//                     onChange={(e) => onChangeCustomEnd(e.target.value)}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </RadioGroup>

//         {/* 確認用 */}
//         {/* <div className="text-xs text-muted-foreground">value = {value || "(empty)"}</div> */}
//       </CardContent>
//     </Card>
//   );
// }

"use client";
import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export type EventTimeOption = "morning" | "noon" | "evening" | "allday" | "custom" | "";

export interface EventTimeCardProps {
  /** 常に "HH:MM-HH:MM"。未選択は "" */
  value: string;
  onChangeAction: (next: string) => void;
  children?: React.ReactNode;
  customLabels?: { start?: string; end?: string };
  className?: string;
}

const RANGES = {
  morning: "07:00-12:00",
  noon: "12:00-18:00",
  evening: "18:00-24:00", // 表示用。inputでは 24:00 入力不可
  allday: "00:00-24:00",
} as const;

function isHHMM(s: string) {
  if (!/^\d{2}:\d{2}$/.test(s)) return false;
  const hh = Number(s.slice(0, 2));
  const mm = Number(s.slice(3, 5));
  return hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59;
}

function parseRange(range: string): { start: string; end: string } | null {
  const m = /^(\d{2}:\d{2})-(\d{2}:\d{2})$/.exec(range);
  if (!m) return null;
  return { start: m[1], end: m[2] };
}

function detectOption(range: string): EventTimeOption {
  if (range === "") return "";
  if (range === RANGES.morning) return "morning";
  if (range === RANGES.noon) return "noon";
  if (range === RANGES.evening) return "evening";
  if (range === RANGES.allday) return "allday";
  return "custom";
}

export default function EventTimeCard({
  value,
  onChangeAction,
  children,
  customLabels,
  className,
}: EventTimeCardProps) {
  const currentOption = detectOption(value);
  const [isCustom, setIsCustom] = React.useState(false)
  console.log("value",value)
  console.log("isCustom", isCustom)

  const [customStart, setCustomStart] = React.useState("");
  const [customEnd, setCustomEnd] = React.useState("");

  // value が custom のときは input に反映
  React.useEffect(() => {
    if (isCustom) {
      const p = parseRange(value);
      setCustomStart(p?.start ?? "");
      setCustomEnd(p?.end ?? "");
    } else {
      setCustomStart("");
      setCustomEnd("");
    }
  }, [isCustom, value]);

  const setOption = (option: EventTimeOption) => {
    console.log("aaaa");
    console.log(option);
    if (option === "") {
      onChangeAction("");
      return;
    }
    if (option === "custom") {
      setIsCustom(true)
      console.log("bbbbbb");
      // custom 切替時は、両方入っていれば確定、なければ未確定のまま
      if (isHHMM(customStart) && isHHMM(customEnd)) {
        console.log("ccccc");
        onChangeAction(`${customStart}-${customEnd}`);
      } else {
        onChangeAction("");
      }
      return;
    } else {
      setIsCustom(false)
    }
    onChangeAction(RANGES[option]);
  };

  const onChangeCustomStart = (hhmm: string) => {
    console.log("aaaaa")
    setCustomStart(hhmm);
    if (isHHMM(hhmm) && isHHMM(customEnd)) {onChangeAction(`${hhmm}-${customEnd}`)
      
    console.log("bbbbbb");
    };
  };

  const onChangeCustomEnd = (hhmm: string) => {

    setCustomEnd(hhmm);
    if (isHHMM(customStart) && isHHMM(hhmm)) onChangeAction(`${customStart}-${hhmm}`);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <Image src="/Frame.svg" alt="Time Icon" width={28} height={28} className="Icon" />
        <h2>時間</h2>
      </CardHeader>

      <CardContent className="space-y-4">
        <RadioGroup
          value={currentOption}
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
                    value={customStart}
                    onChange={(e) => onChangeCustomStart(e.target.value)}
                  />
                </div>

                <span className="pb-2">〜</span>

                <div className="grid gap-1">
                  <Input
                    id="custom-end"
                    type="time"
                    value={customEnd}
                    onChange={(e) => onChangeCustomEnd(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </RadioGroup>

        {children}
      </CardContent>
    </Card>
  );
}
