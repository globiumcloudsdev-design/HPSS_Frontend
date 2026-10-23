"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  School,
  CalendarCheck2,
  Receipt,
  FileSpreadsheet,
  Clock,
  Settings,
  Sparkles,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Building2,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Admissions & Students",
    href: "/admin/students",
    icon: GraduationCap,
    badge: "New",
    badgeVariant: "secondary",
  },
  {
    name: "Classes & Sections",
    href: "/admin/classes",
    icon: School,
  },
  {
    name: "Daily Attendance",
    href: "/admin/attendance",
    icon: CalendarCheck2,
    badge: "94.6%",
    badgeVariant: "outline",
  },
  {
    name: "Fees & Cashier Desk",
    href: "/admin/fees",
    icon: Receipt,
  },
  {
    name: "Exam Schedules",
    href: "/admin/exams",
    icon: FileSpreadsheet,
  },
  {
    name: "Timetable Grid",
    href: "/admin/timetable",
    icon: Clock,
  },
  {
    name: "Branch Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface AdminSidebarProps {
  onNavigate?: () => void;
}

export function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full h-full flex flex-col justify-between p-4 bg-white/80 backdrop-blur-2xl border-r border-slate-200/70 select-none overflow-y-auto scrollbar-none">
      {/* Top Branding & Campus Info */}
      <div className="flex flex-col gap-5">
        {/* School Crest & System Tag */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="relative w-11 h-11 rounded-2xl bg-white shadow-sm border-2 border-[#17b4cd] ring-3 ring-[#ebdd51]/50 p-1 flex items-center justify-center transition-transform hover:scale-105">
            <Image
              src="/image.png"
              alt="HPSS Crest"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-base tracking-tight text-slate-900">
                HPSS Admin
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-[#ebdd51]/30 text-slate-800 border border-[#ebdd51]/60">
                BRANCH
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-sans truncate max-w-[150px]">
              Hamza Public Sec. School
            </p>
          </div>
        </div>

        {/* Active Campus Status Pill */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-amber-500/10 border border-[#17b4cd]/20 shadow-xs">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Building2 className="w-3.5 h-3.5 text-[#17b4cd]" />
              Main Campus
            </span>
            <Badge variant="outline" className="bg-white/80 text-[10px] py-0 px-1.5 text-cyan-800 border-cyan-200">
              HPSS-01
            </Badge>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-sans">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live DB Synced
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Database className="w-3 h-3" /> Neon Cloud
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-heading mb-1">
            Campus Management
          </p>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={`group relative flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#17b4cd] to-[#0fa2ba] text-white shadow-md shadow-[#17b4cd]/25 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-[0.98]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#17b4cd]/10 group-hover:text-[#17b4cd]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-[13px]">{item.name}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-white text-[#17b4cd]"
                            : item.badgeVariant === "secondary"
                            ? "bg-[#ebdd51]/40 text-slate-800"
                            : "bg-slate-200/80 text-slate-600"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive
                          ? "text-white translate-x-0.5 opacity-100"
                          : "text-slate-400 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Section: Branch Capacity & Admin Profile */}
      <div className="flex flex-col gap-3 pt-3 border-t border-slate-200/60">
        {/* Capacity Progress Mini Card */}
        <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/70">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-heading font-medium text-slate-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#ebdd51]" />
              Campus Load
            </span>
            <span className="font-mono text-[11px] font-semibold text-slate-600">
              1,284 / 1,400
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#17b4cd] via-teal-400 to-[#ebdd51] transition-all duration-500"
              style={{ width: "91.7%" }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5 font-sans">
            91.7% seats filled • 116 available
          </p>
        </div>

        {/* User Mini Profile */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <Avatar size="sm" className="ring-2 ring-[#17b4cd]/40">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-[#17b4cd] to-[#0f8b9e] text-white font-bold text-xs">
                HA
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex flex-col">
              <span className="text-xs font-semibold text-slate-900 truncate">
                Syed Hamza Ali
              </span>
              <span className="text-[10px] text-slate-500 truncate flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" /> Branch Admin
              </span>
            </div>
          </div>

          <Link href="/">
            <Button
              variant="ghost"
              size="icon-xs"
              className="text-slate-400 hover:text-rose-600 hover:bg-rose-50"
              title="Return to Public Site"
            >
              <LogOut className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
