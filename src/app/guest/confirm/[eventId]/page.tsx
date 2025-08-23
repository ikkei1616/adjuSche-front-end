"use client";
import ConfirmButton from "@/components/ui/ConfirmButton";
import ConfirmTitle from "@/components/ui/ConfirmTitle";
import PageContent from "@/components/ui/PageContent";
import { useAuth } from "@/lib/auth-context";
import { useEffect, useState } from "react";

type Props = {params: Promise<{eventId:string}>};

export default function Page({params}:Props) {
    const [eventId,setEventId] = useState<string>("");

    const [accessToken, setAccessToken] = useState<string>("");
    const [result,setResult] = useState();

    const testDate = {
      "start_date": "2025-08-22T00:00:00Z",
      "end_date": "2025-08-28T00:00:00Z"
    };
    
    useEffect(()=>{
      const getEventId = async ()=>{
        const { eventId } = await params;
        setEventId(eventId);
      };
      getEventId();
    },[params]);

    const {
      user,
      session,
      loading,
      signIn,
      signOut,
    } = useAuth();
  
    useEffect(() => {
      if (session) {
        // useAuth()から取得したsessionを直接使用
        const googleAccessToken = session.provider_token ?? null;
        if (googleAccessToken) {
          setAccessToken(googleAccessToken);
        }
        console.log("Session from useAuth:", session);
        console.log("User from useAuth:", user);
      }
    }, [session, user]);
  
    if (loading) {
      return <div>読み込み中...</div>;
    }

  return (
    <PageContent className="gap-y-96 pt-9" bgColor="gradation" >
      <ConfirmTitle eventName="test" />
      <div className="w-full flex gap-4 justify-between">
        <ConfirmButton href={`/guest/result/${eventId}`} text="参加" color="green"/>
        <ConfirmButton href={`/guest/result/${eventId}`} text="不参加" color="white" />
      </div>
    </PageContent>
  )
}


