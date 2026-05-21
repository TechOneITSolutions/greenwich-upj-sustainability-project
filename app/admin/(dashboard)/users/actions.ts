'use server'

import { createAdminClient } from '@/utils/supabase/admin'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    throw new Error('Email and password are required')
  }

  const supabaseAdmin = createAdminClient()

  const { error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (error) {
    console.error("Create user error", error)
    throw new Error(`Failed to create user: ${error.message}`)
  }

  revalidatePath('/admin/users')
  redirect('/admin/users')
}

export async function deleteUser(id: string) {
  const supabaseAdmin = createAdminClient()

  const { error } = await supabaseAdmin.auth.admin.deleteUser(id)

  if (error) {
    console.error("Delete user error", error)
    throw new Error(`Failed to delete user: ${error.message}`)
  }

  revalidatePath('/admin/users')
}
