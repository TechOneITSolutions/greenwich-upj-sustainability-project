import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, FileText } from 'lucide-react'
import { deleteInsight, createInsight, updateInsight } from './actions'
import DeleteButton from '@/components/DeleteButton'
import Modal from '@/components/Modal'
import InsightModalForm from './InsightModalForm'
import AdminTableFilter from '@/components/AdminTableFilter'
import AdminPagination from '@/components/AdminPagination'

export default async function InsightsAdmin(props: {
  searchParams: Promise<{ action?: string, id?: string, query?: string, page?: string }>
}) {
  const searchParams = await props.searchParams
  const isNew = searchParams.action === 'new'
  const editId = searchParams.action === 'edit' ? searchParams.id : null
  const query = searchParams.query || ''
  const currentPage = Number(searchParams.page) || 1
  const limit = 10
  const offset = (currentPage - 1) * limit

  const supabase = await createClient()
  let dbQuery = supabase.from('insights').select('*', { count: 'exact' })
  if (query) {
    dbQuery = dbQuery.ilike('title', `%${query}%`)
  }
  const { data: insights, count } = await dbQuery.order('published_date', { ascending: false }).range(offset, offset + limit - 1)
  
  const totalPages = Math.ceil((count || 0) / limit)

  const editingInsight = editId && insights ? insights.find(i => i.id === editId) : null

  return (
    <div>
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950">Insights (News)</h2>
          <p className="text-gray-500 mt-2">Manage your published articles and news</p>
        </div>
        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
          <AdminTableFilter placeholder="Search insights..." />
          <Link href="?action=new" scroll={false} className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.02] shrink-0">
            <Plus className="w-5 h-5" />
            Add Article
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide w-3/5">Title</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Published Date</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {insights?.map((insight) => (
                <tr key={insight.id} className="border-b border-gray-50 hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-5 font-medium text-emerald-950">
                    <span className="line-clamp-1">{insight.title}</span>
                  </td>
                  <td className="p-5 text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-sm">
                      {new Date(insight.published_date).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-5 flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Link href={`?action=edit&id=${insight.id}`} scroll={false} className="text-gray-400 hover:text-emerald-600 p-2 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100">
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={async () => {
                      'use server'
                      await deleteInsight(insight.id)
                    }}>
                      <DeleteButton className="text-gray-400 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100" />
                    </form>
                  </td>
                </tr>
              ))}
              {(!insights || insights.length === 0) && (
                <tr>
                  <td colSpan={3} className="p-16 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 text-gray-300" />
                      </div>
                      <p className="text-lg font-medium text-gray-900 mb-1">No insights found</p>
                      <p className="text-gray-500">
                        {query ? `No insights matching "${query}"` : 'Get started by creating a new article.'}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <AdminPagination totalPages={totalPages} currentPage={currentPage} />
      </div>

      {/* MODALS */}
      {isNew && (
        <Modal title="Add New Article" subtitle="Write and publish a new insight article" returnUrl="/admin/insights" maxWidth="max-w-4xl">
          <InsightModalForm actionFn={createInsight} />
        </Modal>
      )}

      {editingInsight && (
        <Modal title="Edit Article" subtitle="Update the article content and details" returnUrl="/admin/insights" maxWidth="max-w-4xl">
          <InsightModalForm insight={editingInsight} actionFn={updateInsight} />
        </Modal>
      )}
    </div>
  )
}
