"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  FileCheck2,
  ShieldCheck,
  Receipt,
  UserCheck,
  ArrowRight,
  HeartHandshake,
  Clock,
  TrendingUp,
  Printer,
  Zap,
} from "lucide-react";

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <section id="portals" className="py-20 relative overflow-hidden">
      {/* Blurry Funky Theme Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-r from-[#17b4cd]/20 via-[#ebdd51]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-10 animate-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[-1deg]">
              ⚡ CONNECTED DIGITAL CAMPUS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            One Unified School.{" "}
            <span className="bg-gradient-to-r from-[#17b4cd] via-[#0284c7] to-[#17b4cd] bg-clip-text text-transparent">
              Three Smart Portals.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Eliminating paperwork, keeping students motivated, parents updated, and teachers organized in real time.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="student" value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Funky Segmented Control */}
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-xl p-1.5 rounded-full border-2 border-slate-200/80 inline-flex gap-1.5 h-auto shadow-md">
                <TabsTrigger
                  value="student"
                  className="data-[state=active]:bg-[#17b4cd] data-[state=active]:text-white data-[state=active]:shadow-md rounded-full px-5 py-2.5 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Student & Guardian</span>
                </TabsTrigger>

                <TabsTrigger
                  value="teacher"
                  className="data-[state=active]:bg-[#ebdd51] data-[state=active]:text-slate-950 data-[state=active]:shadow-md rounded-full px-5 py-2.5 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Teacher Portal</span>
                </TabsTrigger>

                <TabsTrigger
                  value="admin"
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-md rounded-full px-5 py-2.5 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Branch Admin</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: Student & Guardian Portal */}
            <TabsContent value="student" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center funky-card rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(23,180,205,0.15)] border-2 border-white/90">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black bg-[#17b4cd] text-white px-3 py-1 rounded-full shadow-xs">
                      STUDENT & GUARDIAN
                    </span>
                    <span className="text-[11px] font-black text-slate-900 bg-[#ebdd51] px-2.5 py-0.5 rounded-full shadow-xs">
                      ★ Live Guardian Sync
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Personalized Student Hub & Instant Guardian Oversight
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Students log in with their Roll Number to submit assignments, view marks, and access study materials. Parents gain crystal-clear peace of mind through the Guardian Tab.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5 hover:border-[#17b4cd] transition-colors">
                      <HeartHandshake className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Dedicated Guardian Tab</span>
                        <span className="text-slate-500 text-[11px]">Direct mobile notices, leaves & fee check</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5 hover:border-[#ebdd51] transition-colors">
                      <FileCheck2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Digital Homework Desk</span>
                        <span className="text-slate-500 text-[11px]">Upload PDF homework & track teacher remarks</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5 hover:border-[#17b4cd] transition-colors">
                      <Calendar className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Interactive Timetable</span>
                        <span className="text-slate-500 text-[11px]">Live bell schedule & exam datesheets</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5 hover:border-[#ebdd51] transition-colors">
                      <Receipt className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Instant Fee Vouchers</span>
                        <span className="text-slate-500 text-[11px]">1-click voucher download & paid history</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/portal-login">
                      <Button className="rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-11 px-7 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
                        <span>Launch Student Portal</span>
                        <ArrowRight className="w-4 h-4 text-[#ebdd51]" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Sleek Funky Frosted Mockup Preview */}
                <div className="lg:col-span-6 relative">
                  <div className="funky-tape" />
                  <div className="bg-slate-950 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-slate-800 space-y-3.5 relative overflow-hidden">
                    {/* Glowing corner orb inside card */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#17b4cd]/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#ebdd51]/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ebdd51]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#17b4cd]" />
                        <span className="text-[11px] text-slate-400 font-mono ml-2">hpss.edu.pk/portal/student</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-400/20 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Synced
                      </span>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-3 border border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <span className="font-black text-white text-sm block">Ayan Siddiqui</span>
                          <span className="text-slate-400 text-[11px]">Grade 8-A • Roll #HP-802</span>
                        </div>
                        <span className="bg-[#ebdd51] text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-lg shadow-xs">
                          98.8% Attendance
                        </span>
                      </div>

                      {/* Guardian Bar Highlight */}
                      <div className="bg-[#17b4cd]/20 rounded-xl p-3 flex items-center justify-between text-xs border border-[#17b4cd]/40">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#17b4cd] text-white flex items-center justify-center font-black text-xs">
                            👨‍👧
                          </div>
                          <div>
                            <span className="font-bold text-white block">Guardian Tab: Tariq Siddiqui</span>
                            <span className="text-[10px] text-slate-300">Voucher #2026-09 Verified & Paid</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-white text-slate-900 font-black px-2 py-0.5 rounded-md">
                          Verified
                        </span>
                      </div>

                      {/* Homework Item */}
                      <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between text-xs border border-white/5">
                        <div className="space-y-0.5">
                          <p className="font-bold text-white">🧪 Chemistry Experiment #4: Solutes</p>
                          <p className="text-[10px] text-emerald-400 font-semibold">Teacher Feedback: Outstanding Work (10/10)</p>
                        </div>
                        <span className="bg-[#17b4cd] text-white text-[10px] font-black px-2 py-1 rounded-md">
                          Graded
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB 2: Teacher Portal */}
            <TabsContent value="teacher" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center funky-card rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(235,221,81,0.15)] border-2 border-white/90">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black bg-[#ebdd51] text-slate-950 px-3 py-1 rounded-full shadow-xs">
                      TEACHER WORKSTATION
                    </span>
                    <span className="text-[11px] font-black text-[#17b4cd] bg-[#17b4cd]/10 px-2.5 py-0.5 rounded-full">
                      Fast Attendance & Marks
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Fast Daily Roll-Call & Digital Gradebook
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Empowering our faculty with swift tools to mark classroom attendance (Present, Absent, Late, Leave), upload assignments with one click, and track individual student growth.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <UserCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Class Roll-Call Marker</span>
                        <span className="text-slate-500 text-[11px]">Instant 1-tap Present / Absent toggles</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Staff Digital Check-In</span>
                        <span className="text-slate-500 text-[11px]">Monthly attendance logs and payroll sync</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Assignment Dispatcher</span>
                        <span className="text-slate-500 text-[11px]">Publish homework directly to student desks</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <TrendingUp className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Fast Tabular Marks Entry</span>
                        <span className="text-slate-500 text-[11px]">Keyboard-friendly spreadsheet marks sheet</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/portal-login">
                      <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs h-11 px-7 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
                        <span>Teacher Portal Access</span>
                        <ArrowRight className="w-4 h-4 text-[#ebdd51]" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="funky-tape" />
                  <div className="bg-slate-950 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-slate-800 space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">portal/teacher/grade-10a</span>
                      <span className="text-slate-950 font-black text-[10px] bg-[#ebdd51] px-2.5 py-0.5 rounded-full">
                        Grade 10-A (Science)
                      </span>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-2.5 border border-white/10">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-300">Today&apos;s Class Roll-Call:</span>
                        <span className="text-[#17b4cd] font-black">29 / 30 Students Present</span>
                      </div>

                      <div className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>Ayesha Tariq (#HPSS-2041)</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded">
                          Present (100%)
                        </span>
                      </div>

                      <div className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>Bilal Ahmed (#HPSS-2042)</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded">
                          Present (100%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB 3: Branch Admin Portal */}
            <TabsContent value="admin" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center funky-card rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.06)] border-2 border-white/90">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black bg-slate-900 text-white px-3 py-1 rounded-full shadow-xs">
                      BRANCH HEADQUARTERS
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Fees, Admissions & Receipts
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Executive Control & Fee Counter POS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Comprehensive campus management: official 3-part bank voucher generation, instant thermal POS receipts, admissions registry, and multi-branch revenue tracking.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <Printer className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">3-Part Bank Voucher & POS</span>
                        <span className="text-slate-500 text-[11px]">80mm thermal receipts & bank challans</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <UserCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Admissions Lifecycle</span>
                        <span className="text-slate-500 text-[11px]">Student documentation, photos & GR registry</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">SMS & WhatsApp Alerts</span>
                        <span className="text-slate-500 text-[11px]">Broadcast absence notifications to guardians</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-900 block">Encrypted Database</span>
                        <span className="text-slate-500 text-[11px]">Automated daily cloud backups & audit logs</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/login">
                      <Button className="rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-11 px-7 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
                        <span>Branch Admin Login</span>
                        <ArrowRight className="w-4 h-4 text-[#ebdd51]" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="funky-tape" />
                  <div className="bg-slate-950 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-slate-800 space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">admin.hpss/harley-branch</span>
                      <span className="text-white text-[10px] font-bold bg-[#17b4cd]/30 text-[#17b4cd] px-2.5 py-0.5 rounded-full">
                        Main Campus
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Total Enrolled</span>
                        <p className="text-2xl font-black text-white mt-0.5">1,840</p>
                        <p className="text-[10px] text-[#ebdd51] font-semibold mt-1">Full Capacity</p>
                      </div>
                      <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Fee Clearance</span>
                        <p className="text-2xl font-black text-[#17b4cd] mt-0.5">96.4%</p>
                        <p className="text-[10px] text-emerald-400 font-semibold mt-1">Bank Sync Active</p>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-xs flex items-center justify-between border border-white/10">
                      <div className="flex items-center gap-2">
                        <Printer className="w-4 h-4 text-[#ebdd51]" />
                        <span className="text-slate-200 font-bold">Thermal POS Printer Ready</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-400/20 px-2 py-0.5 rounded font-bold">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
