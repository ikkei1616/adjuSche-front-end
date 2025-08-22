"use client";
import { useState } from "react";
import { Card, CardHeader,CardContent } from "./card";
import { Input } from "./input";
import Image from "next/image";

export default function EventDurationCard() {

     const [periodStart,  setPeriodStart] = useState("");
     const [periodEnd,  setPeriodEnd] = useState("");

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
            <label className="font-bold">開始日</label>
            <Input
                type="date"
                value={periodStart}
                 onChange={(e) => setPeriodStart(e.target.value)}
               
            />
            <label className="font-bold">終了日</label>
            <Input
                type="date"
                value={periodEnd}
                 onChange={(e) => setPeriodEnd(e.target.value)}
               
            />
        </CardContent>
    </Card>

    );
}