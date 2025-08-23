"use client";
import { useAuth } from "@/lib/auth-context";
import { useEffect, useState } from "react";


export default function Page() {
    const [accessToken, setAccessToken] = useState<string>("");
    const [result,setResult] = useState();

    const testDate = {
      "start_date": "2025-08-22T00:00:00Z",
      "end_date": "2025-08-28T00:00:00Z"
    };
    
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

    useEffect(() => {
      const testFetch = async()=>{
        const res = await fetch("http://172.16.1.95:8080/calendar",{
        // const res = await fetch("https://adjusche-back-end.onrender.com/calendar",{
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'ap1plication/json',  
            "X-Token":accessToken,
          },
          body: JSON.stringify(testDate)
        })
        const data = await res.json();
        setResult(data);
        };
        testFetch();
    },[])
  
    if (!user) {
      return (
        <div className="p-4">
          <p>ログインが必要です</p>
          <button 
            onClick={() => signIn()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Googleでログイン
          </button>
          <p>{result}</p>
        </div>
      );
    }
  return (
    <div>page</div>
  )
}


