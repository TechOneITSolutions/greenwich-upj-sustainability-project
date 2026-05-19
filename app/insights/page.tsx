import { createClient } from '@/utils/supabase/server'
import InsightsClient from './InsightsClient'

export default async function InsightsPage() {
  const supabase = await createClient()
  const { data: insights } = await supabase.from('insights').select('*').order('published_date', { ascending: false })

  return <InsightsClient insights={insights || []} />
}
