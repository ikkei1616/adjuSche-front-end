import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')
  const error_description = requestUrl.searchParams.get('error_description')

  console.log('Auth callback - URL params:', {
    code: code ? 'present' : 'missing',
    error,
    error_description
  })

  if (error) {
    console.error('OAuth error:', error, error_description)
    return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=${encodeURIComponent(error_description || error)}`)
  }
  
  if (code) {
    const supabase = await createServerSupabaseClient()
    
    const { data, error: authError } = await supabase.auth.exchangeCodeForSession(code)
    
    if (authError) {
      console.error('Error exchanging code for session:', authError)
      return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=${encodeURIComponent(authError.message)}`)
    }

    console.log('Authentication successful:', { 
      user: data.user?.email,
      session: data.session ? 'created' : 'not created'
    })
  }

  // 認証成功後のリダイレクト先
  return NextResponse.redirect(`${requestUrl.origin}/admin/create`)
}
