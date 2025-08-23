import { createBrowserClient } from '@supabase/ssr'

// クライアントサイド用
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        flowType: 'pkce'
      }
    }
  )
}

// 後方互換性のため
export const supabase = createClient()