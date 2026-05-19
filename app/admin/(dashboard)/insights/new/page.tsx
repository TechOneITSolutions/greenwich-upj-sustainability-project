import Editor from './Editor'

export default function NewInsightPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-950 mb-8">Add New Article</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <Editor />
      </div>
    </div>
  )
}
