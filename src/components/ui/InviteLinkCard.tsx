import { ComponentPropsWithRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import Image from "next/image";

type Props = ComponentPropsWithRef<"div"> & {
  eventId: string,
}

const InviteLinkCard = ({eventId,...props}:Props) => {
  return (
    <Card>
      <CardHeader>
        <Image src="/icon-Url.svg" alt="urlアイコン" width={28} height={28}></Image>
        <CardTitle>招待用URL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-text bg-bg-input text-sm w-full p-3 rounded border break-all whitespace-pre-wrap rounded-2xl">
          https://adju-sche-front-end.vercel.app/confirm/{eventId}
        </div>
      </CardContent>
    </Card>
  )
}

export default InviteLinkCard