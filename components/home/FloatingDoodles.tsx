"use client";

import {
  GraduationCap,
  Atom,
  FlaskConical,
  Lightbulb,
  Rocket,
  Star,
} from "lucide-react";

export function FloatingDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left: Floating Rocket - safely in outer gutter on 2xl screens */}
      <div className="absolute top-28 left-6 2xl:left-12 animate-float-slow opacity-60 hidden 2xl:block">
        <div className="w-12 h-12 rounded-2xl bg-[#ebdd51]/30 backdrop-blur-md border border-[#ebdd51]/60 flex items-center justify-center text-slate-800 shadow-md rotate-[-12deg]">
          <Rocket className="w-6 h-6 text-[#17b4cd]" />
        </div>
      </div>

      {/* Hero Left Edge: Chemistry Flask - safely in outer gutter on 2xl screens */}
      <div className="absolute top-[460px] left-6 2xl:left-12 animate-float-gentle opacity-70 hidden 2xl:block">
        <div className="w-11 h-11 rounded-2xl bg-[#17b4cd]/20 backdrop-blur-md border border-[#17b4cd]/50 flex items-center justify-center text-[#17b4cd] shadow-md rotate-[14deg]">
          <FlaskConical className="w-5 h-5 text-[#17b4cd]" />
        </div>
      </div>

      {/* Hero Right Edge: Lightbulb - safely in outer gutter on 2xl screens */}
      <div className="absolute top-[420px] right-6 2xl:right-12 animate-wiggle opacity-80 hidden 2xl:block">
        <div className="w-12 h-12 rounded-2xl bg-[#ebdd51]/35 backdrop-blur-md border border-[#ebdd51]/70 flex items-center justify-center text-slate-800 shadow-md rotate-[8deg]">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
      </div>

      {/* Mid Left: Graduation Cap - safely in outer gutter on 2xl screens */}
      <div className="absolute top-[900px] left-6 2xl:left-12 animate-float-slow opacity-65 hidden 2xl:block">
        <div className="w-11 h-11 rounded-2xl bg-[#17b4cd]/25 backdrop-blur-md border border-[#17b4cd]/50 flex items-center justify-center text-slate-800 shadow-sm rotate-[-8deg]">
          <GraduationCap className="w-5 h-5 text-[#17b4cd]" />
        </div>
      </div>

      {/* Lower Mid: Atom / STEM Science - safely in outer gutter on 2xl screens */}
      <div className="absolute top-[1650px] left-6 2xl:left-12 animate-spin-slow opacity-50 hidden 2xl:block">
        <div className="w-14 h-14 rounded-full bg-[#17b4cd]/15 backdrop-blur-sm border border-[#17b4cd]/30 flex items-center justify-center text-[#17b4cd]">
          <Atom className="w-7 h-7" />
        </div>
      </div>

      {/* Lower Right: Star Pin - safely in outer gutter on 2xl screens */}
      <div className="absolute top-[1750px] right-6 2xl:right-12 animate-float-gentle opacity-70 hidden 2xl:block">
        <div className="px-3 py-1.5 rounded-2xl bg-[#ebdd51]/30 backdrop-blur-md border border-[#ebdd51]/60 flex items-center gap-1.5 text-slate-800 shadow-sm rotate-[10deg]">
          <Star className="w-4 h-4 fill-[#ebdd51] text-amber-500" />
          <span className="text-[10px] font-bold">100% Fun</span>
        </div>
      </div>
    </div>
  );
}
