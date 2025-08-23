"use client";
import {useEffect,useState} from "react";
import { supabase } from "@/lib/supabase";

export default  function Page() {
  const [accessToken,setAccessToken] = useState<string>("");

  useEffect(() =>{
    
    (async()=>{
      const {data,error} = await supabase.auth.getSession();
      if (error) throw error;
      const googleAccessToken = data.session?.provider_token ?? null;
      if (googleAccessToken) {
        setAccessToken(googleAccessToken);
      }
    })();

  },[]);

  return (
    <div>
      {accessToken}
    </div>
  );
}