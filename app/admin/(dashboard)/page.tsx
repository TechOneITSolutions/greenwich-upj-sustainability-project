import { Calendar, FileText, Image as ImageIcon, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const cards = [
    {
      title: 'Events',
      description: 'Create and update your upcoming and past events.',
      href: '/admin/events',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Insights',
      description: 'Publish new articles and research findings.',
      href: '/admin/insights',
      icon: FileText,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Gallery',
      description: 'Upload and manage media from your activities.',
      href: '/admin/gallery',
      icon: ImageIcon,
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Messages',
      description: 'View and respond to contact form submissions.',
      href: '/admin/messages',
      icon: MessageSquare,
      color: 'bg-amber-50 text-amber-600'
    }
  ]

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-emerald-950">Dashboard Overview</h2>
        <p className="text-gray-500 mt-2">Welcome back. Select an area to manage.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.href} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1 block relative overflow-hidden">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.color} transition-transform group-hover:scale-110 duration-300`}>
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">{card.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ))}
      </div>
    </div>
  )
}
