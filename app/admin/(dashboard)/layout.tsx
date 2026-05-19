import { createClient } from '@/utils/supabase/server'
import AdminLayoutClient from '@/components/AdminLayoutClient'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <AdminLayoutClient userEmail={user?.email ?? null}>
      {children}
    </AdminLayoutClient>
  )
}
