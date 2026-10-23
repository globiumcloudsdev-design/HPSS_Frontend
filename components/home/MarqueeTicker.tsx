"use client";

import { ArrowRight } from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function MarqueeTicker() {
  const yellowItems = [
    { text: "ADMISSIONS OPEN 2026-2027", emoji: "🎒" },
    { text: "HAMZA PUBLIC SECONDARY SCHOOL", emoji: "🏫" },
    { text: "99.4% MATRIC BOARD DISTINCTION", emoji: "🏆" },
    { text: "ADVANCED SCIENCE & ROBOTICS LABS", emoji: "🔬" },
    { text: "ENTER TO LEARN • GO FORTH TO SERVE", emoji: "🌟" },
    { text: "CAMPUS SPORTS & CRICKET ACADEMY", emoji: "⚽" },
    { text: "INTERACTIVE SMART DIGITAL CLASSROOMS", emoji: "💡" },
  ];

  const cyanItems = [
    { text: "STUDENT & GUARDIAN PORTAL LIVE", emoji: "📱" },
    { text: "REAL-TIME ATTENDANCE & HOMEWORK SYNC", emoji: "⚡" },
    { text: "CHARACTER BUILDING & ISLAMIC VALUES", emoji: "🌱" },
    { text: "ANNUAL QIRAT, NAAT & SPEECH CONTESTS", emoji: "🎤" },
    { text: "INSTANT FEE VOUCHERS & ONLINE STATUS", emoji: "💳" },
    { text: "DEDICATED TEACHER-GUARDIAN LINK", emoji: "🤝" },
    { text: "CREATIVE ARTS, DRAMA & SCIENCE GALAS", emoji: "🎨" },
  ];

  return (
    <div className="relative overflow-hidden z-40 select-none shadow-sm">
      {/* Ribbon 1: Funky Theme Yellow Bar (#ebdd51) */}
      <div className="bg-[#ebdd51] text-slate-900 border-b border-black/10 py-1.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px] sm:text-xs font-black tracking-wider uppercase">
          {[...yellowItems, ...yellowItems, ...yellowItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2">
              <span className="text-sm">{item.emoji}</span>
              <span>{item.text}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900/40 ml-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2: Funky Theme Cyan Bar (#17b4cd) in Opposite Direction */}
      <div className="bg-[#17b4cd] text-white py-1.5 overflow-hidden border-b border-white/20 relative">
        <div className="animate-marquee-reverse flex items-center gap-8 whitespace-nowrap text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-white/95">
          {[...cyanItems, ...cyanItems, ...cyanItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2">
              <span className="text-sm">{item.emoji}</span>
              <span>{item.text}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/40 ml-4" />
            </div>
          ))}
        </div>

        {/* Floating Quick Action CTA on Desktop with Blurry Glass Effect */}
        <div className="hidden lg:flex items-center gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-xl border border-white/90 rounded-full px-3.5 py-1 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#17b4cd] animate-ping" />
          <span className="text-[11px] font-black text-slate-900">2026 Admissions:</span>
          <InquiryDialog>
            <button className="text-[11px] font-black bg-[#ebdd51] hover:bg-[#ebdd51]/90 text-slate-900 px-2.5 py-0.5 rounded-full flex items-center gap-1 cursor-pointer transition-transform hover:scale-105 shadow-xs">
              Apply Now <ArrowRight className="w-3 h-3" />
            </button>
          </InquiryDialog>
        </div>
      </div>
    </div>
  );
}
