import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import { updateEvent } from '../../actions'
import SubmitButton from '@/components/SubmitButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: event } = await supabase.from('events').select('*').eq('id', id).single()

  if (!event) notFound()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/events" className="text-gray-500 hover:text-emerald-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-3xl font-bold text-emerald-950">Edit Event</h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={updateEvent} className="space-y-6">
          <input type="hidden" name="id" value={event.id} />

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
            <input type="text" id="title" name="title" required defaultValue={event.title}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" required defaultValue={event.date?.split('T')[0]}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" required defaultValue={event.location}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows={4} defaultValue={event.description}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
            {event.image_url && (
              <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 w-48 aspect-video relative">
                <Image src={event.image_url} alt={event.title} fill className="object-cover" />
              </div>
            )}
            <p className="text-xs text-gray-400 mb-2">Upload a new image to replace the current one (optional)</p>
            <ImageUploadPreview id="image" name="image" />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Link href="/admin/events" className="px-6 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium">
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
