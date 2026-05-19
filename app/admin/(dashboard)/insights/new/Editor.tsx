'use client'

import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css'
import { useState } from 'react'
import { createInsight } from '../actions'
import SubmitButton from '@/components/SubmitButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

export default function Editor() {
  const [content, setContent] = useState('')

  return (
    <form action={(formData) => {
      formData.set('content', content)
      createInsight(formData)
    }} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Article Title</label>
        <input type="text" id="title" name="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
      </div>
      
      <div>
        <label htmlFor="published_date" className="block text-sm font-medium text-gray-700">Published Date</label>
        <input type="date" id="published_date" name="published_date" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
        <div className="bg-white">
            <ReactQuill theme="snow" value={content} onChange={setContent} className="h-64 mb-12" />
        </div>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-12 mb-2">Cover Image</label>
        <ImageUploadPreview id="image" name="image" />
      </div>

      <div className="flex justify-end pt-4">
        <SubmitButton className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 font-medium">
          Save Article
        </SubmitButton>
      </div>
    </form>
  )
}
