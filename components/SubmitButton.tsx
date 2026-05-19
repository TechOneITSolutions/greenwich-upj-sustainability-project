'use client'

import { useFormStatus } from 'react-dom'
import { Loader2, Check } from 'lucide-react'

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
  loadingText?: string
  icon?: React.ReactNode
}

export default function SubmitButton({ children, className, loadingText = "Saving...", icon }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className ?? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30'} ${pending ? 'opacity-70 cursor-not-allowed scale-[0.98]' : 'hover:scale-[1.01]'} flex items-center justify-center gap-2.5 transition-all duration-200`}
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {icon || <Check className="w-5 h-5" />}
          {children}
        </>
      )}
    </button>
  )
}
