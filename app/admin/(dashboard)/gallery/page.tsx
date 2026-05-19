import { createClient } from '@/utils/supabase/server'
import { deletePhoto, uploadPhoto } from './actions'
import SubmitButton from '@/components/SubmitButton'
import DeleteButton from '@/components/DeleteButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import { Trash2, Upload } from 'lucide-react'

export default async function GalleryAdmin() {
  const supabase = await createClient()
  const { data: photos } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <h2 className="text-3xl font-bold text-emerald-950 mb-8">Photo Gallery</h2>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Upload New Photo</h3>
        <form action={uploadPhoto} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title / Description</label>
            <input type="text" id="title" name="title" required className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="flex-1 w-full">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Photo File</label>
            <ImageUploadPreview id="image" name="image" required={true} className="block w-full border border-gray-300 rounded-md shadow-sm p-1.5 bg-white" />
          </div>
          <SubmitButton className="bg-emerald-600 text-white px-6 py-2.5 rounded-md hover:bg-emerald-700 font-medium flex items-center justify-center gap-2 h-[42px] w-full md:w-auto">
            <Upload className="w-4 h-4" />
            Upload
          </SubmitButton>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos?.map((photo) => (
          <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="aspect-video relative bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.image_url} alt={photo.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="font-medium text-emerald-950 truncate pr-4">{photo.title}</p>
              <form action={async () => {
                'use server'
                await deletePhoto(photo.id, photo.image_url)
              }}>
                <DeleteButton className="bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full transition-colors" />
              </form>
            </div>
          </div>
        ))}
        {(!photos || photos.length === 0) && (
          <div className="col-span-full p-12 text-center text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No photos found. Upload one above.
          </div>
        )}
      </div>
    </div>
  )
}
