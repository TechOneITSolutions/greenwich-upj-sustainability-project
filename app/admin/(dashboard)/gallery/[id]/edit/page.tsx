import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import { updatePhoto } from '../../actions'
import SubmitButton from '@/components/SubmitButton'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default async function EditPhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: photo } = await supabase.from('gallery').select('*').eq('id', id).single()

  if (!photo) notFound()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/gallery" className="text-gray-500 hover:text-emerald-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-3xl font-bold text-emerald-950">Edit Photo</h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={updatePhoto} className="space-y-6">
          <input type="hidden" name="id" value={photo.id} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Photo</label>
            <div className="rounded-xl overflow-hidden border border-gray-200 w-64 aspect-video relative">
              <Image src={photo.image_url} alt={photo.title} fill className="object-cover" />
            </div>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title / Description</label>
            <input type="text" id="title" name="title" required defaultValue={photo.title}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Link href="/admin/gallery" className="px-6 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium">
              Cancel
            </Link>
            <SubmitButton className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 font-medium" loadingText="Saving...">
              Save Changes
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
