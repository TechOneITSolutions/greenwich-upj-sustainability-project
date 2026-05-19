import { createClient } from '@/utils/supabase/server'
import GalleryClient from './GalleryClient'

export default async function GalleryPage() {
  const supabase = await createClient()
  const { data: photos } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })

  return <GalleryClient photos={photos || []} />
}
