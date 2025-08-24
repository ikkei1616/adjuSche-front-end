import GreenButton from "@/components/ui/GreenButton";
import { Header } from "@/components/ui/Header";
import InviteLinkCard from "@/components/ui/InviteLinkCard";
import PageContent from "@/components/ui/PageContent";

type Props = {params: Promise<{eventId: string}>};

export default async function Page({params}:Props) {
  const { eventId }  =  await params;
  
  // 環境変数からベースURLを取得
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const eventPageUrl = `${baseUrl}/guest/result/${eventId}`;
  
  return (
    <>
      <Header link="/admin/create" title="招待用URL" />
      <PageContent bgColor="gradation" className="gap-96"> 
        <InviteLinkCard eventId={eventId}></InviteLinkCard>
        <GreenButton href={eventPageUrl} title="イベントページを表示"></GreenButton>
      </PageContent>
    </>
  )
}
