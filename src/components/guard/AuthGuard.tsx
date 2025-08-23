"use client"
import { useAuth } from "@/lib/auth-context";
import Login from "../ui/Login";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
}

export const AuthGuard = ({children}:Props) => {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  
  // 認証が不要なページ
  const publicPages = ['/auth/login', '/auth/callback'];
  const isPublicPage = publicPages.includes(pathname);
  
  useEffect(() => {
    // 未認証かつ公開ページでない場合、ログインページにリダイレクト
    if (!loading && !user && !isPublicPage) {
      // 現在のパスをクエリパラメータとして保存
      const currentPath = encodeURIComponent(pathname);
      router.push(`/auth/login?redirect=${currentPath}`);
    }
  }, [user, loading, isPublicPage, router, pathname]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
