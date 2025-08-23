import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')
  const error_description = requestUrl.searchParams.get('error_description')
  const redirect = requestUrl.searchParams.get('redirect')

  console.log('Auth callback - URL params:', {
    code: code ? 'present' : 'missing',
    error,
    error_description,
    redirect
  })

  if (error) {
    console.error('OAuth error:', error, error_description)
    const redirectUrl = redirect 
      ? `/auth/login?error=${encodeURIComponent(error_description || error)}&redirect=${encodeURIComponent(redirect)}`
      : `/auth/login?error=${encodeURIComponent(error_description || error)}`
    return NextResponse.redirect(`${requestUrl.origin}${redirectUrl}`)
  }
  
  if (code) {
    const supabase = await createServerSupabaseClient()
    
    const { data, error: authError } = await supabase.auth.exchangeCodeForSession(code)
    
    if (authError) {
      console.error('Error exchanging code for session:', authError)
      const redirectUrl = redirect
        ? `/auth/login?error=${encodeURIComponent(authError.message)}&redirect=${encodeURIComponent(redirect)}`
        : `/auth/login?error=${encodeURIComponent(authError.message)}`
      return NextResponse.redirect(`${requestUrl.origin}${redirectUrl}`)
    }

    console.log('Authentication successful:', { 
      user: data.user?.email,
      session: data.session ? 'created' : 'not created'
    })
  }

  // 認証成功後のリダイレクト先を決定
  const finalRedirect = redirect && decodeURIComponent(redirect) || '/admin/create'
  return NextResponse.redirect(`${requestUrl.origin}${finalRedirect}`)
}
