"use client";
import { useState } from "react";
import { Card, CardHeader } from "./card";
import { Input } from "./input";
import Image from "next/image";

export default function EventNameCard() {
     const [eventName, setEventName] = useState("");
    return (
        <Card >
           <CardHeader >
            <Image
                src="Icon-Carender.svg"
                alt="Event Icon"
                width={28}
                height={28}
                className="EventIcon"
            />
                <h2 >イベント名</h2>
            </CardHeader>
            <Input
                type="text"
                value={eventName}
                 onChange={(e) => setEventName(e.target.value)}
                placeholder="イベントの名を入力:例: 歓迎会、飲み会"
                className="bg-bg-input text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-color-mainGreen focus:border-color-mainGreen rounded-lg  w-full"
            />
        </Card>

    );
}
