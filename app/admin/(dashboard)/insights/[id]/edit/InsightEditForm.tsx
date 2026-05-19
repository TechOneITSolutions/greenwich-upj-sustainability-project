'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import SubmitButton from '@/components/SubmitButton'
import Link from 'next/link'
import Image from 'next/image'

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
    }} className="space-y-6">
      <input type="hidden" name="id" value={insight.id} />

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Article Title</label>
        <input type="text" id="title" name="title" required defaultValue={insight.title}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
      </div>

      <div>
        <label htmlFor="published_date" className="block text-sm font-medium text-gray-700">Published Date</label>
        <input type="date" id="published_date" name="published_date" required defaultValue={insight.published_date?.split('T')[0]}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
        <div className="bg-white">
          <ReactQuill theme="snow" value={content} onChange={setContent} className="h-64 mb-12" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
        {insight.image_url && (
          <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 w-48 aspect-video relative">
            <Image src={insight.image_url} alt={insight.title} fill className="object-cover" />
          </div>
        )}
        <p className="text-xs text-gray-400 mb-2">Upload a new image to replace the current one (optional)</p>
        <ImageUploadPreview id="image" name="image" />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Link href="/admin/insights" className="px-6 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium">
          Cancel
        </Link>
        <SubmitButton className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 font-medium" loadingText="Saving...">
          Save Changes
        </SubmitButton>
      </div>
    </form>
  )
}
