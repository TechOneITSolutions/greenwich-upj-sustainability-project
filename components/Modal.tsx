'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

interface ModalProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  returnUrl: string
  maxWidth?: string
}

export default function Modal({ children, title, subtitle, returnUrl, maxWidth = 'max-w-3xl' }: ModalProps) {
  const router = useRouter()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleClose = () => {
    router.push(returnUrl, { scroll: false })
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-emerald-950/40 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className={`w-full ${maxWidth} bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-8 duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Header */}
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 shrink-0" />
        
        {/* Title Bar */}
        <div className="flex items-start justify-between px-8 py-6 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-emerald-950">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-xl text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
