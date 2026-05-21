import Link from 'next/link'
import { Plus, UserPlus } from 'lucide-react'
import { deleteUser, createUser } from './actions'
import DeleteButton from '@/components/DeleteButton'
import SubmitButton from '@/components/SubmitButton'
import Modal from '@/components/Modal'
import AdminTableFilter from '@/components/AdminTableFilter'
import AdminPagination from '@/components/AdminPagination'
import { createAdminClient } from '@/utils/supabase/admin'

export default async function UsersAdmin(props: {
  searchParams: Promise<{ action?: string, query?: string, page?: string }>
}) {
  const searchParams = await props.searchParams
  const isNew = searchParams.action === 'new'
  const query = searchParams.query || ''
  const currentPage = Number(searchParams.page) || 1
  const limit = 10
  
  // We fetch a large number of users to allow local filtering
  const supabaseAdmin = createAdminClient()
  const { data } = await supabaseAdmin.auth.admin.listUsers({
    perPage: 1000
  })
  
  let allUsers = data?.users || []
  
  if (query) {
    allUsers = allUsers.filter(u => u.email?.toLowerCase().includes(query.toLowerCase()))
  }
  
  // Local pagination
  const totalItems = allUsers.length
  const totalPages = Math.ceil(totalItems / limit)
  const offset = (currentPage - 1) * limit
  const users = allUsers.slice(offset, offset + limit)

  return (
    <div>
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950">Users</h2>
          <p className="text-gray-500 mt-2">Manage administrators and users</p>
        </div>
        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
          <AdminTableFilter placeholder="Search by email..." />
          <Link href="?action=new" scroll={false} className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.02] shrink-0">
            <Plus className="w-5 h-5" />
            Add User
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Email</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Joined</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Last Sign In</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-5 font-medium text-emerald-950">{user.email}</td>
                  <td className="p-5 text-gray-600">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-5 text-gray-600">
                    {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="p-5 flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <form action={async () => {
                      'use server'
                      await deleteUser(user.id)
                    }}>
                      <DeleteButton className="text-gray-400 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100" />
                    </form>
                  </td>
                </tr>
              ))}
              {(!users || users.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-16 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                        <UserPlus className="w-8 h-8 text-gray-300" />
                      </div>
                      <p className="text-lg font-medium text-gray-900 mb-1">No users found</p>
                      <p className="text-gray-500">
                        {query ? `No users matching "${query}"` : 'Get started by adding a new user.'}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <AdminPagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </div>

      {/* MODALS */}
      {isNew && (
        <Modal title="Add New User" subtitle="Create an account for a new administrator" returnUrl="/admin/users">
          <form action={createUser} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input type="email" id="email" name="email" required placeholder="admin@example.com"
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password <span className="text-red-400">*</span>
              </label>
              <input type="password" id="password" name="password" required placeholder="••••••••" minLength={6}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="pt-4 flex items-center justify-end">
              <SubmitButton icon={<UserPlus className="w-5 h-5" />}>Create User</SubmitButton>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
