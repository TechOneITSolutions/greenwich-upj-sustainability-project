'use client'

import { useState } from 'react'

interface ImageUploadPreviewProps {
  name?: string
  id?: string
  required?: boolean
  className?: string
}

export default function ImageUploadPreview({ 
  name = "image", 
  id = "image", 
  required = false,
  className = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
}: ImageUploadPreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    } else {
      setPreviewUrl(null)
    }
  }

  return (
    <div className="space-y-4 w-full">
      <input 
        type="file" 
        id={id} 
        name={name} 
        accept="image/*" 
        required={required}
        onChange={handleFileChange}
        className={className} 
      />
      {previewUrl && (
        <div className="relative mt-4 w-48 aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
