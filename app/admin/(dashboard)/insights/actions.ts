'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createInsight(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const published_date = formData.get('published_date') as string
  const content = formData.get('content') as string
  const image = formData.get('image') as File | null
  
  let image_url = null
  
  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images') 
      .upload(`insights/${fileName}`, buffer, {
        contentType: image.type,
      })
      
    if (uploadError) {
      console.error("Upload error", uploadError);
      throw new Error(`Storage Upload Failed: ${uploadError.message}`);
    }

    if (uploadData) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(`insights/${fileName}`)
      image_url = publicUrl
    }
  }

  const { error: insertError } = await supabase.from('insights').insert({
    title,
    published_date,
    content,
    image_url
  })

  if (insertError) {
      console.error("Insert error", insertError);
      throw new Error(`Database Insert Failed: ${insertError.message}`);
  }

  revalidatePath('/admin/insights')
  redirect('/admin/insights')
}

export async function deleteInsight(id: string) {
  const supabase = await createClient()
  await supabase.from('insights').delete().eq('id', id)
  revalidatePath('/admin/insights')
}

export async function updateInsight(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const published_date = formData.get('published_date') as string
  const content = formData.get('content') as string
  const image = formData.get('image') as File | null

  const updates: Record<string, string | null> = { title, published_date, content }

  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`insights/${fileName}`, buffer, { contentType: image.type })

    if (uploadError) throw new Error(`Storage Upload Failed: ${uploadError.message}`)
    if (uploadData) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(`insights/${fileName}`)
      updates.image_url = publicUrl
    }
  }

  const { error } = await supabase.from('insights').update(updates).eq('id', id)
  if (error) throw new Error(`Update Failed: ${error.message}`)

  revalidatePath('/admin/insights')
  redirect('/admin/insights')
}
