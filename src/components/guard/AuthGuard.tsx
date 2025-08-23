"use client"
import { supabase } from "@/lib/supabase";
import Login from "../ui/Login";
import { ReactNode, useEffect} from "react";

type Props = {
  children: ReactNode;
}

export const AuthGuard = ({children}:Props) => {
  
  useEffect(()=>{
    (async () => {
      const date = await supabase.auth.getSession();
      
      if (!date) {
        return <Login></Login>
      }
    })();
  },[])

  return (
    children
  )
}
