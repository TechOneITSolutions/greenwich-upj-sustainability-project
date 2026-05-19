'use client'

import { useFormStatus } from 'react-dom'
import { Loader2, Trash2, AlertTriangle } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function DeleteButton({ className = "text-red-600 hover:text-red-800" }: { className?: string }) {
  const { pending } = useFormStatus()
  const [showConfirm, setShowConfirm] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && !pending) {
        setShowConfirm(false)
      }
    }
    if (showConfirm) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showConfirm, pending]);

  return (
    <>
      <button
        type="button"
        disabled={pending}
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission
          setShowConfirm(true);
        }}
        className={`${className} ${pending ? 'opacity-50 cursor-not-allowed' : ''} flex items-center justify-center`}
        title="Delete"
      >
        {pending ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Trash2 className="w-5 h-5" />
        )}
      </button>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-red-100"
          >
            <div className="p-8 text-center relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-50 to-transparent -z-10" />
              
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-200/50 relative">
                 <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                <AlertTriangle className="w-10 h-10 text-red-600 relative z-10" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Delete Item?</h3>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed text-sm">
                Are you absolutely sure? This action cannot be undone and will permanently remove this data.
              </p>
              
              <div className="flex gap-3 w-full">
                <button
                  type="button"
                  disabled={pending}
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-4 py-3 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={pending}
                  className="flex-1 flex justify-center items-center px-4 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {pending ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Deleting...</span>
                    </div>
                  ) : (
                    'Yes, Delete'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
