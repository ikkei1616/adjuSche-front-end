'use client';

import { supabase } from "@/lib/supabase";

export default function Page() {

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/admin/create`, 
      },
    });
    if (error) console.error(error);
  };

  return (
    <div>
      <p>aaaa</p>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}