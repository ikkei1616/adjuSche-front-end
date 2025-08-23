import { ComponentPropsWithRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import Image from "next/image";

type Props = ComponentPropsWithRef<"div"> & {
  eventId: string,
}

const InviteLinkCard = ({eventId,...props}:Props) => {
  // 環境変数からベースURLを取得
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const inviteUrl = `${baseUrl}/guest/confirm/${eventId}`;
  
  return (
    <Card>
      <CardHeader>
        <Image src="/icon-Url.svg" alt="urlアイコン" width={28} height={28}></Image>
        <CardTitle>招待用URL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-text bg-bg-input text-sm w-full p-3 rounded-2xl border break-all whitespace-pre-wrap">
          {inviteUrl}
        </div>
      </CardContent>
    </Card>
  )
}

export default InviteLinkCard