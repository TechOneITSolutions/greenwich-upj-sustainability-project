import { createClient } from '@/utils/supabase/server'
import { deleteMessage } from './actions'
import DeleteButton from '@/components/DeleteButton'
import { Mail, Clock, MessageSquareQuote } from 'lucide-react'

export default async function MessagesAdmin() {
  const supabase = await createClient()
  const { data: messages } = await supabase.from('messages').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950">Messages</h2>
          <p className="text-gray-500 mt-2">Manage contact form submissions</p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-medium flex items-center gap-2 border border-emerald-100 shadow-sm">
          <Mail className="w-4 h-4" />
          <span>{messages?.length || 0} Total</span>
        </div>
      </div>

      {messages && messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-emerald-950">{msg.subject}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-100 inline-flex">
                    <span className="font-semibold text-gray-700">{msg.name}</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${msg.email}`}>{msg.email}</a>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {new Date(msg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="relative pl-4 border-l-2 border-emerald-100">
                    <MessageSquareQuote className="w-5 h-5 absolute -left-3 -top-2 text-emerald-200 bg-white" />
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                  <a
                    href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                    className="text-gray-400 hover:text-emerald-600 p-2.5 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100"
                    title="Reply via email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <form action={async () => {
                    'use server'
                    await deleteMessage(msg.id)
                  }}>
                    <DeleteButton className="text-gray-400 hover:text-red-600 p-2.5 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100" />
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-emerald-300" />
          </div>
          <p className="text-xl font-bold text-gray-400 mb-2">No messages yet</p>
          <p className="text-gray-400">Messages from the contact form will appear here.</p>
        </div>
      )}
    </div>
  )
}
