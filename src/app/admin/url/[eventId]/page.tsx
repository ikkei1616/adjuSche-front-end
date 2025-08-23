import { Header } from "@/components/ui/Header";
import InviteLinkCard from "@/components/ui/InviteLinkCard";
import PageContent from "@/components/ui/PageContent";

type Props = {params: Promise<{eventId: string}>};

export default async function Page({params}:Props) {
  const { eventId }  =  await params;
  return (
    <>
      <Header link="/admin/create" title="招待用URL" />
      <PageContent bgColor="gradation"> 
        <InviteLinkCard eventId={eventId}></InviteLinkCard>
      </PageContent>
    </>
  )
}
