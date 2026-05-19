'use client'

import { useState, useRef } from 'react'
import { Upload, X, ImageIcon } from 'lucide-react'

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
}: ImageUploadPreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const MAX_SIZE_MB = 2;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

  const processFile = (file: File) => {
    setError(null)
    if (file.size > MAX_SIZE_BYTES) {
      setError(`Image exceeds ${MAX_SIZE_MB}MB limit. Please choose a smaller file.`)
      if (inputRef.current) inputRef.current.value = ''
      return
    }

    setFileName(file.name)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)

    // Read natural image dimensions for adaptive preview
    const img = new window.Image()
    img.onload = () => {
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight })
    }
    img.src = url
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    } else {
      clearPreview()
    }
  }

  const clearPreview = () => {
    setPreviewUrl(null)
    setFileName(null)
    setDimensions(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      if (file.size > MAX_SIZE_BYTES) {
        setError(`Image exceeds ${MAX_SIZE_MB}MB limit. Please choose a smaller file.`)
        return
      }

      const dt = new DataTransfer()
      dt.items.add(file)
      if (inputRef.current) {
        inputRef.current.files = dt.files
        inputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
      }
      processFile(file)
    }
  }

  // Calculate adaptive preview style based on actual image dimensions
  const getPreviewStyle = (): React.CSSProperties => {
    if (!dimensions) return {}
    const ratio = dimensions.w / dimensions.h
    const maxWidth = 320
    const maxHeight = 240
    let width = dimensions.w
    let height = dimensions.h

    if (width > maxWidth) {
      width = maxWidth
      height = maxWidth / ratio
    }
    if (height > maxHeight) {
      height = maxHeight
      width = maxHeight * ratio
    }

    return { width: `${width}px`, height: `${height}px` }
  }

  return (
    <div className="space-y-3 w-full">
      <input 
        ref={inputRef}
        type="file" 
        id={id} 
        name={name} 
        accept="image/*" 
        required={required}
        onChange={handleFileChange}
        className="hidden" 
      />

      {!previewUrl ? (
        <label
          htmlFor={id}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 cursor-pointer transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50/80 hover:shadow-sm group"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
            <Upload className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-emerald-800">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-emerald-600/60 mt-1">
              PNG, JPG, WEBP up to 2MB
            </p>
          </div>
        </label>
      ) : (
        <div className="relative group animate-in fade-in duration-300">
          {/* Adaptive preview container */}
          <div 
            className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50/50 shadow-sm mx-auto"
            style={getPreviewStyle()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full h-full object-contain"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
              <button
                type="button"
                onClick={clearPreview}
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/90 backdrop-blur-sm text-red-600 p-2.5 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
                title="Remove image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* File info bar */}
          <div className="flex items-center gap-2 mt-3 px-1">
            <ImageIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-gray-500 truncate">{fileName}</span>
            {dimensions && (
              <span className="text-xs text-gray-400 shrink-0 ml-auto">
                {dimensions.w} × {dimensions.h}
              </span>
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm font-medium text-red-500 mt-2 px-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  )
}
