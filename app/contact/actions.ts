'use server'

import { createClient } from '@/utils/supabase/server'

export async function submitContactMessage(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' }
  }

  const { error } = await supabase.from('messages').insert({
    name,
    email,
    subject,
    message,
  })

  if (error) {
    console.error('Message insert error:', error)
    return { error: 'Failed to send message. Please try again.' }
  }

  return { success: true }
}
