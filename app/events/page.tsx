import { createClient } from '@/utils/supabase/server'
import EventsClient from './EventsClient'

export default async function EventsPage() {
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*').order('date', { ascending: true })
  
  const now = new Date().toISOString()
  const upcoming = events?.filter(e => e.date >= now) || []
  const past = events?.filter(e => e.date < now) || []

  return <EventsClient upcomingevents={upcoming} pastevents={past} />
}
