"use client";
import { Card, CardHeader } from "./card";
import { Input } from "./input";
import Image from "next/image";

type EventNameCardProps = {
  title: string;
  onTitleChange: (value: string) => void;
};

export default function EventNameCard({ title, onTitleChange }: EventNameCardProps) {
  return (
    <Card>
      <CardHeader>
        <Image
          src="Icon-Carender.svg"
          alt="Event Icon"
          width={28}
          height={28}
          className="EventIcon"
        />
        <h2>イベント名</h2>
      </CardHeader>
      <Input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="イベントの名を入力: 例: 歓迎会、飲み会"
      />
    </Card>
  );
}
