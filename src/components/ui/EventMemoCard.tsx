"use client";
import { Card, CardHeader } from "./card";
import { Textarea } from "./textarea";
import Image from "next/image";

type EventMemoCardProps = {
  Memo: string;
  onMemoChange: (value: string) => void;
};

export default function EventMemoCard({ Memo, onMemoChange }: EventMemoCardProps) {
  return (
    <Card>
      <CardHeader>
        <Image
          src="/Memo.svg"
          alt="MemoIcon"
          width={28}
          height={28}
          className="MemoIcon"
        />
        <h2>メモ</h2>
      </CardHeader>
      <Textarea
        value={Memo}
        onChange={(e) => onMemoChange(e.target.value)}
        placeholder="イベントの詳細を入力:例:場所、持ち物"
      />
    </Card>
  );
}
