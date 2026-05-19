import { createEvent } from '../actions'
import SubmitButton from '@/components/SubmitButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'

export default function NewEventPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-950 mb-8">Add New Event</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={createEvent} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
            <input type="text" id="title" name="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
            <ImageUploadPreview id="image" name="image" />
          </div>

          <div className="flex justify-end pt-4">
            <SubmitButton className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 font-medium">
              Save Event
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
