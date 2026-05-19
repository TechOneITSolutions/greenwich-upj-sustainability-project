'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, FileText, Image as ImageIcon, Loader2, LayoutDashboard, LogOut, MessageSquare } from 'lucide-react'
import { logout } from '@/app/admin/login/actions'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/events', label: 'Events', icon: Calendar },
  { href: '/admin/insights', label: 'Insights', icon: FileText },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/messages', label: 'Messages', icon: MessageSquare },
]

export default function AdminNav() {
  const pathname = usePathname()
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null)

  // Clear loader when the route actually changes
  useEffect(() => {
    setNavigatingTo(null)
  }, [pathname])

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact)
          const loading = navigatingTo === href

          return (
            <Link
              key={href}
              href={href}
              suppressHydrationWarning
              onClick={() => {
                if (!active) setNavigatingTo(href)
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                active
                  ? 'bg-emerald-800 text-white'
                  : 'hover:bg-emerald-900 text-emerald-100'
              }`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin shrink-0" />
              ) : (
                <Icon className="w-5 h-5 shrink-0" />
              )}
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-emerald-900">
        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl hover:bg-emerald-900 transition-colors text-red-300 hover:text-red-200"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </form>
      </div>
    </>
  )
}
