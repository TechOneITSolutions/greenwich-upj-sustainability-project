export default function EditLoading() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-9 w-32 bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <div className="h-4 w-28 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="aspect-video w-64 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        <div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-10 w-32 bg-emerald-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  )
}
