function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="h-5 w-48 bg-gray-200 rounded animate-pulse mb-3" />
          <div className="flex gap-4 mb-4">
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-36 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse mb-2" />
          <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default function MessagesLoading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="h-9 w-40 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
      </div>
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  )
}
