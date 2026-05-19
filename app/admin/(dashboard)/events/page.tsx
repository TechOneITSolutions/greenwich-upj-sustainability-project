import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, CalendarDays, CalendarPlus, Save } from 'lucide-react'
import { deleteEvent, createEvent, updateEvent } from './actions'
import DeleteButton from '@/components/DeleteButton'
import SubmitButton from '@/components/SubmitButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import Modal from '@/components/Modal'
import Image from 'next/image'

export default async function EventsAdmin(props: {
  searchParams: Promise<{ action?: string, id?: string }>
}) {
  const searchParams = await props.searchParams
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*').order('date', { ascending: false })

  const isNew = searchParams.action === 'new'
  const editId = searchParams.action === 'edit' ? searchParams.id : null
  const editingEvent = editId && events ? events.find(e => e.id === editId) : null

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950">Events</h2>
          <p className="text-gray-500 mt-2">Manage your upcoming and past events</p>
        </div>
        <Link href="?action=new" scroll={false} className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]">
          <Plus className="w-5 h-5" />
          Add Event
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Title</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Date</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide">Location</th>
                <th className="p-5 font-semibold text-gray-600 text-sm tracking-wide text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event) => (
                <tr key={event.id} className="border-b border-gray-50 hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-5 font-medium text-emerald-950">{event.title}</td>
                  <td className="p-5 text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-sm">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-5 text-gray-600">{event.location}</td>
                  <td className="p-5 flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Link href={`?action=edit&id=${event.id}`} scroll={false} className="text-gray-400 hover:text-emerald-600 p-2 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100">
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={async () => {
                      'use server'
                      await deleteEvent(event.id)
                    }}>
                      <DeleteButton className="text-gray-400 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100" />
                    </form>
                  </td>
                </tr>
              ))}
              {(!events || events.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <CalendarDays className="w-8 h-8 text-emerald-300" />
                    </div>
                    <p className="text-gray-500 font-medium text-lg">No events found</p>
                    <p className="text-gray-400 mt-1">Click &quot;Add Event&quot; to create your first one.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALS */}
      {isNew && (
        <Modal title="Add New Event" subtitle="Fill in the details for a new event" returnUrl="/admin/events">
          <form action={createEvent} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                Event Title <span className="text-red-400">*</span>
              </label>
              <input type="text" id="title" name="title" required placeholder="e.g. Annual Sustainability Summit 2026"
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                  Date <span className="text-red-400">*</span>
                </label>
                <input type="date" id="date" name="date" required 
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Location <span className="text-red-400">*</span>
                </label>
                <input type="text" id="location" name="location" required placeholder="e.g. UPJ Main Campus"
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
              <textarea id="description" name="description" rows={5} placeholder="Describe the event..."
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Event Image</label>
              <ImageUploadPreview id="image" name="image" />
            </div>

            <div className="pt-4 flex items-center justify-end">
              <SubmitButton icon={<CalendarPlus className="w-5 h-5" />}>Create Event</SubmitButton>
            </div>
          </form>
        </Modal>
      )}

      {editingEvent && (
        <Modal title="Edit Event" subtitle="Update the event details below" returnUrl="/admin/events">
          <form action={updateEvent} className="space-y-6">
            <input type="hidden" name="id" value={editingEvent.id} />

            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                Event Title <span className="text-red-400">*</span>
              </label>
              <input type="text" id="title" name="title" required defaultValue={editingEvent.title}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                  Date <span className="text-red-400">*</span>
                </label>
                <input type="date" id="date" name="date" required defaultValue={editingEvent.date?.split('T')[0]}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Location <span className="text-red-400">*</span>
                </label>
                <input type="text" id="location" name="location" required defaultValue={editingEvent.location}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
              <textarea id="description" name="description" rows={5} defaultValue={editingEvent.description}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none" />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Event Image</label>
              {editingEvent.image_url && (
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50/50 inline-block">
                  <div className="relative w-48 aspect-video">
                    <Image src={editingEvent.image_url} alt={editingEvent.title} fill className="object-cover" />
                  </div>
                  <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-gray-400">Current image — upload a new one below to replace</p>
                  </div>
                </div>
              )}
              <ImageUploadPreview id="image" name="image" />
            </div>

            <div className="pt-4 flex items-center justify-end">
              <SubmitButton loadingText="Saving..." icon={<Save className="w-5 h-5" />}>Save Changes</SubmitButton>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
