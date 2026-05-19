import { Loader2 } from 'lucide-react'

export default function AdminLoading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <div className="flex flex-col items-center text-emerald-950">
        <Loader2 className="w-10 h-10 animate-spin text-[#4aa537] mb-4" />
        <p className="font-medium animate-pulse">Loading dashboard...</p>
      </div>
    </div>
  )
}
