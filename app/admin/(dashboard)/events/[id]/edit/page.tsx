import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import { updateEvent } from '../../actions'
import SubmitButton from '@/components/SubmitButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'
import Image from 'next/image'

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: event } = await supabase.from('events').select('*').eq('id', id).single()

  if (!event) notFound()

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/events" className="p-2 rounded-xl text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Edit Event</h2>
          <p className="text-sm text-gray-400 mt-0.5">Update the event details below</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />
        
        <form action={updateEvent} className="p-8 space-y-8">
          <input type="hidden" name="id" value={event.id} />

          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
              Event Title <span className="text-red-400">*</span>
            </label>
            <input 
              type="text" id="title" name="title" required defaultValue={event.title}
              className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" 
            />
          </div>

          {/* Date & Location row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                Date <span className="text-red-400">*</span>
              </label>
              <input 
                type="date" id="date" name="date" required defaultValue={event.date?.split('T')[0]}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                Location <span className="text-red-400">*</span>
              </label>
              <input 
                type="text" id="location" name="location" required defaultValue={event.location}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" 
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
            <textarea 
              id="description" name="description" rows={5} defaultValue={event.description}
              className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none" 
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">Event Image</label>
            {event.image_url && (
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50/50 inline-block">
                <div className="relative w-72 aspect-video">
                  <Image src={event.image_url} alt={event.title} fill className="object-cover" />
                </div>
                <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-400">Current image — upload a new one below to replace</p>
                </div>
              </div>
            )}
            <ImageUploadPreview id="image" name="image" />
          </div>

          {/* Divider + Actions */}
          <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
            <Link href="/admin/events" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Cancel
            </Link>
            <SubmitButton loadingText="Saving..." icon={<Save className="w-5 h-5" />}>
              Save Changes
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
