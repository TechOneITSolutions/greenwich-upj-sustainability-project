import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import { updatePhoto } from '../../actions'
import SubmitButton from '@/components/SubmitButton'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'
import Image from 'next/image'

export default async function EditPhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: photo } = await supabase.from('gallery').select('*').eq('id', id).single()

  if (!photo) notFound()

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/gallery" className="p-2 rounded-xl text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Edit Photo</h2>
          <p className="text-sm text-gray-400 mt-0.5">Update the photo details</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />

        <form action={updatePhoto} className="p-8 space-y-8">
          <input type="hidden" name="id" value={photo.id} />

          {/* Current Photo Preview */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">Current Photo</label>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50/50 inline-block">
              <div className="relative w-80 aspect-video">
                <Image src={photo.image_url} alt={photo.title} fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
              Title / Description <span className="text-red-400">*</span>
            </label>
            <input type="text" id="title" name="title" required defaultValue={photo.title}
              className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
          </div>

          {/* Divider + Actions */}
          <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
            <Link href="/admin/gallery" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Cancel</Link>
            <SubmitButton loadingText="Saving..." icon={<Save className="w-5 h-5" />}>Save Changes</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
