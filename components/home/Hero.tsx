"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  GraduationCap,
  Star,
  Laptop,
  Trophy,
  Rocket,
  Clock,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-28">
      {/* Blurry Funky Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[500px] bg-gradient-to-tr from-[#17b4cd]/35 via-[#ebdd51]/30 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-orb-1" />
      <div className="absolute -top-12 right-6 w-[500px] h-[500px] bg-[#17b4cd]/25 rounded-full blur-[130px] pointer-events-none -z-10 animate-orb-2" />
      <div className="absolute bottom-6 left-6 w-[550px] h-[450px] bg-[#ebdd51]/30 rounded-full blur-[130px] pointer-events-none -z-10 animate-orb-3" />

      {/* Decorative background grid pattern with blur overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#17b4cd_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Funky Headlines & Interactive CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative">
            {/* Top Funky Badges & Rotating Stamp */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Funky Sticker Badge 1 */}
              <div className="funky-sticker inline-flex items-center gap-1.5 bg-[#ebdd51] text-slate-950 px-3.5 py-1.5 rounded-full font-black text-xs rotate-[-2deg] tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping" />
                <span>ADMISSIONS OPEN 2026-2027</span>
              </div>

              {/* Funky Sticker Badge 2 */}
              <div className="inline-flex items-center gap-1.5 bg-[#17b4cd]/15 border border-[#17b4cd]/40 text-[#17b4cd] px-3 py-1.5 rounded-full font-extrabold text-xs backdrop-blur-md shadow-xs rotate-[1deg]">
                <Rocket className="w-3.5 h-3.5 text-[#17b4cd]" />
                <span>Primary • Middle • Matric</span>
              </div>
            </div>

            {/* Creative Funky Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Where Curious Minds{" "}
              <span className="relative inline-block my-1 mx-1">
                <span className="absolute -inset-1 sm:-inset-1.5 -skew-y-2 bg-[#ebdd51] rounded-2xl -z-10 shadow-[3px_4px_0px_#0f172a] border-2 border-slate-900" />
                <span className="text-slate-950 font-black px-1">Learn, Play &</span>
              </span>{" "}
              <span className="block bg-gradient-to-r from-[#17b4cd] via-[#0ea5e9] to-[#17b4cd] bg-clip-text text-transparent">
                Shine Brighter! ✨
              </span>
            </h1>

            {/* Creative & Inspiring Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <strong className="font-extrabold text-slate-950 bg-[#ebdd51]/30 px-1.5 py-0.5 rounded-md">Hamza Public Secondary School (HPSS)</strong>.
              Guided by our motto <em>&ldquo;Enter to Learn, Go Forth to Serve&rdquo;</em>, we blend hands-on science, moral values, and real-time digital sync for students, parents, and educators.
            </p>

            {/* Funky Interactive Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="glass-pill px-3.5 py-1.5 rounded-2xl text-xs font-bold text-slate-800 flex items-center gap-2 border border-[#17b4cd]/30 shadow-xs hover:border-[#17b4cd] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#17b4cd]" />
                🔬 Science & Robotics Labs
              </span>
              <span className="glass-pill px-3.5 py-1.5 rounded-2xl text-xs font-bold text-slate-800 flex items-center gap-2 border border-[#ebdd51]/50 shadow-xs hover:border-[#ebdd51] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#ebdd51]" />
                👨‍👩‍👧 Dedicated Guardian Tab
              </span>
              <span className="glass-pill px-3.5 py-1.5 rounded-2xl text-xs font-bold text-slate-800 flex items-center gap-2 border border-[#17b4cd]/30 shadow-xs hover:border-[#17b4cd] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#17b4cd]" />
                🏆 99.4% Board Distinction
              </span>
            </div>

            {/* Funky CTAs with Hand-drawn Doodle Indicator */}
            <div className="relative pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <InquiryDialog>
                <Button className="w-full sm:w-auto rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-sm h-12 px-7 shadow-[0_8px_25px_rgba(23,180,205,0.45)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2 border-2 border-white">
                  <span>Start Admission Journey</span>
                  <ArrowRight className="w-4 h-4 text-[#ebdd51] transition-transform group-hover:translate-x-1" />
                </Button>
              </InquiryDialog>

              <Link href="/login" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900 font-bold text-sm h-12 px-6 shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#ebdd51]" />
                  <span>Admin Login</span>
                </Button>
              </Link>

              <a href="#portals" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full bg-white/80 backdrop-blur-xl border-2 border-slate-200 hover:border-[#17b4cd] text-slate-900 font-bold text-sm h-12 px-5 shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Laptop className="w-4 h-4 text-[#17b4cd]" />
                  <span>Portals</span>
                </Button>
              </a>
            </div>

            {/* Social Trust Bar with High Energy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                <Avatar className="w-9 h-9 border-2 border-white shadow-sm ring-2 ring-[#17b4cd]">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
                  <AvatarFallback className="bg-[#17b4cd] text-white font-bold text-xs">AK</AvatarFallback>
                </Avatar>
                <Avatar className="w-9 h-9 border-2 border-white shadow-sm ring-2 ring-[#ebdd51]">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
                  <AvatarFallback className="bg-[#ebdd51] text-slate-900 font-black text-xs">FM</AvatarFallback>
                </Avatar>
                <Avatar className="w-9 h-9 border-2 border-white shadow-sm ring-2 ring-[#17b4cd]">
                  <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" />
                  <AvatarFallback className="bg-[#17b4cd] text-white font-bold text-xs">SJ</AvatarFallback>
                </Avatar>
              </div>

              <div className="text-center sm:text-left text-xs text-slate-600 font-medium">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-900 font-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ebdd51] text-amber-500" />
                  ))}
                  <span className="ml-1 text-slate-950 font-black">4.9 / 5.0 Rating</span>
                </div>
                <span>Loved by over <strong className="text-slate-900 font-bold">1,800+</strong> proud HPSS families</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ultra-Creative Frosted Glass "Digital Student Desk" (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
              {/* Funky Tape on top of card */}
              <div className="funky-tape" />

              {/* Main Frosted Glass Showcase Card */}
              <div className="funky-card rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(23,180,205,0.18)] border-2 border-white/90 space-y-5">
                {/* Header of the Card (Mac/Browser Candy Bar + Live Status) */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ebdd51] border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-[#17b4cd] border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 border border-black/20" />
                    <span className="text-[11px] font-black text-slate-800 ml-1.5">
                      HPSS Student Magic Hub
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-[#17b4cd]/20 text-[#17b4cd] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17b4cd] animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Student Passport Preview */}
                <div className="bg-gradient-to-br from-white/90 to-slate-50/70 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-11 h-11 border-2 border-[#17b4cd] shadow-sm">
                          <AvatarImage src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=120&h=120&fit=crop" />
                          <AvatarFallback className="bg-[#17b4cd] text-white font-black text-xs">ZA</AvatarFallback>
                        </Avatar>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 leading-tight">
                          Zaid Ahmed
                        </h4>
                        <p className="text-[11px] text-slate-500 font-semibold">
                          Grade 9 • Science Cadet #HP-4081
                        </p>
                      </div>
                    </div>

                    <div className="funky-sticker bg-[#ebdd51] text-slate-900 px-2 py-0.5 rounded-md font-black text-[10px] rotate-2">
                      ⭐ A+ TOPPER
                    </div>
                  </div>

                  {/* Attendance & Performance Progress Meter */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-slate-600">Monthly Attendance:</span>
                      <span className="text-[#17b4cd] font-black">98.5% (Exceptional)</span>
                    </div>
                    <div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden p-0.5">
                      <div className="bg-gradient-to-r from-[#17b4cd] to-[#ebdd51] h-full rounded-full w-[98.5%]" />
                    </div>
                  </div>
                </div>

                {/* Today's Exciting Campus Schedule */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#17b4cd]" />
                      Today&apos;s Wonder Schedule
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">Campus Day #84</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 border border-white/70 shadow-xs flex items-center justify-between transition-transform hover:scale-[1.02]">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">🧪</span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Advanced Robotics & Code</p>
                          <p className="text-[10px] text-slate-500">Room 3B • Prof. Rehan</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-[#17b4cd]/15 text-[#17b4cd] px-2 py-0.5 rounded-full">
                        09:30 AM
                      </span>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 border border-white/70 shadow-xs flex items-center justify-between transition-transform hover:scale-[1.02]">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">⚽</span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Inter-House Cricket Practice</p>
                          <p className="text-[10px] text-slate-500">Main Sports Grounds</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-[#ebdd51]/30 text-amber-800 px-2 py-0.5 rounded-full">
                        11:45 AM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Metric Pills */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 text-center border border-white/70 shadow-2xs">
                    <p className="text-base font-black text-slate-900">1:15</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">Ratio</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 text-center border border-white/70 shadow-2xs">
                    <p className="text-base font-black text-[#17b4cd]">100%</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">Board Pass</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 text-center border border-white/70 shadow-2xs">
                    <p className="text-base font-black text-amber-500">25+</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">Years</p>
                  </div>
                </div>
              </div>

              {/* Floating Frosted Sticker: Guardian Sync (Bottom Right) */}
              <div className="absolute -bottom-5 right-2 sm:right-4 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border-2 border-white flex items-center gap-3 animate-float-gentle">
                <div className="w-9 h-9 rounded-full bg-[#17b4cd] text-white flex items-center justify-center shadow-sm">
                  <Bell className="w-4 h-4 animate-bounce" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-[#17b4cd] uppercase tracking-wide">
                    Guardian Sync
                  </p>
                  <p className="text-xs font-bold text-slate-900">Fee Paid • Attendance OK</p>
                </div>
              </div>

              {/* Floating Frosted Sticker: Top Achievers (Top Left) */}
              <div className="absolute -top-4 left-4 hidden sm:flex items-center gap-2 bg-[#ebdd51] text-slate-950 px-3 py-1.5 rounded-2xl font-black text-xs shadow-md border-2 border-slate-900 rotate-[-4deg]">
                <Trophy className="w-4 h-4 text-slate-950" />
                <span>99.4% A* Board Rate!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
