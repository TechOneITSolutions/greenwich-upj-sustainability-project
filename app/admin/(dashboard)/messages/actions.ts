'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteMessage(id: string) {
  const supabase = await createClient()
  await supabase.from('messages').delete().eq('id', id)
  revalidatePath('/admin/messages')
}
