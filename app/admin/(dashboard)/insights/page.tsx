import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteInsight } from './actions'
import DeleteButton from '@/components/DeleteButton'

export default async function InsightsAdmin() {
  const supabase = await createClient()
  const { data: insights } = await supabase.from('insights').select('*').order('published_date', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-950">Insights (News)</h2>
        <Link href="/admin/insights/new" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Title</th>
              <th className="p-4 font-semibold text-gray-600">Published Date</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {insights?.map((insight) => (
              <tr key={insight.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4 font-medium text-emerald-950">{insight.title}</td>
                <td className="p-4 text-gray-600">{new Date(insight.published_date).toLocaleDateString()}</td>
                <td className="p-4 flex justify-end gap-3">
                  <Link href={`/admin/insights/${insight.id}/edit`} className="text-emerald-600 hover:text-emerald-800">
                    <Edit className="w-5 h-5" />
                  </Link>
                  <form action={async () => {
                    'use server'
                    await deleteInsight(insight.id)
                  }}>
                    <DeleteButton />
                  </form>
                </td>
              </tr>
            ))}
            {(!insights || insights.length === 0) && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-gray-500">
                  No articles found. Click "Add Article" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
