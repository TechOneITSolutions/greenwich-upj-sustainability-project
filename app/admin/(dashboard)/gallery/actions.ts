'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function uploadPhoto(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const image = formData.get('image') as File | null
  
  let publicUrl = '';

  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images') 
      .upload(`gallery/${fileName}`, buffer, {
        contentType: image.type,
      })
      
    if (uploadError) {
      console.error("Upload error", uploadError);
      throw new Error(`Storage Upload Failed: ${uploadError.message}`);
    }

    if (uploadData) {
      const { data } = supabase.storage.from('images').getPublicUrl(`gallery/${fileName}`)
      publicUrl = data.publicUrl;
    }
  }
  
  const { error: insertError } = await supabase.from('gallery').insert({
    title,
    image_url: publicUrl
  })
  
  if (insertError) {
    console.error("Insert error", insertError);
    throw new Error(`Database Insert Failed: ${insertError.message}`);
  }

  revalidatePath('/gallery')
  revalidatePath('/')
  revalidatePath('/admin/gallery')
  redirect('/admin/gallery')
}

export async function deletePhoto(id: string, imageUrl: string | null) {
  const supabase = await createClient()
  
  if (imageUrl) {
    const urlParts = imageUrl.split('/')
    const fileName = urlParts[urlParts.length - 1]
    
    await supabase.storage.from('images').remove([`gallery/${fileName}`])
  }
  
  await supabase.from('gallery').delete().eq('id', id)
  
  revalidatePath('/gallery')
  revalidatePath('/')
  revalidatePath('/admin/gallery')
}

export async function updatePhoto(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string
  const title = formData.get('title') as string

  const { error } = await supabase.from('gallery').update({ title }).eq('id', id)
  if (error) throw new Error(`Update Failed: ${error.message}`)

  revalidatePath('/gallery')
  revalidatePath('/')
  revalidatePath('/admin/gallery')
  redirect('/admin/gallery')
}
