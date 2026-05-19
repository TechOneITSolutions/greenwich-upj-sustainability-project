'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createEvent(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const date = formData.get('date') as string
  const location = formData.get('location') as string
  const description = formData.get('description') as string
  const image = formData.get('image') as File | null
  
  let image_url = null
  
  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images') 
      .upload(`events/${fileName}`, buffer, {
        contentType: image.type,
      })
      
    if (uploadError) {
      console.error("Upload error", uploadError);
      throw new Error(`Storage Upload Failed: ${uploadError.message}`);
    }

    if (uploadData) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(`events/${fileName}`)
      image_url = publicUrl
    }
  }

  const { error: insertError } = await supabase.from('events').insert({
    title,
    date,
    location,
    description,
    image_url
  })

  if (insertError) {
      console.error("Insert error", insertError);
      throw new Error(`Database Insert Failed: ${insertError.message}`);
  }

  revalidatePath('/admin/events')
  redirect('/admin/events')
}

export async function deleteEvent(id: string) {
  const supabase = await createClient()
  await supabase.from('events').delete().eq('id', id)
  revalidatePath('/admin/events')
}

export async function updateEvent(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const date = formData.get('date') as string
  const location = formData.get('location') as string
  const description = formData.get('description') as string
  const image = formData.get('image') as File | null

  const updates: Record<string, string | null> = { title, date, location, description }

  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`events/${fileName}`, buffer, { contentType: image.type })

    if (uploadError) throw new Error(`Storage Upload Failed: ${uploadError.message}`)
    if (uploadData) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(`events/${fileName}`)
      updates.image_url = publicUrl
    }
  }

  const { error } = await supabase.from('events').update(updates).eq('id', id)
  if (error) throw new Error(`Update Failed: ${error.message}`)

  revalidatePath('/admin/events')
  redirect('/admin/events')
}
