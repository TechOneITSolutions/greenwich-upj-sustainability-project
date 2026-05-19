import { createClient } from '@/utils/supabase/server'
import { deletePhoto, uploadPhoto, updatePhoto } from './actions'
import SubmitButton from '@/components/SubmitButton'
import DeleteButton from '@/components/DeleteButton'
import ImageUploadPreview from '@/components/ImageUploadPreview'
import Modal from '@/components/Modal'
import AdminTableFilter from '@/components/AdminTableFilter'
import AdminPagination from '@/components/AdminPagination'
import { Upload, Edit, ImagePlus, Save, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function GalleryAdmin(props: {
  searchParams: Promise<{ action?: string, id?: string, query?: string, page?: string }>
}) {
  const searchParams = await props.searchParams
  const isNew = searchParams.action === 'new'
  const editId = searchParams.action === 'edit' ? searchParams.id : null
  const query = searchParams.query || ''
  const currentPage = Number(searchParams.page) || 1
  const limit = 9 // Use 9 for 3-column grid
  const offset = (currentPage - 1) * limit

  const supabase = await createClient()
  let dbQuery = supabase.from('gallery').select('*', { count: 'exact' })
  if (query) {
    dbQuery = dbQuery.or(`title.ilike.%${query}%,location.ilike.%${query}%,category.ilike.%${query}%`)
  }
  const { data: photos, count } = await dbQuery.order('created_at', { ascending: false }).range(offset, offset + limit - 1)
  
  const totalPages = Math.ceil((count || 0) / limit)

  const CATEGORIES = ['Workshops', 'Meetings', 'Fieldwork']

  const editingPhoto = editId && photos ? photos.find(p => p.id === editId) : null

  return (
    <div>
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950">Photo Gallery</h2>
          <p className="text-gray-500 mt-2">Manage your gallery images</p>
        </div>
        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
          <AdminTableFilter placeholder="Search gallery..." />
          <Link href="?action=new" scroll={false} className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.02] shrink-0">
            <Upload className="w-5 h-5" />
            Upload Photo
          </Link>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos?.map((photo) => (
          <div key={photo.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-200">
            <div className={`aspect-video relative ${!photo.image_url ? 'bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4' : 'bg-gray-100'}`}>
              {photo.image_url ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.image_url} alt={photo.title} className="w-full h-full object-cover" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </>
              ) : (
                <div className="w-full h-full border-2 border-emerald-500/20 rounded-xl flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm p-4 text-center shadow-inner">
                  <h3 className="text-emerald-950 font-bold text-lg leading-tight line-clamp-3">{photo.title}</h3>
                  <div className="w-8 h-1 bg-emerald-400 rounded-full mt-3 opacity-50"></div>
                </div>
              )}
            </div>
            <div className="p-4 flex justify-between items-start">
              <div className="min-w-0 pr-3">
                <p className="font-medium text-emerald-950 truncate">{photo.title}</p>
                {photo.category && (
                  <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />{photo.category}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <Link href={`?action=edit&id=${photo.id}`} scroll={false}
                  className="text-gray-400 hover:text-emerald-600 p-2 rounded-xl hover:bg-emerald-50 transition-all">
                  <Edit className="w-4 h-4" />
                </Link>
                <form action={async () => {
                  'use server'
                  await deletePhoto(photo.id, photo.image_url)
                }}>
                  <DeleteButton className="text-gray-400 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 transition-all" />
                </form>
              </div>
            </div>
          </div>
        ))}
        {(!photos || photos.length === 0) && (
          <div className="col-span-full p-16 text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <ImagePlus className="w-8 h-8 text-emerald-300" />
            </div>
            <p className="text-gray-500 font-medium text-lg">No photos found</p>
            <p className="text-gray-400 mt-1">
              {query ? `No photos matching "${query}"` : 'Click "Upload Photo" above to add your first one.'}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <AdminPagination totalPages={totalPages} currentPage={currentPage} />
      </div>

      {/* MODALS */}
      {isNew && (
        <Modal title="Upload New Photo" subtitle="Add a new image to your gallery" returnUrl="/admin/gallery" maxWidth="max-w-2xl">
          <form action={uploadPhoto} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                Title / Description <span className="text-red-400">*</span>
              </label>
              <input type="text" id="title" name="title" required placeholder="e.g. Campus Solar Panel Installation"
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Location
                </label>
                <input type="text" id="location" name="location" placeholder="e.g. Avery Hill Campus"
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
                  Category
                </label>
                <select id="category" name="category"
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white">
                  <option value="">— No category —</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Photo
              </label>
              <ImageUploadPreview id="image" name="image" required={false} />
            </div>

            <div className="pt-4 flex items-center justify-end">
              <SubmitButton icon={<ImagePlus className="w-5 h-5" />}>Upload Photo</SubmitButton>
            </div>
          </form>
        </Modal>
      )}

      {editingPhoto && (
        <Modal title="Edit Photo" subtitle="Update the photo details" returnUrl="/admin/gallery" maxWidth="max-w-2xl">
          <form action={updatePhoto} className="space-y-6">
            <input type="hidden" name="id" value={editingPhoto.id} />

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Photo</label>
              {editingPhoto.image_url && (
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50/50 inline-block mb-2">
                  <div className="relative w-56 aspect-video">
                    <Image src={editingPhoto.image_url} alt={editingPhoto.title} fill className="object-cover" />
                  </div>
                  <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-gray-400">Current photo — upload below to replace</p>
                  </div>
                </div>
              )}
              <ImageUploadPreview id="image" name="image" required={false} />
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                Title / Description <span className="text-red-400">*</span>
              </label>
              <input type="text" id="title" name="title" required defaultValue={editingPhoto.title}
                className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Location
                </label>
                <input type="text" id="location" name="location" defaultValue={editingPhoto.location} placeholder="e.g. Avery Hill Campus"
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
                  Category
                </label>
                <select id="category" name="category" defaultValue={editingPhoto.category ?? ''}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white">
                  <option value="">— No category —</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
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
