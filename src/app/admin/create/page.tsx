"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";

export default function Page() {
  const [accessToken, setAccessToken] = useState<string>("");
  
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
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">管理者ページ</h1>
      <div className="space-y-2">
        <p><strong>ユーザー:</strong> {user.email}</p>
        <p><strong>ユーザーID:</strong> {user.id}</p>
        <p><strong>アクセストークン:</strong> {accessToken ? accessToken : "取得できませんでした"}</p>
        <button 
          onClick={signOut}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}