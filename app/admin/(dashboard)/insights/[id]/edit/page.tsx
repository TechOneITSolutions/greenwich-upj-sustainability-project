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
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/insights" className="text-gray-500 hover:text-emerald-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-3xl font-bold text-emerald-950">Edit Article</h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <InsightEditForm insight={insight} updateAction={updateInsight} />
      </div>
    </div>
  )
}
