function SkeletonRow() {
  return (
    <tr className="border-b border-gray-50">
      <td className="p-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" /></td>
      <td className="p-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" /></td>
      <td className="p-4 flex justify-end gap-3">
        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
      </td>
    </tr>
  )
}

export default function InsightsLoading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="h-9 w-48 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-10 w-36 bg-emerald-200 rounded-lg animate-pulse" />
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4"><div className="h-4 w-16 bg-gray-300 rounded animate-pulse" /></th>
              <th className="p-4"><div className="h-4 w-24 bg-gray-300 rounded animate-pulse" /></th>
              <th className="p-4" />
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, i) => <SkeletonRow key={i} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
