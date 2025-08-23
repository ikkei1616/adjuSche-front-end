'use client'

import { useAuth } from '@/lib/auth-context'
import { Button } from './button'
import { LogOut, User } from 'lucide-react'

export default function UserMenu() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }

  if (!user) return null

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5" />
        <span className="text-sm text-gray-700">
          {user.user_metadata?.full_name || user.email}
        </span>
      </div>
      <Button
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        ログアウト
      </Button>
    </div>
  )
}
