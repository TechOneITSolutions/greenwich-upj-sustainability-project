import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import { updateInsight } from '../../actions'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import InsightEditForm from './InsightEditForm'

export default async function EditInsightPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: insight } = await supabase.from('insights').select('*').eq('id', id).single()

  if (!insight) notFound()

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/insights" className="p-2 rounded-xl text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Edit Article</h2>
          <p className="text-sm text-gray-400 mt-0.5">Update the article content and details</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />
        <div className="p-8">
          <InsightEditForm insight={insight} updateAction={updateInsight} />
        </div>
      </div>
    </div>
  )
}
