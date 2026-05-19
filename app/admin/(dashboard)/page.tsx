export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-emerald-950 mb-8">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Events</h3>
          <p className="text-2xl font-bold text-emerald-600">Manage Events</p>
          <p className="text-sm text-gray-500 mt-2">Create and update your upcoming and past events.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Insights</h3>
          <p className="text-2xl font-bold text-emerald-600">News & Updates</p>
          <p className="text-sm text-gray-500 mt-2">Publish new articles and research findings.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Gallery</h3>
          <p className="text-2xl font-bold text-emerald-600">Photos</p>
          <p className="text-sm text-gray-500 mt-2">Upload and manage media from your activities.</p>
        </div>
      </div>
    </div>
  )
}
