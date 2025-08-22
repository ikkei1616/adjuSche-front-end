"use client";
import { useState } from "react";
import { Card, CardHeader } from "./card";
import { Input } from "./input";
import Image from "next/image";

export default function EventNameCard() {
     const [title, setTitle] = useState("");
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
                type="string"
                value={title}
                 onChange={(e) => setTitle(e.target.value)}
                placeholder="イベントの名を入力:例: 歓迎会、飲み会"
            />
        </Card>

    );
}
