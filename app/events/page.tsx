import { createClient } from '@/utils/supabase/server'
import EventsClient from './EventsClient'

export default async function EventsPage() {
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*').order('date', { ascending: true })

  // Compare date-only strings (YYYY-MM-DD) for reliable past/upcoming detection
  const today = new Date().toISOString().split('T')[0]
  const upcoming = events?.filter(e => e.date.split('T')[0] >= today) || []
  const past = events?.filter(e => e.date.split('T')[0] < today) || []

  // Sort: upcoming ascending (soonest first), past descending (most recent first)
  upcoming.sort((a, b) => a.date.localeCompare(b.date))
  past.sort((a, b) => b.date.localeCompare(a.date))

  return <EventsClient upcomingevents={upcoming} pastevents={past} />
}
