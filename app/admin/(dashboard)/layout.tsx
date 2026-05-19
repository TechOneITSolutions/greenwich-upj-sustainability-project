import { createClient } from '@/utils/supabase/server'
import AdminNav from '@/components/AdminNav'
import { Leaf } from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-emerald-950 text-white flex flex-col sticky top-0 h-screen shadow-xl z-20">
        <div className="p-6 border-b border-emerald-900/50 bg-emerald-950/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 rounded-xl shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div> */}
            {/* <div>
              <h1 className="text-sm font-bold tracking-wider text-emerald-50">UPJ ADMIN</h1>
              <p className="text-xs text-emerald-400/80 mt-0.5">Sustainability Panel</p>
            </div> */}
          </div>
          
          {user?.email && (
            <div className="bg-emerald-900/50 rounded-xl p-3 border border-emerald-800/50">
              <p className="text-xs text-emerald-400 mb-1">Logged in as</p>
              <p className="text-sm text-emerald-100 truncate font-medium" title={user.email}>
                {user.email}
              </p>
            </div>
          )}
        </div>

        {/* Client nav with loading states */}
        <AdminNav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[url('/noise.png')] bg-repeat opacity-[0.99]">
        {/* Top bar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200/80 flex items-center justify-between px-10 z-10 sticky top-0 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <span className="text-sm font-medium text-gray-500 hidden sm:block">Dashboard Content Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 py-2 px-4 rounded-full shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Admin Session
            </span>
          </div>
        </header>

        <div className="flex-1 p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
