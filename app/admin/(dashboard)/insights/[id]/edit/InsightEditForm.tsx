'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import SubmitButton from '@/components/SubmitButton'
import Link from 'next/link'
import Image from 'next/image'
import { Save } from 'lucide-react'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface Props {
  insight: {
    id: string
    title: string
    published_date: string
    content: string
    image_url: string | null
  }
  updateAction: (formData: FormData) => Promise<void>
}

export default function InsightEditForm({ insight, updateAction }: Props) {
  const [content, setContent] = useState(insight.content || '')

  return (
    <form action={(formData) => {
      formData.set('content', content)
      updateAction(formData)
    }} className="space-y-8">
      <input type="hidden" name="id" value={insight.id} />

      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
          Article Title <span className="text-red-400">*</span>
        </label>
        <input type="text" id="title" name="title" required defaultValue={insight.title}
          className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
      </div>

      <div className="space-y-2 max-w-xs">
        <label htmlFor="published_date" className="block text-sm font-semibold text-gray-700">
          Published Date <span className="text-red-400">*</span>
        </label>
        <input type="date" id="published_date" name="published_date" required defaultValue={insight.published_date?.split('T')[0]}
          className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Content</label>
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
          <ReactQuill theme="snow" value={content} onChange={setContent} className="h-72 [&_.ql-toolbar]:border-0 [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-gray-200 [&_.ql-toolbar]:bg-gray-50/80 [&_.ql-container]:border-0 [&_.ql-editor]:min-h-[200px]" />
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <label className="block text-sm font-semibold text-gray-700">Cover Image</label>
        {insight.image_url && (
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50/50 inline-block">
            <div className="relative w-72 aspect-video">
              <Image src={insight.image_url} alt={insight.title} fill className="object-cover" />
            </div>
            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400">Current image — upload below to replace</p>
            </div>
          </div>
        )}
        <ImageUploadPreview id="image" name="image" />
      </div>

      <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
        <Link href="/admin/insights" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Cancel</Link>
        <SubmitButton loadingText="Saving..." icon={<Save className="w-5 h-5" />}>Save Changes</SubmitButton>
      </div>
    </form>
  )
}
