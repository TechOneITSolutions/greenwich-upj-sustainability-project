import { createClient } from '@/utils/supabase/server'
import AdminNav from '@/components/AdminNav'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-950 text-white flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-emerald-900">
          <div className="bg-white p-3 rounded-xl mb-4 inline-block">
            <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
          </div>
          <h1 className="text-lg font-bold tracking-wider mb-1">UPJ ADMIN</h1>
          {user?.email && (
            <p className="text-sm text-emerald-300/80 truncate" title={user.email}>
              {user.email}
            </p>
          )}
        </div>

        {/* Client nav with loading states */}
        <AdminNav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 sticky top-0">
          <h2 className="text-xl font-bold text-emerald-950">Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 py-1.5 px-3 rounded-full">Admin Session</span>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
