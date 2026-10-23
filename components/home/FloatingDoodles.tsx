"use client";

import {
  Sparkles,
  GraduationCap,
  Atom,
  FlaskConical,
  Lightbulb,
  Rocket,
  Star,
  Send,
} from "lucide-react";

export function FloatingDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left: Floating Rocket */}
      <div className="absolute top-24 left-[4%] animate-float-slow opacity-60 hidden md:block">
        <div className="w-12 h-12 rounded-2xl bg-[#ebdd51]/30 backdrop-blur-md border border-[#ebdd51]/60 flex items-center justify-center text-slate-800 shadow-md rotate-[-12deg]">
          <Rocket className="w-6 h-6 text-[#17b4cd]" />
        </div>
      </div>

      {/* Top Center-Right: Drifting Paper Plane */}
      <div className="absolute top-16 right-[18%] animate-paper-plane opacity-75 hidden lg:block">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17b4cd]/20 backdrop-blur-md border border-[#17b4cd]/40 text-[#17b4cd] shadow-sm">
          <Send className="w-4 h-4 rotate-45" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">Aim High!</span>
        </div>
      </div>

      {/* Hero Left Edge: Chemistry Flask */}
      <div className="absolute top-[420px] left-[2%] animate-float-gentle opacity-70 hidden xl:block">
        <div className="w-11 h-11 rounded-2xl bg-[#17b4cd]/20 backdrop-blur-md border border-[#17b4cd]/50 flex items-center justify-center text-[#17b4cd] shadow-md rotate-[14deg]">
          <FlaskConical className="w-5 h-5 text-[#17b4cd]" />
        </div>
      </div>

      {/* Hero Right Edge: Lightbulb Idea */}
      <div className="absolute top-[380px] right-[3%] animate-wiggle opacity-80 hidden lg:block">
        <div className="w-12 h-12 rounded-2xl bg-[#ebdd51]/35 backdrop-blur-md border border-[#ebdd51]/70 flex items-center justify-center text-slate-800 shadow-md rotate-[8deg]">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
      </div>

      {/* Mid Left: Graduation Cap */}
      <div className="absolute top-[850px] left-[5%] animate-float-slow opacity-65 hidden lg:block">
        <div className="w-11 h-11 rounded-2xl bg-[#17b4cd]/25 backdrop-blur-md border border-[#17b4cd]/50 flex items-center justify-center text-slate-800 shadow-sm rotate-[-8deg]">
          <GraduationCap className="w-5 h-5 text-[#17b4cd]" />
        </div>
      </div>

      {/* Mid Right: Sparkle Badge */}
      <div className="absolute top-[920px] right-[4%] animate-float-fast opacity-75 hidden md:block">
        <div className="w-10 h-10 rounded-full bg-[#ebdd51]/30 backdrop-blur-md border border-[#ebdd51]/60 flex items-center justify-center text-amber-600 shadow-sm">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      {/* Lower Mid: Atom / STEM Science */}
      <div className="absolute top-[1650px] left-[3%] animate-spin-slow opacity-50 hidden xl:block">
        <div className="w-14 h-14 rounded-full bg-[#17b4cd]/15 backdrop-blur-sm border border-[#17b4cd]/30 flex items-center justify-center text-[#17b4cd]">
          <Atom className="w-7 h-7" />
        </div>
      </div>

      {/* Lower Right: Star Pin */}
      <div className="absolute top-[1750px] right-[5%] animate-float-gentle opacity-70 hidden lg:block">
        <div className="px-3 py-1.5 rounded-2xl bg-[#ebdd51]/30 backdrop-blur-md border border-[#ebdd51]/60 flex items-center gap-1.5 text-slate-800 shadow-sm rotate-[10deg]">
          <Star className="w-4 h-4 fill-[#ebdd51] text-amber-500" />
          <span className="text-[10px] font-bold">100% Fun</span>
        </div>
      </div>

      {/* Floating Sparkle Micro-dots */}
      <div className="absolute top-[32%] left-[22%] w-3 h-3 rounded-full bg-[#ebdd51] blur-[1px] animate-pulse-subtle opacity-60" />
      <div className="absolute top-[48%] right-[28%] w-3.5 h-3.5 rounded-full bg-[#17b4cd] blur-[1px] animate-pulse-subtle opacity-70" />
      <div className="absolute top-[72%] left-[16%] w-2.5 h-2.5 rounded-full bg-[#ebdd51] blur-[1px] animate-pulse-subtle opacity-60" />
      <div className="absolute top-[88%] right-[20%] w-3 h-3 rounded-full bg-[#17b4cd] blur-[1px] animate-pulse-subtle opacity-60" />
    </div>
  );
}
