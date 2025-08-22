"use client";
import { useState } from "react";
import { Card, CardHeader,CardContent } from "./card";
import { Input } from "./input";
import Image from "next/image";

export default function EventDurationCard() {

     const [eventStartDate,  setEventStartDate] = useState("");
     const [eventEndDate,  setEventEndDate] = useState("");

    return (
        <Card >
           <CardHeader >
            <Image
                src="icon-duration.svg"
                alt="EventDurationIcon"
                width={28}
                height={28}
                className="EventDurationIcon"
            />
                <h2 >期間</h2>
            </CardHeader>
        <CardContent>
            <label className="font-bold text-sm text-gray-700">開始日</label>
            <Input
                type="date"
                value={eventStartDate}
                 onChange={(e) => setEventStartDate(e.target.value)}
                className="bg-bg-input text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-color-mainGreen focus:border-color-mainGreen rounded-lg  w-full"
            />
            <label className="font-bold text-sm text-gray-700">終了日</label>
            <Input
                type="date"
                value={eventEndDate}
                 onChange={(e) => setEventEndDate(e.target.value)}
                className="bg-bg-input text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-color-mainGreen focus:border-color-mainGreen rounded-lg  w-full"
            />
        </CardContent>
    </Card>

    );
}