"use client";

import { useState } from "react";
import AdminNav from "@/components/AdminNav";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminLayoutClient({ 
  children, 
  userEmail 
}: { 
  children: React.ReactNode, 
  userEmail: string | null 
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 h-screen bg-emerald-950 text-white flex flex-col shadow-xl z-50 transition-transform duration-300 w-72 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-emerald-900/50 bg-emerald-950/50 backdrop-blur-sm flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Branding / Logo space if needed */}
          </div>
          
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-emerald-300 hover:text-white hover:bg-emerald-900 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-4">
          {userEmail && (
            <div className="bg-emerald-900/50 rounded-xl p-3 border border-emerald-800/50">
              <p className="text-xs text-emerald-400 mb-1">Logged in as</p>
              <p className="text-sm text-emerald-100 truncate font-medium" title={userEmail}>
                {userEmail}
              </p>
            </div>
          )}
        </div>

        {/* Client nav with loading states */}
        <div className="flex-1 overflow-y-auto pb-6" onClick={() => setIsSidebarOpen(false)}>
          <AdminNav />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[url('/noise.png')] bg-repeat opacity-[0.99] w-full">
        {/* Top bar */}
        <header className="h-16 lg:h-20 bg-white/80 backdrop-blur-md border-b border-gray-200/80 flex items-center justify-between px-4 lg:px-10 z-10 sticky top-0 shadow-sm">
          <div className="flex items-center gap-3 lg:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <img src="/logo.png" alt="Logo" className="h-8 lg:h-10 w-auto" />
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <span className="text-sm font-medium text-gray-500 hidden sm:block truncate">Dashboard Content Manager</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <span className="text-xs lg:text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 py-1.5 lg:py-2 px-3 lg:px-4 rounded-full shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="hidden sm:inline">Admin Session</span>
              <span className="sm:hidden">Admin</span>
            </span>
          </div>
        </header>

        <div className="flex-1 p-4 lg:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
