"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, FileText, Image as ImageIcon, MessageSquare, 
  HelpCircle, Lightbulb, CheckCircle2, ShieldCheck, Search
} from "lucide-react";

export default function TutorialsAdmin() {
  const [searchQuery, setSearchQuery] = useState("");

  const allSections = [
    {
      title: "Managing Events",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50 border-emerald-100",
      content: [
        "Click 'Add Event' to create a new event.",
        "Enter the title, start date, location, and description.",
        "To span multiple days, optionally add an 'End Date'.",
        "The 'Time' field is flexible. You can type '10:00 AM - 2:00 PM', 'All Day', or anything else you prefer.",
        "Upload a high-quality cover image (Max 2MB).",
        "Click the Edit (pencil) icon to update an existing event.",
        "Click the Delete (trash) icon to permanently remove an event."
      ]
    },
    {
      title: "Managing Insights (Articles)",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
      content: [
        "Click 'Create Insight' to write a new article.",
        "Provide a title and a published date. Articles are sorted automatically by this date.",
        "Write your article content in the text area. You can use standard formatting by adding paragraphs.",
        "Upload a cover image (Max 2MB).",
        "Your new insight will instantly appear on the public Insights page."
      ]
    },
    {
      title: "Managing the Gallery",
      icon: <ImageIcon className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-100",
      content: [
        "Click 'Upload Photo' to add a new highlight to the gallery.",
        "Photos are optional. If you just want to add a text-only highlight, leave the image blank.",
        "You must select a Category (Workshops, Meetings, or Fieldwork).",
        "You can optionally add the Location.",
        "The public gallery automatically creates filter tabs based on these categories."
      ]
    },
    {
      title: "Viewing Messages",
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-100",
      content: [
        "The Messages tab shows all submissions from the public 'Contact Us' page.",
        "Messages are ordered with the newest ones at the top.",
        "Click the Email icon next to a message to instantly open your email client and reply to the sender.",
        "Once a message is resolved or no longer needed, click the Delete icon to remove it from the dashboard."
      ]
    }
  ];

  // Filter sections based on search query
  const filteredSections = allSections.map(section => {
    // If title matches, return the whole section
    if (section.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return section;
    }
    
    // Otherwise, filter the content points to only show matches
    const matchingContent = section.content.filter(point => 
      point.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // If there are matching points, return section with only those points
    if (matchingContent.length > 0) {
      return { ...section, content: matchingContent };
    }

    return null;
  }).filter(Boolean) as typeof allSections;

  return (
    <div>
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-950 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-emerald-600" />
            Dashboard Tutorials
          </h2>
          <p className="text-gray-500 mt-2">Learn how to manage your website content</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search tutorials..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 md:w-80 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <ShieldCheck className="absolute -right-6 -bottom-6 w-48 h-48 text-white/10" />
          <h3 className="text-2xl font-bold mb-3 relative z-10">Welcome to your Dashboard</h3>
          <p className="text-emerald-50 leading-relaxed relative z-10 max-w-sm">
            This administration panel allows you to instantly update the public website without needing a developer. All changes go live immediately.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 text-lg">Pro Tip: Image Sizes</h4>
              <p className="text-gray-500 leading-relaxed">
                For best results and fast website loading, try to keep your uploaded images under 1MB. The system strictly rejects files larger than 2MB to keep your hosting fast and affordable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredSections.length > 0 ? (
            filteredSections.map((section, idx) => (
              <motion.div 
                layout
                key={section.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border p-6 md:p-8 ${section.color} bg-opacity-50`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-4 ml-2">
                  {section.content.map((item, i) => {
                    // Highlight the search term if it exists
                    if (!searchQuery) return (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                      </li>
                    );

                    const parts = item.split(new RegExp(`(${searchQuery})`, 'gi'));
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed font-medium">
                          {parts.map((part, index) => 
                            part.toLowerCase() === searchQuery.toLowerCase() 
                              ? <span key={index} className="bg-emerald-200 text-emerald-900 px-1 rounded">{part}</span>
                              : part
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium text-lg">No tutorials found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-2 text-emerald-600 font-medium hover:text-emerald-700"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>Built for the Greenwich-UPJ Sustainability Project.</p>
      </div>
    </div>
  );
}
